import React, {useState} from 'react'
import styled, { css } from 'styled-components'
import {MdDashboard, MdCompareArrows,MdSettings, MdNoteAdd, MdPieChart}from 'react-icons/md'
import {FaLightbulb} from 'react-icons/fa'

interface activeColor {
   active:string
}

const Container = styled.div`
grid-area:AS;
background-color:${props=>props.theme.color.white};
padding:30px 40px;
`
const Header = styled.header`
display:flex;
align-items:center;
text-align:center;

   >h2{
      padding-top:10px;
      background-color:${props=>props.theme.color.primary};
      width:60px;
      height:60px;
      font-size:35px;
      border-radius:35px;
      color:white;
   }
   >h1{
      font-size:40px;
      
   }
`

const MenuContainer = styled.nav`
    display:flex;
    flex-direction:column;  
    margin-top:50px;

`
const Link = styled.a<activeColor>`
    display:flex;
    align-items:center; 
    text-decoration:none;
    margin-bottom:10px;
    cursor:pointer;
    padding:10px 20px;
    ${props=>props.active === "" && css`color:${props=>props.theme.color.tertiary};`}
    ${props=>props.active === "active" && css`
    color:${props=>props.theme.color.black};
    border:3px solid ${props=>props.theme.color.primary};
    background-color:${props=>props.theme.color.gray};
    border-radius:10px;
    
    `}
    transition: all 0.3s;
   :hover{
      opacity:0.7;
   }
   >h3{
   font-size:0.9rem;
   }
   >svg{
      font-size:30px;
      margin-right:10px;
   }
`


const Aside: React.FC = () =>{

const [page, setPage] = useState<string>("dashboard")

interface iActive{
   dashboard:string
   dataInput:string
   strategies:string
   transactions: string
   settings:string
   portfolio:string
}

let active:iActive={
   dashboard:"",
   dataInput:"",
   strategies:"",
   transactions: "",
   settings:"",
   portfolio:""
}

switch (page) {
   case 'dashboard':
     active.dashboard = "active"
     break
   case 'data-input':
     active.dataInput = "active"
     break
   case 'transactions':
     active.transactions = "active"
     break
   case 'settings':
     active.settings = "active"
     break
   case 'strategies':
     active.strategies = "active"
     break
}
 return(
    <Container>
       <Header>
         <h2>we</h2>
         <h1>hodl</h1>
       </Header>
       <MenuContainer>
          <Link  active={active.dashboard} href="/dashboard">
             <MdDashboard/>
           <h3>Dashboard</h3> 
          </Link>
          <Link active={active.dataInput} href="/data-input">
             <MdNoteAdd/>
           <h3>Data Input</h3> 
          </Link>
          <Link active={active.portfolio} href="/portfolio">
             <MdPieChart/>
           <h3>Portfolio</h3> 
          </Link>
          <Link active={active.transactions} href="/transactions">
             <MdCompareArrows/>
           <h3>Transactions</h3> 
          </Link>
          <Link active={active.strategies} href="/strategies">
             <FaLightbulb/>
           <h3>Strategies</h3> 
          </Link>
          <Link active={active.settings} href="/settings">
             <MdSettings/>
           <h3>Settings</h3> 
          </Link>
       </MenuContainer>
       
    </Container>
 )
}

export default Aside 