
const { createSlice,createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');


const fetchData =  createAsyncThunk('user/getUser', async(params) => {
    const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/${params}`)
    return data;
   })

const initialState = {
    loading: false,
    error: '',
    user: null
}


const {reducer,actions}= createSlice({
    name: "user",
    initialState, 
    reducers: {
        requested: (state, action) => ({...state, loading:true}),
        succeed: (state,action)=>({...state, loading:false, user:action.payload}),
        failed: (state,action)=>({...state, loading:true, error:action.payload})
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchData.fulfilled, (state,action) => ({...state, product: action.payload}))
    }
})


module.exports = {reducer,actions, fetchData}
































// const { createAction, createReducer  } = require('@reduxjs/toolkit')


// const requested = createAction('requested')
// const succeed = createAction('succeed')
// const failed = createAction('failed')

// const initialState = {

//     loading:false,
//     error:'',
//     user: null
// }

// // const reducer = (state=initialState,action)=>{
    
// //     switch (action.type) {
//         // case requested.type: return {...state, loading:true}
//         // case succeed.type: return {...state, loading:false, user:action.payload}
//         // case failed.type: return {...state, loading:true, error:action.payload}
// //         default:
// //             state;
// //     }

// //     return state
// // }


// // The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer
// // const  reducer = createReducer(initialState, {
// //     [requested.type]:(state,action)=>({...state, loading:true}),
// //     [succeed.type]:  (state,action)=>({...state, loading:false, user:action.payload}), 
// //     [failed.type]:  (state,action)=>({...state, loading:true, error:action.payload})
// // })

// const reducer = createReducer(initialState, (builder)=>{
//     builder.addCase(requested.type, (state,action)=>({...state, loading:true}))
//     builder.addCase(succeed.type,(state,action)=>({...state, loading:false, user:action.payload}))
//     builder.addCase(failed.type, (state,action)=>({...state, loading:true, error:action.payload}))
// })
// module.exports = {reducer,requested, succeed,failed}



