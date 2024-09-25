function launchBrowser(browserName) {
    if (browserName == 'Chrome')
        console.log("Given browser is Chrome");
    else
        console.log("Given browser is not Chrome");
}

function runTests(testType) {
    switch (testType.toLowerCase()) {
        case 'smoke': console.log("Smoke Testing"); break;
        case 'sanity': console.log("Sanity Testing"); break;
        case 'regression': console.log("Regression Testing"); break;
        default: console.log("Smoke Testing");
    }
}

launchBrowser('Chrome');
launchBrowser('Firefox');

runTests('smoke');
runTests('SANITY');
runTests('regression');
runTests('anything');