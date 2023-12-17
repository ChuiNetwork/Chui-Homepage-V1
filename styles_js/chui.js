$(document).ready(function () {
	let cookieConsent = sessionStorage.getItem("cookie");

	if( cookieConsent == "true"){
		$('.cookie-consent-banner').hide();
	}

	$('#hideConsent').click(function () {
		sessionStorage.setItem("cookie", "true");
		$('.cookie-consent-banner').hide();
	});
});
