import {EventEmitter} from 'events';
import assign from 'object-assign';

import Dispatcher from '../actions/Dispatcher';

var _ResultStores = {};

var _ActionEvents = {
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
        _ResultStores[actionName] = result;
        this.emitChange(actionName);
    },

    getActionResult: function(actionName){
        return _ResultStores[actionName]
    }

});

GlobalStores.dispatchToken = Dispatcher.register(function(action) {
    GlobalStores.setActionResult(_ActionEvents.ACTION_EVENT,action.data);
});

export default GlobalStores;
export var ActionEvents = _ActionEvents;