
let firstArray = [];
ChangedWords.style.display = "none";
GetWords.style.display = "block";

let startBtn = document.querySelector("#start");   // document.getElementbyId("#start");
startBtn.addEventListener("click", StartProgram, false);

let ChangeBtn = document.querySelector("#changeWords");   // document.getElementbyId("#start");
ChangeBtn.style.visibility = "hidden";
ChangeBtn.addEventListener("click", ChangeWords, false);

function StartProgram()
{
    startBtn.style.visibility = "hidden";
    let ul = document.getElementById("list1");
    let li;
        let i;
        for (i = 0; i < 3; i++)
        {
            firstArray.push(prompt("Please enter a word."));
            li = document.createElement("li");
            li.appendChild(document.createTextNode(firstArray[i]));
            ul.appendChild(li);
        }
        ChangeBtn.style.visibility = "visible";
}


function ChangeWords(){
    
    ChangedWords.style.display = "block";
    GetWords.style.display = "none";

    let secondArray = firstArray.map(function(oneWord){
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0); });
    
    let ul = document.getElementById("list2");
    let li;
        let i;
    for (i = 0; i <3; i++)
    {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(secondArray[i]));
        ul.appendChild(li);
    }
}