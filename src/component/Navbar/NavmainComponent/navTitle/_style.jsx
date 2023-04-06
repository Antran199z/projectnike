import styled from 'styled-components'
export const NavTitleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  .menu_title{
     display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap:30px;
  }
  .nav-title-list-header{
    background-color: blue;
    width: 90px;
  
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
    /* background-color:red; */
    width:900px;
    font-size:20px;
    color:purple;
  }
`;
