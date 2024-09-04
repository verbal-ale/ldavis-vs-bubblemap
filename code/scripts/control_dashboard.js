function LDAvis_load_lib(url, callback){
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function(){console.warn("failed to load library " + url);};
    document.getElementsByTagName("head")[0].appendChild(s);
}

function createLDAvis(data) {
    if(typeof(LDAvis) !== "undefined"){
        // already loaded: just create the visualization
        new LDAvis("#" + "ldavis_el2405616557168220643379852761", data);
    } else if(typeof define === "function" && define.amd){
        // require.js is available: use it to load d3/LDAvis
        require.config({paths: {d3: "https://d3js.org/d3.v5"}});
        require(["d3"], function(d3){
            window.d3 = d3;
            LDAvis_load_lib("../lib/controlvis.js", function(){
                new LDAvis("#" + "ldavis_el2405616557168220643379852761", data);
            });
        });
    } else {
        // require.js not available: dynamically load d3 & LDAvis
        LDAvis_load_lib("https://d3js.org/d3.v5.js", function(){
            LDAvis_load_lib("../lib/controlvis.js", function(){
                new LDAvis("#" + "ldavis_el2405616557168220643379852761", data);
            });
        });
    }
}

// Fetch the JSON data and create the visualization
fetch('../../data/control_data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response error: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        createLDAvis(data);
    })
    .catch(error => console.error('Error loading the JSON file:', error));