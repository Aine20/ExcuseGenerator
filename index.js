window.onload = () =>{
    document.querySelector("#btnNewExcuse").addEventListener("click", () =>{
        document.querySelector("#excuse").innerHTML = Excuse();
    }

)};

let Excuse = () => {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let word1 = Math.floor(Math.random() * who.length);
    let word2 = Math.floor(Math.random() * action.length);
    let word3 = Math.floor(Math.random() * what.length);
    let word4 = Math.floor(Math.random() * when.length);

    return who[word1] + " " + action[word2] + " " + what[word3] + " " + when[word4]; 
}