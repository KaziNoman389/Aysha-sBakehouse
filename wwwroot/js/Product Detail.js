console.log("Check your product details !")

// to change value as per radio button swatch
// taking price value in variable

let price = 400;
let add;
add = parseFloat(price) + 0;
document.getElementById("price").innerText = add;

function WeightChange() {
    let kg = document.getElementById("kg");
    let kg1 = document.getElementById("kg1");
    let kg2 = document.getElementById("kg2");
    let kg3 = document.getElementById("kg3");
    let kg4 = document.getElementById("kg4");
    let WeightIdentifier;
    let WeightPrice;

    if (kg.checked == true) {
        
        // Weight Assign
        WeightIdentifier="0.5 KG";
        WeightPrice="Default Weight"

        // reset all the price when user click on weight options
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 0;
        document.getElementById("price").innerText = add;


        // Adding Weight data into the local storage
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        // Calling price calculation function to re-calculate the final total
        PriceCalculation();
    }
    else if (kg1.checked == true) {

         // Weight Assign
         WeightIdentifier=" 1 KG";
         WeightPrice="TK 200";

        // reset all the price when user click on weight options
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 200;
        console.log(typeof (price));
        document.getElementById("price").innerText = add;
        console.log("b1");

        // Adding Weight data into the local storage
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        // Calling price calculation function to re-calculate the final total
        PriceCalculation();

    }
    else if (kg2.checked == true) {

         // Weight Assign
         WeightIdentifier=" 2 KG";
         WeightPrice="Tk 400";
        // reset all the price when user click on weight options
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 400;
        document.getElementById("price").innerText = add;
        localStorage.setItem("SubTotal",add);
        // Adding Weight data into the local storage
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);

        // Calling price calculation function to re-calculate the final total
        PriceCalculation();
    }
    else if (kg3.checked == true) {

         // Weight Assign
         WeightIdentifier=" 3 KG";
         WeightPrice="Tk 600";
        // reset all the price when user click on weight options
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 600;
        document.getElementById("price").innerText = add;

        // Adding Weight data into the local storage
        
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        // Calling price calculation function to re-calculate the final total
        PriceCalculation();
    }
    else if (kg4.checked == true) {

        // Weight Assign
        WeightIdentifier=" 4 KG";
        WeightPrice="Tk 800";
        // reset all the price when user click on weight options
        price = 400;
        valueCount = 1;
        document.getElementById("quantity").value = valueCount;
        add = parseFloat(price) + 800;
        document.getElementById("price").innerText = add;

        // Adding Weight data into the local storage
       
        localStorage.removeItem("Weight");
        localStorage.removeItem("WeightPrice");
        localStorage.setItem("Weight", WeightIdentifier);
        localStorage.setItem("WeightPrice",WeightPrice);
        localStorage.setItem("SubTotal",add);
        // Calling price calculation function to re-calculate the final total
        PriceCalculation();
    }
    else {
        // if user cannot select any option of weight it return false
        return false;

    }
}


// price change by quantity 

// setting default minusbtn default attribute disable 
document.querySelector(".minusBtn").setAttribute("disabled", "disabled")

// taking value to increment and descrement 

let valueCount;

// Increment when plus button pressed
document.querySelector(".plusBtn").addEventListener("click", function () {

    // getting value from input text 
    valueCount = document.getElementById("quantity").value;


    // incrementing value by one
    valueCount++;

    if (valueCount > 10) {

        alert("Quantity more than 10 is not allowed");
        valueCount--;
    }

    // udating to new value
    document.getElementById("quantity").value = valueCount;


    // checking the value is greater than one or not to enable or disable minus button
    if (valueCount > 1) {
        document.querySelector(".minusBtn").removeAttribute("disabled");
        document.querySelector(".minusBtn").classList.remove("disabled");

    }

    // calculating final total of product after changing quantity
    PriceCalculation();
});


// Decrement when minus button pressed
document.querySelector(".minusBtn").addEventListener("click", function () {
    // getting value from input text 
    valueCount = document.getElementById("quantity").value;

    // decrement  value by one
    valueCount--;

    if (valueCount < 1) {
        alert("qunatity less than 1 is not allowed");
        valueCount++;
    }


    // udating to new value
    document.getElementById("quantity").value = valueCount;

    if (valueCount == 1) {
        document.querySelector(".minusBtn").setAttribute("disabled", "disabled");
    }

    // calculating final total of product after changing quantity
    PriceCalculation();
});


// price calculation fUNCTION   

function PriceCalculation() {

    let total = valueCount * add;                                     
    console.log(valueCount);
    price = document.getElementById("price").innerText = total;         
    localStorage.removeItem("TotalPrice");                              
    localStorage.setItem("TotalPrice", price);                          
    localStorage.removeItem("ProductQuantity");                        
    localStorage.setItem("ProductQuantity", valueCount);                
}


// inserting product is egless and not value in local storage
localStorage.setItem("CakeType", "With Egg");
function EglessOrNot() {
    let VegNonveg = document.getElementById("eggless")
    if (VegNonveg.checked == true) {
        localStorage.removeItem("CakeType");
        localStorage.setItem("CakeType", "Egless Cake");
    }
    else {
        localStorage.setItem("CakeType", "With Egg");
    }

}

// Buy now Button Form Validation Function
function FormValidation() {
    let kg = document.getElementById("kg");
    let kg1 = document.getElementById("kg1");
    let kg2 = document.getElementById("kg2");
    let kg3 = document.getElementById("kg3");
    let kg4 = document.getElementById("kg4");

    if(kg.checked == true || kg1.checked==true || kg2.checked==true || kg3.checked==true || kg4.checked==true){
       
       window.open("../Home/OrderSummary");
        
        return true;
    }
    else {
        alert("Please Select Cake Weight Option")
        document.getElementById("WeightErrorMessage").innerHTML="Please Select Any one Option"
        return false;
    }
}

/* ---------------------------------------------------------------------------------------------------------------------------------------- */
// gettting product variable from store page using local storage


let count1 = localStorage.getItem("flag1");
let count2 = localStorage.getItem("flag2");
let count3 = localStorage.getItem("flag3");
let count4 = localStorage.getItem("flag4");
let count5 = localStorage.getItem("flag5");
let count6 = localStorage.getItem("flag6");

let srcval;
if (count1 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg1");
    document.getElementById("ProductImage").setAttribute("src", srcval)

} else if (count2 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg2");
    document.getElementById("ProductImage").setAttribute("src", srcval)

} else if (count3 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg3");
    document.getElementById("ProductImage").setAttribute("src", srcval)

} else if (count4 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg4");
    document.getElementById("ProductImage").setAttribute("src", srcval)
} else if (count5 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg5");
    document.getElementById("ProductImage").setAttribute("src", srcval)

} else if (count6 == "true") {
    document.querySelector("div.productid p").innerHTML = localStorage.getItem("cakename");
    srcval = localStorage.getItem("cakeimg6");
    document.getElementById("ProductImage").setAttribute("src", srcval)
}
else {
    console.log("hello");
}



