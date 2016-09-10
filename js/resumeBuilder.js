/*
$("#main").append("Let's add stuff to the main section");

var name = "Isaac Yi";
var role = "Web Ninja";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

if (document.getElementsByClassName("education-entry").length === 0) {
document.getElementById("education").style.display = "none";
};

if (document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.display = 'none';
};

// List of CSS properties: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

*/

var bio = {
	"name" : "Isaac Yi",
	"role" : "Web Ninja",
	"welcomeMessage" : "I'm an aspiring web developer. Pick me!",
	"biopic" : "images/fry.jpg",
	"skills" : ["curiosity", "determination", "tenacity"],
	"contacts" : {
		"mobile" : "6504270718",
		"email" : "isaacyi89@gmail.com",
		"github" : "",
		"location" : "Washington DC"
	}
};

var education = {
	"schools" : [{
		"name" : "Stanford University",
		"degree" : "B.S.",
		"majors" : ["MS&E"],
		"location" : "Palo Alto",
		"degree dates" : 2012
	}, {
		"name" : "Stanford University",
		"degree" : "M.S.", 
		"major" : ["ERE"],
		"location" : "Palo Alto",
		"degree dates" : 2014
	}]
};

var work = {
	"jobs" : [{
		"employer" : "Opower",
		"title" : "Customer Success Engineer",
		"location" : "Washington, DC",
		"dates" : ["2014", "2015", "2016"]
	}, {
		"employer" : "Mercedes Benz",
		"title" : "Business Analyst",
		"location" : "Stuttgart, DEU",
		"dates" : ["2012", "2013"]
	}, {
		"employer" : "Tesla",
		"title" : "Service Operations Associate",
		"location" : "Palo Alto, CA",
		"dates" : ["2011"]
	}]
};

var project = {
	"projects" : [{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : []
	}]
};

// add bio.name to id = header using the HTMLheaderName format
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

// if there are values in bio.skills, add them to the HTML as id = skills
if (bio.skills.length > 0){
	// add skills header statement
	$("#header").append(HTMLskillsStart);
	var formattedSkill;
	for (i=0; i < bio.skills.length; i++){
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
};

// add work info onto HTML with the correct format
function displayWorkInfo () {
	for (job in work.jobs){
		// create new div for work experience with id = workExperience
		$("#workExperience").append(HTMLworkStart);
		formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		formattedJob = formattedEmployer.concat(formattedTitle);
		$(".work-entry:last").append(formattedJob);
	};
};

displayWorkInfo();

function locationizer(work) {
	var workLocation = [];
	for (i in work.jobs){
		workLocation.push(work.jobs[i].location);
	};
	return workLocation;
};

locationizer(work);

// add project info on HTML with the correct format
project.display = function (){
	for (i in project.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data", project.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		//blahblahblah add all the other project details
	}
};

$("#mapDiv").append(googleMap);




