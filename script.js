const container = document.getElementById('container');
container.addEventListener('mousemove',addSquare);


function addSquare(event){
    let div = document.getElementById('container'); 
    let rect = div.getBoundingClientRect(); 
    let x = (event.clientX - rect.left).toFixed(0); 
    let y = (event.clientY - rect.top).toFixed(0); 

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    newDiv.style.cssText = `left:${x}px; top:${y}px; background-color:#${randomColor};`
    container.appendChild(newDiv);   
}

function clear(){
    
}

