document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let navigation = document.getElementById('navigation').value;
    let findInfo = document.getElementById('findInfo').value;
    let encounterIssues = document.getElementById('encounterIssues').value;
    let bookingSatisfaction = document.getElementById('bookingSatisfaction').value;
    let bookingExperience = document.getElementById('bookingExperience').value;
    let websiteSatisfaction = document.getElementById('websiteSatisfaction').value;
    let recommendation = document.getElementById('recommendation').value;
    let suggestions = document.getElementById('suggestions').value;

    console.log('Navigation:', navigation);
    console.log('Find Information:', findInfo);
    console.log('Encounter Issues:', encounterIssues);
    console.log('Booking Satisfaction:', bookingSatisfaction);
    console.log('Booking Experience:', bookingExperience);
    console.log('Website Satisfaction:', websiteSatisfaction);
    console.log('Recommendation:', recommendation);
    console.log('Suggestions:', suggestions);

    event.target.submit();

    //alert('User feedback recorded. Thank you for your input!');
});