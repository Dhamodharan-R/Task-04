var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    var reg =data.filter((x) => {
        return x.region=="Asia";
    });
    for(var i in reg){
        console.log(reg[i].name+":"+reg[i].region);
    }
    
}






