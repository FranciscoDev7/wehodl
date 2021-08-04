import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:grid;
height:100vh;
grid-template-columns: 250px auto;
grid-template-rows:80px auto;
grid-template-areas:
'AS HD'
'AS CT';

`

const Layout: React.FC = ({children}) =>{
 return(
    <Container>
        {children}
    </Container>
 )
}

export default Layout 