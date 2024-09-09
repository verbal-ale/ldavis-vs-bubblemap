/* Main JS script for the experimental stage */
let data;


async function main(){
  
    /* --- PAGE TITLE ---*/
    const titleContainer = createElement('div', 'element_container');
    const title = createElement('h1', null, 'Welcome to Topic Modelling Interface Evaluation');

    /* --- EXPERIMENT OVERVIEW ---*/
    // title
    const overviewContainer = createElement('div', 'element_container');
    const overviewTitle = createElement('h2', null, 'Evaluation Overview');

    // "What is Topic Modelling?"
    const overviewQ1 = createElement('h4', 'first_title', 'What is Topic Modelling?');
    const overviewQ1P1Str = 'Topic Modelling is a form of computer assisted text analysis. An algorithm processes a huge collection of text documents and uncovers common themes and topics between them.  '
    const overviewQ1P1 = createElement('p', 'text', overviewQ1P1Str);
    const overviewQ1P2Str = 'The algorithm produces a set of topics, which are simply put, just lists of keywords. Each individual keyword has an "importance score" associated with it. Keywords are ordered, so that more important words come first.';
    const overviewQ1P2 = createElement('p', 'text', overviewQ1P2Str);
    const overviewQ1P3Str = 'E.g.: We have two topics ordered as such: [cat, dog, food] and [food, cat, dog] we can safely assume the first topic is more generally about "pets" and the second one specifically about "pet food".';
    const overviewQ1P3 = createElement('p', 'text', overviewQ1P3Str);
    const overviewQ1P4Str = 'Topics can be grouped into bigger categories, a.k.a. - themes. Topics [beef, steak, quality] and [cow, milk, angus] could be grouped into a common category - "Cattle farming".';
    const overviewQ1P4 = createElement('p', 'text', overviewQ1P4Str);



    // "What will you be evaluating?"
    const overviewQ2 = createElement('h4', null, 'What will you be evaluating?');
    const overviewQ2P1Str = 'There is different software available to create visual interactive charts using these numbers, that employ different visualising strategies.';
    const overviewQ2P2Str = 'You will be shown the results of topic modelling being performed on discussion forum messages from the late 80s to early 90s. These will be visualised using different approaches. You\'ll be asked to perform a few tasks to investigate the themes (or categories) present in the collection. In the end you will give an evaluation of your experience.';
    const overviewQ2P1 = createElement('p', 'text', overviewQ2P1Str);
    const overviewQ2P2 = createElement('p', 'text', overviewQ2P2Str);


    // "How do I use these interfaces?"
    const overviewQ3 = createElement('h4', null, 'How do I use these interfaces?');
    const overviewQ3P1Str = 'The interfaces are nearly identical. They consist of two parts: on the left topics are represented by circles. On the right are the keywords ordered by importance. The only difference is the way these "topic circles" are displayed on the screen.';
    const overviewQ3P2Str = 'Hovering over a topic will change its colour indicating it is "being" selected. Clicking on it will confirm this selection, even if you move the mouse pointer away. Clicking on the white space will clear the selection.';
    const overviewQ3P1 = createElement('p', 'text', overviewQ3P1Str);
    const overviewQ3P2 = createElement('p', 'text', overviewQ3P2Str);

    const imagesContainer = createElement('div', 'images_container', null); // ADD IMAGE EXAMPLES
    const topic_img = createElement('img', null, null);
    topic_img.src = 'https://verbal-ale.github.io/ldavis-vs-bubblemap/src/topic_example.png';
    const overviewQ3L1 = createElement('p', 'label', 'Unselected / Selected Topic'); 
    const keywords_img = createElement('img', null, null);
    keywords_img.src = 'https://verbal-ale.github.io/ldavis-vs-bubblemap/src/keywords_example.png'; 
    const overviewQ3L2 = createElement('p', 'label', 'List of ordered keywords');


    // "What is exactly is being tested here?"
    const overviewQ4 = createElement('h4', null, 'What exactly is being tested here?');
    const overviewQ4P1Str = 'Algorithms are not perfect and they produce some errors. We are not examining the "clarity" of topics themselves. We are interested in which interface helps you understand them better.';
    const overviewQ4P2Str = 'Text analytics can be highly subjective, so when undertaking the tasks asked of you, please keep in mind there are NO WRONG ANSWERS.';
    const overviewQ4P1 = createElement('p', 'text', overviewQ4P1Str);
    const overviewQ4P2 = createElement('p', 'text', overviewQ4P2Str);

    // "How will the experiment run?"
    const overviewQ5 = createElement('h4', null, 'How will the experiment run?');

    // "Can I withdraw my participation?"

    // "Are you keeping any of my personal data?"

    // Append elements to their parents
    titleContainer.appendChild(title);

    overviewContainer.appendChild(overviewTitle);
    overviewContainer.appendChild(overviewQ1);          // "What is Topic Modelling?"
    overviewContainer.appendChild(overviewQ1P1);
    overviewContainer.appendChild(overviewQ1P2);
    overviewContainer.appendChild(overviewQ1P3);
    overviewContainer.appendChild(overviewQ1P4);

    overviewContainer.appendChild(overviewQ2);
    overviewContainer.appendChild(overviewQ2P1);
    overviewContainer.appendChild(overviewQ2P2);       // "What will you be evaluating?"

    overviewContainer.appendChild(overviewQ3);       
    overviewContainer.appendChild(overviewQ3P1);       // "How do I use these interfaces?"
    overviewContainer.appendChild(overviewQ3P2);
    imagesContainer.appendChild(topic_img);
    imagesContainer.appendChild(overviewQ3L1);
    imagesContainer.appendChild(keywords_img);
    imagesContainer.appendChild(overviewQ3L2);
    overviewContainer.appendChild(imagesContainer);

    overviewContainer.appendChild(overviewQ4);
    overviewContainer.appendChild(overviewQ4P1);       // "What is exactly is being tested here?"
    overviewContainer.appendChild(overviewQ4P2);

    // Append containers to document
    document.body.appendChild(titleContainer);
    document.body.appendChild(overviewContainer);
    
}

main();

// Add an event listeners to navigation buttons
document.getElementById('ldavis-button').addEventListener('click', function() {
    window.location.href = '/code/html/ldavis_dashboard.html';
});
document.getElementById('control-button').addEventListener('click', function() {
    window.location.href = '/code/html/control_dashboard.html';
});
document.getElementById('buuble-map-button').addEventListener('click', function() {
    window.location.href = '/code/html/bubble_map_dashboard.html';
});



function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}
