const buttonMinus =document.querySelectorAll(".minus");
const plusButton =document.querySelectorAll(".plus");
const totalSum = document.querySelectorAll("#sum");
const deleteButton =document.querySelectorAll(".btn-primary");
const quantitesButton = document.querySelectorAll(".x");
const prices = document.querySelectorAll(".price");
const bigDivs = document.querySelectorAll(".card")

for(let i=0; i <= plusButton.length;i++)
{

    plusButton[i].addEventListener("click", function (e) {
    if(quantitesButton[i].innerHTML> 0){
        quantitesButton[i].innerHTML++;
        totalSum.textContent =
        
        parseInt (totalSum.textContent) + parseInt( prices[i].innerHTML)
    }
    totalSum()
});
}


for (let i=0 ; i<= min.length;i++)
{
    buttonMinus[i].addEventListener("click", function (e){
        if (counter[i].innerHTML > 0){
            counter[i].innerHTML--;
            totalSum.textcontent=
            parseInt(totalSum.textcontent)-parseInt(prices[i].innerHTML);
        }
        totalSum()
    });
}


for(let i=0; i <  deleteButton.length; i++){
    deleteButton[i].addEventListener("click",function(e){
    bigDivs[i].remove()
    totalSum.textContent=
  parent(totalSum.textContent)- parseInt(quantitesButton[i].textContent) * parseInt(prices[i].textContent)
});
}

