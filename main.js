
console.log("%c GRAVITY SIMULATOR", "color:White; font-weight:bold; font-size:50px;");
let space = document.getElementById("space")
space.style = "background:#0A1931;"
space.width = window.innerWidth - 4;
space.height = window.innerHeight - 4;
let ctx = space.getContext('2d')
//bodies

let planet = { //farthest planet
  mass: 10,
  x: (space.width / 2 ) - 250,
  y: space.height /2 + 250,
  vector: {
    x: 5,
    y: 5
  }
}
let planet2 ={ //closest planet
  mass  : 20,
  x : (space.width / 2) - 175,
  y : (space.width/2) - 150,
  vector: {
    x:7,
    y:7
  }
}
let sun = { //the sun remains fixed 
  mass: 7000,
  x: space.width / 2,
  y: space.height / 2,
}
if(window.innerHeight > window.innerWidth){
  planet2.y = (space.height / 2 ) + 100
}

function Draw() {
  ctx.clearRect(0, 0, space.width, space.height)
  
  //sun
  ctx.strokeStyle ="yellow"
  ctx.fillStyle ="yellow"
  ctx.beginPath()
  ctx.arc(sun.x, sun.y, 50, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  //planet 
  ctx.strokeStyle = "green"
  ctx.fillStyle = "green"
  ctx.beginPath()
  ctx.arc(planet.x, planet.y, 20, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
  //planet2
  
  ctx.strokeStyle = "salmon"
  ctx.fillStyle = "salmon"
  ctx.beginPath()
  ctx.arc(planet2.x, planet2.y, 15, 0, Math.PI * 2, false)
  ctx.fill()
  ctx.stroke()
}

let G = 0.001 // G = 6.67*10^-11 planet goes away for some reason if someone has solution please pull request

function Distance(body1, body2) {
  return Math.sqrt(Math.pow(body1.x - body2.x, 2) + Math.pow(body1.y - body2.y, 2))
}

  //gravity formula GM1M2/r²
let Gravitation = G * ((sun.mass * planet2.mass) / (Math.pow(Distance(sun, planet2) , 2)))
let gravitation = G * ((sun.mass * planet.mass) / (Math.pow(Distance(sun, planet), 2)))

setInterval(() => {
  Draw()
    
  let direction = { 
    x: sun.x - planet.x,
    y: sun.y - planet.y
  }
  let dir = {
    x : sun.x - planet2.x,
    y : sun.y - planet2.y
  }
  planet2.vector.x += (Gravitation * dir.x)
  planet2.vector.y += (Gravitation * dir.y)
  
  planet2.x += planet2.vector.x
  planet2.y += planet2.vector.y
  //orbiting 
  planet.vector.x += (gravitation * direction.x)
  planet.vector.y += (gravitation * direction.y)

  planet.x += planet.vector.x
  planet.y += planet.vector.y
  
}, 17);
let data = {
  "planet1" : gravitation,
  "planet2": Gravitation
}
setTimeout(() => {
  console.table(data)
},1000)