var xiaowang=(function(argument){
    var xiaowangjia=function(message){
        this.menling=message;
    }
    var men;
    var info={
        sendMessage:function(message){
            if(!men){
                men=new xiaowangjia(message);
            }
            return men;
        }
    }
    return info;
})()

var xiaoli={
    callXiaowang:function(msg){
        var _xw=xiaowang.sendMessage(msg);
        console.log(_xw.menling);
        _xw=null;//等待垃圾回收
    }
}
xiaoli.callXiaowang("哒哒哒");

var top={
    init:function(){
        this.render();
        this.bind();
    },
    a:4,
    render:function(){
        var me=this;
        me.btna=$('#a');
    },
    bind:function(){
        var me =this;
        me.btna.click(function(){
            me.test();
        })
    },
    test:function(){
        a=5;
    }
};

var banner={
    init:function(){
        this.render();
        this.bind();
    },
    a:4,
    render:function(){
        var me=this;
        me.btna=$('#a');
    },
    bind:function(){
        var me =this;
        me.btna.click(`function(){
            me.test();
        })
    },
    test:function(){
        top.a=8;
    }
}
top.init();
banner.init();