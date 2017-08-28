function getuserInput(txt) {
  var rettxt='';
 if(txt.indexOf('Create')!=-1)
    rettxt='Create';
 if(txt.indexOf('Query')!=-1)
    rettxt='Query';
  return rettxt;
}
