let msg = document.getElementById("msg");
let matter = document.getElementById("matter");
let typed_words = document.getElementById("type");
let btn = document.querySelector("button");
let startTime, endTime; 

const setOfWords = [
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Insanity is doing the same thing, over and over again, but expecting different results.",
    "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Teamwork is the ability to work together toward a common vision, the ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.",
    "There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures. ",
    "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    "I alone cannot change the world, but I can cast a stone across the water to create many ripples. "
];


const playGame = () =>{
    msg.innerText = "";
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    matter.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
}


const endGame = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);

    let totalStr = typed_words.value;
    let word_count = wordsCounter(totalStr);
    let speed = Math.round(word_count*60/totalTime);

    let finalMsg = "You typed at <span class='green'>" + speed + " words per minute </span> speed. <br/>";
    finalMsg += compareWords(matter.innerText,totalStr);
    msg.innerHTML = finalMsg;
    msg.style.color = "white";
    typed_words.innerText = "";
    matter.innerText = "";
}


const compareWords = (str1,str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    console.log(words1)
    console.log(words2)

    words1.forEach((item,index) => {
        if(item === words2[index]){
            count++;
        }
    });

    let errorWords = (words1.length - count);
    return ("<span class='green'>" + count + " correct out of " + words1.length + " words </span> <br/> with <span class='red'>" + errorWords + " errors </span> . <br/> <br/> To test again press start again button.")
}


const wordsCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}


btn.addEventListener("click",function(){
    if(this.innerText=="Start" || this.innerText=="Start Again"){
        typed_words.value = "";
        typed_words.disabled = false;
        btn.innerText = "Done";
        playGame();
    }else if(this.innerText == "Done"){
        if(typed_words.value == ""){
            msg.innerText = "You haven't typed anything.. Please type again."
            msg.style.color = "red";
        }
        else{
            typed_words.disabled = true;
            btn.innerText = "Start Again";
            endGame();
        }
    }
})
