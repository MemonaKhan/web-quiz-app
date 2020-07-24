var questions = {
    "1": {
        question: "Which one is the capital city of Pakistan?",
        correct: "Islamabad",
        opt : ["Balochistan","Hyderabad","Karachi","Islamabad"],
        answer: "",
    },
    "2": {
        question: "The longest river in Pakistan is",
        correct: "River Sindh",
        opt: ["River Balochistan","River Punjab","River Sindh","River Islamabad"],
        answer: "",
    },
    "3": {
        question: "Which is the national bird of Pakistan?",
        correct: "Chakor",
        opt: ["Chakor","Parrot","Pigeon","Sparrow"],
        answer: "",
    },
    "4": {
        question: "The biggest Musum is located in",
        correct: "Karachi",
        opt: ["Qasimabad","Hyderbad","Badeen","Karachi"],
        answer: "",
    },
    "5": {
        question: "The biggest city of Pakistan?",
        correct: "Karachi",
        opt: ["Lahore","Karachi","Multan","Islamabad"],
        answer: "",
    }
}
var quiz = document.getElementById("quiz");

for (var i = 1; i <= 5; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "ques"+[i]);
    var h2 = document.createElement("h2");
    h2.setAttribute("id", "q"+[i]);
    h2.innerHTML = questions[i].question;
    div.appendChild(h2);

    for (var j = 0; j <= 3; j++) {
        var labl1 = document.createElement("label");
        labl1.setAttribute("for", "opt"+[j]);
        labl1.innerHTML = questions[i].opt[j];
        var option1 = document.createElement("input");
        option1.setAttribute("type", "radio");
        option1.setAttribute("name", "ans"+[i]);
        option1.setAttribute("id", "opt"+[j]);
        
        var line = document.createElement("br");
        div.appendChild(line);
        div.appendChild(option1);
        div.appendChild(labl1);
        div.appendChild(line);

    }

   
    quiz.appendChild(div);
}
console.log(quiz);

