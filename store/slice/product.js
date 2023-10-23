
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');



// const fetchData = async(params) => {
//     const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/${params}`)
//     return data;
//    }
  const fetchData =  createAsyncThunk('product/getProduct', async(params) => {
    const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/${params}`)
    return data;
   })
const initialState = {
    loading: false,
    error: '',
    product: null
}


const {reducer,actions}= createSlice({
    name: "product",
    initialState, 
    reducers: {
        requested: (state, action) => ({...state, loading:true}),
        succeed: (state,action)=>({...state, loading:false, product:action.payload}),
        failed: (state,action)=>({...state, loading:true, error:action.payload})
    },
    extraReducers:(builder) => {
        builder.addCase(fetchData.fulfilled, (state,action) => ({...state, product: action.payload}))
    }
})


module.exports = {reducer,actions,fetchData}

