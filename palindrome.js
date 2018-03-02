
function palindrome(str) {
  var cleanStr = str.replace(/\s+/g,"");
  cleanStr = cleanStr.replace(/\W+/g, "").toLowerCase();
  cleanStr = cleanStr.replace(/_/, "");
  console.log(cleanStr);
  var revStr = cleanStr.split("");
  revStr = revStr.reverse().join("");
  //console.log(revStr);
  if(cleanStr != revStr){
    return false;
  }
  // Good luck!
  return true;
}



palindrome("_eye");

