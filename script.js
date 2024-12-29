// Dynamic Typing Effect
function typeText(element, text, callback) {
   let i = 0;
   const typingSpeed = 50; // Speed in milliseconds
   const interval = setInterval(() => {
       if (i < text.length) {
           element.innerHTML += text.charAt(i);
           i++;
       } else {
           clearInterval(interval);
           if (callback) callback();
       }
   }, typingSpeed);
}

// Main Chat Functionality
function talk() {
   const know = {
      "who are you": "I'm your AI assistant, here to help you with anything you need!",
      "how are you": "I'm just a bunch of code, but I'm feeling great today. Thanks for asking!",
      "what can you do for me": "I can answer your questions, share some fun facts, or even tell you a joke!",
      "can you tell me a joke": "Why did the JavaScript developer go broke? Because he used up all his 'cache'! 😄",
      "what’s your favorite color": "I love the color of data streams—binary green!",
      "what’s the capital of france": "The capital of France is Paris.",
      "what is javascript": "JavaScript is a programming language used to create interactive effects within web browsers.",
      "tell me a fun fact": "Did you know JavaScript was created in just 10 days?",
      "can you solve math problems": "Of course! Ask me any math question like 'What is 5 + 7?'",
      "can you motivate me": "Remember: 'The only way to achieve the impossible is to believe it is possible.'",
      "can you sing a song": "La la la... Oh wait, I think I’m better at chatting than singing!",
      "Tell me a motivational quote": "Success is not the key to happiness. Happiness is the key to success.",
      "What’s the best advice you can give me?": "Stay curious, keep learning, and never stop exploring your potential.",
      "Tell me a story": "Once upon a time, there was a line of code that wanted to become a chatbot... and here I am!",
      "Do you know any riddles?": "Sure! What has keys but can’t open locks? A keyboard!",
      "What’s the difference between var, let, and const?": "var is function-scoped, while let and const are block-scoped. const is used for constants.",
      "How do I create a function in JavaScript?": "Use this syntax: function myFunction() { /* code */ }.",
      ": What are JavaScript arrays?": "Arrays are used to store multiple values in a single variable, like [1, 2, 3].",
      "what is a variable": "A variable is a container for storing data values. In JavaScript, you can declare variables using 'var', 'let', or 'const'.",
      "what is an array": "An array is a data structure that holds a collection of elements, such as numbers, strings, or objects, in a single variable.",
      "what is a function": "A function is a block of code designed to perform a specific task. You can call it when you need it.",
      "what is an object": "An object is a collection of key-value pairs, used to store related data and methods in JavaScript.",
      "what is a loop": "A loop is a programming construct that repeats a block of code as long as a specified condition is true.",
      "what is recursion": "Recursion is a process where a function calls itself to solve a problem in smaller steps.",
      "what is the difference between == and ===": "'==' compares values after type conversion, while '===' compares both value and type without conversion.",
      "what is an event listener": "An event listener is a function that waits for and responds to user actions, such as clicks or key presses.",
      "what is an api": "An API (Application Programming Interface) allows communication between different software applications.",
      "what is a promise in javascript": "A promise represents a value that may be available now, or in the future, or never, and is used for asynchronous operations.",
      "what is hoisting in javascript": "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.",
      "what is a callback function": "A callback function is a function passed as an argument to another function, to be executed after some operation has completed.",
      "what is the difference between let and const": "'let' allows reassignment, while 'const' does not allow reassignment once a value is assigned.",
      "what is asynchronous programming": "Asynchronous programming allows tasks to run in the background without blocking the main program flow.",
      "what is dom in javascript": "The DOM (Document Object Model) is a programming interface for HTML and XML documents, allowing you to manipulate the structure and content of a webpage.",
      "what is json": "JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.",
      "what is a framework": "A framework is a pre-written set of code that provides tools and structure to simplify development.",
      "what is debugging": "Debugging is the process of identifying and fixing errors in your code.",
      "what is a library in programming": "A library is a collection of pre-written code that you can use to simplify your programming tasks.",
      "what is npm": "NPM (Node Package Manager) is a package manager for JavaScript that helps you install, share, and manage code packages.",
      "thank you": "You’re welcome! Always happy to help.",
      "bye": "Goodbye! Have a wonderful day ahead.",
   };

   const userBox = document.getElementById("userBox");
   const chatLog = document.getElementById("chatLog");
   const userMessage = userBox.value.trim().toLowerCase(); // Normalize user input

   userBox.value = ""; // Clear the input box
   chatLog.innerHTML = ""; // Clear chat log for typing effect

   if (userMessage) {
       if (know[userMessage]) {
           typeText(chatLog, know[userMessage]);
       } else {
           typeText(
               chatLog,
               "Sorry, I didn't understand that. Here are some things you can ask: 'Who are you', 'How are you', 'Bye', etc."
           );
       }
   } else {
       typeText(chatLog, "Please type something for me to respond!");
   }
}
