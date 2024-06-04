{
	let pref = localStorage.getItem('darkMode');
	pref ??= window.matchMedia('prefers-color-scheme: dark').matches ? 'dark' : 'light';

	document.body.className = pref;

	window.mie = {};
	mie.ready = () => {
		mie.theme = pref;
	};
}

function toggleDarkMode() {
	if (document.body.className == 'dark') {
		document.body.className = 'light';
	} else {
		document.body.className = 'dark';
	}
	if (document.body.className == 'dark') {
		mie.theme = 'dark';
	} else {
		mie.theme = 'light';
	}

	// Save the preference
	localStorage.setItem('darkMode', document.body.className);
}

document.getElementById('darkModeIcon').addEventListener('click', toggleDarkMode);

document.getElementById('fullscreenIcon').addEventListener('click', () => {
	if (document.fullscreenElement) document.exitFullscreen();
	else document.documentElement.requestFullscreen();
});
