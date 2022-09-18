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
    document.body.style.overflow="scroll";
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
/*onload*/
const headers =[...document.querySelectorAll('h1')];
const desriptions =[...document.querySelectorAll('p')];
const buttons=[...document.querySelectorAll(".buttons")];
headers.forEach((ele,index)=>{
    const description=desriptions[index]
    const button=buttons[index];
 window.addEventListener('load',function(){
    button.style.bottom="0";
    description.style.top="0";
    description.style.opacity="1";
    ele.style.top="0";
    ele.style.opacity="1";
   
})
})














