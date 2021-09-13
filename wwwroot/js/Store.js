console.log("Welcome to Aysha's Bakery Store")

    let product1 = "Chocolate Dipped Cake"
    let imagesrc1="../img/store/1.png"
    let check1=false;
    function productP1() {
        localStorage.clear();
        localStorage.setItem("cakename", product1);
        localStorage.setItem("cakeimg1",imagesrc1)
        check1=true;
        localStorage.setItem("flag1",check1);
        return false
    }

    let product2 = "Mango Ice-Cream"
    let imagesrc2="../img/store/2.png"
    let check2=false;
    function productP2() {
        localStorage.clear();
        localStorage.setItem("cakename", product2);
        localStorage.setItem("cakeimg2",imagesrc2)
        check2=true;
        localStorage.setItem("flag2",check2);
        return false
    }
    
    let product3 = "Ice-cream popcikles"
    let imagesrc3="../img/store/3.png"
    let check3=false;
    function productP3() {
        localStorage.clear();
        localStorage.setItem("cakename", product3);
        localStorage.setItem("cakeimg3",imagesrc3)
        check3=true;
        localStorage.setItem("flag3",check3);
        return false
    }

    let product4 = "Ice-cream popcikles"
    let imagesrc4="../img/store/4.png"
    let check4=false; 
    function productP4() {
        localStorage.clear();
        localStorage.setItem("cakename", product4);
        localStorage.setItem("cakeimg4",imagesrc4)
        check4=true;
        localStorage.setItem("flag4",check4);
        return false
    }

    let product5 = "Cupcakes"
    let imagesrc5="../img/store/5.png"
    let check5=false;
    function productP5() {
        localStorage.clear();
        localStorage.setItem("cakename", product5);
        localStorage.setItem("cakeimg5",imagesrc5)
        check5=true;
        localStorage.setItem("flag5",check5);
        return false
    }

    let product6 = "Swiss Roll Dessert"
    let imagesrc6="../img/store/6.png"
    let check6=false;
    function productP6() {
        localStorage.clear();
        localStorage.setItem("cakename", product6);
        localStorage.setItem("cakeimg6",imagesrc6)
        check6=true;
        localStorage.setItem("flag6",check6);
        return false
    }
