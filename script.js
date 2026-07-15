/* ===========================================
   InterviewPilot AI
   script.js
=========================================== */

/* ==========================
   ELEMENTS
========================== */

const interviewForm = document.getElementById("interviewForm");

const fullName = document.getElementById("fullName");
const role = document.getElementById("role");
const company = document.getElementById("company");
const level = document.getElementById("level");

const scoreCard = document.getElementById("scoreCard");
const badgeCard = document.getElementById("badgeCard");

const hrContainer = document.getElementById("hrContainer");
const technicalContainer = document.getElementById("technicalContainer");
const aptitudeContainer = document.getElementById("aptitudeContainer");
const roadmapContainer = document.getElementById("roadmapContainer");
const companyContainer = document.getElementById("companyContainer");

let interviewScore = 0;

/* ==========================
   INITIALIZE
========================== */

window.onload = () => {

loadRoles();

loadCompanies();

loadLevels();

loadRoadmap();

};

/* ==========================
   LOAD ROLES
========================== */

function loadRoles(){

ROLES.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

role.appendChild(option);

});

}

/* ==========================
   LOAD COMPANIES
========================== */

function loadCompanies(){

COMPANIES.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

company.appendChild(option);

});

}

/* ==========================
   LOAD LEVELS
========================== */

function loadLevels(){

LEVELS.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

level.appendChild(option);

});

}

/* ==========================
   LOAD ROADMAP
========================== */

function loadRoadmap(){

roadmapContainer.innerHTML="";

ROADMAP.forEach(day=>{

const card=document.createElement("div");

card.className="roadmap-card";

card.innerHTML=`
<h3>📅 ${day}</h3>
`;

roadmapContainer.appendChild(card);

});

}

/* ==========================
   RANDOM HELPER
========================== */

function randomItem(array){

return array[Math.floor(Math.random()*array.length)];

}

/* ==========================
   AVERAGE
========================== */

function average(a,b,c){

return Math.round((a+b+c)/3);

}

/* ==========================
   CLAMP
========================== */

function clamp(value){

return Math.max(0,Math.min(100,value));

}
/* ===========================================
   ANALYZE INTERVIEW
=========================================== */

function analyzeInterview(){

const name=fullName.value.trim();

const selectedRole=role.value;

const selectedCompany=company.value;

const selectedLevel=level.value;

if(
!name||
!selectedRole||
!selectedCompany||
!selectedLevel
){

alert("Please fill all required fields.");

return;

}

/* ==========================
SCORING
========================== */

let technical=50;

let hr=50;

let aptitude=50;

/* Difficulty */

if(selectedLevel==="Easy"){

technical+=10;
hr+=15;
aptitude+=15;

}

if(selectedLevel==="Medium"){

technical+=20;
hr+=20;
aptitude+=20;

}

if(selectedLevel==="Hard"){

technical+=30;
hr+=25;
aptitude+=25;

}

/* Company Bonus */

if(

selectedCompany==="Google"||
selectedCompany==="Microsoft"||
selectedCompany==="Amazon"

){

technical+=15;

}

/* Final Scores */

technical=clamp(technical);

hr=clamp(hr);

aptitude=clamp(aptitude);

interviewScore=

average(

technical,

hr,

aptitude

);

/* Update UI */

scoreCard.innerHTML=`

<h2>📊 Interview Score</h2>

<h1>${interviewScore}%</h1>

<p>

Technical : ${technical}%<br>

HR : ${hr}%<br>

Aptitude : ${aptitude}%

</p>

`;

generateBadge(interviewScore);

showHRQuestions();

showTechnicalQuestions();

showAptitude();

showCompanyGuide(selectedCompany);

saveHistory({

name,

selectedRole,

selectedCompany,

selectedLevel,

interviewScore

});

}

/* ===========================================
BADGES
=========================================== */

function generateBadge(score){

const badge=

BADGES.find(

item=>

score>=item.min&&

score<=item.max

);

badgeCard.innerHTML=`

<div class="badge">

<h2>${badge.title}</h2>

<p>

${PERFORMANCE.Excellent}

</p>

</div>

`;

}
/* ===========================================
   HR QUESTIONS
=========================================== */

function showHRQuestions(){

hrContainer.innerHTML="";

HR_QUESTIONS.forEach(item=>{

const card=document.createElement("div");

card.className="question-card";

card.innerHTML=`

<h3>💼 ${item.question}</h3>

<p>${item.answer}</p>

`;

hrContainer.appendChild(card);

});

}

/* ===========================================
   TECHNICAL QUESTIONS
=========================================== */

function showTechnicalQuestions(){

technicalContainer.innerHTML="";

Object.keys(TECHNICAL_QUESTIONS).forEach(subject=>{

const section=document.createElement("div");

section.className="question-card";

let html=`<h2>📘 ${subject}</h2>`;

TECHNICAL_QUESTIONS[subject].forEach(q=>{

html+=`

<div class="tech-item">

<h4>${q.question}</h4>

<p>${q.answer}</p>

</div>

`;

});

section.innerHTML=html;

technicalContainer.appendChild(section);

});

}

/* ===========================================
   APTITUDE
=========================================== */

function showAptitude(){

aptitudeContainer.innerHTML="";

APTITUDE.forEach(item=>{

const card=document.createElement("div");

card.className="question-card";

card.innerHTML=`

<h3>🧠 ${item.question}</h3>

<p>Answer : ${item.answer}</p>

`;

aptitudeContainer.appendChild(card);

});

}

/* ===========================================
   COMPANY GUIDE
=========================================== */

function showCompanyGuide(companyName){

companyContainer.innerHTML="";

const company=COMPANY_GUIDE[companyName];

if(!company){

companyContainer.innerHTML="<p>No company guide available.</p>";

return;

}

const card=document.createElement("div");

card.className="company-card";

card.innerHTML=`

<h2>🏢 ${companyName}</h2>

<h3>Interview Process</h3>

<ul>

${company.process.map(step=>`<li>${step}</li>`).join("")}

</ul>

<h3>Preparation Tips</h3>

<ul>

${company.tips.map(tip=>`<li>${tip}</li>`).join("")}

</ul>

`;

companyContainer.appendChild(card);

}
/* ===========================================
   SAVE HISTORY
=========================================== */

function saveHistory(data){

let history=

JSON.parse(

localStorage.getItem("interviewHistory")

)||[];

history.push(data);

localStorage.setItem(

"interviewHistory",

JSON.stringify(history)

);

}

/* ===========================================
   DOWNLOAD REPORT
=========================================== */

function downloadReport(){

const report=`

========== InterviewPilot AI ==========

Overall Score : ${interviewScore}%

Role : ${role.value}

Company : ${company.value}

Level : ${level.value}

Candidate : ${fullName.value}

Generated using InterviewPilot AI

`;

const blob=new Blob(

[report],

{

type:"text/plain"

}

);

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="Interview_Report.txt";

link.click();

}

/* ===========================================
   RESET
=========================================== */

function resetForm(){

interviewForm.reset();

scoreCard.innerHTML="";

badgeCard.innerHTML="";

hrContainer.innerHTML="";

technicalContainer.innerHTML="";

aptitudeContainer.innerHTML="";

companyContainer.innerHTML="";

loadRoadmap();

}

/* ===========================================
   THEME
=========================================== */

function toggleTheme(){

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

?"light"

:"dark"

);

}

const savedTheme=

localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light");

}

/* ===========================================
   EVENT LISTENERS
=========================================== */

interviewForm.addEventListener(

"submit",

function(e){

e.preventDefault();

analyzeInterview();

}

);

/* ===========================================
   READY
=========================================== */

console.log(

"InterviewPilot AI Loaded Successfully 🚀"

);
