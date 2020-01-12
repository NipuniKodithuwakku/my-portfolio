import React,{Component} from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';




class App extends Component{
  render(){
    return(
        <div style={{height: '750px', position: 'relative'}}>
    <Layout style={{background: 'url(grey_back.jpg) center / cover'}}>
        <Header transparent title="Nipuni Kodithuwakku" style={{color: 'black'}}>
            <Navigation>
                <Link to="/aboutme" style={{color: 'black'}}>About me</Link>
                <Link to="/projects"style={{color: 'black'}}>Projects</Link>
                <Link to="/resume"style={{color: 'black'}}>Resume</Link>
                <Link to="/contact"style={{color: 'black'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title" >
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content >
        <Main/>
        </Content>
    </Layout>
</div>
     

    )
      
    }
  }




export default App;
