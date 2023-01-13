const searchBttn = document.getElementById("search") //taking search button
const para = document.getElementById("input-box") //taking the paragraph
const word = document.getElementById("text-to-search") //word to be searched for

function cleanPara (paragraph){
    // NOTE: var exp = /(<([^>]+)>)/gi; (saving it as variable doesn't help)
    return paragraph.replace(/(<([^>]+)>)/gi, "") 
}

function search(term, passage) {

    // step (1) : Clear previous Highlighted Output
    passage = cleanPara(passage);

   //step(2) : Highlighting the given word 
    if (term !== "") {  
    let rep = new RegExp (term, "gi");// searchs for the word input (global)
    let high_para = passage.replace(rep,`<mark>${term}</mark>`); //replacing with <mark></mark> tags
    return high_para
    }
}

searchBttn.addEventListener("click", () =>{

    if(word.value.trim() == '') {
       alert("Enter the search word properly!")
    } else
    if (para.value == '') {
       alert("Enter the search para properly!")
    } else {
        let phrase = word.value.trim();
        let stanza = para.value;
        let result= search(phrase, stanza) //sending paragraph and word to function
        document.getElementById("paragraph").innerHTML = result;
    }

})


