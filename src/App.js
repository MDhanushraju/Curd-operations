import React, { useEffect,useState } from 'react'

import { Api,DeleteApi,PostApi,EditApi } from './curd operation/Api'
import Table from './curd operation/Table'
import Form from './curd operation/Form'

export default function App() {
 let [products,setProducts]=useState([])
 let [form,setForm]=useState(false)
 let [edit,setEdit]=useState(false)
 let[intialform,setIntialform]=useState({
 
  name:'',
  price:'',
  category:''
})
    
useEffect(()=>{
    getData()
},[])

let getData =async()=>{
    let res= await Api()
   setProducts(res.data)
    
}
let Delete=async(id)=>{
await DeleteApi(id)
getData()
}

let addProduct = async (products) => {
  let data = {
  id: products.id,
    name: products.name,
    price: products.price,
    category: products.category,
  };

  if (edit) {
  console.log("EDIT ID:", products.id);
  await EditApi(products.id, data);
  setEdit(false);
  getData();
  setForm(false);
}
 else{
   await PostApi(data);
     getData();  
     setForm(false);
 }
};




let showForm = (id) => {
  setForm(true);
  setIntialform({  name: '', price: '', category: '' });
};

let closeForm=(id)=>{
  setForm(false)
}

let editProduct= (data)=>{
  setIntialform(data)
 
  setEdit(true)
  setForm(true)
}

  return (
<>
   
  <div className='wrapper text-center'> 
     <h3>CRUD Operation</h3>
   <button className='btn btn-success' onClick={()=>{
    setForm(!form)
   }}>Add Products</button>
   <Table products={products} showForm={showForm} edit={editProduct} Delete={Delete}></Table>
   {
    form && <Form close={closeForm} data={intialform} add={addProduct}></Form>
   }
  </div>
   
   </>
  )
}
