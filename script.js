fetch(URL)
.then(function(res){
    if(res.ok){
        return res.json
    }

})
.then(function(value){
    console.log(value)
})

.catch(function(err){

})



InputEvent.addEventListener(input, function(e)
{
    let result = e.target.value;
    if(parametre){
        isValid = true;
    }else{
        insValid = false;
    }
})


function isValid(value)
{
    return /^e[0;9]{3,}
}



fetch(URL, {
    methode: "POST ",

header:{
    'Accept': 'application/JSON'
    'Content-type': 'application/JSON'
},

    body : json.stingify(JSONbody)
});


****

    XMLHttpRequest

let request = new XMLHttpRequest();
request.open("GET", "URL");
request.reponseType = "JSON";
request.send();
