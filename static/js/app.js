// // from data.js
 var tableData = data;

//set up the filter button. Select the filter button ID
var filterbutton = d3.select("#filter-btn")

    //the click function does...
    filterbutton.on("click", function() {

    // Prevent the page from refreshing
        d3.event.preventDefault();

     // Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");
  
     // Get the value property of the input element
        var inputValue = inputElement.property("value");
 
        console.log(inputValue);

 //filter data
        var filteredData = data.filter(sighting => sighting.datetime === inputValue);
             console.log(filteredData);

             var tbody = d3.select("tbody");

             //loop through tableData and log each sighting
             // Use d3 to append one table row `tr` for each sighting object
             filteredData.forEach(function(sighting) {
                 console.log(sighting);
                 var row = tbody.append("tr");
             });

 // Use d3 to update each cell's text 
         filteredData.forEach(function(sighting) {
            console.log(sighting);
        var row = tbody.append("tr");
            Object.entries(sighting).forEach(function([key, value]) {
             console.log(key, value);

        var cell = row.append("td");
            cell.text(value);


        });
    });
});

//Set up the refresh button to  re-set the filter 
var refreshbutton = d3.select("#refresh-btn")

    //the click function does...
    refreshbutton.on("click", function() {

    // Prevent the page from refreshing
        d3.event.preventDefault();

    // //make sure the filter is pulling from the full dataset and refreshes with each
    // //new input
  location.reload(false);
    });  


//Set up the 'show all button' by selecting the all button ID
var showallbutton = d3.select("#all-btn")

//the click function does...
showallbutton.on("click", function() {

// Prevent the page from refreshing
    d3.event.preventDefault();

 // Get a reference to the table body
     var tbody = d3.select("tbody");

 //loop through tableData and log each sighting
 // Use d3 to append one table row `tr` for each sighting object
     tableData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
 });

 // Step 3:  Use `Object.entries` to console.log each sighting value
    tableData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
        });
     });

 // Use d3 to update each cell's text 
    tableData.forEach(function(sighting) {
        console.log(sighting);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
                cell.text(value);
         });
    });
});