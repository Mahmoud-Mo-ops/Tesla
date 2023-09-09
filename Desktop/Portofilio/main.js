const selector=(ele)=>document.querySelector(ele);
const selectorAll=(all)=>document.querySelectorAll(all);

console.log(selector('nav .links .icon span:nth-child(2)'))
selector('.links').addEventListener('click',(e)=>{
    selector('nav .links .icon span:nth-child(2)').classList.toggle('full')
    selector('nav .contents').classList.toggle('open');
})


let skills=document.querySelector('.our-skills');
let progress=Array.from(document.querySelectorAll('.prog span'));

window.addEventListener('scroll',skillsScroll)
    function skillsScroll(){
        if(window.scrollY >= skills.offsetTop - 50){
            progress.forEach((prog)=>{
                prog.style.width=prog.dataset.progress;
                prog.style.transition="2s ease-in-out";
            })
    }
}

let bulltesSkills=[...document.querySelectorAll('.bullets >li')];
bulltesSkills.forEach((bullet)=>{
  bullet.addEventListener(('click'),()=>{
    bulltesSkills.forEach((bullet)=>{
        bullet.style.backgroundColor="transparent"
    })
    bullet.style.backgroundColor=bullet.dataset.color;
    progress.forEach((prog)=>{
        prog.style.backgroundColor=bullet.dataset.color;
    })
  })
})

 window.onload=function(){
    selector('.landing .image').style.right='0';
    selector('.container .landing .info').style.opacity='1';

 }


 window.addEventListener('scroll',porto)
 function porto(){
    console.log(selector('.portofilio .container .projects'))
     if(window.scrollY >= selector('.portofilio .container .projects ').offsetTop - 480){
         selector('.portofilio .container .projects ').style.opacity="1"
 }
}


