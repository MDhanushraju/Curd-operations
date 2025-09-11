function Table(props) {
  return (
    <table className='table m-3 r'>
      <thead>
        <tr>
          <th>Id</th>
          <th>name</th>
          <th>price</th>
          <th>category</th>
         
        </tr>
      </thead>
      <tbody>
        {
         props.products.map((item)=>(<tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td><button className="btn btn-info" onClick={()=>{
              props.showForm(item.id)
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
