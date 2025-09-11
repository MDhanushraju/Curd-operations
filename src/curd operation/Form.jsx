import React, { useState } from 'react'

function Form(props) {
    let [product,setProduct]=useState(props.data)
    
  return (
    <>
    <div className='cn'>
      
      <form action="">
        <div className="form-group mt-3">
            <label htmlFor="">ID:-</label>
            <input type="number" name="ID"  className='form-control' id=""  placeholder='Enter the name'/>
        </div>
        <div className="form-group mt-3">
            <label htmlFor="">Name:-</label>
            <input type="text" name="name" className='form-control' id=""  placeholder='Enter the name'/>
        </div>
        <div className="form-group mt-3">
            <label htmlFor="">Price:-</label>
            <input type="number" name="Price" className='form-control' id=""  placeholder='Enter the Price'/>
        </div>
        <div className="form-group mt-3">
            <label htmlFor="">Catagories:-</label>

          <select  className='mt-3 form-control' id="" name="catagories">

            <option value="-1">Select</option>
            <option value={"mobile"}>Mobile</option>
            <option value={"Laptop"}>Laptop</option>
            <option value={"tv"}>tv</option>
          </select>
        </div>
       <div className='mt-3'> 
        <button className='btn btn-primary float-end ' onClick={(e)=>{
   e.preventDefault()
        }}>send</button>
        <button className='btn btn-danger float-end '  onClick={(e)=>{
   e.preventDefault()
   props.close()
        }}>Cancel</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Form
