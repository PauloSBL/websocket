addEventListener('keydown', (key)=>{
    if(key.code == 'ArrowRight') vx = speed
    if(key.code == 'ArrowLeft') vx = -speed
    if(key.code == 'ArrowUp') vy = -speed
    if(key.code == 'ArrowDown') vy = speed
})

addEventListener('keyup', (key)=>{
    if(key.code == 'ArrowRight') vx = 0
    if(key.code == 'ArrowLeft') vx = 0
    if(key.code == 'ArrowUp') vy = 0
    if(key.code == 'ArrowDown') vy = 0
})