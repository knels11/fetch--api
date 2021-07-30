var makeHTML= function(json) {
    document.getElementById("json").innerHTML= 
    JSON.stringify(json, undefined, 2);
};
//fetch api is: pending
fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
//then promise to take in response
.then (function(response) {
    return response.json();
})
//pass in any object to represent data: fulfilled
.then(function(myJson) {
    makeHTML(myJson);
})
//if request isnt working validate code by .catch error 
.catch(function(error) {
    console.log(error);
});