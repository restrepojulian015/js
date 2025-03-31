const request = fetch("https://jsonplaceholder.typicode.com/todos",
    { 
    method: "GET",
    headers: {"content.type" : "appilcation/json"}
    });

request.then(async resolve => {
    const data = await resolve.json();
    const body = document.querySelector("body");
    let html = "";
    data.forEach((element,ind)=> {
        html += `${ind}--- titulo: ${element.title}<br><br>completo: ${element.complete ? "si": "no"}`;    
    });
    body.innerHTML = html;
    console.log(data)
})