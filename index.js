// script.js

let questions = [
	{
		prompt: `What is Java?`,
		options: [
		    "A programming language",
		    "A markup language",
		    "A database system",
		    "A web browser",
		],
		answer: "A programming language",
	    },
	    {
		prompt: `What is the difference between JDK and JRE in Java?`,
		options: [
		    "JDK includes JRE plus development tools, while JRE includes only the Java runtime environment",
		    "JRE includes JDK plus development tools, while JDK includes only the Java runtime environment",
		    "JDK is used for web development, while JRE is used for desktop applications",
		    "There is no difference, they are the same",
		],
		answer: "JDK includes JRE plus development tools, while JRE includes only the Java runtime environment",
	    },
	    {
		prompt: `Which keyword is used to define a class in Java?`,
		options: [
		    "struct",
		    "object",
		    "class",
		    "void",
		],
		answer: "class",
	    },
	    {
		prompt: `What is the correct way to declare a variable in Java?`,
		options: [
		    "DataType variableName;",
		    "variableName DataType;",
		    "variableName = DataType;",
		    "DataType = variableName;",
		],
		answer: "DataType variableName;",
	    },
	    {
		prompt: `Which data type is used to store a single character in Java?`,
		options: [
		    
		    "int",
		    "String",
		    "boolean",
		    "char",
		],
		answer: "char",
	    },
	    {
		prompt: `What is the purpose of the "static" keyword in Java?`,
		options: [
		    
		    "To specify the access level of a variable or method",
		    "To create a class-level variable or method",
		    "To create an instance variable or method",
		    "To allow a variable or method to be accessed from outside the class",
		],
		answer: "To create a class-level variable or method",
	    },
	    {
		prompt: `Which loop is used to iterate over a collection in Java?`,
		options: [  
		    "for loop",
		    "while loop",
		    "for each loop",
		    "do-while loop",
		],
		answer: "for each loop",
	    },
	    {
		prompt: `What is the purpose of the "this" keyword in Java?`,
		options: [
		    
		    "To refer to the parent object",
		    "To refer to the current object",
		    "To refer to the previous object",
		    "To refer to the global object",
		],
		answer: "To refer to the current object",
	    },
	    {
		prompt: `What is the purpose of the "new" keyword in Java?`,
		options: [
		    "To create an instance of a class",
		    "To define a new class",
		    "To specify the access level of a variable or method",
		    "To create a new array",
		],
		answer: "To create an instance of a class",
	    },
	    {
		prompt: `What is the purpose of the "final" keyword in Java?`,
		options: [
		    "To make a variable, method, or class constant",
		    "To specify the access level of a variable or method",
		    "To create a class-level variable or method",
		    "To allow a variable or method to be accessed from outside the class",
		],
		answer: "To make a variable, method, or class constant",
	    },
	    {
		prompt: `What is the purpose of the "super" keyword in Java?`,
		options:[
		    "To call the constructor of the child class",
		    "To refer to the current object",
		    "To refer to the parent object",
		    "To call the constructor of the parent class",
		],
		answer: "To call the constructor of the parent class",
	    },
	    {
		prompt: `What is the purpose of inheritance in Java?`,
		options: [ 
		    "To restrict access to certain members of a class",
		    "To define a relationship between classes",
		    "To create a new class based on an existing class",
		    "To allow a class to access members of another class",
		],
		answer: "To create a new class based on an existing class",
	    },
	    {
		prompt: `Which access modifier is used to specify that a member can be accessed by any other class?`,
		options: [   
		    "private",
		    "protected",
		    "public",
		    "default",
		],
		answer: "public",
	    },
	    {
		prompt: `What is the purpose of the "abstract" keyword in Java?`,
		options: [
		    "To specify the access level of a variable or method",
		    "To create a class-level variable or method",
		    "To create an abstract class or method",
		    "To allow a variable or method to be accessed from outside the class",
		],
		answer: "To create an abstract class or method",
	    },
	    {
		prompt: `What is the purpose of the "interface" keyword in Java?`,
		options: [  
		    "To specify the access level of a variable or method",
		    "To create a class-level variable or method",
		    "To allow a variable or method to be accessed from outside the class",
		    "To define a contract for classes to implement",
		],
		answer: "To define a contract for classes to implement",
	    },
	    {
		prompt: `Which keyword is used to handle exceptions in Java?`,
		options: [   
		    "if-else",
		    "switch-case",
		    "try-catch",
		    "for-each",
		],
		answer: "try-catch",
	    },
	    {
		prompt: `What is the purpose of the "throw" keyword in Java?`,
		options: [
		    "To manually throw an exception",
		    "To catch an exception",
		    "To specify the access level of a variable or method",
		    "To create a new object",
		],
		answer: "To manually throw an exception",
	    },
	    {
		prompt: `What is the purpose of the "throws" keyword in Java?`,
		options: [
		    
		    "To catch an exception",
		    "To specify the access level of a variable or method",
		    "To declare that a method may throw certain exceptions",
		    "To create a new object",
		],
		answer: "To declare that a method may throw certain exceptions",
	    },
	    {
		prompt: `What is the purpose of the "finally" block in Java?`,
		options: [    
		    "To catch an exception",
		    "To specify the access level of a variable or method",
		    "To create a new object",
		    "To execute code after a try-catch block, regardless of whether an exception is thrown or caught",
		],
		answer: "To execute code after a try-catch block, regardless of whether an exception is thrown or caught",
	    },
	    {
		prompt: `What is the purpose of the "package" keyword in Java?`,
		options: [
		    "To specify the access level of a variable or method",
		    "To create a new object",
		    "To organize classes into namespaces",
		    "To declare a new class",
		],
		answer: "To organize classes into namespaces",
	    },
	    {
		prompt: `Which data structure is commonly used to implement a queue in Java?`,
		options: [
		    "ArrayList",
		    "HashMap",
		    "Stack",
		    "LinkedList",
		],
		answer: "LinkedList",
	    },
	    {
		prompt: `What is the purpose of the "Map" interface in Java?`,
		options: [    
		    "To store elements in a sorted order",
		    "To store elements in a stack-like manner",
		    "To represent a collection of key-value pairs",
		    "To store elements in a queue-like manner",
		],
		answer: "To represent a collection of key-value pairs",
	    },
	    {
		prompt: `What is the purpose of the "Set" interface in Java?`,
		options: [
		   
		    "To store elements in a sorted order",
		    "To represent a collection of unique elements",
		    "To store elements in a stack-like manner",
		    "To store elements in a queue-like manner",
		],
		answer: "To represent a collection of unique elements",
	    },
	    {
		prompt: `What is the purpose of the "List" interface in Java?`,
		options: [
		    "To represent an ordered collection of elements",
		    "To store elements in a sorted order",
		    "To store elements in a stack-like manner",
		    "To store elements in a queue-like manner",
		],
		answer: "To represent an ordered collection of elements",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
