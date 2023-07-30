
// Retrieve the scenes
var view1 = d3.select('#view1')
var view2 = d3.select('#view2')
var view3 = d3.select('#view2')

const margin = { top:50, right: 50, bottom: 50, left: 50}
const width = window.innerWidth;
const height = window.innerHeight;

const parseDate = d3.timeParse("%Y-%m-%d");

d3.csv("https://raw.githubusercontent.com/nytimes/covid-19-data/master/rolling-averages/us-states.csv").then(function (data) {

data.forEach(d => {
    d.date = parseDate(d.date);
    d.cases_avg_per_100 = +d.cases_avg/100;
    d.deaths = +d.deaths;
    
  });
  
var allGroup = ["cases_avg_per_100", "deaths"]

const svg = d3.select("#view1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  
   // add the options to the button
d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button
     
  
  
    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);
  
   // Add X axis --> it is a date format

const x = d3.scaleTime()
 .domain(d3.extent(data, d => d.date))
 .range([0, width]);
  
  
   // Add the x-axis
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .style("font-size", "16px")
    .call(d3.axisBottom(x)
      .tickValues(x.ticks(d3.timeMonth.every(3))) 
      .tickFormat(d3.timeFormat("%b %Y"))) 
    //.call(g => g.select(".domain").remove()) 
    .selectAll(".tick line") 
    .style("stroke-opacity", 0)
  svg.selectAll(".tick text")
    .attr("fill", "#777");
  

const y = d3.scaleLinear()
  //.domain([65000, d3.max(data, d => d.cases)])
  .domain([0, 2500])
  .range([height, 0]);
  //.range([height, 0]);


// Add the y-axis
svg.append("g")
.style("font-size", "14px")
.call(d3.axisLeft(y)
  //.ticks((d3.max(data, d => d.cases) - 65000) / 5000)
  .tickFormat(d => {
      return `${(d ).toFixed(0)}`;
  })
  //.tickSize(0)
  .tickPadding(10))
//.call(g => g.select(".domain").remove()) 
.selectAll(".tick text")
.style("fill", "#777") 


 // Add vertical gridlines
 svg.selectAll("xGrid")
 .data(x.ticks().slice(1))
 .join("line")
 .attr("x1", d => x(d))
 .attr("x2", d => x(d))
 .attr("y1", 0)
 .attr("y2", height)
  
 .attr("stroke", "#e0e0e0")
 .attr("stroke-width", .5);

// // Add horizontal gridlines

svg.selectAll("yGrid")
//.data(y.ticks((d3.max(data, d => d.cases) - 65000) / 5000).slice(1))
.join("line")
.attr("x1", 0)
.attr("x2", width)
.attr("y1", d => y(d))
.attr("y2", d => y(d))
.attr("stroke", "#e0e0e0")
.attr("stroke-width", .5)

// Create the line generator

//const line = d3.line()
 // .x(d => x(d.date))
 // .y(d => y(d.cases));
  
  
var line = svg
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          .x(function(d) { return x(d.date) })
          .y(function(d) { return y(d.cases_avg_per_100) })
        )
        .attr("stroke", function(d){ return myColor("cases_avg_per_100") })
        .style("stroke-width", 1)
        .style("fill", "none")




function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.map(function(d){return {date: d.date, value:d[selectedGroup]} })

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(+d.value) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })



// Add the line path to the SVG element

//svg.append("path")
 // .datum(data)
 // .attr("fill", "none")
 // .attr("stroke", "orange ")
 // .attr("stroke-width", 1)
 // .attr("d", line);

// // Add Y-axis label

svg.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - margin.left)
.attr("x", 0 - (height / 2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.style("font-size", "20px")
.style("fill", "#777")
.style("font-family", "sans-serif")
.text("Number of Cases");

// // Add the chart title

svg.append("text")
.attr("class", "chart-title")
.attr("x", margin.left + 350 )
.attr("y", margin.top +250 )
.style("font-size", "20px")
.style("text-anchor", "middle")
.style("fill", "#777")
.style("font-family", "sans-serif")
.text("Date");
  
// // Add the source credit

//svg.append("text")
    //.attr("class", "source-credit")
   // .attr("x", width - 1125)
  //  .attr("y", height + margin.bottom - 3)
  //  .style("font-size", "9px")
  //  .style("font-family", "sans-serif")
  //  .text("Source: jaildatainitiative.org");
  


})
// --------------------------------------------------------------------------------// 
// SCENE TWO ----------------------------------------------------------------------//
// --------------------------------------------------------------------------------// 
