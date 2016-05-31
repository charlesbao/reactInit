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
        console.log('ok')
    }
    componentDidMount(){
        GlobalActions.actions('')
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
        environment.hashEnvironment.navigate('/MainPage',function(err){})
    }
}

export default MainPage
