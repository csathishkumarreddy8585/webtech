let product=
{
    Pid:101,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6QEQ-MCsxcaBm6tRQFM8FI-v7ZFv6TieAug&s",
    Pname:'shoes',
    Pprice:70000,
    Pqty:1
}

let htmlcode=
`
    <td>${product.Pid}</td>
    <td><img src="${product.img}" width="50px" height="50px"></td>
    <td>${product.Pname}</td>
    <td>${product.Pprice}</td>
    <td><i class="bi bi-dash-circle-fill" onclick="decCount()"></i>
     <span id="count">${product.Pqty}</span>
     <i class="bi bi-plus-circle-fill" onclick="incCoun()"></i></td>
    <td><span id="total">${product.Pprice*product.Pqty}</span></td>
`

let trTag=document.querySelector('#tr')

trTag.innerHTML=htmlcode
let  countTag=document.querySelector('#count')
let  t_tag=document.querySelector('#total')


function decCoun()
{
    if(product.Pqty>0)
    {
        --product.Pqty
        countTag.innerText=product.Pqty;
        t_tag.innerText=product.Pqty*product.Pprice;
    }
    else
    {
            product.Pqty=1;
            countTag.innerText=product.Pqty;
            t_tag.innerText=product.Pqty*product.Pprice;
    }
}

function incCount()
{
    ++product.Pqty
    countTag.innerText=product.Pqty;
    t_tag.innerText=product.Pqty*product.Pprice;

}
