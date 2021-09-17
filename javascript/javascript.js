function redirect() {
	let deviceWidth = document.documentElement.clientWidth;
	let mainArea = document.querySelector('.main-div');
	let tabletLink = document.createElement('a');
	tabletLink.href = "./tablet.html";
	let mobileLink = document.createElement('a');
	mobileLink.href = "./mobile.html";
	mainArea.appendChild(mobileLink);
	mainArea.appendChild(tabletLink);
	if ((deviceWidth > 320) && (deviceWidth < 720)) {
		mobile();
	} else if ((deviceWidth > 721) && (deviceWidth < 1199)) {
		tablet();
	}

	function mobile() {
		mobileLink.click();
	}

	function tablet() {
		tabletLink.click();
	}
}
redirect();
let body = document.querySelector('body');
body.style.display = 'block';
// window.onresize = redirect();