import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = ()=>{
    return (
        // AppLayout으로 감싸지는 것들이 children이 된다.
        <AppLayout><div>Hello, Next!</div></AppLayout>
    )
}

export default Home;