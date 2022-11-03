// HTML QUIZ

let htmlquiz = [
  {
    ques: "Q1: What does HTML stand for?",
    ans1: "Home Tool Markup Language",
    ans2: "Hyper Text Markup Language",
    ans3: "HyperLinks and Text Markup Language",
  },
  {
    ques: "Q2: Choose the correct HTML element for the smallest heading:",
    ans1: "h6",
    ans2: "head",
    ans3: "heading",
  },
  {
    ques: "Q3: What is the correct HTML element for inserting a line break?",
    ans1: "break",
    ans2: "br",
    ans3: "Ib",
  },
  {
    ques: "Q4: What is the correct HTML for adding a background color?",
    ans1: "body bg='yellow'",
    ans2: "background Yellow background",
    ans3: "body style='background-color:yellow;'",
  },
  {
    ques: "Q5: Which character is used to indicate an end tag?",
    ans1: "*",
    ans2: "/",
    ans3: ">",
  },
  {
    ques: "Q6: Inline elements are normally displayed without starting a new line.",
    ans1: "True",
    ans2: "False",
    ans3: "All of the Above",
  },
  {
    ques: "Q7: What is the correct HTML for making a text area?",
    ans1: "textarea",
    ans2: "input type='textbox'",
    ans3: "input type='textarea",
  },
  {
    ques: "Q8: HTML comments start with !-- and end with --'",
    ans1: "True",
    ans2: "False",
    ans3: "None",
  },
  {
    ques: "Q9: Which HTML element defines the title of a document?",
    ans1: "head",
    ans2: "meta",
    ans3: "title",
  },
  {
    ques: "Q10: Which HTML element is used to specify a footer for a document or section?",
    ans1: "section",
    ans2: "footer",
    ans3: "bottom",
  },
  { ques: "Q11: yes yes" },
];

let cssquiz = [
  {
    ques: "Q1: What does CSS stand for?",
    ans1: "Computer style sheet",
    ans2: "Creative style sheet",
    ans3: "Cascading style sheet",
  },
  {
    ques: "Q2: Where in an HTML document is the correct place to refer to an external style sheet?",
    ans1: "At the end of the document",
    ans2: "In the head section",
    ans3: "in the body section",
  },
  {
    ques: "Q3: Which HTML tag is used to define an internal style sheet?",
    ans1: "css",
    ans2: "script",
    ans3: "style",
  },
  {
    ques: "Q4: Which HTML attribute is used to define inline styles?",
    ans1: "font",
    ans2: "class",
    ans3: "style",
  },
  {
    ques: "Q5: Which property is used to change the background color?",
    ans1: "background-color",
    ans2: "color",
    ans3: "bgcolor",
  },
  {
    ques: "Q6: Which CSS property is used to change the text color of an element?",
    ans1: "text-color",
    ans2: "color",
    ans3: "fgcolor",
  },
  {
    ques: "Q7: Which property is used to change the font of an element?",
    ans1: "font-family",
    ans2: "font-style",
    ans3: "font-weight",
  },
  {
    ques: "Q8: Which property is used to change the left margin of an element?",
    ans1: "indent",
    ans2: "padding-left",
    ans3: "margin-left",
  },
  {
    ques: "Q9: How do you select an element with id 'demo'?",
    ans1: "*demo",
    ans2: "#demo",
    ans3: ".demo",
  },
  {
    ques: "Q10: How do you select elements with class name 'test'?",
    ans1: ".test",
    ans2: "#test",
    ans3: "test",
  },
  { ques: "Q11: No No" },
];

let jsquiz = [
  {
    ques: "Q1: Inside which HTML element do we put the JavaScript?",
    ans1: "js",
    ans2: "javascript",
    ans3: "script",
  },
  {
    ques: "Q2: Where is the correct place to insert a JavaScript?",
    ans1: "The body section",
    ans2: "The head section",
    ans3: "both the head section and the body section are correct",
  },
  {
    ques: "Q3: How do you create a function in JavaScript?",
    ans1: "function:myFunction()",
    ans2: "function myFunction()",
    ans3: "function = myFunction()",
  },
  {
    ques: "Q4: How do you call a function named 'myFunction'?",
    ans1: "call function myFunction()'",
    ans2: "myFunction()",
    ans3: "call myFunction()",
  },
  {
    ques: "Q5: How to write an IF statement in JavaScript?",
    ans1: "if i = 5 then",
    ans2: "if i == 5 then",
    ans3: "if(i === 5)",
  },
  {
    ques: "Q6: How does a WHILE loop start?",
    ans1: "while(i <= 10)",
    ans2: "while i = 1 to 10",
    ans3: "while(i <= 10; i++)",
  },
  {
    ques: "Q7: How do you round the number 7.25, to the nearest integer?",
    ans1: "Math.rnd(7.25)",
    ans2: "round(7.25)",
    ans3: "Math.round(7.25)",
  },
  {
    ques: "Q8: How can you detect the client's browser name?",
    ans1: "navigator.appName",
    ans2: "client.navName",
    ans3: "browser.name",
  },
  {
    ques: "Q9: Which event occurs when the user clicks on an HTML element?",
    ans1: "onmouseclick",
    ans2: "onclick",
    ans3: "onchange",
  },
  {
    ques: "Q10: How do you declare a JavaScript variable?",
    ans1: "var carName;",
    ans2: "v carName;",
    ans3: "variable carName;",
  },
  { ques: "Q11: yup" },
];

// *************************** html print quiz data *****************************

let startquiz = document.getElementById("startquiz");
let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
startquiz.addEventListener("click", StartQuizFunc);
function StartQuizFunc() {
  document.body.style.backgroundColor = "#fff";
  document.querySelector(".mutilpe_quiz").style.visibility = "visible";
  startquiz.style.display = "none";
  html.style.display = "block";
  css.style.display = "block";
  js.style.display = "block";
}

// Click on the HTML Button
let htmlradio1 = document.getElementById("ans1");
let htmlradio2 = document.getElementById("ans2");
let htmlradio3 = document.getElementById("ans3");
let htmlQuestion = document.getElementById("htmlQuestion");
let htmlfirstoption = document.getElementById("htmlfirstoption");
let htmlsecondoption = document.getElementById("htmlsecondoption");
let htmlthirdoption = document.getElementById("htmlthirdoption");
html.addEventListener("click", StartHTMLQuiz);
var htmlcountlist = 0;
function StartHTMLQuiz() {
  document.querySelector(".htmlQues-Ans").style.display = "block";
  document.querySelector(".htmlbox").style.display = "none";
  document.querySelector(".cssbox").style.display = "none";
  document.querySelector(".jsbox").style.display = "none";
  document.getElementById("htmlnextquestion").style.display = "block";
  document.querySelector(".radiobutton1").style.visibility = "visible";
  document.querySelector(".radiobutton2").style.visibility = "visible";
  document.querySelector(".radiobutton3").style.visibility = "visible";
  htmlQuestion.innerHTML = htmlquiz[htmlcountlist].ques;
  htmlfirstoption.innerHTML = htmlquiz[htmlcountlist].ans1;
  htmlsecondoption.innerHTML = htmlquiz[htmlcountlist].ans2;
  htmlthirdoption.innerHTML = htmlquiz[htmlcountlist].ans3;
}
// Click on the html quiz next question button
let htmlnextquestion = document.getElementById("htmlnextquestion");
htmlnextquestion.addEventListener("click", htmlNextQues);

var htmlanswer = document.querySelectorAll(".htmlanswer");

let htmlscore = 0;
var answer;
function htmlNextQues() {
  htmlanswer.forEach((element) => {
    if (element.checked) {
      answer = element.id;
    }
  });

  console.log("User Select : " + answer);

  let elementAns;

  if (htmlQuestion.innerHTML === "Q1: What does HTML stand for?") {
    elementAns = "ans2";
  } else if (
    htmlQuestion.innerHTML ===
    "Q2: Choose the correct HTML element for the smallest heading:"
  ) {
    elementAns = "ans1";
  } else if (
    htmlQuestion.innerHTML ===
    "Q3: What is the correct HTML element for inserting a line break?"
  ) {
    elementAns = "ans2";
  } else if (
    htmlQuestion.innerHTML ===
    "Q4: What is the correct HTML for adding a background color?"
  ) {
    elementAns = "ans3";
  } else if (
    htmlQuestion.innerHTML ===
    "Q5: Which character is used to indicate an end tag?"
  ) {
    elementAns = "ans2";
  } else if (
    htmlQuestion.innerHTML ===
    "Q6: Inline elements are normally displayed without starting a new line."
  ) {
    elementAns = "ans1";
  } else if (
    htmlQuestion.innerHTML ===
    "Q7: What is the correct HTML for making a text area?"
  ) {
    elementAns = "ans1";
  } else if (
    htmlQuestion.innerHTML ===
    "Q8: HTML comments start with !-- and end with --'"
  ) {
    elementAns = "ans2";
  } else if (
    htmlQuestion.innerHTML ===
    "Q9: Which HTML element defines the title of a document?"
  ) {
    elementAns = "ans3";
  } else if (
    htmlQuestion.innerHTML ===
    "Q10: Which HTML element is used to specify a footer for a document or section?"
  ) {
    elementAns = "ans2";
  }
  console.log("Correct Ans : " + elementAns);

  if (answer === elementAns) {
    htmlscore++;
  } else {
    console.log("not increase");
  }

  htmlcountlist++;
  htmlQuestion.innerHTML = htmlquiz[htmlcountlist].ques;
  htmlfirstoption.innerHTML = htmlquiz[htmlcountlist].ans1;
  htmlsecondoption.innerHTML = htmlquiz[htmlcountlist].ans2;
  htmlthirdoption.innerHTML = htmlquiz[htmlcountlist].ans3;
  htmlradio1.checked = false;
  htmlradio2.checked = false;
  htmlradio3.checked = false;

  if (htmlQuestion.innerHTML === "Q11: yes yes") {
    document.getElementById("htmlnextquestion").style.display = "none";
    document.querySelector(".htmlQues-Ans").style.display = "none";
    document.getElementById("submithtmlquiz").style.display = "block";
    // document.querySelector(".showscore").style.display = "block";
  }
  //
}

// ********************************* html print data successfully *********************************************

// *************************** css print quiz data *****************************

// Click on the CSS Button
let cssradio0 = document.getElementById("ansone");
let cssradio1 = document.getElementById("anstwo");
let cssradio2 = document.getElementById("ansthree");
let cssQuestion = document.getElementById("cssQuestion");
let cssfirstoption = document.getElementById("cssfirstoption");
let csssecondoption = document.getElementById("csssecondoption");
let cssthirdoption = document.getElementById("cssthirdoption");
css.addEventListener("click", StartCssQuiz);
var csscountlist = 0;
function StartCssQuiz() {
  document.querySelector(".cssQues-Ans").style.display = "block";
  document.querySelector(".htmlbox").style.display = "none";
  document.querySelector(".cssbox").style.display = "none";
  document.querySelector(".jsbox").style.display = "none";
  document.getElementById("cssnextquestion").style.display = "block";
  document.querySelector(".cssradiobutton1").style.visibility = "visible";
  document.querySelector(".cssradiobutton2").style.visibility = "visible";
  document.querySelector(".cssradiobutton3").style.visibility = "visible";
  cssQuestion.innerHTML = cssquiz[csscountlist].ques;
  cssfirstoption.innerHTML = cssquiz[csscountlist].ans1;
  csssecondoption.innerHTML = cssquiz[csscountlist].ans2;
  cssthirdoption.innerHTML = cssquiz[csscountlist].ans3;
}
// Click on the html quiz next question button
let cssnextquestion = document.getElementById("cssnextquestion");
let cssanswer = document.querySelectorAll(".cssanswer");
cssnextquestion.addEventListener("click", cssNextQues);
let cssAns;
let cssscore = 0;
function cssNextQues() {
  cssanswer.forEach((element) => {
    if (element.checked) {
      cssAns = element.id;
    }
  });

  let cssEleAns;
  if (cssQuestion.innerHTML === "Q1: What does CSS stand for?") {
    cssEleAns = "ansthree";
  } else if (
    cssQuestion.innerHTML ===
    "Q2: Where in an HTML document is the correct place to refer to an external style sheet?"
  ) {
    cssEleAns = "anstwo";
  } else if (
    cssQuestion.innerHTML ===
    "Q3: Which HTML tag is used to define an internal style sheet?"
  ) {
    cssEleAns = "ansthree";
  } else if (
    cssQuestion.innerHTML ===
    "Q4: Which HTML attribute is used to define inline styles?"
  ) {
    cssEleAns = "ansthree";
  } else if (
    cssQuestion.innerHTML ===
    "Q5: Which property is used to change the background color?"
  ) {
    cssEleAns = "ansone";
  } else if (
    cssQuestion.innerHTML ===
    "Q6: Which CSS property is used to change the text color of an element?"
  ) {
    cssEleAns = "anstwo";
  } else if (
    cssQuestion.innerHTML ===
    "Q7: Which property is used to change the font of an element?"
  ) {
    cssEleAns = "ansone";
  } else if (
    cssQuestion.innerHTML ===
    "Q8: Which property is used to change the left margin of an element?"
  ) {
    cssEleAns = "ansthree";
  } else if (
    cssQuestion.innerHTML === "Q9: How do you select an element with id 'demo'?"
  ) {
    cssEleAns = "anstwo";
  } else if (
    cssQuestion.innerHTML ===
    "Q10: How do you select elements with class name 'test'?"
  ) {
    cssEleAns = "ansone";
  }

  if (cssAns === cssEleAns) {
    cssscore++;
  } else {
    console.log("Css Score not increase");
  }

  csscountlist++;
  cssQuestion.innerHTML = cssquiz[csscountlist].ques;
  cssfirstoption.innerHTML = cssquiz[csscountlist].ans1;
  csssecondoption.innerHTML = cssquiz[csscountlist].ans2;
  cssthirdoption.innerHTML = cssquiz[csscountlist].ans3;
  cssradio0.checked = false;
  cssradio1.checked = false;
  cssradio2.checked = false;
  if (cssQuestion.innerHTML === "Q11: No No") {
    document.getElementById("cssnextquestion").style.display = "none";
    document.querySelector(".cssQues-Ans").style.display = "none";
    document.getElementById("submitcssquiz").style.display = "block";
  }
}

// ********************************* css print data successfully *********************************************

// *************************** js print quiz data *****************************

// Click on the JS Button
let jsradio0 = document.getElementById("anss1");
let jsradio1 = document.getElementById("anss2");
let jsradio2 = document.getElementById("anss3");
let jsQuestion = document.getElementById("jsQuestion");
let jsfirstoption = document.getElementById("jsfirstoption");
let jssecondoption = document.getElementById("jssecondoption");
let jsthirdoption = document.getElementById("jsthirdoption");
js.addEventListener("click", StartJsQuiz);
var jscountlist = 0;
function StartJsQuiz() {
  document.querySelector(".jsQues-Ans").style.display = "block";
  document.querySelector(".htmlbox").style.display = "none";
  document.querySelector(".cssbox").style.display = "none";
  document.querySelector(".jsbox").style.display = "none";
  document.getElementById("jsnextquestion").style.display = "block";
  document.querySelector(".jsradiobutton1").style.visibility = "visible";
  document.querySelector(".jsradiobutton2").style.visibility = "visible";
  document.querySelector(".jsradiobutton3").style.visibility = "visible";
  jsQuestion.innerHTML = jsquiz[jscountlist].ques;
  jsfirstoption.innerHTML = jsquiz[jscountlist].ans1;
  jssecondoption.innerHTML = jsquiz[jscountlist].ans2;
  jsthirdoption.innerHTML = jsquiz[jscountlist].ans3;
}
// Click on the html quiz next question button
let jsnextquestion = document.getElementById("jsnextquestion");
let jsanswer = document.querySelectorAll(".jsanswer");
jsnextquestion.addEventListener("click", jsNextQues);
let jsAns;
let jsscore = 0;

function jsNextQues() {
  jsanswer.forEach((element) => {
    if (element.checked) {
      jsAns = element.id;
    }
  });

  let jsEleAns;

  // ans3
  // ans1
  // ans3
  // ans1
  // ans2
  // ans1

  if (
    jsQuestion.innerHTML ===
    "Q1: Inside which HTML element do we put the JavaScript?"
  ) {
    jsEleAns = "anss3";
  } else if (
    jsQuestion.innerHTML ===
    "Q2: Where is the correct place to insert a JavaScript?"
  ) {
    jsEleAns = "anss3";
  } else if (
    jsQuestion.innerHTML === "Q3: How do you create a function in JavaScript?"
  ) {
    jsEleAns = "anss2";
  } else if (
    jsQuestion.innerHTML ===
    "Q4: How do you call a function named 'myFunction'?"
  ) {
    jsEleAns = "anss2";
  } else if (
    jsQuestion.innerHTML === "Q5: How to write an IF statement in JavaScript?"
  ) {
    jsEleAns = "anss3";
  } else if (jsQuestion.innerHTML === "Q6: How does a WHILE loop start?") {
    jsEleAns = "anss1";
  } else if (
    jsQuestion.innerHTML ===
    "Q7: How do you round the number 7.25, to the nearest integer?"
  ) {
    jsEleAns = "anss3";
  } else if (
    jsQuestion.innerHTML === "Q8: How can you detect the client's browser name?"
  ) {
    jsEleAns = "anss1";
  } else if (
    jsQuestion.innerHTML ===
    "Q9: Which event occurs when the user clicks on an HTML element?"
  ) {
    jsEleAns = "anss2";
  } else if (
    jsQuestion.innerHTML === "Q10: How do you declare a JavaScript variable?"
  ) {
    jsEleAns = "anss1";
  }

  if (jsAns === jsEleAns) {
    jsscore++;
  } else {
    console.log("Js Score not increase!");
  }

  jscountlist++;
  jsQuestion.innerHTML = jsquiz[jscountlist].ques;
  jsfirstoption.innerHTML = jsquiz[jscountlist].ans1;
  jssecondoption.innerHTML = jsquiz[jscountlist].ans2;
  jsthirdoption.innerHTML = jsquiz[jscountlist].ans3;
  jsradio0.checked = false;
  jsradio1.checked = false;
  jsradio2.checked = false;
  if (jsQuestion.innerHTML === "Q11: yup") {
    document.getElementById("jsnextquestion").style.display = "none";
    document.querySelector(".jsQues-Ans").style.display = "none";
    document.getElementById("submitjsquiz").style.display = "block";
  }
}

// ********************************* js print data successfully *********************************************

// submit html quiz

let submithtmlquiz = document.getElementById("submithtmlquiz");
submithtmlquiz.addEventListener("click", submitHtmlQuiz);
function submitHtmlQuiz() {
  document.querySelector(".showallhtmlscore").innerHTML =
    Number(htmlscore) + "0%";
  if (htmlscore < 7) {
    document.querySelector(".showhtmlscore").style.backgroundColor = "red";
    document.getElementById("htmlfailornot").innerHTML = "You are Fail!";
    document.getElementById("htmlfailornot").style.color = "red";
  } else {
    document.querySelector(".showhtmlscore").style.backgroundColor = "green";
    document.getElementById("htmlfailornot").innerHTML =
      "Congrats! you are passed";
    document.getElementById("htmlfailornot").style.color = "green";
  }
  document.querySelector(".showhtmlscore").style.display = "block";
  document.getElementById("submithtmlquiz").style.display = "none";
}

// submit css quiz

let submitcssquiz = document.getElementById("submitcssquiz");
submitcssquiz.addEventListener("click", submitCssQuiz);
function submitCssQuiz() {
  document.querySelector(".showallcssscore").innerHTML =
    Number(cssscore) + "0%";
  if (cssscore < 7) {
    document.querySelector(".showcssscore").style.backgroundColor = "red";
    document.getElementById("cssfailornot").innerHTML = "You are Fail!";
    document.getElementById("cssfailornot").style.color = "red";
  } else {
    document.querySelector(".showcssscore").style.backgroundColor = "green";
    document.getElementById("cssfailornot").innerHTML =
      "Congrats! you are passed";
    document.getElementById("cssfailornot").style.color = "green";
  }
  document.querySelector(".showcssscore").style.display = "block";
  document.getElementById("submitcssquiz").style.display = "none";
}

// submit javascript quiz

let submitjsquiz = document.getElementById("submitjsquiz");
submitjsquiz.addEventListener("click", submitjsQuiz);
function submitjsQuiz() {
  document.querySelector(".jsQues-Ans").display = "none";
  document.querySelector(".showallscore").innerHTML = Number(jsscore) + "0%";
  if (jsscore < 7) {
    document.querySelector(".showscore").style.backgroundColor = "red";
    document.getElementById("jsfailornot").innerHTML = "You are Fail!";
    document.getElementById("jsfailornot").style.color = "red";
  } else {
    document.querySelector(".showscore").style.backgroundColor = "green";
    document.getElementById("jsfailornot").innerHTML =
      "Congrats! you are passed";
    document.getElementById("jsfailornot").style.color = "green";
  }
  document.querySelector(".showscore").style.display = "block";
  document.getElementById("submitjsquiz").style.display = "none";
}
