let plus1 = document.getElementById('plus1');
let qty1 = document.getElementById('qty1');
let plus2 = document.getElementById('plus2');
let qty2 = document.getElementById('qty2');
let plus3 = document.getElementById('plus3');
let qty3 = document.getElementById('qty3');
let plus4 = document.getElementById('plus4');
let qty4 = document.getElementById('qty4');
let plus5 = document.getElementById('plus5');
let qty5 = document.getElementById('qty5');
let updatecart = document.getElementById('updatecart');
let totalprix = document.getElementById('totalprix');
let coupon = document.getElementById('coupon');
let couponCode = document.getElementById('coupon-code');
let delete1 = document.getElementById('delete1');
let valide = document.getElementById('valide');
let invalide = document.getElementById('invalide');
let prix = document.getElementsByClassName('prix');
let heart1 = document.getElementById('heart1');

plus1.addEventListener("click", () => {
    qty1.value++;
    if(qty1.value > 1){
        prix[0].textContent = 120 * qty1.value;
    }
})
plus2.addEventListener("click", () => {
    qty2.value++;
    if(qty2.value > 1){
        prix[1].textContent = 180 * qty2.value;
    }
})
plus3.addEventListener("click", () => {
    qty3.value++;
    if(qty3.value > 1){
        prix[2].textContent = 90 * qty3.value;
    }
})
plus4.addEventListener("click", () => {
    qty4.value++;
    if(qty4.value > 1){
        prix[3].textContent = 50 * qty4.value;
    }
})
plus5.addEventListener("click", () => {
    qty5.value++;
    if(qty5.value > 1){
        prix[4].textContent = 130 * qty5.value;
    }
})







minus1.addEventListener("click", () => {
    if(qty1.value>1){
    qty1.value--;
    prix[0].textContent = 120 * qty1.value;
    }
    
})
minus2.addEventListener("click", () => {
    if(qty2.value>1){
        qty2.value--;
        prix[1].textContent = 180 * qty2.value;
        }
})
minus3.addEventListener("click", () => {
    if(qty3.value>1){
        qty3.value--;
        prix[2].textContent = 90 * qty3.value;
        }
})
minus4.addEventListener("click", () => {
    if(qty4.value>1){
        qty4.value--;
        prix[3].textContent = 50 * qty4.value;
        }
})
minus5.addEventListener("click", () => {
    if(qty5.value>1){
        qty5.value--;
        prix[4].textContent = 130 * qty5.value;
        }
})
updatecart.addEventListener("click", ()=>{
    let tab=document.getElementsByClassName('row')
    let item= document.getElementsByTagName('span')
    console.log(item)
   
//     tab.map(el=>{let item= document.getElementsByTagName('span')
//    return item })
    console.log(tab)
    totalprix.textContent = Array.from(item).reduce((c,v)=>c+parseInt(v.innerHTML),0);
})
coupon.addEventListener('click', () => {
    if(couponCode.value === "med"){
    valide.style.display = 'block';
    invalide.style.display = 'none';
    totalprix.textContent = parseInt(totalprix.textContent) - 20;
}else {
    invalide.style.display = 'block';
    valide.style.display = 'none';
} 
})

// delete1.addEventListener('click', () => {
//     row1.style.display = "none";
// })
// delete2.addEventListener('click', () => {
//     row2.style.display = "none";
// })
// delete3.addEventListener('click', () => {
//     row3.style.display = "none";
// })
// delete4.addEventListener('click', () => {
//     row4.style.display = "none";
// })

function delet(id_prix,id_row) {
    let prix=document.getElementById(id_prix)
    let row=document.getElementById(id_row)
    row.style.display = "none";
    let x = parseInt(prix.textContent);
    let y = parseInt(totalprix.textContent);
    if(y>=x){
    totalprix.textContent=totalprix.textContent-parseInt(prix.textContent);
}
}
function changed(heart_id) {
    let heart = document.getElementById(heart_id);
    if(heart.className === 'fa fa-heart-o'){
    heart.className = 'fa fa-heart';
}else{
    heart.className = 'fa fa-heart-o';
}
   }