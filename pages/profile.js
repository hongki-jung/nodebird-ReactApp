import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';
import NicknamedEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';


const profile =() =>{

    // 더미 데이터
    const followerList = [{nickname:'제로초'},{nickname:'바보'},{nickname:'노드버드 오피셜'}];
    const followingList = [{nickname:'제로초'},{nickname:'바보'},{nickname:'노드버드 오피셜'}];

    return (

        <>
            <Head>
                <title> 내 프로필 | NodeBird </title>
            </Head>
            <AppLayout>
                 <NicknamedEditForm />
                 <FollowList header="팔로잉 목록" data={followingList}/>
                 <FollowList header="팔로워 목록" data={followerList}/> 
             </AppLayout>
        </>
    
    )
}

export default profile
