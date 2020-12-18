
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('message').innerHTML = 'Welcome to Cross Platform app development';
}

function OnPause(){
    alert('OnPause function is called');
}

document.addEventListener('resume', onResume, false);

function OnResume(){
    alert('onResume() function is called');
}

document addEventListener('backButton', )