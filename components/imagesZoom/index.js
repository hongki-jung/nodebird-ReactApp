import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';


const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

const ImgWrapper = styled.div`
    padding:32px;
    text-align: center;

    & img{
        margin: 0 auto;
        max-height: 750px;
    }
    
    
`;


const Indicator = styled.div`
    text-align: center;
    
    & > div{
        width: 75px;
        height:30px;
        line-height: 30px;
        border-radius: 15px;
        background: #313131;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }

`;


// antd 컴포넌트를 스타일링 하는 경우
const CloseBtn = styled(CloseOutlined)`
    position: absolute;
    right:0;
    top: 0;
    padding: 15px;
    line-height: 15px;
    cursor: pointer;
`;


const Header = styled.header`
    height: 44px;
    background: white;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height:44px;
    }

`;


const SlickWrapper = styled.div`

    height: calc(100% - 44px);
    background:#090909;
`;

// Slick을 가져와 사용할 때 발생하는 문제들을 해결한다.
// Slick을 사용하면 그 안에는 이름이 임의로 정해진  여려 겹의 class들이 들어간다.
//=> 커스텀 스타일링 하는데 어려움이 있다 .
// 이때 Global을 사용하면 .slick-slide{}가 그대로 적용되어 문제를 해결할 수 있다. 
const Global = createGlobalStyle`
    .slick-slide{
        display: inline-block;
    }
`;


const ImagesZoom = ({ images, onClose })=>{
    const [currentSlide,setCurrentSlide] =useState(0);

    return(
        <Overlay>
            <Global />
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
               
            <SlickWrapper>
                <div>
                    <Slick 
                        initialSlide={0}
                        // 현재 슬라이드가 몇 인지, state에 저장해놔야 한다. 
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToScroll={1}
                    >
                        {images.map((v)=>(
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src} />
                            </ImgWrapper>
                        ))}


                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide +1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>

                </div>

            </SlickWrapper>
        </Overlay>
    )
}


ImagesZoom.propType ={
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
};

export default ImagesZoom;