
/*var score;
 let goagain=()=>{*/
    document.querySelector(".startButton").addEventListener("click",function(){
            
    
    var score=0;   
 var goagain =()=> {
     
    
var rNumber=Math.floor(Math.random()*6)+1;
var idBox="#box"+rNumber;
document.querySelector(".stopButton").addEventListener("click",function(){
    
    document.querySelector(idBox).classList.add("normal");
    document.querySelector(idBox).classList.remove("excited");
    score=0;
    idBox="0"
     },{once:true});
    
 var funcGo=setTimeout( function()
{document.querySelector(idBox).classList.add("excited");
document.querySelector(idBox).classList.remove("normal");
document.querySelector(idBox).addEventListener("click",function evente(event){
    console.log(event);
    score++;
    document.querySelector(".scorez").innerHTML=score;
    document.querySelector(idBox).classList.remove("excited");
    document.querySelector(idBox).classList.add("normal");
     
   setTimeout(goagain(),1000);},{
    once: true
});
},600);}
setTimeout(goagain(),20);
});
var height,weight;
document.querySelector(".heightbtn").addEventListener("click",function(){
     height=prompt("Enter your height in m");
});
document.querySelector(".weightbtn").addEventListener("click",function(){
     weight=prompt("Enter your weight in kg");
});
document.querySelector(".calculate").addEventListener("click",function(){
    if(height==null||weight==null)
{ document.querySelector(".bmiresult").innerHTML="Enter height and weight"}

    var bmi=weight/(height*height);
    if(bmi<18.5)
{document.querySelector(".bmipic").classList.add("bmipic1");
document.querySelector(".resulttext").innerHTML="🥺 !OOPS UNDERWEIGHT";
}
if(bmi>18.5 &&  bmi<25)
{document.querySelector(".bmipic").classList.add("bmipic2");
document.querySelector(".resulttext").innerHTML=" 🤩 WOW FIT !";}
if(bmi>25)
{document.querySelector(".bmipic").classList.add("bmipic3");
document.querySelector(".resulttext").innerHTML="🥺 !OOPS OVERRWEIGHT";}
    document.querySelector(".bmiresult").innerHTML=bmi.toFixed(2);});
    
    
    document.querySelector(".luckbtn").addEventListener("click",function(){
        var random=Math.floor(Math.random()*100)+1;
        document.querySelector(".luckresult").innerHTML="YOUR LUCK:"+random;
        alert("YOUR LUCK:"+random);
        if(random<=30)
        {document.querySelector(".luckcmt").innerHTML="😨 OOPS! DID YOU LOOK AT A BLACK CAT THIS MORNING"}
        if(random>30 && random<70)
        {document.querySelector(".luckcmt").innerHTML="HAVE A NICE DAY  😇"}
        if(random>=70)
        {document.querySelector(".luckcmt").innerHTML="WOW! 🥳  SEEMS LIKE YOUR GONNA HAVE A GREAT DAY, ENJOY YOUR DAY 🤩"}
    },{once:true});

function audio(name,url){
document.querySelector("#"+name).addEventListener("click",function (){
    this.classList.add("musicexcited");
    setTimeout(function(){document.querySelector("#"+name).classList.remove("musicexcited");},900);
    var audion = new Audio(url);
    audion.play();
})};
audio("key1","./audio/crash.mp3");
audio("key2","./audio/kick-bass.mp3");
audio("key3","./audio/snare.mp3");
audio("key4","./audio/tom-1.mp3");
audio("key5","./audio/tom-2.mp3");
audio("key6","./audio/tom-3.mp3");
audio("key7","./audio/tom-4.mp3");
audio("key8","./audio/BP_JZZPN.wav");
audio("key9","./audio/g-piano2.wav");
audio("key10","./audio/Piano Key C9-2880-Free-Loops.com.mp3");
audio("key11","./audio/piano.wav");
audio("key12","./audio/sound1.wav");
audio("key13","./audio/mixkit-flute-cell-phone-alert-2315.wav");
audio("key14","./audio/mixkit-flute-mobile-phone-notification-alert-2316.wav");
audio("key15","./audio/mixkit-uplifting-flute-notification-2317.wav");
audio("key16","./audio/mixkit-cool-guitar-riff-2321.wav");
audio("key17","./audio/mixkit-guitar-string-tone-2326.wav");
audio("key18","./audio/mixkit-happy-guitar-chords-2319.wav");
audio("key19","./audio/mixkit-musical-guitar-string-clink-2327.wav");
audio("key20","./audio/mixkit-short-guitar-riff-2322.wav");
audio("key21","./audio/mixkit-short-guitar-strum-2318.wav");




