import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
const ImgDetail = () => {
  const getImage = useSelector(state => state.reducerDetail.detail)
  console.log(getImage)
  const loading = useSelector(state => state.reducerDetail.loading)
  return (
    <ImgDetailCss>
      {loading ? (<div className='detail_main'>
        {getImage.imgDetails[0]?.imgs.map((item, index) => {
          return (
            <div key={index}>
              <img className='detail_child'
                src={item.img}
              />
            </div>
          )
        })
        }
      </div>) :
        <div>
          <div className="spiner"></div>
          <div className="bar">
            <span className="dot1"></span>
            <span className="dot2"></span>
            <span className="dot3"></span>
          </div>
        </div>}
    </ImgDetailCss>
  )
}

export default ImgDetail
const ImgDetailCss = styled.div`
    .detail_{
        &child{
            width: 300px;
            height: 300px;
        }
        &main{
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto auto auto;
            gap: 20px;
        }
    }
    body > div {
  height: 500px;
  width: 100%;
  background-color: #002266;
  text-align: center;
}
 
.spiner {
  margin-top: 50px;
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 10px solid white;
  border-radius: 50%;
  border-top: 10px solid #ff8000;
  animation: spiner 1.5s linear infinite;
}
 
.bar {
  margin-top: 50px;
  display: inline-block;
  width: 100%;
}
.bar > span {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff8000;
  display: inline-block;
  animation: dot 1.5s ease-in-out infinite both;
}
 
.bar span.dot1 {
  animation-delay: -0.3s;
}
 
.bar span.dot2 {
  animation-delay: -0.15s; 
}
 
.bar span.dot3 {
  animation-delay: 0s;
}
 
@keyframes spiner {
  to {
    transform: rotate(360deg);
  }
}
 
@keyframes dot {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
`