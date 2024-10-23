/** @format */

function generateQRCode() {
	var url = document.getElementById("URL").value;

	// Clear any previously generated QR code
	document.getElementById("qrcode").innerHTML = "";

	// Create a new QRCode object
	var qrcode = new QRCode(document.getElementById("qrcode"), {
		text: url,
		colorDark: "#000000", // Dark (black) color
		colorLight: "#ffffff", // Light (white) color
	});
}
