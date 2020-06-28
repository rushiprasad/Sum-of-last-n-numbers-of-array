function sumoflast(n) {
    if(n==0){
        return 0;
    }
    else{
        return myArray[myArray.length - n] + sumoflast(n-1);
    }    
}


var myArray = [10,20,30,40,50];
sumoflast(3);
