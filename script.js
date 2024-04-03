const container = document.getElementById('container');

const slider = document.getElementById('slider');
const output = document.getElementById('value');

slider.oninput = function (){
    output.textContent = `${this.value} x ${this.value}`;
}

container.addEventListener('mouseover',addSquare);

function addSquare(event){
    let div = document.getElementById('container'); 
    let rect = div.getBoundingClientRect(); 
    let x = (event.clientX - rect.left).toFixed(0); 
    let y = (event.clientY - rect.top).toFixed(0); 

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.style.cssText = `left:${x}px;    
                            top:${y}px; 
                            background-color:#${randomColor};
                            width:${slider.value}px;
                            height:${slider.value}px;`
    container.appendChild(newDiv);   
}

function reset(){
    container.innerHTML = '';
    output.textContent = '16 x 16';
    slider.value = '16';
}

