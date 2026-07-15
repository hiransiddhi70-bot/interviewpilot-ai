/* ===========================================
   InterviewPilot AI
   data.js
=========================================== */

/* ==========================
ROLES
========================== */

const ROLES = [

"Software Engineer",

"Frontend Developer",

"Backend Developer",

"Full Stack Developer",

"AI Engineer",

"Machine Learning Engineer",

"Data Scientist",

"Cybersecurity Analyst",

"Cloud Engineer",

"DevOps Engineer"

];

/* ==========================
COMPANIES
========================== */

const COMPANIES = [

"Google",

"Microsoft",

"Amazon",

"Apple",

"Meta",

"NVIDIA",

"Adobe",

"Netflix",

"TCS",

"Infosys",

"Wipro",

"Accenture"

];

/* ==========================
DIFFICULTY
========================== */

const LEVELS = [

"Easy",

"Medium",

"Hard"

];

/* ==========================
HR QUESTIONS
========================== */

const HR_QUESTIONS = [

{
question:"Tell me about yourself.",
answer:"Introduce yourself briefly, including your education, skills, projects, achievements, and career goals."
},

{
question:"Why should we hire you?",
answer:"Highlight your technical skills, adaptability, willingness to learn, and how you can contribute to the company."
},

{
question:"What are your strengths?",
answer:"Mention problem solving, communication, teamwork, leadership, and continuous learning."
},

{
question:"What are your weaknesses?",
answer:"Mention a genuine weakness and explain the steps you are taking to improve it."
},

{
question:"Where do you see yourself in 5 years?",
answer:"Talk about growing as an engineer, taking ownership, and contributing to impactful projects."
},

{
question:"Why do you want to join our company?",
answer:"Discuss the company's innovation, culture, products, and how your goals align with them."
},

{
question:"Describe a challenging project you worked on.",
answer:"Explain the challenge, your approach, the technologies used, and the final outcome."
},

{
question:"How do you handle pressure?",
answer:"Talk about prioritizing tasks, staying organized, and focusing on solutions."
},

{
question:"Describe a situation where you worked in a team.",
answer:"Explain your role, communication, and the successful outcome."
},

{
question:"Do you have any questions for us?",
answer:"Ask about learning opportunities, team structure, or company culture."
}
];
/* ===========================================
   TECHNICAL QUESTIONS
=========================================== */

const TECHNICAL_QUESTIONS = {

HTML:[

{
question:"What is semantic HTML?",
answer:"Semantic HTML uses meaningful tags like <header>, <article>, <section>, and <footer> to improve accessibility and SEO."
},

{
question:"Difference between id and class?",
answer:"id is unique for one element, while class can be used for multiple elements."
},

{
question:"What is the purpose of the alt attribute?",
answer:"It provides alternative text for images, improving accessibility and SEO."
}

],

CSS:[

{
question:"What is Flexbox?",
answer:"Flexbox is a one-dimensional layout model used for aligning and distributing space between elements."
},

{
question:"Difference between Flexbox and Grid?",
answer:"Flexbox is one-dimensional, while CSS Grid is two-dimensional."
},

{
question:"What is media query?",
answer:"Media queries make websites responsive for different screen sizes."
}

],

JavaScript:[

{
question:"Difference between var, let and const?",
answer:"var is function-scoped, let is block-scoped, and const cannot be reassigned."
},

{
question:"What is a closure?",
answer:"A closure allows a function to access variables from its outer scope even after the outer function has finished."
},

{
question:"Explain promises.",
answer:"Promises handle asynchronous operations with Pending, Fulfilled, and Rejected states."
}

],

Python:[

{
question:"What is a list?",
answer:"A list is an ordered, mutable collection in Python."
},

{
question:"Difference between list and tuple?",
answer:"Lists are mutable; tuples are immutable."
},

{
question:"What is PEP 8?",
answer:"PEP 8 is the official Python style guide."
}

],

CPP:[

{
question:"What is OOP?",
answer:"Object-Oriented Programming organizes code using classes and objects."
},

{
question:"Explain constructor.",
answer:"A constructor initializes an object when it is created."
},

{
question:"Difference between class and object?",
answer:"A class is a blueprint, while an object is an instance of that class."
}

],

SQL:[

{
question:"What is a primary key?",
answer:"A primary key uniquely identifies each row in a table."
},

{
question:"Difference between DELETE and TRUNCATE?",
answer:"DELETE removes selected rows; TRUNCATE removes all rows quickly."
},

{
question:"What is JOIN?",
answer:"JOIN combines rows from multiple tables using a related column."
}

],

DSA:[

{
question:"What is Big O notation?",
answer:"Big O measures the time or space complexity of an algorithm."
},

{
question:"Difference between Stack and Queue?",
answer:"Stack follows LIFO, Queue follows FIFO."
},

{
question:"What is Binary Search?",
answer:"Binary Search finds an element in a sorted array in O(log n)."
}

]

};

/* ===========================================
   APTITUDE QUESTIONS
=========================================== */

const APTITUDE = [

{
question:"What is 25% of 400?",
answer:"100"
},

{
question:"A train travels 60 km in 1 hour. How far in 5 hours?",
answer:"300 km"
},

{
question:"What comes next? 2,4,8,16,?",
answer:"32"
},

{
question:"If today is Monday, what day will it be after 10 days?",
answer:"Thursday"
},

{
question:"Find the odd one out: Apple, Mango, Car, Banana",
answer:"Car"
}

];
/* ===========================================
   COMPANY PREPARATION
=========================================== */

const COMPANY_GUIDE = {

Google:{
process:[
"Online Assessment",
"Technical Interview 1",
"Technical Interview 2",
"Googliness Round",
"HR Round"
],
tips:[
"Master DSA",
"Practice System Design Basics",
"Build Strong Projects",
"Prepare Behavioral Questions"
]
},

Microsoft:{
process:[
"Online Coding Test",
"Technical Interview",
"Manager Round",
"HR Round"
],
tips:[
"Practice LeetCode",
"Revise OOP & DBMS",
"Know Your Projects"
]
},

Amazon:{
process:[
"Online Assessment",
"Technical Interviews",
"Leadership Principles Round",
"HR Round"
],
tips:[
"Practice DSA",
"Prepare STAR Method",
"Know Amazon Leadership Principles"
]
},

TCS:{
process:[
"Aptitude Test",
"Coding Test",
"Technical Interview",
"HR Interview"
],
tips:[
"Revise Basics",
"Practice Aptitude",
"Improve Communication"
]
}

};

/* ===========================================
   30 DAY ROADMAP
=========================================== */

const ROADMAP = [

"Day 1-5 : Resume + LinkedIn Optimization",

"Day 6-10 : HTML, CSS & JavaScript Revision",

"Day 11-15 : DSA Practice",

"Day 16-20 : SQL + DBMS + OOP",

"Day 21-24 : Aptitude Practice",

"Day 25-27 : HR Interview Preparation",

"Day 28-29 : Mock Interviews",

"Day 30 : Final Revision & Confidence Building"

];

/* ===========================================
   RESUME CHECKLIST
=========================================== */

const RESUME_CHECKLIST = [

"Professional Resume Title",

"Career Objective",

"Technical Skills",

"Projects",

"Internships",

"Education",

"Achievements",

"Certifications",

"GitHub Profile",

"LinkedIn Profile",

"Contact Information"

];

/* ===========================================
   INTERVIEW TIPS
=========================================== */

const INTERVIEW_TIPS = [

"Research the company before the interview.",

"Explain projects confidently.",

"Practice coding daily.",

"Maintain eye contact.",

"Communicate clearly.",

"Be honest if you don't know an answer.",

"Ask thoughtful questions at the end.",

"Stay calm and confident."

];

/* ===========================================
   BADGES
=========================================== */

const BADGES = [

{min:0,max:25,title:"🌱 Beginner"},

{min:26,max:50,title:"🚀 Learner"},

{min:51,max:75,title:"💼 Interview Ready"},

{min:76,max:90,title:"🏆 Placement Pro"},

{min:91,max:100,title:"👑 Interview Master"}

];

/* ===========================================
   PERFORMANCE LEVELS
=========================================== */

const PERFORMANCE = {

Excellent:"Outstanding! You're well prepared for interviews.",

Good:"Great progress. Keep practicing consistently.",

Average:"You're on the right track. Focus on weak areas.",

Beginner:"Start with fundamentals and practice daily."

};
