const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


//velocidade

let x = 0
let y = 0
let vx = 0
let vy = 0
let speed = 10

function update(){
    //limpar o canvas
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
    x += vx
    y += vy
    socket.emit('message', {x, y})
    socket.on('message', (data)=>{
        y = data.y
        x = data.x
    })
    ctx.fillRect(x,y,50,50)
    requestAnimationFrame(update)
}

update()