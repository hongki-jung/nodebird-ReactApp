import React, {useCallback, useState, useRef} from 'react';
import {Form, Input, Button} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () =>{
    const {imagePaths}= useSelector((state)=>state.post);
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    // 실제 DOM에 접근하기 위하여 ref를 사용한다. 
    const imageInput = useRef();

    const onChangeText = useCallback((e)=>{
        setText(e.target.value)
    },[])

    const onSubmit = useCallback(()=>{
 
        // addPost (객체) = ADD_POST ACTION을 실행시킨다.
        dispatch(addPost)
        setText('');
  
    },[]);

    const onClickImageUpload = useCallback(() =>{

        //ImageInput.current를 통해서  input에 접근할 수 있다.
        imageInput.current.click();

    },[imageInput.current]);




    return(
        <Form style={{margin:'10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>

            <Input.TextArea 
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
            />

            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>  {/**이미지 업로드 */}

                <Button type="primary" style={{float:'right'}} htmlType="submit">짹짹</Button> {/**게시글 작성*/}

            </div>
            <div>
                {/*이미지를 업로드하면 imagePaths에 업로드한 이미지들의 경로가 들어간다.*/}
                {imagePaths.map((v)=>(
                    <div key={v} style={{distplay:'inline=block'}}>
                        <img src={v} style={{width:'200px'}} alt={v}/>
                        <div>
                            <Button>제거</Button>
                        </div>

                    </div>
                ))}
            </div>


        </Form>
    )


};

export default PostForm;