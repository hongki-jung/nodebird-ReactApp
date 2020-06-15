export const initialState ={
    
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'제로초',
        },

        content:'첫 번째 게시글 #해시테그 #익스프레스',
        
        Image:[
            {
                src:'http://ph.spotvnews.co.kr/news/photo/201908/310916_385550_3004.jpg'
            },
            {
                src:'http://photo.jtbc.joins.com/news/2018/05/17/20180517071612505.jpg'
            },
            {
                src:'http://www.newsinside.kr/news/photo/201909/1039183_724625_318.jpg'
            }
        ],
        
        Comments:[
            {
            User:{
                nickname:'nero',
            },
            content:'우와 개정판이 나왔군요~'
            },
        
            {
            User:{
                nickname:'hero'
            },
            content:'얼른 사고싶어요'
        }]
    }],
    imagePaths:[],  // 이미지 업로드할 때 , 이미지의 경로들이 저장된다.
    postAdded:false,    // 게시글 추가가 완료되면 true로 변경된다.
}


// 액션이름을 상수로 빼주자~!
const ADD_POST = 'ADD_POST';


// 액션객체 생성
export const addPost ={
    type:ADD_POST,
}


const dummyPost={
    id:2,
   
    User:{
        id:1,
        nickname:'제로초'
    },
    content:'더미데이터입니다.',
    Image:[],
    Comments:[],

};



// 화면보다  데이터 구성이 더 중요하다
// 액션 -> 리듀서 

    // reducer ; 이전 state + action  => 다음 state
const reducer = (state= initialState, action) =>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                // 추가되는 데이터를 앞에다가 넣어줘야  앞쪽에 게시물이 나온다.
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded:true,
            };
        

        default:
            return state;        
    }
};

export default reducer;