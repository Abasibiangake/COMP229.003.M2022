const express = require('express');
const app = express();

//routes
app.get('/', homePage);
app.get('/about', aboutPage);
app.get('/project', projectsPage); 
app.get('/service', servicePage);
app.get('/contact', contactPage);

//controller
function homePage (req, res) {
  res.send('Hello There!!');
}

function aboutPage (req, res) {
    res.send('About Me');
}

function projectsPage (req, res) {
    res.send('My Projects');
}
function servicePage (req, res) {
    res.send('My Services');
}
function contactPage (req, res) {
    res.send('Contact Me');
}

//set the port and runs the app
app.listen(3000);