import React,{Component} from 'react';
import {Tabs,Tab} from 'react-mdl';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0}
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
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>

            
            </div>
        )
    }
}

export default Project;