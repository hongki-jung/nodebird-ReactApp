import {createWrapper}  from 'next-redux-wrapper'
import {createStore} from 'redux';

import reducer from '../reducers/index';


// configureStore.js

/* 

Q1. Redux , Mobax, ContextAPI를 왜 사용하는가? 
여러 컴포넌트들에서 공통적으로 쓰이는 데이터가 있는데 , 
그런 데이터들을 중앙에서 관리하기 위해서 쓰인다. (중앙데이터 저장소)
매번 부모에서 자식컴포넌트로 프롭을 전달하는데 한계가 있다.

ex. 로그인한 사람 정보, 로그인 여부가 각 페이지의 권한 체크쓰인다. 




Q2 . ContextAPI 와  Redux, Mobax의 차이? 
=> 비동기를 지원하기 쉽냐 어렵냐 

셋 다 중앙 저장소에서 데이터를 처리하는 방식이지만 
리덕스나 모벡스는 비동기 처리도 알아서 해주는 반면에
 ContextAPI는 비동기 처리를 직접 구현해야한다.

*중앙저장소가 있으면 보통 서버에서 데이터를 받아온다 .
(서버에서 데이터를 받아오는 건 항상 비동기)

*/


const configureStore = () =>{

    const store = createStore(reducer);
    store.dispatch({
        type:'CHANGE_NICKNAME',
        data:'boogicho'
    })
    

};


const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_ENV ==='development',


});


export default wrapper;