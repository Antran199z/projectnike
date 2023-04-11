import styled from 'styled-components'
export const NavTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .menu_title{
     display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap:30px;
  }

  /* .nav-title-list-header{
    background-color: blue;
    width: 90px;
  } */
  .nav-title-list-header{
cursor:pointer;
  position:relative;
  padding:10px 20px;
  background:white;
  font-size:18px;
  border-top-right-radius:10px;
  border-bottom-left-radius:10px;
  transition:all 1s;
  &:after,&:before{
    content:" ";
    width:10px;
    height:10px;
    position:absolute;
    border :0px solid #fff;
    transition:all 1s;
    }
  &:after{
    top:-1px;
    left:-1px;
    border-top:5px solid black;
    border-left:5px solid black;
  }
  &:before{
    bottom:-1px;
    right:-1px;
    border-bottom:5px solid black;
    border-right:5px solid black;
  }
  &:hover{
    border-top-right-radius:0px;
  border-bottom-left-radius:0px;
    // background:rgba(0,0,0,.5);
    // color:white;
    &:before,&:after{
      
      width:100%;
      height:100%;
      // border-color:white;
    }
  }
}

  .menu_main{
    display: flex; 
     justify-content: center;
     margin-right: 10px;
  }
  .menu_right{
    display:flex
  }
  .menu_left img{
    width:100px
  }
  .menu_main_body{
    position:fixed;
    z-index:3;
    top:120px;
    right:300px;
    width:900px;
    font-size:16px;
    color:black;
    opacity: 1;
    font-weight: 500;
  }
  .bird {
	background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
	background-size: auto 100%;
	width: 352px;
	height: 100px;
	will-change: background-position;
	position: absolute;
	animation-name: fly-cycle;
	animation-duration: 2s;
	animation-delay: -0.5s;
	animation-timing-function: steps(10);
	animation-iteration-count: infinite;
}
@keyframes fly-cycle {
	
	100% {
		background-position: -3600px 0;
	}
	
}
`;
