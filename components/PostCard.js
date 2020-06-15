import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Card, Popover, Button, Avatar, List, Comment} from 'antd';
import {RetweetOutlined ,HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone} from '@ant-design/icons';

import CommentForm from './CommentForm';
import PostImages from './PostImages';

// post는 부모( /pages/index.js)로부터 받아온다
const PostCard = ({post}) =>{


    const [liked,setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] =useState(false);

    const { me } =useSelector((state)=>state.user);
    // const id = me && me.id;
    const id = me?.id;
    
    // 토글 활용 예시. true면 false, false면 true
    const onToggleLike = useCallback(()=>{
        setLiked((prev)=>!prev);
    },[]);

    const onToggleComment = useCallback(()=>{
        setCommentFormOpened((prev) => !prev)
    },[])

    return(
        <div style={{marginButtom:20}}>
  
            <Card
                cover={post.Image[0] && <PostImages images={post.Image}/>}    

                actions={[
                    <RetweetOutlined key="retweet"/>,

                    liked 
                        ?  <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                        :  <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                    <Button.Group>
                        { id && post.User.id === id ? (
                            <>
                                <Button> 수정 </Button>
                                <Button type="danger">삭제</Button>
                            </>
                        ) : <Button> 신고 </Button>}
                    </Button.Group>  
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
   
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.content}
                />
            </Card>

            {commentFormOpened && <>
                <div>
                    <CommentForm post={post}/>
                    <List 
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        // dataSource	dataSource array for list
                        // renderItem	customize list item when using dataSource
                        renderItem={(item)=>(
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div> 
            </>}
            {/* <CommentForm />
            <Comments /> */}

        </div>
    )
};


PostCard.PropTypes ={
    // post: PropTypes.object.isRequired

    post:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),

    }).isRequired,

};

export default PostCard;