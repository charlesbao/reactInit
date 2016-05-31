import AppDispatcher from'./Dispatcher';
import WebAPIActions from './WebAPIActions'

var GlobalActions = {
    actions: function(value){
        WebAPIActions.action(value,function(result){
            AppDispatcher.dispatch({
                type: 'action',
                data: result.data,
                code: result.code
            });
        })
    }
};

export default GlobalActions