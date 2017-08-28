function getuserInput(txt) {
  var rettxt='';
 if(txt.indexOf('Create')!=-1)
    rettxt='Create';
 if(txt.indexOf('Query')!=-1)
    rettxt='Query';
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

