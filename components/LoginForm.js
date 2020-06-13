import React, { useCallback} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useinput';
import {useDispatch} from 'react-redux';

import {loginAction} from '../reducers/user';


// styled.div 하게 되면 ButtonWrapper는 div태그(div component)가 된다.
const ButtonWrapper = styled.div`
    margin-top:10px;
`;




const FormWrapper= styled(Form)`
    padding: 10px
`;


// const LoginForm = ({setIsLoggedIn}) => {

const LoginForm = () => {

    // Custom Hook 사용전 버전
    // const [id, setId] = useState('');
    // const [password, setPassword] = useState('')

    // //  컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 사용한다.
    // // 그래야 최적화가 된다. useCallback은 함수를 캐싱해준다.
    // const onChangeId = useCallback((e)=>{    
    //     setId(e.target.value)
    // },[])


    // const onChangePassword = useCallback((e)=>{    
    //     setPassword(e.target.value)
    // },[])



    const dispatch = useDispatch();

    //  Custom Hook 사용후 
    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('')






    const onSubmitForm = useCallback(()=>{
        console.log(id,password);
        // setIsLoggedIn(true);
        dispatch(loginAction({id,password}));
    },[id,password]);



    return(
        <FormWrapper onFinish={onSubmitForm}>
            {/* onFinish는 이미 preventDefault가 적용되어 있다.
            submit이되면 onFinish가 호출된다.
            */}
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>

            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password"
                 type="password"
                 value={password} 
                 onChange={onChangePassword} 
                 required />
            </div>

            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}> 로그인 </Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>

            <div>
                
            </div>
        </FormWrapper>
    )

}


// LoginForm.propTypes={
//     setIsLoggedIn: PropTypes.func.isRequired,
// }


export default LoginForm;