const { default: axios } = require('axios');
const store = require('./store/index');
  

const {fetchData:getUser} = require('./store/slice/user')
const {fetchData:getProduct, actions:productReducer} = require("./store/slice/product")

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProduct('todos/1'));
store.dispatch(getUser('users/2'));

// code below is for user
//  const fetchData = async(params) => {
//   const {data} =  await axios.get(`https://jsonplaceholder.typicode.com/${params}`)
//   return data;
//  }

//  fetchData('users/1').then((user)=>{
//     store.dispatch( userReducer.requested());
//     store.dispatch( userReducer.succeed(user));
//  }).catch(error => {
//     store.dispatch( userReducer.failed(error.message));
//  })
// //  fetchData('todos/3')

//  fetchData('todos/2').then((product)=>{
//     store.dispatch(productReducer.succeed(product));
//  })
// user end here

//  store.subscribe(()=>{
//     console.log(store.getState().product);
//     console.log(store.getState().user);
// })

// const user = {
//     id: '1',
//     name: 'alexismalecha'
// }

// const product = {
//     id:'1',
//     name: 'product name',
//     price: 230000
// }

// store.dispatch(userReducer.requested())


// if (true) {
//     store.dispatch(productReducer.succeed(product))
//     store.dispatch(userReducer.succeed(user))
// }
// else{
// // store.dispatch({type:'failed', payload:'user not found, 404'})
//     store.dispatch(actions.failed('user not found, 404'))
// }
// console.log(store.getState());