var questions = {
    "1": {
        question: "Q.1 Which one is the capital city of Pakistan?",
        correct: "Islamabad",
        opt : ["Balochistan","Hyderabad","Karachi","Islamabad"],
        answer: "",
    },
    "2": {
        question: "Q.2 The longest river in Pakistan is",
        correct: "River Sindh",
        opt: ["River Balochistan","River Punjab","River Sindh","River Islamabad"],
        answer: "",
    },
    "3": {
        question: "Q.3 Which is the national bird of Pakistan?",
        correct: "Chakor",
        opt: ["Chakor","Parrot","Pigeon","Sparrow"],
        answer: "",
    },
    "4": {
        question: "Q.4 The biggest Musum is located in",
        correct: "Karachi",
        opt: ["Qasimabad","Hyderbad","Badeen","Karachi"],
        answer: "",
    },
    "5": {
        question: "Q.5 The biggest city of Pakistan?",
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
        option1.setAttribute("id", "opt"+[i]+[j]);
        
        var line = document.createElement("br");
        div.appendChild(line);
        div.appendChild(option1);
        div.appendChild(labl1);
        div.appendChild(line);

    }
    var hr = document.createElement("hr");

   div.appendChild(hr);
    quiz.appendChild(div);
}
console.log(quiz);

var roll, fname, lname, email, count=0;
function submit(){
    roll = document.getElementById("roll-no").value;
    fname = document.getElementById("first-name").value;
    fname = document.getElementById("first-name").value;
    email = document.getElementById("email").value;
    if(document.getElementById("opt13").checked==true){
        count++;
    }

}
console.log(count);
var result = document.getElementById("result");

var table = document.getElementById("res-tab");
// console.log(table.nodeName())
var rollNo = document.getElementById("rn");
var fullName = document.getElementById("name");
var emailId = document.getElementById("eml");
var totalMarks = document.getElementById("total");
var marksObtained = document.getElementById("marks");
var percentage = document.getElementById("perc");