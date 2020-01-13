import React,{Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton } from 'react-mdl';

class Project extends Component{
    constructor(props){ 
        super(props);
        this.state = {activeTab:0}
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
            return(
                <div className="projects-grid">

                {/* // first project */}
                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8ayRrGHGyswY1Hx_R1iO53IYgS2ljs28pR4xbYkI-0rO0OBJ&s) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                {/* //Second project */}
                   <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8ayRrGHGyswY1Hx_R1iO53IYgS2ljs28pR4xbYkI-0rO0OBJ&s) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Third project */}

                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8ayRrGHGyswY1Hx_R1iO53IYgS2ljs28pR4xbYkI-0rO0OBJ&s) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    </div>
            )

                
        
        }else if(this.state.activeTab === 1){
            return(
            <div className="projects-grid">

                {/* // first project */}
                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.blogs.es/77220b/original/450_1000.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                {/* //Second project */}
                   <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.blogs.es/77220b/original/450_1000.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Third project */}

                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.blogs.es/77220b/original/450_1000.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    </div>
            )

            
        }else if(this.state.activeTab === 2){
            return(
            <div className="projects-grid">

                {/* // first project */}
                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.silios.gr/wp-content/uploads/2019/06/flutter-1024x486.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                {/* //Second project */}
                   <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.silios.gr/wp-content/uploads/2019/06/flutter-1024x486.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>

                    {/* Third project */}

                    <Card shadow={0} style={{width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.silios.gr/wp-content/uploads/2019/06/flutter-1024x486.png) center / cover'}}>recipe app</CardTitle>
                    <CardText>
                        using this app you can easily get your food recipes instantly
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    </Card>
                    </div>
            )
            
        }else if(this.state.activeTab === 3){
            return(<div>This is React Native</div>)
        }else{
            return(<div>This is MongoDB</div>)
        }
    }
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>flutter</Tab>
                    <Tab>React Native</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
                <section>
                    <Grid >
                        <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        
                        </div>
                        </Cell>
                    
                    </Grid>
                </section>

            
            </div>
        )
    }
}

export default Project;