import React from 'react';
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'; // 프롭스 검사
import Head from 'next/head';
import wrapper from '../store/configureStore';


// _app.js는 모든 페이지(pages)에서 공통되는 것들을 모아둔다.
// => 다른 페이지들의 부모역할을 한다.
//예를 들면 index.js 의 return 부분이  {Component}로 들어가서 
// <Component />에 출력된다 .



// html head를 수정하고싶으면 Next에서 제공하는 Head컴포넌트를 이용한다.

const NodeBird = ({Component})=>{
    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>

            <Component />
        </>
    )
};

// props 점검 
NodeBird.propTypes ={
    Component: PropTypes.elementType.isRequired,
}

        // HOC로 감싸준다.
export default wrapper.withRedux(NodeBird);