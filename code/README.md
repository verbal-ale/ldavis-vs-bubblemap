# INTERFACE IMPLEMENTATION SUMMARY

### TOPIC MODEL VISUALISATIONS: A QUALITATIVE USER EVALUATION STUDY
### F21MP - Masters Project and Dissertation - 2023-2024 
#### Heriot-Watt University, Edinburgh, UK

##### *Alex Varbanov - H00456607 - av2049@hw.ac.uk*

To evaluate the usability of ` LDAvis ` as a **projection**-**based** approach and ` BubbleTreemap ` as a **cluster**-**based** approach to topic visualisation, I needed to produce three different interfaces: the afore-mentioned ones and a training interface where topics are arranged in a grid, i.e. no topic-space encoding is present.


The evaluation was to be performed by **non-expert users**. With that in mind, I performed an [initial EDA](https://nbviewer.org/github/verbal-ale/ldavis-vs-bubblemap/blob/master/code/notebooks/001_20newsgroups_EDA.ipynb) on [The 20 newsgroups dataset](https://scikit-learn.org/0.19/datasets/twenty_newsgroups.html) to then [produce the LDAvis dashboard](https://nbviewer.org/github/verbal-ale/ldavis-vs-bubblemap/blob/master/code/notebooks/002_20newsgroups_LDA.ipynb). The exploratory analysis would also help me to devise the usability tasks for the experiment later on.

To improve topic **interpretability** and **definition**, I fine-tuned the ` LDA ` model to minimise generic terms, both by selecting appropriate values for the maximum and minimum term frequency cut-off and by manually adding keywords to the stop-list. I then exported the ` LDAvis ` [dashboard](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/code/lib/mod_ldavis.v3.0.0.js) and ` JSON ` [data](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/data/ldavis_data.json) for further processing.

Before making two copies of this dashboard I hardcoded the value of ` lambda ` to be ` 0.6 `, as per the authors' suggestion for the optimal value and disabled the slider. Both top panels were removed to not distract the participant from interacting with the topic-space mapping. For the same reason, the interface was cleared of all unnecessary scientific labelling.

The [training interface](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/code/lib/controlvis.js) also has the topic size legend removed. To arrange the topic in a grind and make the marks all the same size, I just had to alter the ` JSON ` [file](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/data/control_data.json) with the appropriate coordinates and radius values for the 20 topics.

To produce the ` BubbleTreemap ` [variant](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/code/lib/bubble_x_ldavis.js) I first generated the necessary data structures, by [performing agglomerative clustering](https://nbviewer.org/github/verbal-ale/ldavis-vs-bubblemap/blob/master/code/notebooks/003_bubble_map_preprocessing.ipynb) using Python and exporting the [files](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/data/newsgroups_sup_map.json) in a ` JSON ` format. I then used the code from an earlier implementation of [this](https://github.com/Strategic-Futures-Lab/Topic_Mapping_Interface) ` BubbleTreemap `, provided by my supervisor, to change how the topic marks are drawn in the LDAvis-cloned dashboard.

Finally, I produced a ["Welcome to.." page](https://github.com/verbal-ale/ldavis-vs-bubblemap/blob/master/code/scripts/main.js) that contains a script to be read to the participant at the beginning of the session which also contains buttons for the interface variants.

