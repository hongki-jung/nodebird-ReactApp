import React from 'react';
import PropTypes from 'prop-types'; // 프롭스 검사
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import {useSelector} from 'react-redux';

// antd
// Row 가로(전체 24개) , Col 세로 - 반응형 디자인에 사용된다.
// 가로먼저 자르고 다음에 세로를 자른다.
// 디자인 순서 모바일 -> 태블릿화면 -> 데스크탑
// xs 모바일 , sm 태블릿 , md 작은 데스크탑 


import UserProfile from './UserProfile'
import LoginForm from './LoginForm'
import styled from 'styled-components';



// 이런식으로 Component도 커스텀하게 스타일링 해줄 수도 있다.
const SearchInput =styled(Input.Search)`
    vertical-align: middle;
`;

// styled Component 방식이 싫을 경우??
// useMemo를 사용한다. <- 값을 캐싱해준다.
// 아래와 같이 해주고 useMemo를 추가해주면 
// 리랜더링되더라도  객체가 유지된다.
// const style = useMemo(()=>({margindTop:10}),[])
//그다음에 사용하고자 하는 태그로 가서 style={style} 이런식으로 추가해주면 된다.



// 특정 컴포넌트 끼리 공통인 건 AppLayout에 넣는다.
//index.js , profile.js , signup.js 등이 공통적으로 쓸 레이아웃을 만든다!!

// AppLayout으로 감싸지는 것들이 children이 된다.
// index.js , profile.js , signup.js 등이 children이 된다.
const AppLayout = ({children}) =>{

    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useSelector을 사용하면 useState를 사용할 필요가 없다.
     //isLoggedIn이 바뀌면 알아서 AppLayout 컴포넌트가 리렌더링된다.
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    







    // return 부분이 Virtual Dom이다 !! 
    // 수정 전후return()을 비교해서 바뀐부분이 있으면 그부분만 수정해서 재랜더링한다.
    return (
        <div>
            <Menu mode="horizontal">

                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                 </Menu.Item>

                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>

                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>

                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
       
             
             
            </Menu>
        
            <Row gutter={8}>    {/* gutter 컬럼들 사이의 간격 */}

                <Col xs={24} md={6}>
                    {/* 로그인 되어있으면 사용자 프로필을 보여준다 그렇지 않으면 로그인폼을 보여준다. */}
                  {/* isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}

                  {/**리덕스를 사용하면 위와 같은 방식으로 props를 전달할 필요없다.  */}
                  {isLoggedIn ? <UserProfile /> : <LoginForm />}

                </Col>   {/* 25% 차지*/}


                <Col xs={24} md={12}>
                    {children}
                </Col>  {/* 50% 차지*/}


                <Col xs={24} md={6}>   
                    오른쪽 메뉴 <a href="http://www.zerocho.com" target="_blacnk" rel="noreferrer noopener">Made by Hongki</a>
                </Col> {/* 25% 차지*/}

            </Row>

    
        </div>
    )
}

AppLayout.propTypes = {
    // children은 노드 타입이다 (리액트의 노드. 리턴안에 들어갈 수 있는 모든 것들이 노드)
    children: PropTypes.node.isRequired,

};
export default AppLayout
