/**
 * Created by Ishan on 6/06/2017.
 */

var getdata = {
    getfacebook: function (uid) {
       if(localStorage.getItem(uid+"facebook_friends")!==undefined){
           return JSON.parse(localStorage.getItem(uid+"facebook_friends"));
       }else{
           return null;
       }
    },

    setfacebook: function (uid, data) {
        if(typeof data == 'string'){
            localStorage.setItem(uid+"facebook_friends", data);
        }else{
            localStorage.setItem(uid+"facebook_friends", JSON.stringify(data));
        }
    },

    clearfacebook: function (uid) {
        localStorage.removeItem(uid+'facebook_friends');

    }

};

