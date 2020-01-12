import React,{Component} from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import './App.css';




class App extends Component{
  render(){
    return(
        <div style={{height: '600px', position: 'relative'}}>
    <Layout style={{background: 'url(https://media.giphy.com/media/oRAR83fJVJkg8/giphy.gif) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
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
