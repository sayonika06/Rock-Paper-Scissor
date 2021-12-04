let userscore=0;
let compscore=0;
const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");
const scoreboard_div=document.querySelector(".scoreboard");
const result_div=document.querySelector(".results");
const rock=document.getElementById("r");
const paper=document.getElementById("p");
const scissor=document.getElementById("s");

function getComputerChoice()
{
    const choice=["r","p","s"];
    const randomnumber=Math.floor(Math.random()*3);
    return choice[randomnumber];
}

// function coverttoWord(letter,userChoice)
// {
//     switch(letter)
//     {
//         case "r":
//             return "Rock";
//         break
//         case "p":
//             return "Paper";
//         break
//         case "s":
//             return "Scissor";
//         break
//     }
// }

function convertword(letter)
{
    if (letter=="r") 
    {
        return "Rock";
    }
    else if (letter=="p") 
    {
        return "Paper";
    }
    return "Scissor";
}

getComputerChoice();



function win(userChoice, computerchoice)
{
    userscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    result_div.innerHTML=`Hurray! You win!`
}

function lose(userChoice,computerchoice)
{
    compscore++;
    compscore_span.innerHTML=compscore;
    userscore_span.innerHTML=userscore;
    result_div.innerHTML=`Oops! Better luck next time!`

}

function draw()
{
    result_div.innerHTML=`It's a draw!`
}

function game(userChoice)
{
    const computerchoice= getComputerChoice();
    switch (userChoice+computerchoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win();
         break

        case "sr":
        case "rp":
        case "ps":
            lose();
         break

        case "rr":
        case "pp":
        case "ss":
            draw();
         break
    }

}


function main()
{
rock.addEventListener('click',function()
{
    game("r");
})

paper.addEventListener('click',function()
{
    game("p");
})
scissor.addEventListener('click',function()
{
    game("s");
})
}
main();