export const initialState ={
    idLoggedIn: false,
    user: null,
    signUpData:{},
    loginData:{}

}

export const loginAction = (data) =>{
    return{
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () =>{
    return{
        type: 'LOG_OUT',

    }
}

    // reducer ; 이전 state + action  => 다음 state
const reducer = (state= initialState, action) =>{
    switch(action.type){
        case 'LOG_IN':
            return{
        
                ...state,
                isLoggedIn: true,
                user: action.data
                
                
            }

        case 'LOG_OUT':
            return{
 
           ...state,
            isLoggedIn: false,
            user: null
           
                    
            }
        default:
            return state;        
    }
};

export default reducer;