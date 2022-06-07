const  a = Math.floor(Math.random()*100+1)
const  button = document.getElementById("button")
let answer = document.querySelector("#ans")
console.log(a);


button.addEventListener("click", (e)=>{
    e.preventDefault()
    
    if (!answer.value || answer.value >100 || answer.value <= 0 ){
        
        document.getElementById("result").innerHTML = "Please enter a Number between 1-100"
        document.querySelector("main").style.backgroundColor = "red"
        document.querySelector("#result").style.color = "yellow"
    }else{
        if (+answer.value === a ){
            document.getElementById("result").innerHTML = "Congralations"
            console.log(+answer.value);
        }else if (+answer.value > a){
            document.getElementById("result").innerHTML = "Your answer too high"
        }else if (+answer.value < a){
            document.getElementById("result").innerHTML = "Your answer too low"
        }
        
    }
    
})