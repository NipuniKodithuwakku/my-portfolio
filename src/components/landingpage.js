import React,{Component} from 'react';
import {Grid,Cell } from 'react-mdl';
import Avatar from 'react-avatar';

class Landing extends Component{
    render(){
        return (
            <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid">
                <Cell col={12}>
                    {/* <img src="./me.jpg"  alt="Nipuni Kodiyhuwakku" className="avatar-img"/> */}
                    <Avatar alt="Nipuni Kodithuwakku" src="./me.jpg" size="250px" round={true} margin-top='30px'/>
                    <div className = "banner-text">
                        <h1>Full Stack Developer</h1>

                        <hr/>
                        <p>HTML | CSS | BOOTSTRAP |JAVASCRIPT | REACT | REACT NATIVE | FLUTTER | NODE JS | EXPRESS | MONGODB </p>
                        <div className="social-links">

                            {/*Linkedin*/ }       

                            <a href="htttp://google.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/*Github*/ }

                            <a href="htttp://google.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/*Stack-overflow*/}

                            <a href="htttp://google.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-stack-overflow" aria-hidden="true"/>
                            </a>


                            {/*Facebook*/ }

                            <a href="htttp://google.com" rel="noopener noreferrer" target="_blank" >
                            <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </a>



                        </div>
                    
                    </div>
                
                </Cell>
        
            </Grid>
            </div>
        )
    }
}

export default Landing;