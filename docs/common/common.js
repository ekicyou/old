//���������˰�������������Ѵؿ�1
function tempCookie(sName,sValue){
  life =new Date();
  //���ԤǤώ��������μ�̿��30�������ꡣ��̿���Ѥ���ˤ�30����
  life.setTime(life.getTime() +24*60*60*1000*sDay);
  document.cookie =sName +"=" +escape(sValue);
}

//���������˵����������Ѵؿ�1
function setCookie(sName,sValue,sDay){
  life =new Date();
  //���ԤǤώ��������μ�̿��30�������ꡣ��̿���Ѥ���ˤ�30����
  life.setTime(life.getTime() + 24*60*60*1000*sDay);
  document.cookie =sName +"=" +escape(sValue) +"; expires=" +life.toGMTString();
}

//�������������ͤ��������Ѵؿ�2
function getCookie(sName) {
  var cookieArray = document.cookie.split("; ");
  for(var i=0; i<cookieArray.length; i++)  {
    var aCrumb =cookieArray[i].split("=");
    if(sName == aCrumb[0]){
      return unescape(aCrumb[1]);
    }
  }
  return null;
}

//�������������������Ѵؿ�3
function delCookie(sName) {
  document.cookie = sName + "=" + escape('') + "; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}
