var pounds=0;

function validateForm() {
	hideErrors();
	var form= document.forms["registrationForm"];
	var isOK= true;
	isOK &= assert(form.badge.value!="", "badgeRow", "Please set badge name - how you'd like to be addressed.", "s2");
	isOK &= assert(form.fullname.value!="", "nameRow", "Please set your name for correspondence, please.", "s2");
	isOK &= assert(form.email.value != "", "emailRow", "Please provide an email address.", "s1");
	isOK &= assert(form.email.value == form.emailAgain.value, "emailAgainRow", "Please type the same address in both email boxes - to make sure it's right.", "s1");
	isOK &= assert(form.payment[0].checked || form.payment[1].checked, "paymentRow", "Do let us know how you'd like to pay.", "s2");
	isOK &= assert(!form.payment[0].checked || (form.phone1.value!="" || form.phone2.value!=""), "phoneRow", "We need a phone number please", "s1");
	isOK &= assert(form.address1.value!="" || form.invoiceAddress.innerText!="", "addressRow", "We need a billing address, please", "s2")
					&& assert(form.postcode.value!="", "postcodeRow", "Postal code!", "s2");
	isOK &= assert((form.invoiceAddress.value != "") == (form.invoicePostcode.value != ""),
						"invoiceAddressRow", 
						"You've given a separate invoicing address without the postcode", "s2");
	if (isOK) {
		var cartId= form.email.value + new Date()/100;
		form.cartId.value= cartId;
		if (form.payment[0].checked) {
			form.thankyou.value=payForm(cartId, pounds, form); 
			form.next.value="";
		}
		// Modified by DMC to block certain countries.
		if (isBlockedCountry(form.country.value)) {
			window.location="/ot2004/registrationoffline.shtml";
			return;
		}
		form.submit();
	}
}

function validateDiscountForm() {
	hideErrors();
	var form= document.forms["registrationForm"];
	var isOK= true;
	isOK &= assert(form.badge.value!="", "badgeRow", "Please set badge name - how you'd like to be addressed.", "s2");
	isOK &= assert(form.fullname.value!="", "nameRow", "Please set your name for correspondence, please.", "s2");
	isOK &= assert(form.email.value != "", "emailRow", "Please provide an email address.", "s1");
	isOK &= assert(form.email.value == form.emailAgain.value, "emailAgainRow", "Please type the same address in both email boxes - to make sure it's right.", "s1");
	isOK &= assert(form.payment[0].checked || form.payment[1].checked, "paymentRow", "Do let us know how you'd like to pay.", "s2");
	isOK &= assert(!form.payment[0].checked || (form.phone1.value!="" || form.phone2.value!=""), "phoneRow", "We need a phone number please", "s1");
	isOK &= assert(form.address1.value!="" || form.invoiceAddress.innerText!="", "addressRow", "We need a billing address, please", "s2")
					&& assert(form.postcode.value!="", "postcodeRow", "Postal code!", "s2");
	isOK &= assert((form.invoiceAddress.value != "") == (form.invoicePostcode.value != ""),
						"invoiceAddressRow", 
						"You've given a separate invoicing address without the postcode", "s2");
	if (isOK) {
		var cartId= form.email.value + new Date()/100;
		form.cartId.value= cartId;
		if (form.payment[0].checked) {
			form.thankyou.value=payForm(cartId, pounds, form); 
			form.next.value="";
		}
		// Modified by DMC to block certain countries.
		if (isBlockedCountry(form.country.value)) {
			window.location="/ot2004/registrationoffline.shtml";
			return;
		}
		form.submit();
	}
}

function validateComplementaryForm() {
	hideErrors();
	var form= document.forms["registrationForm"];
	var isOK= true;
	isOK &= assert(form.badge.value!="", "badgeRow", "Please set badge name - how you'd like to be addressed.", "s2");
	isOK &= assert(form.fullname.value!="", "nameRow", "Please set your name for correspondence, please.", "s2");
	isOK &= assert(form.email.value != "", "emailRow", "Please provide an email address.", "s1");
	isOK &= assert(form.email.value == form.emailAgain.value, "emailAgainRow", "Please type the same address in both email boxes - to make sure it's right.", "s1");
//	isOK &= assert(form.payment[0].checked || form.payment[1].checked, "paymentRow", "Do let us know how you'd like to pay.", "s2");
//	isOK &= assert(!form.payment[0].checked || (form.phone1.value!="" || form.phone2.value!=""), "phoneRow", "We need a phone number please", "s1");
//	isOK &= assert(form.address1.value!="" || form.invoiceAddress.innerText!="", "addressRow", "We need a billing address, please", "s2")
//					&& assert(form.postcode.value!="", "postcodeRow", "Postal code!", "s2");
//	isOK &= assert((form.invoiceAddress.value != "") == (form.invoicePostcode.value != ""),
//						"invoiceAddressRow", 
//						"You've given a separate invoicing address without the postcode", "s2");
	if (isOK) {
		var cartId= form.email.value + new Date()/100;
		form.cartId.value= cartId;
//		if (form.payment[0].checked) {
//			form.thankyou.value=payForm(cartId, pounds, form); 
//			form.next.value="";
//		}
		// Modified by DMC to block certain countries.
		if (isBlockedCountry(form.country.value)) {
			window.location="/ot2004/registrationoffline.shtml";
			return;
		}
		form.submit();
	}
}

function assert(isOk, rowId, msg, okStyle) {
	if (isOk) {
		document.getElementById(rowId).className=okStyle;
		return true;
	} else {
		errorCell=document.getElementById("errorMsg");
		if (errorCell.innerHTML == "") { // this is the first error
			errorCell.innerHTML = "Extra input required<br /><br />";
			errorCell.style.backgroundColor="#ff0000";
		}
		document.getElementById(rowId).className="sx";
		errorCell.innerHTML = errorCell.innerHTML + "&bull; " + msg + "<br>";
		return false;
	}
}

function hideErrors() {
	var errorCell=document.getElementById("errorMsg");
	errorCell.innerHTML = "";
	//errorCell.style="s2";
}

function setAmount() {
	pounds= 1398.25;
	var amount= "&pound;1190 + VAT";
	var form= document.forms["registrationForm"];

	if (form.isDiscount) {
		amount= "&pound;595 + VAT"; pounds=699.13;
	} else {
		if (form.bcsoops.checked) {amount= "&pound;1050 + VAT"; pounds=1233.75;}
		if (form.academic.checked) {amount= "&pound;875 + VAT"; pounds=1028.12;}
		if (form.submitting.checked) {amount= "&pound;525 + VAT"; pounds=616.87;}
	}
	document.getElementById("amount").innerHTML= "" + amount;
	document.getElementById("amountInt").innerHTML= "" + pounds;
}

function payForm(cartId, pounds, form) {
	var address= form.address1.value + "&#10;" + form.address2.value + "&#10;" + form.address3.value;
	var pc= form.postcode.value;
	if (form.invoiceAddress.value !="") {
		address= form.invoiceAddress.value; pc= form.invoicePostcode.value;
	}
	
	return "<form id='pay' action='https://select.worldpay.com/wcc/purchase' method='POST'>" 
		+ "<input type='hidden' name='instId' value='79767'>"
		+ "<input type='hidden' name='cartId' value='" + cartId + "'>"
		+ "<input type='hidden' name='amount' value='" + pounds + "'>"
		+ "<input type='hidden' name='currency' value='GBP'>"
		+ "<input type='hidden' name='desc' value='OT2004 conference and accommodation'>"
		// + "<input type='hidden' name='testMode' value='100'>"
		+ "<input type='hidden' name='email' value='" + form.email.value + "'>"
		+ "<input type='hidden' name='name' value='" + form.fullname.value + "'/>"
		+ "<input type='hidden' name='address' value='" + address + "'/>"
		+ "<input type='hidden' name='postcode' value='" + pc + "'/>"
		+ "<input type='hidden' name='country' value='" + form.country.value + "'/>"
		+ "<input type='hidden' name='tel' value='" + form.phone1.value + "'/>"
		+ "<p><input type='submit' value='Proceeding to Credit Card payment ...'></p>"
		+ "</form>"
		+ "<script>document.forms['pay'].submit();</" + "script>"; //break up </ script> for mozilla's benefit!
}
function setBadge() {
	var fullname=document.forms["registrationForm"].fullname.value;
	var badge=document.forms["registrationForm"].badge.value;
	var org=document.forms["registrationForm"].organisation.value;
	
	if (fullname != "") document.getElementById("nameEg").innerHTML = fullname;
	if (badge != "") document.getElementById('badgeEg').innerHTML= badge;
	document.getElementById('orgEg').innerHTML= org;
}

var blockedCountries = new Object();
blockedCountries["NG"]=true;
blockedCountries["GM"]=true;
blockedCountries["GH"]=true;
blockedCountries["AF"]=true;
blockedCountries["DZ"]=true;
blockedCountries["AZ"]=true;
blockedCountries["BY"]=true;
blockedCountries["BG"]=true;
blockedCountries["EG"]=true;
blockedCountries["EE"]=true;
blockedCountries["GA"]=true;
blockedCountries["GM"]=true;
blockedCountries["GE"]=true;
blockedCountries["GH"]=true;
blockedCountries["IQ"]=true;
blockedCountries["IE"]=true;
blockedCountries["IL"]=true;
blockedCountries["KZ"]=true;
blockedCountries["LR"]=true;
blockedCountries["LT"]=true;
blockedCountries["MY"]=true;
blockedCountries["MA"]=true;
blockedCountries["MZ"]=true;
blockedCountries["MM"]=true;
blockedCountries["NA"]=true;
blockedCountries["NE"]=true;
blockedCountries["NG"]=true;
blockedCountries["PK"]=true;
blockedCountries["RO"]=true;
blockedCountries["RU"]=true;
blockedCountries["RW"]=true;
blockedCountries["TR"]=true;
blockedCountries["UG"]=true;
blockedCountries["UA"]=true;
blockedCountries["UZ"]=true;
blockedCountries["YE"]=true;
blockedCountries["YU"]=true;

function isBlockedCountry(country) {
	return blockedCountries[country];
}

