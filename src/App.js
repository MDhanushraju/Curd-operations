import React, { useEffect,useState } from 'react'

import { Api,DeleteApi } from './curd operation/Api'
import Table from './curd operation/Table'
import Form from './curd operation/Form'

export default function App() {
 let [products,setProducts]=useState([])
 let [form,setForm]=useState(false)
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

let showForm=(id)=>{
  setForm(true)
}
let closeForm=(id)=>{
  setForm(false)
}

  return (
<>
   
  <div className='wrapper text-center'> 
     <h3>CRUD Operation</h3>
   <button onClick={()=>{
    setForm(!form)
   }}>Add Products</button>
   <Table products={products} showForm={showForm} Delete={Delete}></Table>
   {
    form && <Form close={closeForm} data={intialform}></Form>
   }
  </div>
   
   </>
  )
}
