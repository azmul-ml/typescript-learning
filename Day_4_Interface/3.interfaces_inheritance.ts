interface Person { 
  name:string 
} 

// interface Carrear {
//   tournament: string
// }

interface Player extends Person { 
  play:string 
} 

var player = <Player>{}; 
player.name = "Azmul Hossain"; 
player.play = "Cricket" 

console.log("Name:  "+player.name) 
console.log("Play:  "+player.play)
