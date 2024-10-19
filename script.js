document.getElementById('startQuizBtn').addEventListener('click', function() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'flex';
});

document.getElementById('htmlCategory').addEventListener('click', function() {
    showCategory('HTML', htmlContent, htmlQuestions);
});

document.getElementById('cssCategory').addEventListener('click', function() {
    showCategory('CSS', cssContent, cssQuestions);
});

document.getElementById('jsCategory').addEventListener('click', function() {
    showCategory('JavaScript', jsContent, jsQuestions);
});

function showCategory(title, description, questions) {
    document.getElementById('categoryTitle').innerText = title;
    document.getElementById('categoryDescription').innerText = description;
    renderQuiz(questions);
}

function renderQuiz(questions) {
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = '';
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `<strong>Q${index + 1}: ${q.question}</strong>`;
        
        q.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('quiz-option');
            optionDiv.innerText = option;

            // Add event listener for option click
            optionDiv.addEventListener('click', function() {
                handleAnswer(optionDiv, option, q.answer, questionDiv);
            });

            questionDiv.appendChild(optionDiv);
        });

        quizContent.appendChild(questionDiv);
    });
}

// Function to handle answer selection
function handleAnswer(optionDiv, selectedOption, correctAnswer, questionDiv) {
    // Disable further selections for this question
    const options = questionDiv.querySelectorAll('.quiz-option');
    options.forEach(option => option.style.pointerEvents = 'none');

    // Check if the selected option is correct
    if (selectedOption === correctAnswer) {
        optionDiv.style.backgroundColor = 'green';
        optionDiv.style.color = 'white';
    } else {
        optionDiv.style.backgroundColor = 'red';
        optionDiv.style.color = 'white';

        // Highlight the correct answer in green
        options.forEach(option => {
            if (option.innerText === correctAnswer) {
                option.style.backgroundColor = 'green';
                option.style.color = 'white';
            }
        });
    }
}

// Expanded content for each category
const htmlContent = `HTML (HyperText Markup Language) is the foundation of web development. It defines the structure and content of a webpage, using a series of elements represented by tags. Tags like <p> for paragraphs or <h1> for headings help format the text. HTML is easy to learn and is essential for anyone looking to create websites. Each HTML file begins with <!DOCTYPE html> to specify the document type and ensure proper rendering in the browser.

An HTML document is structured using the <html>, <head>, and <body> elements. The <head> section contains metadata like the page title (<title>) and links to external resources such as stylesheets or JavaScript files. The content of the page that users interact with is placed within the <body> section. Understanding this structure is fundamental to creating any webpage.

 Tags are the building blocks of HTML, but many tags also have attributes that provide additional information. For example, the <img> tag requires a src attribute to specify the image source and an alt attribute for alternate text. The <a> tag, used for hyperlinks, has an href attribute that defines the URL. Attributes are always written within the opening tag and provide further customization of the element's behavior or appearance.

Forms are used to collect input from users. A form is created with the <form> element, and inside it, you can include input fields (<input>), dropdowns (<select>), and buttons (<button>). Forms typically have an action attribute, which specifies where the form data will be sent, and a method attribute, which defines how the data will be transmitted (usually GET or POST). Learning to build forms is crucial for any interactive website

Semantic HTML uses tags that clearly describe their purpose both to the browser and the developer. For example, <article>, <section>, <nav>, and <footer> all provide meaning beyond just grouping content. This improves both the accessibility and SEO of a webpage. Unlike <div> or <span>, which only group elements, semantic tags enhance the clarity of the document's structure.

HTML supports the embedding of various types of media, such as images, audio, and video. The <img> tag embeds images, while the <video> and <audio> tags embed multimedia content. You can also embed external content such as maps or other websites using the <iframe> tag. Embedding rich media enhances the interactivity and user experience on a webpage.`;

const cssContent = `CSS (Cascading Style Sheets) is a style sheet language used to control the appearance of HTML elements on a webpage. It allows developers to separate content from design by defining styles such as colors, fonts, layouts, and spacing. With CSS, you can change how an entire website looks by modifying just one file. This separation makes the development process more efficient and maintains consistency across pages.
 
CSS works by applying styles to HTML elements. It uses a system of selectors to target specific elements and then applies properties to those elements. For example, the color property changes the text color, and the background-color property changes the background color of an element. You can link CSS to an HTML document using the <link> element in the <head> section or by using inline styles directly within HTML elements, although external stylesheets are preferred for better organization.

Selectors in CSS are used to target specific HTML elements you want to style. The most common selector is the element selector (e.g., p { color: blue; }), which targets all <p> elements on the page. Other selectors include class selectors (.classname), which target elements with a specific class, and ID selectors (#idname), which target elements with a specific ID. There are also more advanced selectors like attribute selectors and pseudo-classes for targeting elements based on their attributes or state.

Understanding the CSS box model is crucial for laying out web pages. Every HTML element is treated as a box, consisting of four main parts: content, padding, border, and margin. The content is the actual text or image, the padding surrounds the content, the border surrounds the padding, and the margin creates space between the element and other elements. The box model helps you control the spacing and alignment of elements on a page.

Modern CSS provides powerful layout systems like Flexbox and Grid, which make it easier to create complex, responsive layouts. Flexbox is a one-dimensional layout model that allows you to align items in a row or column and distribute space dynamically. CSS Grid, on the other hand, is a two-dimensional layout system, perfect for creating grid-based designs. These systems have largely replaced older techniques like float-based layouts.`;

const jsContent = ` Introduction to JavaScript JavaScript is a versatile, high-level programming language that is essential for web development. It allows developers to create interactive and dynamic web pages, making it a cornerstone technology alongside HTML and CSS. Initially developed to add interactivity to websites, JavaScript has evolved to become a powerful tool for building complete applications on both the client and server sides. Understanding the fundamentals of JavaScript is crucial for anyone looking to pursue a career in web development or programming in general.

Variables and Data Types In JavaScript, variables are used to store data values. Developers can declare variables using the keywords var, let, and const. Each keyword serves different purposes: var is function-scoped, let is block-scoped, and const defines constants that cannot be reassigned. JavaScript supports various data types, including strings, numbers, booleans, objects, and arrays. Understanding how to declare and manipulate variables and recognizing different data types is foundational for building more complex applications.

Control Structures Control structures, such as loops and conditional statements, are essential for managing the flow of a JavaScript program. Conditional statements like if, else if, and switch allow developers to execute specific code blocks based on certain conditions. Loops, including for, while, and do...while, enable repetitive tasks and iterations over data sets. Mastering these control structures helps programmers create dynamic applications that respond to user input and data changes efficiently.

Functions and Scope Functions are reusable blocks of code that perform specific tasks. JavaScript supports both named and anonymous functions, as well as arrow functions, which offer a concise syntax. Understanding function scope is critical, as it defines the visibility of variables declared within functions. The concept of scope, including global and local variables, plays a significant role in managing state and data flow within applications, making it an essential topic for developers to grasp.

Objects and Arrays Objects and arrays are fundamental data structures in JavaScript. Objects are collections of key-value pairs, allowing developers to store related data and functions in a single entity. Arrays, on the other hand, are ordered collections of values, making them ideal for storing lists. Learning how to create, manipulate, and iterate over objects and arrays is crucial for handling data in JavaScript, enabling developers to build complex applications that manage dynamic data efficiently.`;

const htmlQuestions = [
    
    { question: "Which tag is used to create a table in HTML?", options: ["<tab>", "<table>", "<tbl>", "<tr>"],  answer: "<table>" },
    { question: "Which HTML attribute is used to specify a link's destination?", options: ["link", "src",  "href", "url"], answer: "href" },
    { question: "Which of the following tags is used to create a numbered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ol>" },
    { question: "Which HTML tag is used to embed an image?", options: ["<img>", "<picture>", "<media>","<src>"], answer: "<img>" },
    { question: "What does the alt attribute in the <img> tag specify?", options: ["The alignment of the image", "The alternate text if the image cannot be displayed", "The animation of the image","The URL of the image"], answer: "The alternate text if the image cannot be displayed" },
    { question: "Which tag is used to define the largest heading in HTML?", options: ["<h1>","<head>","<h6>","<header>" ], answer: "<h1>" },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<lb>","<br>","<break>","<line>"], answer: "<br>" },
    { question: "What is the purpose of the <form>tag in HTML?", options: [ "To define the layout of the page","To create a container for text","To create an area for collecting user input","To display images"], answer: "To create an area for collecting user input" },
    { question: "Which HTML tag is used to define a section of navigation links?", options: ["<nav>","<section>","<footer>","<aside>" ], answer: target="<nav>" },
];

const cssQuestions = [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which HTML tag is used to link an external CSS file to a webpage?", options: ["<style>","<script>","<link>","<css>"], answer: "<link>" },
    { question: "Which CSS property is used to change the text color of an element?", options: ["color", "font-color", "text-color"], answer: "color" },
    { question: "How do you select an element with the ID 'header' in CSS?", options: ["#header","header","header","*header"], answer: "#header" },
    { question: "What is the default value of the position property?", options: ["static", "relative", "absolute"], answer: "static" },
    { question: "Which CSS property controls the background color?", options: ["background-color", "bg-color", "color"], answer: "background-color" },
    { question: "What is the default display value for the <div> element?", options: ["inline", "block", "inline-block", "none"], answer: "block" },
    { question: "Which CSS property is used to add space inside an element’s border?", options: ["margin","padding","border-spacing","spacing"], answer: "padding" },
    { question: "What is the purpose of a media query in CSS?", options: ["To optimize images", "To make the page interactive","To apply different styles for different devices or screen sizes","To style multimedia content"], answer: "To apply different styles for different devices or screen sizes" },
    { question: "Which CSS layout method is used to align items in rows or columns?", options: [ "Flexbox","Float","Grid","Block"], answer: " Flexbox" },
];

const jsQuestions = [
    { question: "What is the correct way to declare a variable in JavaScript?", options: ["variable name", "var name","declare name","let name"], answer: "var name" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "<!-- -->"], answer: "//" },
    { question: "Which function is used to display messages in the console?", options: ["console.log()", "print()", "alert()"], answer: "console.log()" },
    { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Management", "Digital Object Memory"], answer: "Document Object Model" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "const", "let"], answer: "var" },
    { question: "Which method is used to add an element to an array?", options: ["push()", "add()", "insert()"], answer: "push()" },
    { question: "Which operator is used for strict equality?", options: ["===", "==", "="], answer: "===" },
    { question: "Which method is used to find the length of a string?", options: [".length", ".size", ".count"], answer: ".length" },
    { question: "Which object represents the browser window?", options: ["window", "document", "navigator"], answer: "window" },
    { question: "Which JavaScript keyword is used to define a function?", options: ["function", "def", "fn"], answer: "function" },
];
