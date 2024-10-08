
import axios from 'axios';

const API_URL ="http://localhost:8080";
export const saveInvoice = async (payload) =>{
    try{
         return await axios.post(`${API_URL}/Invoice`,payload);
    }catch(error) {
    {
        console.log('Error:',error.message);
        return error.response.data;
    }
    }
} 
export const getAllInvoice = async () =>{
    try{
        return await axios.get(`${API_URL}/Invoice`);
    }catch(error){
        console.log('Error:',error.message);
        return error.response.data;
    }
}

export const deleteInvoice = async (id) =>{
    try{
         return await axios.delete(`${API_URL}/Invoice/${id}`);
    }catch(error) {
    {
        console.log('Error:',error.message);
        return error.response.data;
    }
    }
} 
