module.exports = function toReadable (number) {
  let arr1 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let arr2 = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let arr3 = ['one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
  let lg = number + '';
  let res = "";
  let so = Math.floor(number / 100);
  let ed = Math.floor((number % 100) / 10);
  if (lg.length == 3){
  	if(number % 10 == 0 && ed == 0) return(arr3[so-1]);
  	res += arr3[so-1];
  	if(ed == 0){
  		res =res +" "+ arr1[number % 10];
  		return(res);
  	}
  	if(number % 100 == 19){
  		res +=' nineteen';
  		return(res);
  	}else 
  	if(number % 100 == 18){
  		res +=' eighteen';
  		return(res);
  	}else 
  	if(number % 100 == 17){
  		res +=' seventeen';
  		return(res);
  	}else 
  	if(number % 100 == 16){
  		res +=' sixteen';
  		return(res);
  	}else 
  	if(number % 100 == 15){
  		res +=' fifteen';
  		return(res);
  	}else 
  	if(number % 100 == 14){
  		res +=' fourteen';
  		return(res);
  	}else 
  	if(number % 100 == 13){
  		res +=' thirteen';
  		return(res);
  	}else 
  	if(number % 100 == 11){
  		res +=' eleven';
  		return(res);
  	}else 
  	if(number % 100 == 12){
  		res +=' twelve';
  		return(res);
  	}else 
  	if(number % 100 == 10){
  		res +=" ten";
  		return(res);
  	} else 
  	res =res + " " + arr2[ed-2];
  	if (number % 10 == 0) return(res);
  	res =res + " " + arr1[number % 10];
  	return(res);
  }
  if (lg.length == 2){
  	if(ed == 0){
  		res =res +" "+ arr1[number % 10];
  		return(res);
  	}
  	if(number % 100 == 19){
  		res +='nineteen';
  		return(res);
  	}else 
  	if(number % 100 == 18){
  		res +='eighteen';
  		return(res);
  	}else 
  	if(number % 100 == 17){
  		res +='seventeen';
  		return(res);
  	}else 
  	if(number % 100 == 16){
  		res +='sixteen';
  		return(res);
  	}else 
  	if(number % 100 == 15){
  		res +='fifteen';
  		return(res);
  	}else 
  	if(number % 100 == 14){
  		res +='fourteen';
  		return(res);
  	}else 
  	if(number % 100 == 13){
  		res +='thirteen';
  		return(res);
  	}else 
  	if(number % 100 == 11){
  		res +='eleven';
  		return(res);
  	}else 
  	if(number % 100 == 12){
  		res +='twelve';
  		return(res);
  	}else 
  	if(number % 100 == 10){
  		res +="ten";
  		return(res);
  	} else 
  	res =arr2[ed-2];
  	if (number % 10 == 0) return(res);
  	res =res + " " + arr1[number % 10];
  	return(res);
  }
  if (lg.length == 1){
  	res = arr1[number % 10];
  	return(res);
  }   
  return(0);
}
