import  {HYDRATE} from 'next-redux-wrapper'
import user from './user';
import post from './post';
import { combineReducers } from 'redux'

// const initialState = {
//     name:'zerocho',
//     age:27,
//     password:'babo',

// }

// const changeNickname = {
//     type:'CHANGE_NICKNAME',
//     data:'boogicho'
// }




// 모든 액션을 미리 만들어 놓는 것은 불가능하다. 
//그때그때 필요할 때 마다 동적으로 액션을 만들자
// => action creator
// const changeNickname = (data) =>{
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// }

// changeNickname('boogicho');
// {
//     type:'CHANGE_NICKNAME',
//     data: ' neue zeal'

// }

// store.dispatch(changeNickname('mighty tak'))



// reducer ()
// : 이전 상태와 액션을 통해서 다음 상태를 만들어낸다. 
//  reducer는 함수다. 
//  (이전상태 ,액션) => 다음상태

// const rootReducer = (state = initialState, action)=>{

//     switch(action.type){
//         case 'CHANGE_NICKNAME':
//             return{
//                 // 이런식으로 해야 history가 남는다. 
//                 // name만 바꿔주고 나머지 것들은 그대로 남겨둔다. 
//                 ...state,
//                 name: action.data,
//             }

//     }

// };



// const initialState = {
//     user:{
       
//     },
//     post:{
       
//     }
// }





// const rootReducer = (state = initialState, action)=>{
  
//     switch(action.type){

//         //아래 두 줄을 추가하면 리덕스까지 서버사이드 렌더링이 된다.
//         // next기능 
//         case HYDRATE:
//             return {...state, ...action.payload}

//         default:
//             return state;

//     }

// };





const rootReducer = combineReducers({    
  
    // reducer 합쳐주기
        index: (state = {}, action) =>{
            switch(action.type){

                //HYDRATE 추가하면 리덕스까지 서버사이드 렌더링이 된다.
                // next기능 
                case HYDRATE:
                    return {...state, ...action.payload}
        
                default:
                    return state;
            }
        },
        user,
        post,

});




export default rootReducer;
