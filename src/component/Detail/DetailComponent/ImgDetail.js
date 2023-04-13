import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionDetail } from "../Module/constant/constant";
import styled from "styled-components";
const ImgDetail = () => {
  const getImage = useSelector((state) => state.reducerDetail.detail);
  const loading = useSelector((state) => state.reducerDetail.loading);
  const listDetail = useSelector((state) => state.reducerDetail.listDetail);
  const largeImage = useSelector((state) => state.reducerDetail.largeImage);
  const dispatch = useDispatch();
  const renderHtmlImage = () => {
    return listDetail.imgs?.map((item, i) => {
      return (
        <div
          key={i}
          onClick={() => {
            handleMouseEnter(item.img);
          }}
        >
          <img src={item.img} />
        </div>
      );
    });
  };
  const handleMouseEnter = (image) => {
    dispatch({ type: actionDetail.GET_LARGE_IMAGE, payload: image });
  };
  const handle = (id) => {
    const newObj = getImage?.imgDetails?.find((item) => {
      if (item?.id === id) return item;
    });
    // console.log(newObj);
    // dispatch({ type: actionDetail.GET_LIST_DETAIL, payload: newObj });
    // dispatch({
    //   type: actionDetail.GET_LARGE_IMAGE,
    //   payload: newObj.imgs[0].img,
    // });
  };
  // console.log(listDetail.imgs.length);
  handle();
  const getIndexImage = (index) => {
    console.log(listDetail.imgs?.[index]);
  };
  return (
    <ImgDetailCss>
      {loading ? (
        <div className="detail_main">
          <div>
            {getImage?.imgDetails?.map((item, i) => {
              return <button key={i}>{item.color}</button>;
            })}
          </div>
          <div className="detail_group">
            <div className="detail_group-image">{renderHtmlImage()}</div>
            <div className="detail_group-large-image">
              <img src={largeImage} />
              <button
                onClick={() => {
                  getIndexImage();
                }}
              >
                <i className="fa-solid fa-backward"></i>
              </button>
              <button>
                <i className="fa-solid fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="spiner"></div>
          <div className="bar">
            <span className="dot1"></span>
            <span className="dot2"></span>
            <span className="dot3"></span>
          </div>
        </div>
      )}
    </ImgDetailCss>
  );
};

export default ImgDetail;
const ImgDetailCss = styled.div`
  .detail_ {
    &child {
      width: 300px;
      height: 300px;
    }
    &main {
      /* display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto auto auto;
            gap: 20px; */
      display: flex;
    }
    &group-image {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &group-large-image {
      border: 1px solid black;
      img {
        width: 700px;
        height: 613px;
        box-shadow: black 1px -1px 4px 3px;
      }
    }
    &group {
      display: flex;
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
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
