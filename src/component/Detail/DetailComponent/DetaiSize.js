import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
const DetailSize = () => {
    const getSize = useSelector(state => state.reducerDetail.detail)
    console.log(getSize.sizes)
    return (
        <SizeDetail>
            {getSize.sizes ? <div className='size-main'>
                {getSize.sizes?.map((item, index) => {
                    return (<div key={index}><button>{item.size}</button></div>)
                })}
            </div> : ""}

        </SizeDetail>
    )
}

export default DetailSize
const SizeDetail = styled.div`
    .size-{
        &main{
            display: grid;
            grid-template-rows: auto auto auto auto;
            grid-template-columns: auto auto auto auto;
            gap: 30px;
        }
    }

`