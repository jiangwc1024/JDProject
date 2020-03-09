 //设置cookie
 function setCookie(name,val,n){
    var oDate = new Date();
    oDate.setDate(oDate.getDate()+n);
    document.cookie = name + "=" + val + ";expires="+oDate;
}
//获取cookie对应内容
function getCookie(name){
   var cookies = document.cookie;//cookie存取是字符串
   var arrCookies = cookies.split("; ");
   for(var i = 0; i < arrCookies.length; i++){
       var arr = arrCookies[i].split("=");
       if(arr[0]===name){
           return arr[1];
       }
   }
}
// 删除cookie
function removeCookie(name){
    setCookie(name,1,-1);
}