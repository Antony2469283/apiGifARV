const container = document.getElementById("container");
const seeker = document.getElementById("seeker");

seeker.addEventListener("keyup" , Data);
function Data() {
    container.innerHTML = "";
    Api();
}    
// async is a keyword that tells the function to return a promise
async function Api() {
const SEARCH = `https://tenor.googleapis.com/v2/search?q=${seeker.value}&key=AIzaSyAbBzLGg0yRYKAlrFtC72mhcJj9glFxIL4`; 
    // await is a keyword that tells the function to wait for the promise to resolve
    const data = await fetch(SEARCH);
    const result = await data.json();

    // destructuring the result object
    const { results } = result;
    results.map(result => {
        

        const div = document.createElement("div");
        div.classList.add("div_card");

        div.innerHTML = "";

        const img = document.createElement("img");
        //element.url
        
        img.src = result.media_formats.gif.url;
        img.classList.add("img");

 
        div.appendChild(img);
        container.appendChild(div);

    })
}
