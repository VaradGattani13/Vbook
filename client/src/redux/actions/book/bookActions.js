//Actions are that part causes changes
import axios from 'axios'
import { CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS } from "../actionTypes"


const createBookAction=bookData=>{
    return async (dispatch)=>{
        try{
            dispatch({
                type:CREATE_BOOK_REQUEST,
    
            });
    
    const config={
        'Content-Type':'application/json'
    }
    // Either use proxy or use this
    // /Destrucutre krliya
    const {data}=await axios.post('http://localhost:5555/api/books',bookData,config)
    // Yeh wala prozy kr karan
    
    // const res2=await axios.post('/api/books')
    
    
    dispatch({
        type:CREATE_BOOK_SUCCESS,
        payload:data,
    
    })
    
  
    
    
        }
        catch(error){
            dispatch({
                type:CREATE_BOOK_FAIL,
                payload:error.response && error.response.data.message
            })
        }

    }
}

export {createBookAction}
 

