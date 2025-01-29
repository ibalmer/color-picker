let cont = document.getElementById('#cont');

let board = document.querySelector('.board');

let preview = document.querySelector('.preview');
let complementario = document.querySelector('.complementario')
let color = ''
let col = [];
CrearTablero()
console.log(preview)
function CrearTablero(){
    for(let j = 0; j < 10; j++){
        for(let i = 0; i < 10; i++){
            let square = document.createElement('div');
            square.classList.add('item');
            square.style.backgroundColor = 'hsl( 170deg,' + (i * 100/9) + '%,' + (-100 / 9 * j + 100) + '%)'; 
            square.textContent = j + '|' + i;
            board.appendChild(square);
            square.addEventListener('click', () =>{
                col = [j, i];
                color = square.style.backgroundColor
                console.log(color)
                preview.style.backgroundColor = color;
                complementario.style.backgroundColor = color;
            });
        };
    };
};


function SeleccionarCuadrado(){
    /* let color = 'hsl( 30deg,' + (col[1] * 100/9) + '%,' + (-100 / 9 * col[0] + 100) + '%)';  */
    preview.style.backgroundColor = color;
}; 