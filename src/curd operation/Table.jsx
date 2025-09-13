function Table(props) {
  return (
    <table className='table m-3 r'>
      <thead>
        <tr>
       
          <th>name</th>
          <th>price</th>
          <th>category</th>
          <th>Edit</th>
          <th>Delete</th>
         
        </tr>
      </thead>
      <tbody>
        {
         props.products.map((item)=>(<tr key={item.id}>
           
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td><button className="btn btn-info" onClick={()=>{             
              props.edit(item)   
            }}>Edit</button></td>
            <td><button className="btn btn-danger" onClick={()=>{
              props.Delete(item.id)            
            }}>Delete</button></td>
          </tr>)
         )
        }
      </tbody>
    </table>
  );
}

export default Table;
