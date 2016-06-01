import AppDispatcher from'./Dispatcher';
import WebAPIActions from './WebAPIActions'
import {ActionEvents} from '../stores/GlobalStores'


var GlobalActions = {
    actions: function(value){
        WebAPIActions.action(value,function(result){
            AppDispatcher.dispatch({
                type: ActionEvents.ACTION_EVENT,
                data: result,
            });
        })
    }
};

export default GlobalActions