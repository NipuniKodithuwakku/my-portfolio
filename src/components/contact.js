import React,{Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h2 style={{color:'purple'}}>Nipuni Kodithuwakku</h2>
                <img src="./contact.jpg" alt="contact me" style={{width:'250px',height:'250px'}}/>
                <p style={{width:'75%',fontSize:'15px',margin:'auto',paddingTop:'1em'}}>I am a level 3 Software Engineering Undergraduate university of Kelaniya. I have a good capability of following areas. Those are web designing and mobile application development. </p>
                
                </Cell>
                <Cell col={6}>
                <h2>Contact me</h2>
                <hr/>
                   
                <div className='contact-list'>
                                    <List>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Arial'}}><i className="fa fa-phone-square" aria-hidden="true"></i>0763988752</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'25px',fontFamily:'Arial'}} ><i className="fa fa-envelope" aria-hidden="true"></i>chandulakan123@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:'20px',fontFamily:'Arial'}} ><i className="fa fa-address-card" aria-hidden="true"></i>K.A.N chandula,<br/>Mahahena,<br/>Pallattara East,<br/>Ihala Beligalla</ListItemContent>
  </ListItem>
  
  
</List>
                 
                
                </div>
       
                
                </Cell>
            </Grid>
            </div>
           
           
        )
    }
}

export default Contact;