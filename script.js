let mine = document.querySelector("#mine");
let skullcavern = document.querySelector("#skullcavern");
let quary = document.querySelector("#quary");
let dangerousMine = document.querySelector("#dangerousMine");
let dangerousSkull = document.querySelector("#dangerousSkull");

mine.innerHTML ='Stardew Valley';

function functie(){
console.log(tekst.value);
}

mine.addEventListener('mouseenter', function() {
    mine.style.color = 'white';
}); 
mine.addEventListener('mouseleave', function() {
    mine.style.color = 'black';
});

let PelicanTown = document.querySelector('#PelicanTown');

PelicanTown.addEventListener('click', function() {
    if(PelicanTown.innerHTML == '<h1><b>Stardew Valley</b></h1>') {
        PelicanTown.innerHTML = '<h1><b>Game gemaakt door ConcernedApe!</b></h1>';
    }
    else { PelicanTown.innerHTML = '<h1><b>Stardew Valley</b></h1>'; 
    }
});

quary.addEventListener('click',function(){
   if (quary.style.color == 'black') {
    quary.style.color = 'Red'
} else { 
    quary.style.color = 'black';
}
});