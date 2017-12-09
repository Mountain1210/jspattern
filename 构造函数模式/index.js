//构造函数模式

var AA={
    zaomen:function (huawen){
        if(!(this instanceof AA.zaomen)){
            return new zaomen();
        }

        var _huawen="普通";
        if(huawen){
            _huawen=huawen;
        };
        this.suo="普通";
        this.huawen=_huawen;
        this.create=function(){
            return "[锁头]:"+this.suo+"[花纹]"+this.huawen;
        }
    }    
}

var BB={
    zaomen:function(huawen){
        if(!(this instanceof BB.zaomen)){
            return new zaomen();
        }

        var _huawen="普通";
        if(huawen){
            _huawen=huawen;
        };
        this.suo="普通";
        this.huawen=_huawen;
        console.log(_huawen)
        this.create=function(){
            return "[锁头]:"+this.suo+"[花纹]"+this.huawen;
        }
    }    
}


/*function zaomen(huawen){
    if(!(this instanceof zaomen)){
        return new zaomen();
    }

    var _huawen="普通";
    if(huawen){
        _huawen=huawen;
    };
    this.suo="普通";
    this.huawen=_huawen;
    this.create=function(){
        return "[锁头]:"+this.suo+"[花纹]"+this.huawen;
    }
}*/

var xiaozhang=new AA.zaomen("asdfasf");
console.log("xiaozhang"+xiaozhang.create());

var xiaoli=new BB.zaomen("绚丽");
console.log("xiaoli:"+xiaoli.create())