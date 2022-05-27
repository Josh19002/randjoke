"use strict"
async function getJoke1(){
    document.getElementById("jokegen").disabled = true
    let response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single")
    let data = await response.json()
    console.log(data)
    document.getElementById("joke").textContent = ""
    document.getElementById("joke").textContent = data.joke
    document.getElementById("jokegen").disabled = false
}
async function getJokeMulti(number){
    document.getElementById("jokegen").disabled = true
    let response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single&amount="+number)
    let data = await response.json()
    console.log(data)
    document.getElementById("joke").textContent = ""
    let jokenumber = 1
    data.jokes.forEach(dataArray => {
        let div = document.createElement("div")
        let paragraph = document.createElement("p")
        let h3 = document.createElement("h3")
        h3.textContent = `Joke #${jokenumber}`
        paragraph.textContent = dataArray.joke
        div.appendChild(h3)
        div.appendChild(paragraph)
        jokenumber++
        document.getElementById("joke").appendChild(div)
    });
    document.getElementById("jokegen").disabled = false
}
function getJoke(){
    let number = document.getElementById("jokenum").value
    console.log(number)
    if (number == 1) {
        getJoke1()
    }
    else{
        getJokeMulti(number)
    }
}