let botonmostrar=document.getElementById('botonmostrar');
let botunmostrar=document.getElementById('botunmostrar');
let botanmostrar=document.getElementById('botanmostrar');
let hideText=document.getElementById('hideText');
let hideText1=document.getElementById("hideText1");
let hideText2=document.getElementById("hideText2");
botonmostrar.addEventListener('click', toggleText);
botunmostrar.addEventListener('click', toggleText1);
botanmostrar.addEventListener('click', toggleText2);


function toggleText(){
    hideText.classList.toggle('showText');
    if(hideText.classList.contains('showText')){
        botonmostrar.innerHTML='ver menos';
        
    }else{
        botonmostrar.innerHTML="ver mas";
    }

}

function toggleText1(){
    hideText1.classList.toggle('showText');
    if(hideText1.classList.contains('showText')){
        botunmostrar.innerHTML='ver menos';
        
    }else{
        botunmostrar.innerHTML="ver mas";
    }

}
function toggleText2(){
    hideText2.classList.toggle('showText');
    if(hideText2.classList.contains('showText')){
        botanmostrar.innerHTML='ver menos';
        
    }else{
        botanmostrar.innerHTML="ver mas";
    }
}
    

