import React,{Component} from 'react';
import {Grid,Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return (
            <div style={{width: '80%', margin: 'auto'}}>
            <Grid className="demo-grid">
                <Cell col={12}>
                    <img src=""  alt="Nipuni Kodiyhuwakku" className="avatar-img"/>
                    <div className = "banner-text">
                        <h1>Full Stack Developer</h1>

                        <hr/>
                        <p>HTML | CSS | BOOTSTRAP |JAVASCRIPT | REACT | REACT NATIVE | FLUTTER | NODE JS | EXPRESS | MONGODB </p>
                    
                    </div>
                
                </Cell>
        
            </Grid>
            </div>
        )
    }
}

export default Landing;