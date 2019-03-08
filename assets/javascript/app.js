// Train Game
// area for train information
    // name
    // destination
    // frequency(min)
    // next arrival (a.m./p.m.)
    // min away
// form for inputing new train data
    // name
    // destination
    // first train time
    // frequency (min)
    // submit button
// firebase to hold data
    // 





  // Initialize Firebase
var config = {
    apiKey: "AIzaSyB9zfOvWjhA-2ItOOk9HBTIpPaSbN8U184",
    authDomain: "train-schedule-4005d.firebaseapp.com",
    databaseURL: "https://train-schedule-4005d.firebaseio.com",
    projectId: "train-schedule-4005d",
    storageBucket: "train-schedule-4005d.appspot.com",
    messagingSenderId: "557889070241"
};

firebase.initializeApp(config);

var dataRef = firebase.database();

// initial values
var trainName = "";
var destination = "";
var initialTime = "";
var frequency = "";

// capture button click
$("#add-train").on("click", function(event){
    event.preventDefault();

    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    initialTime = $("#initial-time-input").val().trim();
    frequency = $("#frequency-input").val().trim();
})

