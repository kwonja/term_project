import React from 'react'
import {Route,Routes,NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const Ul = styled.ul`
list-style:none;
width : 80%;
display : flex;
flex-wrap: wrap;
`;
const Li = styled.li`
width : 40%;
font-size : 30px;
padding : 25px;
a{
    color: #FF7759;
}
`;
export default function Footer() {
  return (
    <Ul>
    <Li></Li>
    <Li><Link to="/">Back to Home</Link></Li>
    </Ul>
  )
}
