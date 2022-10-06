// text file data
let textButoon = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = new XMLHttpRequest();

    // request the request
    xhr.open('GET', 'message.text', true);

    // send request the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    }
});

// display textdata
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;
}

// json button
let jsonButton = document.querySelector("json-btn");
jsonButton.ddEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./mobile.json',true);
    xhr.send();
    xhr.send();
    xhr.onload = () =>{
        if (xhr.status === 200){
            let data = xhr.responseText;
            let mobile = Json.parser(data);
            console.log(mobile);
        }
    }
});

let displayJSONData = (mobile) =>{
    let htmlTemplate = '';
    htmlTemplate = `<ul>
    <li>ID : ${mobile.id}</li>
    <li>ID : ${mobile.brand}</li>
    <li>ID : ${mobile.color}</li>
    <li>ID : ${mobile.price}</li>
    </ul>`
    document.querySelector('#json-card').innerHTML = htmlTemplate
};



