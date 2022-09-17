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


























// 1-window.pageYOffset  //current position
//2-lastScrollPosition //last position
//3-let the last postion equals the current when user scrolls
//4-get the direction //comopre lastWithCurrent// one way let direction=window.pageYOffset >document.lastScrollPosition ? "down":"up";  //
//5-get current section
//6-compare the currentYPostion is exactly at the top of the Section
//7-definate new varbale in the document for center position to be at the first 0 and will equal index foEach section
//8-calculate next section if UP which means lastcentered(index)-1 otherwise lastcentered(index)+1
//9-we need to khnow if we scroll right or not
//10-if condition 9 has been occured now we can scroll
//11-scroll to top sec >>get problem with scrolle several times
//12-to solve problem of several times document.onWayTo is empty
/*Scroll */
// document.lastScrollPosition=0;
// document.lastCentered=0;
// document.onWayTo=null;
// document.addEventListener('scroll',()=>{
//      let direction=window.pageYOffset-document.lastScrollPosition>0?"down":"up";
//      let sections=[...document.querySelectorAll('section')];
//      if(document.onWayTo===null){
//         let destIndex=direction==="up"?document.lastCentered-1:document.lastCentered+1;
//         if(destIndex >= 0 && destIndex < sections.length){
//             window.scroll(0,sections[destIndex].offsetTop);
//             document.onWayTo=destIndex;
//             console.log({direction,destIndex})
//          }
//      }
     

//    sections.forEach((section,index)=>{
//     if(window.pageYOffset===section.offsetTop){
//         document.lastCentered=index;
//         if(document.onWayTo === index){
//             document.onWayTo = null;
//         }
//     }
//    })

//      document.lastScrollPosition =window.pageYOffset;
// })















