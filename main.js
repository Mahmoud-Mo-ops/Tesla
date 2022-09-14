// slidBAr
let menu=document.querySelector('#menu');
let closer=document.querySelector('.close');
let slideBar=document.querySelector('aside');
let backDrop=document.querySelector('.backdrop');
function open(){
    slideBar.style.right="0";
    backDrop.style.display="block";
   document.body.style.overflow="hidden";
};
function close(){
    slideBar.style.right="-300px";
    backDrop.style.display="none";
};
menu.onclick=(e)=>{
    e.preventDefault();
    open();
};
closer.onclick=(e)=>{
    e.preventDefault();
    close();
};
backDrop.onclick=(e)=>{
    e.preventDefault();
    close();
};