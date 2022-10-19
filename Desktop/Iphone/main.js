let body=document.querySelector('body');
let icons=[...document.querySelectorAll('.icons img')];
let image=document.querySelector('.img img');
let phones =[
    {
   id:1,
   img:"images/0.png",
   background:"#000",
    },
    {
        id:2,
        img:"images/1.png",
        background:" #3333ff",
    },
    {
        id:3,
        img:"images/2.png",
        background:"rgba(0,0,0,.8)",
    },
    {
        id:4,
        img:"images/3.png",
        background:" #737373        ",
    },
    {
        id:5,
        img:"images/4.png",
        background:"#ff3333",
    },
    ]
icons.forEach((e,index)=>{
    e.addEventListener(('click'),function(){
        let choosenPhone=phones[index]
        image.src=choosenPhone.img
        body.style.backgroundColor=choosenPhone.background
     
    })
})

// hamburger menu 
let hamMenu=document.querySelector('.menu-btn');
let navItems=document.querySelector('ul');
let backdrop=document.querySelector('.backdrop');
let mob=document.querySelector('.mob')
console.log(mob)
function open(){
    hamMenu.classList.add("open");
    navItems.classList.add('mob');
    backdrop.style.display="flex";
};
function close(){
    backdrop.style.display="none";
    hamMenu.classList.remove("open");
    navItems.classList.remove('mob');
};
hamMenu.addEventListener('click',open);
backdrop.addEventListener('click',close);