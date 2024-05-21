
"use strict"

const addCarBtn = document.querySelector("#add-car-btn")
const menuList = document.querySelector("#menu-list")
const deleteCarBtn = document.querySelector("#delete-car")
const searchCarBtn = document.querySelector("#search-car")
const sortCarBtn = document.querySelector("#sort-car")
const car = document.querySelector("#car")
const addCardForm = document.querySelector("#add-car-form")
const inputItem = document.querySelector(".input-item")
const cancelAddFormBtn = document.querySelector("#cancel-add-form-btn")
const submitAddFormBtn = document.querySelector("#submit-add-form-btn")
const cancelDeleteFormBtn = document.querySelector("#cancel-delete-form-btn")
const submitDeleteFormBtn = document.querySelector("#submit-delete-form-btn")
const cancelSearchFormBtn = document.querySelector("#cancel-search-form-btn")
const submitSearchFormBtn = document.querySelector("#submit-search-form-btn")
const deleteCarForm =  document.querySelector("#delete-car-form")
const searchCarForm = document.querySelector("#search-car-form")
const carAddGroup = document.querySelector(".car-add-group")
const carDeleteGroup = document.querySelector(".car-delete-group")
const carSearchGroup = document.querySelector(".car-search-group")
const clear = document.querySelector("#clear-form-btn")
const carsMenuDelete = document.querySelector("#cars-menu-delete-form-btn")
const carsMenuSearch = document.querySelector("#cars-menu-search-form-btn")
const carsMenuAdd = document.querySelector("#cars-menu-add-form-btn")
const deleteCarId = document.querySelector("#delete-car-input")
const searchCarId = document.querySelector("#search-car-input")
const sortCarItem = document.querySelector("#sort-car-item")
const cancelSortBtn = document.querySelector("#cancel-sort-btn")
const sortStock = document.querySelector("#stock-sort-btn")
const sortPrice = document.querySelector("#price-sort-btn")
const carSortGroup  = document.querySelector(".car-sort-group")
const showMenuListBtn = document.querySelector("#hearder-btn")
const headerBtnMenu =  document.querySelector("#header-btn-item")
 



const carName = document.querySelector("#car-name-input")
const carModel = document.querySelector("#car-model-input")
const carYear = document.querySelector("#car-year-input")
const carColor = document.querySelector("#car-color-input")
const carStock = document.querySelector("#car-stock-input")
const carPrice = document.querySelector("#car-price-input")





const carNewItem = function (n,m,y,c,s,p){
    this.id = Math.floor(Math.random()*100).toString().padStart(3,"0");
    this.carName = n;
    this.carModel = m;
    this.carYear = y;
    this.carColor = c,
    this.carStock = s,
    this.carPrice = p;
}

const Cars_Item = JSON.parse(localStorage.getItem("car_info")) || []

 const addCarItem = function(event) {
    event.preventDefault();
    if (carModel.value.trim() !== "" && carName.value.trim() !== "" && carYear.value.trim() !== "" && carColor.value.trim() !== "" && carStock.value.trim() !== "" && carPrice.value.trim() !== "") {
        let newCarName = carName.value;
        let newCarModel = carModel.value;
        let newCarYear = carYear.value;
        let newCarColor = carColor.value;
        let newCarStock = carStock.value;
        let newCarPrice = carPrice.value;
        let newCarItemResult = new carNewItem(newCarName, newCarModel, newCarYear, newCarColor, newCarStock, newCarPrice);
        Cars_Item.push(newCarItemResult);
        localStorage.setItem("car_info", JSON.stringify(Cars_Item)); 
        showMenu();
    } else {
        alert("Please enter full information.");
    }

    addCardForm.reset()
}

const deleteBtnCar = function (event){
    event.preventDefault();
    let resID = deleteCarId.value
    let newInLS = Cars_Item.findIndex(u => u.id == resID)
    Cars_Item.splice(newInLS, 1)
    localStorage.setItem("car_info", JSON.stringify(Cars_Item))
    deleteCarForm.reset()
    showDeleteFormList()
}

const searchBtnCar = function (event){
    event.preventDefault();
    let resName = searchCarId.value.trim().toLowerCase(); 
    let newInLS = Cars_Item.filter(element => element.carName.toLowerCase().includes(resName));
    
    if (newInLS.length > 0){ 
        carSearchGroup.innerHTML = ""; 
        newInLS.forEach(element => { 
            carSearchGroup.innerHTML += `
            <div class="car-group">
                <p>ID : ${element.id}</p>
                <p>Name : ${element.carName}</p>
                <p>Model : ${element.carModel}</p>
                <p>Year : ${element.carYear}</p>
                <p>Color : ${element.carColor}</p>
                <p>Stock : ${element.carStock}</p>
                <p>Price : ${element.carPrice}</p>
            </div>`;
        });
    }
    else{
        alert("Kechirasiz bizda bunday mashina mavjud emas,keling men sizga mavjudlarni taqdim etaman"); 
        showSearchFormList(); 
    }

    searchCarForm.reset();
    showMenu()
}




let sortList2 = false;

const sortInPrice = function() {
    if (sortList2 === false) {
        sortList2 = true;
        Cars_Item.sort((carA, carB) => carB.carPrice - carA.carPrice);
    } else {
        sortList2 = false;
        Cars_Item.sort((carA, carB) => carA.carPrice - carB.carPrice);
    }
    showSortInPriceList()
}


let sortList = false;

const sortInStock = function() {
    if (sortList === false) {
        sortList = true;
        Cars_Item.sort((carA, carB) => carB.carStock - carA.carStock);
    } else {
        sortList = false;
        Cars_Item.sort((carA, carB) => carA.carStock - carB.carStock);
    }
    showSortInStock();
}


const showMenu = function (){
    carAddGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
        carAddGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}

const showAddFormList = function (){
    carAddGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
        carAddGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}


const showDeleteFormList =function () {
    carDeleteGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
         carDeleteGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}


const showSearchFormList = function () {
    carSearchGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
         carSearchGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}

const showSortInStock = function () {
    carSortGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
         carSortGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}

const showSortInPriceList = function () {
    carSortGroup.innerHTML = "" 
    Cars_Item.forEach(element => {
         carSortGroup.innerHTML += `
            <div class = "car-group" >
                <p> ID : ${element.id} </p>
                <p> Name : ${element.carName} </p>
                <p> Model : ${element.carModel} </p>
                <p> Year : ${element.carYear} </p>
                <p> Color : ${element.carColor} </p>
                <p> Stock : ${element.carStock} </p>
                <p> Price : ${`${element.carPrice}`} </p>
            </div>
        `
    });
}




const showAddCarMenu = function(){
    addCardForm.classList.add("show")
    addCardForm.classList.remove("hide")
    menuList.classList.add("hide")
    menuList.classList.remove("show")

}

const showMenuList = function ( ){
    addCardForm.classList.add("hide")
    addCardForm.classList.remove("show")
    menuList.classList.add("show")
    menuList.classList.remove("hide")
}

const showDeleteForm = function(){
    deleteCarForm.classList.add("show")
    deleteCarForm.classList.remove("hide")
    menuList.classList.add("hide")
    menuList.classList.remove("show")
}

const showDeleteToMenuList = function ( ){
    deleteCarForm.classList.add("hide")
    deleteCarForm.classList.remove("show")
    menuList.classList.add("show")
    menuList.classList.remove("hide")
}

const showSearchForm = function(){
    searchCarForm.classList.add("show")
    searchCarForm.classList.remove("hide")
    menuList.classList.add("hide")
    menuList.classList.remove("show")
}

const showSearchToMenuList = function ( ){
    searchCarForm.classList.add("hide")
    searchCarForm.classList.remove("show")
    menuList.classList.add("show")
    menuList.classList.remove("hide")
}

const showSortMenu = function(){
    sortCarItem.classList.add("show")
    sortCarItem.classList.remove("hide")
    menuList.classList.add("hide")
    menuList.classList.remove("show")
}

const showSortToMenuList = function ( ){
    sortCarItem.classList.add("hide")
    sortCarItem.classList.remove("show")
    menuList.classList.add("show")
    menuList.classList.remove("hide")
}

const showMenuListMenu = function ( ){
    headerBtnMenu.classList.add("hide")
    headerBtnMenu.classList.remove("show")
    menuList.classList.add("show")
    menuList.classList.remove("hide")
}




const clearInfo = function () {
    localStorage.clear()
    window.location.reload();
}



showMenuListBtn.addEventListener("click" , showMenuListMenu)
sortPrice.addEventListener("click" , sortInPrice)
sortPrice.addEventListener("click" , showSortInPriceList)
sortStock.addEventListener("click" , sortInStock)
sortStock.addEventListener("click" , showSortInStock)
cancelSortBtn.addEventListener("click" , showSortToMenuList )
sortCarBtn.addEventListener("click" , showSortMenu)
deleteCarForm.addEventListener("submit" , deleteBtnCar)
searchCarForm.addEventListener("submit" , searchBtnCar)
clear.addEventListener("click" , clearInfo)
addCardForm.addEventListener("submit" , addCarItem)
cancelSearchFormBtn.addEventListener("click" , showSearchToMenuList)
searchCarBtn.addEventListener("click" , showSearchForm)
cancelDeleteFormBtn.addEventListener("click" , showDeleteToMenuList)
deleteCarBtn.addEventListener("click" , showDeleteForm)
carsMenuDelete.addEventListener("click" , showDeleteFormList)
carsMenuAdd.addEventListener("click", showAddFormList)
carsMenuSearch.addEventListener("click" , showSearchFormList)
cancelAddFormBtn.addEventListener("click" , showMenuList)
addCarBtn.addEventListener("click" , showAddCarMenu)
