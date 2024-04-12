window.onload = function () {
    getMutualFundData();
}
 
let list = document.querySelector(".dropdown-menu");
async function getMutualFundData() {
    try {
        // make a request to the api
    let response = await fetch('https://api.mfapi.in/mf');

    // get the response from the api
        let data = await response.json();
        data.forEach(element => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<a class="dropdown-item" href="#" onClick="displayItem(${element.schemeCode})">${element.schemeName}</a>`;
            list.appendChild(listItem);
        });

    } catch (error) {
        
    }
}

async function displayItem(value) {
    let response = await fetch(`https://api.mfapi.in/mf/${value}/latest`);

    // get the response from the api
    let data = await response.json();
    console.log(data);
    displayContent(data);
}
//let schemeDetails = document.querySelector("#scheme-details");
function displayContent(data) {
    let para1 = document.createElement("p");
    para1.innerHTML = `Scheme Name: ${data.meta.scheme_name}`;
    let para2 = document.createElement("p");
    para2.innerHTML = `Scheme Code: ${data.meta.scheme_code}`;
    let para3 = document.createElement("p");
    para3.innerHTML = `Scheme Category: ${data.meta.scheme_category}`;
    let para4 = document.createElement("p");
    para4.innerHTML = `Scheme Type: ${data.meta.scheme_type}`;
    let para5 = document.createElement("p");
    para5.innerHTML = `Fund House: ${data.meta.fund_house}`;
    schemeDetails.append(para1, para2, para3, para4, para5);
    schemeDetails.replaceChild(para1, schemeDetails.childNodes[0]);
    schemeDetails.replaceChild(para2, schemeDetails.childNodes[1]);
    schemeDetails.replaceChild(para3, schemeDetails.childNodes[2]);
    schemeDetails.replaceChild(para4, schemeDetails.childNodes[3]);
    schemeDetails.replaceChild(para5, schemeDetails.childNodes[4]);
}