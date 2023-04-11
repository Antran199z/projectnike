import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const DetailSize = () => {
    const getSize = useSelector(state => state.reducerDetail.detail)
    // console.log(getSize.sizes)
    return (
        <SizeDetail>
            <div  >
                <div className='size-name'>{getSize.name}</div>
                <div>{getSize.gender}</div>
                <div >{getSize.price} VNĐ</div>
            </div>
            {getSize.sizes ? <div className='size-main'>
                {getSize.sizes?.map((item, index) => {
                    return (<div key={index}><button className='size-main_button'    >EU {item.size}</button></div>)
                })}
            </div> : ""}
            <div className='size-button'>
                <button className='size-button_add'>Add To Bag</button>
                <button className='size-button-favour'>Favourite
                    <i className="fa-thin fa-heart"></i>
                </button>
            </div>
        </SizeDetail>
    )
}

export default DetailSize
const SizeDetail = styled.div`
    .size-{
        &main{
            display: grid;
            grid-template-rows: auto auto auto auto;
            grid-template-columns: auto auto auto;
            gap: 10px;
            margin-top: 40px;
        }
        &name{
            font-size: x-large;
        }
        &button{
            display:flex;
            flex-direction: column;
            margin-top: 30px;
            
        }
        &button_add{
            margin: 20px 0;
            background-color: black;
            height: 50px;
            color: white;
            border-radius: 30px;
            :hover{
              position: relative;  appearance: none;  background: #f72359;  padding: 1em 2em;  border: none;  color: white;  font-size: 1.2em;  cursor: pointer;  outline: none;  overflow: hidden;  border-radius: 100px;  span {   position: relative; }  &::before {    --size: 0;    content: '';    position: absolute;    left: var(--x);    top: var(--y);    width: var(--size);    height: var(--size);    background: radial-gradient(circle closest-side, #4405f7, transparent);    transform: translate(-50%, -50%);    transition: width .2s ease, height .2s ease; } &:hover::before {   --size: 400px; }}
        }
        &button-favour{
            background-color: white;
            color: black;
            height: 50px;
            border-radius: 30px;
            :hover{
              position: relative;  appearance: none;  background: #f72359;  padding: 1em 2em;  border: none;  color: white;  font-size: 1.2em;  cursor: pointer;  outline: none;  overflow: hidden;  border-radius: 100px;  span {   position: relative; }  &::before {    --size: 0;    content: '';    position: absolute;    left: var(--x);    top: var(--y);    width: var(--size);    height: var(--size);    background: radial-gradient(circle closest-side, #4405f7, transparent);    transform: translate(-50%, -50%);    transition: width .2s ease, height .2s ease; } &:hover::before {   --size: 400px; }}
        }
        &main_button{
            height: 40px;
            width: 80px;
            background-color: white;
            border-radius: 10px;
            :hover{
                cursor: pointer
            }
        }
    }

`