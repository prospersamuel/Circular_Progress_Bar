let number1 = document.getElementById("number1");
let counter1 = 0;

setInterval(()=>{
    if(counter1 == 76){
        clearInterval();
    }else{
    counter1 += 1;
    number1.innerHTML = "HTML" + '<br>' + counter1 + '%'
    }

}, 39)




let number2 = document.getElementById("number2");
let counter2 = 0;

setInterval(()=>{
    if(counter2 == 67){
        clearInterval();
    }else{
    counter2 += 1;
    number2.innerHTML = "CSS" + '<br>' +  counter2 + '%'
    }

}, 42)



let number3 = document.getElementById("number3");
let counter3 = 0;

setInterval(()=>{
    if(counter3 == 43){
        clearInterval();
    }else{
    counter3 += 1;
    number3.innerHTML = "JS" + '<br>' +  counter3 + '%'
    }

}, 66)