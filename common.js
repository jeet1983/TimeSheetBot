function getuserCInput(txt) {
  var rettxt='';
 if(txt.indexOf('Create')!=-1)
    rettxt='C';
  return rettxt;
}

function getuserQInput(txt) {
  var rettxt='';
 if(txt.indexOf('Query')!=-1)
    rettxt='Q';
  return rettxt;
}
