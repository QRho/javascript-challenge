// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function buildTable(data){
    // First, clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
}

// Event that calls a function  name it handleClick
function handleClick(){
    d3.event.preventDefault() // prevent the form from refreshing the page
    
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state=d3.select("#state").property("value");
    let shape=d3.select("#shape").property("value");
    

    let filterData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date){
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);


    }

    buildTable(filterData);


    if (city){

           filterData = filterData.filter((row) => row.city === city);

    }

    buildTable(filterData);

    if (state){

            filterData = filterData.filter((row) => row.state === state);
 
    }
 
    buildTable(filterData);

    if (shape){

            filterData = filterData.filter((row) => row.shape === shape);
 
    }
 
    buildTable(filterData);



}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);