import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
grid-area:HD;
background-color:${props=>props.theme.color.gray};
`

const Header: React.FC = () =>{
 return(
    <Container>
       
    </Container>
 )
}

export default Header 