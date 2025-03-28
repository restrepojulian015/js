var xhr = new XMLHttpRequest();

xhr.open('GET','https://dummyjson.com/test',true);
xhr.setRequestHeader('Content-Type','application/json');

xhr.onload = function() {
    if(xhr.status >= 200 && xhr.status < 300){
        console.log(xhr.responseText);
    }else {
        console.error('Error en la solicitud:', xhr.statusText);
    }
};

xhr.send();