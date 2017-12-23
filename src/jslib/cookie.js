var cookie = {
    set : function(name,value,days,path){
        var t = new Date(),
            sCookie= name + "=" + escape(value);
        t.setTime(t.getTime()+days*24*3600*1000);
        sCookie += ";expires="+t.toGMTString();
        sCookie += path && ";path="+path || "";
        document.cookie = sCookie;
    },
    get : function(name){
        var preg = new RegExp("(^| )"+name+"=([^;]*)(;|$)","g");
        return preg.test(document.cookie) && RegExp.$2 || "";
    },
    del : function(name){
        cookie.set(name,"",-1);
    },
    cls : function(){
        var cookieArr = document.cookie.split(";");
        for(var i=0;i<cookieArr.length;i++){
            cookie.del(/([^;]*)=([^;]*)/.exec(document.cookie)[1]);
        }
    }
}

export default cookie;
