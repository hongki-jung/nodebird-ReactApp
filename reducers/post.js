export const initialState ={
    mainPosts:[],

}

    // reducer ; 이전 state + action  => 다음 state
const reducer = (state= initialState, action) =>{
    switch(action.type){
        default:
            return state;        
    }
};

export default reducer;