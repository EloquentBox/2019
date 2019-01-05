/* Using array methods, you will transform an array of strings into a secret message! 

THAT was on the beggining:

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 
'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 
'about', 'what', 'you', 'can', 'figure', 
'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];*/

let secretMessage = ['Learning', 'is', 'not', 'about', 
'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 
'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', 
'-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();



secretMessage.push('to', 'Program');

secretMessage[7] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know,');

secretMessage[6] = 'know';

console.log(secretMessage.join(' '));


