var $ = require('jquery');

var WebAPIActions = {
    action: function(value,callback){
        // $.ajax({
        //     url:'',
        //     dataType:'jsonp',
        //     type:'get',
        //     success:function(result){
        //         callback(result)
        //     }
        // })
        let result = {
            code:200,
            data:[]
        };
        callback(result)
    }
};

export default WebAPIActions

