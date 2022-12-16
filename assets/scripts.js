const cart = {
    currentPrice:0,
    items: [], 
    additem: function(cookie,price) {

        this.items.push(cookie)

        this.currentPrice=this.currentPrice+price
},
clear:function() {
    this.currentPrice=0
    this.items=[]
},
}

function addToCart(cookie) {
    /*PRICES
    peanut butter:20
    sandies:30
    party press:35
    */
   
    console.log('The user is adding this type of cookie tp their cart: ', cookie)

   //add 1 to the itemCount variable

   
   
   //add the correct price to the currentPrice variable

   if (cookie == "peanut butter") {
        currentPrice == currentPrice + 20 
   } else if (cookie == "sandles") {
        currentPrice == currentPrice +30
   } else if ( cookie ="party press"){  
   currentPrice = currentPrice +35
   } else if (cookie == "chocolate chip") {
    currentPrice = currentPrice = 25
}
document.querySelector(".hoverText").innerHTML = cart.currentPrice
console.log(cart)
document.getElementById("cartItems").innerHTML = cart.items.length

}


function checkout() {
    console.log ('User is checking out.')
    //let your customer know how many items they are purchasing and the price
    window.alert(`You have a total of ${itemCount} items that will cost ${currentPrice}. Thank you for shopping with us`)
    prompt("Please provide your name and address./n Thank you for shopping with us!")
    cart.clear()
    document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML = cart.items.length
}

function darkmode() {
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("main").style.color = "white"
    document.querySelector("h1").style.color = "white"
}