function createBox(containerBox , numero){
    const newBox = document.createElement('div')
    newBox.className = 'box';
    containerBox.append(newBox);
    newBox.addEventListener('click',function(){
        this.classList.add('azzurro');
        newBox.innerText=numero;
    })
}
const button1 = document.getElementById('lvl-1');
const button2 = document.getElementById('lvl-2');
const button3 = document.getElementById('lvl-3');
const container = document.querySelector('.container');
button1.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('easy-container');
    container.classList.remove('medium-container');
    container.classList.remove('hard-container');
    for(let i=1 ; i <= 100 ; i++){
        createBox(container , i)
    }
})
button2.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('medium-container');
    container.classList.remove('hard-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 81 ; i++){
        createBox(container , i)
    }
})
button3.addEventListener('click',function(){
    container.innerHTML='';
    container.classList.add('hard-container');
    container.classList.remove('medium-container');
    container.classList.remove('easy-container');
    for(let i=1 ; i <= 49 ; i++){
        createBox(container , i)
    }
})