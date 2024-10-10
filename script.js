let numButtonClicks = 0;
let numCookieClicks = 0;

function cookieClicked() {
	numCookieClicks = numCookieClicks + 1;
	document.getElementById("cookieDiv").innerHTML = "Cookie clicked: <strong>" + numCookieClicks + "</strong> times";
}

function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("buttonDiv").innerHTML = "Button clicked: <strong>" + numButtonClicks + "</strong> times";
}
