

function changeCakeImage()
{
    let cakeImg = document.getElementById("cake-image");
    cakeImg.src="images/cakeBlow.png";
    return false;
}

function  changeGiftImage()
{ 
    giftMessage = document.getElementById('giftMessage');
    giftMessage.innerText = "Oh I forgot what these are called, but because you seem to like them very much, I made you into them";
    let giftImg = document.getElementById("myGift");
    giftImg.src = "images/fuggley.png";
    return false;

  
}


