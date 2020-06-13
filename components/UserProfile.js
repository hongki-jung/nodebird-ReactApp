import React ,{useCallback} from 'react';
import {Card, Avatar, Button} from 'antd';

import {useDispatch} from 'react-redux';
import {logoutAction} from '../reducers/user';



// const UserProfile = ({setIsLoggedIn}) => {
const UserProfile = () => {

    const dispatch = useDispatch();

    const onLogOut = useCallback(()=> {
        // setIsLoggedIn(false);
        dispatch(logoutAction())
    }, []);

    return(
        <Card
            //버튼들은 actions로 만들어준다.
            actions={[

                //React에서 배열로 JSX를 쓸 경우 Key를 붙여줘야 한다.
                <div key="twit">짹짹 <br />0</div>,
                <div key="following">팔로잉 <br />0</div>,
                <div key="follower">팔로워 <br />0</div>,
            ]}
        >
        
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="ZeroCho"
            >
      
            </Card.Meta>

            <Button onClick={onLogOut}>로그아웃</Button>

        </Card>
    )

}

export default UserProfile;