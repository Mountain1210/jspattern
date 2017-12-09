/* 
* @Author: anchen
* @Date:   2017-09-24 08:15:58
* @Last Modified by:   anchen
* @Last Modified time: 2017-09-24 08:17:16
*/

yihuo={
    age:16,
    fnage:function(){
        var age=17;
        console.log(this.age);
        console.log(age)
    }
}
yihuo.fnage();