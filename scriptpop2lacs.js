var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
        var popu =data.filter((x) => {
        return x.population < 200000;
    });
    for(var i in popu)
    {
    console.log(popu[i].name);
    }
}