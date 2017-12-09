var fuhao={}
fuhao.huofang=function(){
    return "馒头";
}
fuhao.chuliliangshi=function(){
    return "面粉";
}
fuhao.mantou=function(){
    this.chuliliangshi();
    this.huofang();
}
fuhao.men={
    return this.mantou();
}


//////////////////门面模式
var stopEvent=function(e){
    e.stopPropagation();
    e.preventDefault();
}

$("#a").click(function(event) {
    /* Act on the event */
     stopEvent(e);
});