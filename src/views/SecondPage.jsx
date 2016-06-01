import React from 'react';
import GlobalActions from '../actions/GlobalActions'
import GlobalStores,{ActionEvents} from '../stores/GlobalStores'

import {environment} from 'react-router-component'

class MainPage extends React.Component{
    constructor(props){
        super(props);
        GlobalStores.addChangeListener(ActionEvents.ACTION_EVENT,this.actionChange)
    }
    actionChange(){
        console.log(GlobalStores.getActionResult(ActionEvents.ACTION_EVENT))
    }
    componentDidMount(){
        GlobalActions.actions('second')
    }
    componentWillUnmount(){
        GlobalStores.removeWholeListeners()
    }
    render(){
        return (
            <section>
                <div onClick={this.clickHandle.bind(this)}>button</div>
            </section>
        )
    }
    clickHandle(){
        environment.hashEnvironment.navigate('/',{transitionName:'pop-right'},function(err){})
    }
}

export default MainPage
