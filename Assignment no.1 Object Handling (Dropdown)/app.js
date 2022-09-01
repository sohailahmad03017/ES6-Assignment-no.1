let mobiles = {
    iphone:{
        v14pro:{
            ram:4,
            rom:32,
            price:120000
        },
        v13:{
            ram:3,
            rom:16,
            price:12000
        },
        v13pro:{
            ram:4,
            rom:64,
            price:100000
        }
    },
    samsung: {
        note5:{
            ram:4,
            rom:64,
            price:55000
        },
        a15:{
            ram:6,
            rom:128,
            price:800000
        },
        note4:{
            ram:3,
            rom:16,
            price:16000
        }
    },
    xiomi:{
        redmi9:{
            ram:4,
            rom:32,
            price:65000
        },
        redmi8:{
            ram:6,
            rom:64,
            price:35000
        },
        realmi7:{
            ram:3,
            rom:32,
            price:15000
        },
    },
    infinix:{
        S20:{
            ram:4,
            rom:32,
            price:22000
        },
        hot5:{
            ram:6,
            rom:64,
            price:64000
        },
        hot9:{
            ram:2,
            rom:16,
            price:10000
        },
    }

}

let selectCompany = document.getElementById("company");
let selectModel = document.getElementById("model");


let companies = Object.keys(mobiles);

for(let i = 0; i < companies.length; i++){
    selectCompany.innerHTML += `
    <option value="${companies[i]}">${companies[i]}</option>
    `
}

function showModels(){
    selectModel.disabled = false;

    selectModel.innerHTML = "";
    selectModel.innerHTML = `<option value="">Select Model</option>`

    let models = Object.keys(mobiles[selectCompany.value])
    
    for(let i = 0; i < models.length; i++){
        selectModel.innerHTML += `<option value="${models[i]}">${models[i]}</option> `
    }
}

function searchData(){
    let selectedMobile = mobiles[selectCompany.value][selectModel.value];

    let parent = document.getElementById("parent");
    parent.innerHTML = "";
    parent.innerHTML = `
    <p> <strong>PRICE : </strong> ${selectedMobile["price"]}</p>
    <p> <strong>RAM : </strong> ${selectedMobile.ram}</p>
    <p> <strong>ROM : </strong> ${selectedMobile.rom}</p>
    `
}