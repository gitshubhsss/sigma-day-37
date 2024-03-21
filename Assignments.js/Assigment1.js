//write a arrow funtion named arrayAverage that accepts an array of numbers and returns  the average of those numbers


let average=()=>{
    let arr=[1,5,3,4];
    let avg=0;
    for(i=0;i<arr.length;i++){
        avg=avg+arr[i]/arr.length
    }
    console.log(avg);
}
average();