const arr = [2,4,6,7,9,3,5,6];

function demo(){
    for (var i = 0; i < arr.length; i++) {
       function close(i){
            setTimeout(() => {
            const element = arr[i];
            console.log(element);
        }, i* 1000);  
       }      
       close(i)
    }
}
demo();