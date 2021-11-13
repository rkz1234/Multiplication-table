function i(){
    var mi =parseInt( document.getElementById("mi").value);
    var count = 1;
    var times = parseInt( document.getElementById("m").value);

    while(count<=times){
        var product =mi*count;
        var element = document.createElement("h2");
        element.innerHTML=mi +" X "+ count + "=" +product;
        document.body.append(element);
        count=count+1;
    }
}                                                                                                                                      