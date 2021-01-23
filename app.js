// Text file data
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', function() {
    //Create Ajax Request
    let xhr = new XMLHttpRequest();

    //Prepare request
    xhr.open('GET', './data/message.txt', true);

    //send the Request
    xhr.send();

    //process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    }


});

// display text data
displayTextData = (data) => {
    let htmlTemplate = `<p>${data}</p>`
    document.querySelector('#text-card').innerHTML = htmlTemplate;
}

//Json Data
let jsonBotton = document.querySelector('#json-btn');
jsonBotton.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'data/mobile.json', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let mobile = JSON.parse(data);
            displayJSONData(mobile)
        }
    }

})


//display json data
displayJSONData = (mobile) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul class='list-group mt-3'>
                        <li class='list-group-item'>ID : ${mobile.id}</li>
                        <li class='list-group-item'>BRAND: ${mobile.brand}</li>
                        <li class='list-group-item'>COLOR: ${mobile.color}</li>
                        <li class='list-group-item'>PRICE: ${mobile.price}</li>
                    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
}



let apiButton = document.querySelector('#api-data');
apiButton.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            let userApi = JSON.parse(data);
            displayUser(userApi);
        }
    }
});

displayUser = (userApi) => {
    let htmlTemplate = '';
    for (let user of userApi) {
        htmlTemplate += `<ul class='list-group mt-3'>
                            <li class='list-group-item'>ID : ${user.id}</li>
                            <li class='list-group-item'>Name : ${user.name}</li>
                            <li class='list-group-item'>Email : ${user.email}</li>
                            <li class='list-group-item'>ADDRESS : ${user.address.street}, ${user.address.suite} ,  ${user.address.city}, ${user.address.zipcode} </li>
                            <li class='list-group-item'>PHONE : ${user.phone}</li>
                            <li class='list-group-item'>WEBSITE : ${user.website}</li>
                            <li class='list-group-item'>COMPANY : ${user.company}</li>
                            
                        </ul>`
    }

    document.querySelector('#api-card').innerHTML = htmlTemplate;
}