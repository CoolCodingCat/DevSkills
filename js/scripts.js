console.log ('hello there');
var app = {
    init: function(){
        var cart = document.getElementById('anglais');
        cart.addEventListener("click", app.addInCart);
    },
    addInCart: function (event) {
        console.log ('cart clicked');
    
        var cartLine = document.createElement('li');
        var skillName = document.querySelector('.label-anglais');
        var itemName = skillName.textContent;
        cartLine.textContent = itemName;

        document.querySelector('#unorderedList').appendChild(cartLine);
        document.getElementById("box-anglais").className += " dim";
        document.querySelector('#anglais').disable = true;
        return true;
        


        
    },
}
document.addEventListener('DOMContentLoaded', app.init);
