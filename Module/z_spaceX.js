const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json("https://raw.githubusercontent.com/yorojanine/Plotly/main/samples.json").then(function(data){
    console.log(data);
});
