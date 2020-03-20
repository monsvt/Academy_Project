export const maskToCidrFunction = (value) => {
    //console.log(value);
    if(value=="255.0.0.0"){
        return "8";
    }
	else if(value=="255.255.0.0"){
        return "16";
    }
	else if(value=="255.255.255.0"){
        return "24";
    }
	else if(value=="255.255.255.255"){
        return "32";
    }
	else {
		return "Invalid";
	}
  }
  

