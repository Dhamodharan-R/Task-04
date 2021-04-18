var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    var arr=[];
    for(var i in data ){
        arr.push(data[i].population);
    }
    var total =arr.reduce((acc,cv) =>{
      return acc+cv;
  });
  console.log(total);
}

