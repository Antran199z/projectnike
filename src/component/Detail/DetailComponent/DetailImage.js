import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
const DetailImage = () => {
    const getImage = useSelector(state => state.reducerDetail.detail)
    // console.log(getImage)
    const arrDetails = getImage.imgDetails
    console.log(arrDetails[0])
    return (
        <div>
            {/* {arrDetails[0]?.imgs.map((item, index) => {
                <img
                    src={item.img}
                />
            })} */}
        </div>
    )
}

export default DetailImage
// const ImgDetail = styled.div`
//     .detail_{
//         &child{
//             width: 100px;
//             height: 100px;
//         }
//     }
// `