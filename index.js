

function changeCakeImage()
{
    let cakeImg = document.getElementById("cake-image");
    cakeImg.src="images/cakeBlow.png";
    return false;
}

function  changeGiftImage()
{ 
    giftMessage = document.getElementById('giftMessage');
    giftMessage.innerText = "Oh it is a fuggley of you that I made"
    let giftImg = document.getElementById("myGift");
    giftImg.src = "images/fuggley.png";
    return false;

  
}
