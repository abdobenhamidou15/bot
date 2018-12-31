const Discord = require('discord.js');
const attack = new Discord.Client({disableEveryone : true});


attack.on('ready', () => {
    console.log('Im ready now')
})
 
attack.on('ready', () =>{
function random() {
let words = ['hello  ','xnxx','hi ho!','9lawi','zabi'];
let send = Math.floor((Math.random() * words.length));
var send1 = words[send];
attack.channels.get(process.env.channel).send(send1)
}; setInterval(random, 2100)
});
 
 

attack.login(process.env.token)
// bot spam by abdo#1889