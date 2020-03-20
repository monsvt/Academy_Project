export const cidrToMaskFunction = (value) => {
  //console.log(value);
  
  if(Number.isNaN(value)) {
    return "Invalid"; 
  }
  
    if (value>0 && value<=32) {
	    return createMask(value);
    } else {
	    return "Invalid";
	}
}

    function createMask(cidr) {
    var mask=[];
    var i;
    for(let i=0;i<4;i++) {
    var n= Math.min(cidr,8);
    mask.push(256-Math.pow(2,8-n));
    cidr -= n;
    }
    return mask.join('.');
    
  } 
 
