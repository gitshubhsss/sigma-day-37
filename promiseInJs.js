let myPromise = new Promise(function(myresolve,myreject){
    let x=0;
    if(x==0){
        myresolve("x value is 0")
    }
    else{
        myreject("error");
    }
})
console.log(myPromise);