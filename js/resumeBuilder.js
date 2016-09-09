/*
$("#main").append("Let's add stuff to the main section");

var name = "Isaac Yi";
var role = "Web Ninja";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

*/

var bio = {
	"name" : "Isaac Yi",
	"role" : "Web Ninja",
	"welcomeMessage" : "I'm an aspiring web developer. Pick me!",
	"biopic" : "images/fry.jpg",
	"skills" : []
	"contacts" : {
		"mobile" : "6504270718",
		"email" : "isaacyi89@gmail.com",
		"github" : "",
		"location" : "Washington DC"
	}
};
/*
$("#main").append(bio["name"]);
$("#main").append(bio["role"]); 
$("#main").append(bio.contact); 
$("#main").append(bio.message, bio.picture);
*/
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
}

var work = {
	"jobs" : [{
		"employer" : "",
		"title" : "",
		"location" : "",
		"dates" : ""
	}, {
		"employer" : "",
		"title" : "",
		"location" : "",
		"dates" : ""
	}, {
		"employer" : "",
		"title" : "",
		"location" : "",
		"dates" : ""
	}]
}

var project = {
	"projects" : [{
		"title" : "",
		"dates" : "",
		"description" : "",
		"images" : []
	}]
}

