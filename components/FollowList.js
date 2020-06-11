import React from 'react';
import {List, Button, Card} from 'antd';
import PropTypes from 'prop-types';
import {StopOutlined} from '@ant-design/icons'


// data에는 profile페이지에서 보내준 followerList (props)가 들어있다. 
const FollowList = ({header,data}) =>{
    return(
        <List
        style={{marginBottom:20}}
        grid={{gutter:4,xs:2,md:3}} //grid: 격자 , gutter: 간격 
        size="small"
        header={<div>{header}</div>}
        loadMore={<div style={{textAlign:'center',margin:'10px 0'}}><Button>더 보기</Button></div>}
        bordered    //경계선
        dataSource={data}   //더미 데이터(배열) 전달된다 . 그 배열들이 반복문을 통해서 item으로 들어간다. 
        renderItem={(item)=> ( 
            <List.Item style={{marginTop:20}}>
                <Card actions={[<StopOutlined key="stop"/>]}>
                    <Card.Meta description={item.nickname} />
                </Card>
            </List.Item>
        )}
        />
    )

};



FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};




export default FollowList;


