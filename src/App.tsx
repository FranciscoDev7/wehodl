import React from 'react';
import Layout from './components/layout';
import Aside from './components/Aside';
import Content from './components/Content';
import Header from './components/Header';
import {ThemeProvider} from 'styled-components'
import lightTheme from './styles/lightTheme';
import Routes from './routes';


const App:React.FC = ()=> {
  return (
    <ThemeProvider theme={lightTheme}>
        <Layout>
              <Aside/>
              <Header/>
              <Content>
                <Routes/>
              </Content>
         </Layout>
    </ThemeProvider>
 
  )
}

export default App;
