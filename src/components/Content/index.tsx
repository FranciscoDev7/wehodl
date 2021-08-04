import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
grid-area:CT;
background-color:${props=>props.theme.color.gray};
padding:50px 30px;
`

const Content: React.FC = ({children}) =>{
 return(
    <Container>
       {children}
    </Container>
 )
}

export default Content 