

var qoutes = [
     {
     	qoute : 'Success is getting what you want. Happiness is wanting what you.',
     	author : '- Rebecca Carbon -'
     },
     {
     	qoute : 'I have learned more from my failures than from my success.',
     	author: '- H Davy -'
     },
     {
     	qoute : 'A man falls in love through his eyes, a woman through her ears.',
     	author: '- Anais Nin -'
     },
     {
        qoute : 'Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.',
        author: '- William Mata -'
     },
     {
     	qoute : 'Change your thoughts and you change your world.',
     	author: '- Anthony Robbins -'
     },
     {
     	qoute : 'You may only be one person to the world but you may be the world to one person.',
     	author: '- Winston Churchill -'
     }
     ];

     function makeNumberRandom(range){
     	return Math.floor(Math.random()*range);
     }
     function getQuotes(){
     	return qoutes[makeNumberRandom(qoutes.length)];
     }
     function changeQoute(){
       var qoute = getQuotes();

        var eleQoute = document.getElementById('qoute');
        var eleAuthor = document.getElementById('author');
       console.log(eleQoute);
        eleQoute.innerText = qoute.qoute;

        eleAuthor.innerText = qoute.author;
     }
     window.onload = changeQoute;
