import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const DetailImage = () => {
    const getImage = useSelector(state => state.reducerDetail.detail)
    console.log(getImage.imgDetails)
    const [index, setIndex] = useState(0);
    const handleMouseEnter = (index) => {
        setIndex(getImage.imgDetails[index]);
    };
    const handleMouseLeave = () => {
        setIndex("");
    };
    return (
        <div>
            {/* {getImage.imgDetails[index].imgs.map((item, index) => {
            })} */}
        </div>
    )
}

export default DetailImage