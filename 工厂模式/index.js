var gongchang={};
gongchang.chanyifu=function(argument){
    this.shuliang=50;
    console.log("需要的数量："+this.shuliang);
}

gongchang.chanxie=function(argument){
    this.shuliang=50;
    console.log("需要的数量："+this.shuliang);
}

gongchang.yunshu=function(argument){
    this.shuliang=50;
    console.log("需要的数量："+this.shuliang);
}

gongchang.changzhang=function(para){
    return new gongchang[para]();
}

var me=gongchang.changzhang('chanyifu');
console.log(me.shuliang)


//////////////////////////////////////////////////抽像工厂///////////////////////////////////////////////////

var XMLHttpFactory=function(){};
XMLHttpFactory.prototype={
    createFactory:function(){
        throw new Error('This is an abstract class');
    }
}

var XHRHandler=function(){
    XMLHttpFactory.call(this);
}
XHRHandler.prototype=new XMLHttpFactory();
XHRHandler.prototype.constructor=XHRHandler;

XHRHandler.prototype.createFactory=function(){
    var XMLHttp=null;
    if(window.XMLHttpRequest){
        XMLHttp=new XMLHttpRequest();
    }else if(window.ActionXObject){
        XMLHttp=new ActioveXObject("Microsoft.XMLHTTP")
    }
    return XMLHttp;
}
var AjaxHander=function(){
    var XMLHttp=XMLHttpFactory.createXMLHttp();
}

























