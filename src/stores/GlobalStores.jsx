import {EventEmitter} from 'events';
import assign from 'object-assign';

import Dispatcher from '../actions/Dispatcher';

var ResultStores = {};

var ActionEvent = {
    ACTION_EVENT:'ACTION_EVENT'
};

var GlobalStores = assign({}, EventEmitter.prototype, {

    emitChange: function(event) {
        this.emit(event);
    },

    addChangeListener: function(event, callback) {
        this.on(event, callback);
    },

    removeChangeListener: function(event, callback) {
        this.removeListener(event, callback);
    },

    removeWholeListeners: function(){
        this.removeAllListeners()
    },

    setActionResult: function(actionName,result){
        ResultStores[actionName] = result;
    },

    getActionResult: function(actionName){
        return ResultStores[actionName]
    }

});

GlobalStores.dispatchToken = Dispatcher.register(function(action) {
    switch(action.type) {
        case 'action':
            GlobalStores.setActionResult('action',action.code);
            GlobalStores.emitChange(ActionEvent.ACTION_EVENT);
            break;
    }
});

export default GlobalStores;
export var ActionEvents = ActionEvent;