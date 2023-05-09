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
    const response=await fetch(apiURL,options);
    const data=await response.json();
    console.log(data)
}
btnEl.addEventListener("click",clicked)