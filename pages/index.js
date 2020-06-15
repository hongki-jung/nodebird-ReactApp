import React from 'react';
import {useSelector} from 'react-redux'
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'
const Home = ()=>{

    //store state에서  login정보 가져오기
    const {isLoggedIn} = useSelector((state)=>state.user);

    //store state에서  post정보 가져오기 
    const {mainPosts} = useSelector((state)=> state.post);
    return (

        // AppLayout으로 감싸지는 것들이 children이 된다.
        <AppLayout>

            
           {isLoggedIn && <PostForm />}

           {mainPosts.map((post)=> <PostCard key={post.id} post={post} />)} 

        </AppLayout>
    )
}

export default Home;