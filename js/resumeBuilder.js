// Bio section
var bio = {
    "name": "Shreyash Mehta",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "+91-9665797646",
        "email": "shreyash.p.mehta@gmail.com",
        "github": "shreyashmehta",
        "location": "Pune"
    },
    "biopic": "images/biopic.png",
    "message": "Hi..this is Shreyash. For Front end related tasks, contact me!",
    "skills": ["HTML5", "CSS3", "Javascript", "C", "C++"]
};

// Display function for bio
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMobileFooter = HTMLcontactGeneric.replace("%contact%", "Mobile");
    formattedMobileFooter = formattedMobileFooter.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobileFooter);
    var formattedEmailFooter = HTMLcontactGeneric.replace("%contact%", "E-mail");
    formattedEmailFooter = formattedEmailFooter.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmailFooter);
    var formattedGithubFooter = HTMLcontactGeneric.replace("%contact%", "Github");
    formattedGithubFooter = formattedGithubFooter.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithubFooter);
    var formattedLocationFooter = HTMLcontactGeneric.replace("%contact%", "Location");
    formattedLocationFooter = formattedLocationFooter.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocationFooter);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.message);
    $("#header").append(formattedMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for(var i=0; i<bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};
bio.display();


// Education Section
var education = {
    "schools": [{
        "name": "Sinhgad Inst. Of Tech. & Sc.",
        "degree": "B.E.",
        "dates": "August 2012-June 2016",
        "location": "Pune",
        "major": "Electronics & Telecommunication"
    }, {
        "name": "Burhanpur Public School",
        "degree": "Schooling",
        "dates": "June 1998-March 2012",
        "location": "Burhanpur",
        "major": "Science"
    }],
    "onlineeCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "September 2016-Till date",
        "url": "https://www.udacity.com"
    }]
};
var schoolsLength = education.schools.length;
var onlineLength = education.onlineeCourses.length;

//Display function for education
education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < schoolsLength; i++) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry:last").append(formattedMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (var j = 0; j < onlineLength; j++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineeCourses[j].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineeCourses[j].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);
        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineeCourses[j].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineeCourses[j].url);
        $(".education-entry:last").append(formattedURL);
    }
};
education.display();


// Work Experience Section
var work = {
    "jobs": [{
        "employer": "Infosys",
        "title": "Front End Developer",
        "location": "Pune",
        "dates": "January 2017- Till date",
        "description": "Appointed as a Trainee and after two months of training, became a Front End Developer."
    }, {
        "employer": "SITS",
        "title": "Association VP",
        "location": "Pune",
        "dates": "June 2014- December 2015",
        "description": "For two years I was a junior representative and after that appointed as the VP of the Association. Worked for almost 1.5 years and managing various events and competitions."
    }, {
        "employer": "Burhanpur Public School",
        "title": "Student Head",
        "location": "Burhanpur",
        "dates": "March 2011-March 2012",
        "description": "I was a regular student at the BPS for almost 11 years and after that I was appointed as the Student Head of the school. I worked as a Student Head for one complete year in which many events were under my supervision."
    }]
};
var jobsLength = work.jobs.length;

// Dipsly function for work
work.display = function() {
    for (var i = 0; i < jobsLength; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();


// Project section
var projects = {
    "projects": [{
        "title": "Mockup To Article",
        "dates": "September 2016",
        "description": "Applied some basic knowledge of HTML.",
        "images": ["images/mockup.png"]
    }, {
        "title": "Animal Trading Card",
        "dates": "September 2016",
        "description": "Gained further knowledge of HTML and learnt some new cool things about CSS.",
        "images": ["images/animal.png"]
    }, {
        "title": "My Portfolio",
        "dates": "October 2016",
        "description": "Most challenging project till date. Some deep and insight knowledge of HTML, CSS and a brief knowledge of using JS.",
        "images": ["images/portfolio.png"]
    }]
};
var projectsLength = projects.projects.length;

// Display function for project
projects.display = function() {
    for (var i = 0; i < projectsLength; i++) {
        $("#projects:last").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        $("#projects").append(HTMLprojectStart);
        if (projects.projects[i].images.length > 0) {
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);
// Internationalise function
function inName(name) {
    var newName = name.split(" ");
    newName[1] = newName[1].toUpperCase();
    newName[0] = newName[0].slice(0, 1).toUpperCase() + newName[0].slice(1).toLowerCase();
    name = newName.join(" ");
    return name;
}
inName(bio.name);

$("#mapDiv").append(googleMap);
