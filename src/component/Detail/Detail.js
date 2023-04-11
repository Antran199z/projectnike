import React, { useEffect, useState } from 'react'
import { functionDetail } from '../Detail/Module/action/action'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DetailSize from '../Detail/DetailComponent/DetailSize'
import styled from 'styled-components'
import ImgDetail from '../Detail/DetailComponent/ImgDetail'
const Detail = () => {
    const getData = useSelector(state => state.reducerDetail.detail)
    // console.log(getData)
    const dispatch = useDispatch()
    const { id } = useParams()
    // console.log(id)
    const { fetchDetailproduct } = functionDetail()
    useEffect(() => {
        fetchDetailproduct(id, dispatch)
    }, [])
    // const { showImageDetail, setshowImageDetail } = useState(false)

    // const handleMouseEnter = (index) => {
    //     setshowImageDetail(true);
    //     setList(getData[index]);
    // };
    // const handleMouseLeave = () => {
    //     setshowImageDetail(false);
    //     setList("");
    // };
    // const [detailProduct, setDetailProduct] = React.useState(null);
    // const [index, setIndex] = React.useState(0);
    // const getIndexImg = (index) => {
    //     setIndex(index);
    // };
    return (
        <DetailMain>
            <div>
                <ImgDetail />
            </div>
            <div>
                <DetailSize />
            </div>
        </DetailMain>
    )
}
export default Detail
const DetailMain = styled.div`
    display: flex;
    justify-content: space-between;
    .detail_{
        &main{
            width: 200px;
            height: 200px;
        }
    }
`