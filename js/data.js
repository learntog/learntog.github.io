/**
 * Created by Ishan on 6/06/2017.
 */

var getdata = {
    getfacebook: function () {
       if(localStorage.getItem("facebook_friends")!==undefined){
           return JSON.parse(localStorage.getItem("facebook_friends"));
       }
    },

    setfacebook: function (data) {
        if(typeof data == 'string'){
            localStorage.setItem("facebook_friends", data);
        }else{
            localStorage.setItem("facebook_friends", JSON.stringify(data));
        }
    }

};

