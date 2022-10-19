document.querySelector('.icons').addEventListener('click',function(){
    this.classList.toggle('openMenu');
    if(this.classList.contains('openMenu')){
        document.querySelector(".all-items").style.top="0";
        setTimeout(()=>{
            document.querySelector('.bag').style.scale="0";

        },10)
    } else{
        document.querySelector(".all-items").style.top="-100vh";
        setTimeout(()=>{
            document.querySelector('.bag').style.scale="1";

        },900)
    }
})