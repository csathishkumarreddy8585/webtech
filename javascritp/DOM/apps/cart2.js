let likesbtn=document.getElementById('#likes-btn')
let likesdisplay=document.getElementById('#likes-display')
let dislikesbtn=document.getElementById('#dislikes-btn')
let dislikesdisplay=document.getElementById('#dislikes-display')
let totaldispaly=document.getElementById('#total-display')

likesdisplay.textContent=likes;
let likes=0;
dislikesdisplay.textContent=dislikes;
let dislikes=0;

totaldisplay.textContent=total;
let total=0;


likesbtn.addEventListener('click',function)
{
    likes++;
    likesdispaly.textContent=localStorage.getItem('likes');
    localStorage.setItem('total',total);
    totaldispaly.textContent=localStorage.getItem('total');
}

dislikesbtn.addEventListener('click',function)
{
    dislikes++;
    localStorage,setItem('total',total);
    dislikesdispaly.textContent=localStorage.getItem('dislikes');
}
