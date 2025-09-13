import axios from "axios";


const url = "http://localhost:4200/product" ;


export async function Api() {
  return await axios.get(url);
}

export async function DeleteApi(id) {
  return await axios.delete(`${url}/${id}`);
}

export async function PostApi(data) {
  return await axios.post(url,data,{
    headers:{
      'Content-Type':'application/json',


    }
  })
}

export async function EditApi(id, data) {
  return await axios.put(`${url}/${id}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}


