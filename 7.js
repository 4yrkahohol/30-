function checkGuess(){
    let input = document.getElementById("checkGuess()").textContent
    let result = document.getElementById("result")
    var a = +input +  +Math.floor(Math.random() * 21)
    var b = Math.floor(Math.random() * 10) + a
    if(b==input){
        result.innerHTML ="угадал я"

    }else{
        result.innerHTML = "не правильно"
    }
    console.log(input)
    console.log(b)


}