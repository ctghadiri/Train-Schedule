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

    // gathering values
    trainName = $("#train-input").val().trim();
    destination = $("#destination-input").val().trim();
    initialTime = moment($("#initial-time-input").val().trim(), "HH:mm").format("");
    frequency = $("#frequency-input").val().trim();

    // code for push
    dataRef.ref().push({

        trainName: trainName,
        destination: destination,
        initialTime: initialTime,
        frequency: frequency,
    });

    // Clears all of the text-boxes
    $("#train-input").val("");
    $("#destination-input").val("");
    $("#initial-time-input").val("");
    $("#frequency-input").val("");
});

// Firebase watcher + initial loader
dataRef.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val())

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().initialTime);
    console.log(childSnapshot.val().frequency);     

    var currentTime = moment();
    var diffTime = moment().diff(moment(initialTime), "minutes");
    var timeAppartStart = diffTime % frequency;
    var nextArrival = moment().add(minutesAway, "minutes").format("hh:mm");

    var minutesAway = frequency - timeAppartStart;
    




    // create and append table data to new table row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway),
    );


    // Append new row to table
    $("#train-table > tbody").append(newRow)
    // Handle the errors
}, function (errorObject) {
    console.log("Errors: " + errorObject.code);
});
