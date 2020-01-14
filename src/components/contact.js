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
                <Cell col={6}>
                    <p><h3><i className="fa fa-phone-square" aria-hidden="true"></i>Telephone<br/>0763988752</h3></p>
                    <p><h3><i className="fa fa-envelope" aria-hidden="true"></i>Email<br/>chandulakan123@gmail.com</h3></p>
                    <p><h3><i className="fa fa-whatsapp" aria-hidden="true"></i>whatsapp</h3></p>
                    <p><h3><i className="fa fa-commenting-o" aria-hidden="true"></i>Message</h3></p>

                    
                    
                
                </Cell>
            </Grid>
            </div>
           
           
        )
    }
}

export default Contact;