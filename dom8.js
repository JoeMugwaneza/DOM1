const output = document.querySelector('.output');
let game = {x:0, y:0, speed:10, ele:null};

document.addEventListener('keydown', (e) =>{
    console.log(e.key);
    if(!game.ele){
        game.ele = maker();
    }

    if(e.key == 'ArrowRight'){
        game.x += game.speed;
        updateProp();
    }

    if(e.key == 'ArrowLeft'){
        game.x -= game.speed;
        updateProp();
    }

    if(e.key == 'ArrowUp'){
        game.y -= game.speed;
        updateProp();
    }
    if(e.key == 'ArrowDown'){
        game.y += game.speed;
        updateProp();
    }
})


document.addEventListener('keyup', (e) =>{
    console.log(e.key);
})

function updateProp(){
    game.ele.style.left = game.x + 'px';
    game.ele.style.top = game.y + 'px';
}

function maker(){
    const el = document.createElement('div');
    el.classList.add('box');
    output.append(el);
    el.style.left = game.x + 'px';
    el.style.top = game.y + 'px';
    
    el.style.background = '#' +Math.random().toString(16).substr(2,6);
    el.addEventListener('click', (e) =>{
        game.ele = maker();
    }, {once:true})
    
    return el;
}