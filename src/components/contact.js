import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Contact extends Component{
    render(){
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h1>Nipuni Kodithuwakku</h1>
                <img src="./contact.jpg" alt="contact me" style={{width:'250px',height:'250px'}}/>
                
                </Cell>
                <Cell col={6}>half</Cell>
            </Grid>
            </div>
           
           
        )
    }
}

export default Contact;