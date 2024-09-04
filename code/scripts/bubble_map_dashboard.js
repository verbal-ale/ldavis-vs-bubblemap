function LDAvis_load_lib(url, callback){
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function(){console.warn("failed to load library " + url);};
    document.getElementsByTagName("head")[0].appendChild(s);
}

function createLDAvis(ldaVizData, hexmapData, distributionData) {
    if(typeof(LDAvis) !== "undefined"){
        // already loaded: just create the visualization
        new LDAvis("#" + "ldavis_el932420893830726403038385356", ldaVizData, hexmapData, distributionData);
    } else {
        // Dynamically load local D3 & LDAvis
        LDAvis_load_lib("../lib/d3.v7.min.js", function(){
            LDAvis_load_lib("../lib/bubble_x_ldavis.js", function(){
                new LDAvis("#" + "ldavis_el932420893830726403038385356", ldaVizData, hexmapData, distributionData);
            });
        });
    }
}

// Function to fetch JSON data
function fetchJson(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response error: ${response.statusText}`);
            }
            return response.json();
        });
}


// Fetch both JSON files and create the visualization
Promise.all([
    fetchJson('../../data/ldavis_data.json'),
    fetchJson('../../data/newsgroups_sup_map.json'),
    fetchJson('../../data/newsgroups_sup_distrib.json')
])
.then(([ldavisData, hexmapData, distributionData]) => {
    console.log("ldavisData", ldavisData);
    console.log("hexmapData", hexmapData);
    console.log("distributionData", distributionData);
    
    createLDAvis(ldavisData, hexmapData, distributionData);
})
.catch(error => console.error('Error loading the JSON files:', error));