const browserVersion = 'Chrome';

function getBrowserVersion() {
    if (browserVersion == 'Chrome') {
        console.log("Printing Browser version, inside function, inside block:" + browserVersion);
    }
    var browserVersion = 'Local Chrome';
    //let browserVersion='Local Chrome';
    console.log("Printing Browser version, inside function, outside block:" + browserVersion);

    let winner = 'Kesavan'
    //let winner = 500;
    console.log(winner);
}

getBrowserVersion();

