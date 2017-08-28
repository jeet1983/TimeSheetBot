function getuserInput(txt) {
  var rettxt=1;
 if(txt.indexOf('Create')!=-1)
    rettxt=1;
 if(txt.indexOf('Query')!=-1)
    rettxt=2;
  return rettxt;
}

function isCreate(txt) {
var retval=0;
 if(txt.indexOf('Create')!=-1)
    retval=1;
  return retval;
}
function isQuery(txt) {
var retval=0;
 if(txt.indexOf('Query')!=-1)
    retval=1;
  return retval;
}

