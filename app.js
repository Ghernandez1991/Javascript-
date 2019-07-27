var sightings = data;

var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");




data.forEach(function(uforeport){
    console.log(uforeport);
    var row = tbody.append("tr");
    Object.entries(uforeport).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});




var button = d3.select("#filter-btn");

button.on("click", function(){

    var tbody = d3.select("tbody");
    tbody.html("")

    
    var inputElement = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    var inputValue = inputElement.property("value");
    var inputValuecity = inputElementcity.property("value");
    var inputValuestate = inputElementstate.property("value");
    var inputValuecountry = inputElementcountry.property("value");
    var inputValueshape = inputElementshape.property("value");

    
    var filtereddate = sightings.filter(date => date.datetime === inputValue);
    var filteredcity = sightings.filter(city => city.city === inputValuecity);
    var filteredstate = sightings.filter(state => state.state === inputValuestate);
    var filteredcountry = sightings.filter(country => country.country === inputValuecountry);
    var filteredshape = sightings.filter(shape => shape.shape === inputValueshape);




    console.log(filtereddate);



   


    filtereddate.forEach(function(uforeport2){
        console.log(uforeport2);
        var row = tbody.append("tr");
        Object.entries(uforeport2).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredcity.forEach(function(uforeport3){
        console.log(uforeport3);
        var row = tbody.append("tr");
        Object.entries(uforeport3).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });


    filteredstate.forEach(function(uforeport4){
        console.log(uforeport4);
        var row = tbody.append("tr");
        Object.entries(uforeport4).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredcountry.forEach(function(uforeport5){
        console.log(uforeport5);
        var row = tbody.append("tr");
        Object.entries(uforeport5).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

    filteredshape.forEach(function(uforeport6){
        console.log(uforeport6);
        var row = tbody.append("tr");
        Object.entries(uforeport6).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });

  

});

