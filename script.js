document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let feedback = document.getElementById("feedback").value;

    document.getElementById("result").innerHTML =
        "<h3>Feedback Submitted</h3>" +
        "<p><b>Name:</b> " + name + "</p>" +
        "<p><b>Course:</b> " + course + "</p>" +
        "<p><b>Feedback:</b> " + feedback + "</p>";

    document.getElementById("feedbackForm").reset();
});
