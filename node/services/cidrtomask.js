export const cidrToMaskFunction = (value) => {
  //console.log(value);
  var mask= []
  var i;
  
  for (i=0;i<4;i++){
    if (value>=8 && value<=32) {
    var n=Math.min(value,8);
    mask.push(256-Math.pow(2,8-n));
    value-=n;
    return mask.join('.');
    }
  }
    return "Invalid"
}
