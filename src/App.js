import React,{Component} from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';




class App extends Component{
  render(){
    return(
     
<div className="demo-big-content">
    <Layout>
        <Header title="Nipuni Kodithuwakku" scroll>
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Nipuni Kodithuwakku">
            <Navigation>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    )
      
    }
  }




export default App;
