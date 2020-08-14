fibonacci = function (n){
    n = document.getElementById('num1').value;

    for(var fib = [0, 1], i = 0, y = 1, k = 0; k < n; k++){ 
       var result = i + y;
       i = y;
       y = result;
       fib.push("\n"+ result);
       
    }

    document.getElementById("result").innerHTML = "<b>The fibonacci sequence is:</b>"  + fib  ;
    
};
