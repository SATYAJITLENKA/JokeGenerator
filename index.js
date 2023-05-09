let btnEl=document.getElementById("btn");

const apikey="zXG8CRmEGWHzDo3IbKa4RA==ceAQcUeYFsUAhPmS";

const options={
    method:"GET",
    headers:{
        "X-Api-key":apikey,
    },

};

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

  
async function clicked(){
    try {
        jokeEl.innerText="updating..."
        btnEl.disabled=true;
        btnEl.innerText="loading"
        const response=await fetch(apiURL,options);
        const data=await response.json();
        btnEl.disabled=false;
        btnEl.innerText="Tell me a Joke"
      
        jokeEl.innerText=data[0].joke;
        
    } catch (error) {
        jokeEl.innerText="An Error happened , try again"
        btnEl.disabled=false;
        btnEl.innerText="Tell me a Joke"

        
    }
  
}
btnEl.addEventListener("click",clicked)
let jokeEl=document.getElementById("joke")
