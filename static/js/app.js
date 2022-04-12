// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // First, clear out an existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

// Creating a function that will handle a button click from a user to filter the date
function handleClick() {
    // Selects first item that matches selector string in () and grabs the date values to hold in date variable
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");

    // Setting default filter as the original table data from data.js file
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date
    if (date) {

        // Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the fitler value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the filtered data; if no date was entered, filteredData will be original tableData
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);