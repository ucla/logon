/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

// forms config
webshim.setOptions('forms', {
  //set lazyCustomMessages to true
  lazyCustomMessages: true,
  //show custom styleable validation bubble
  replaceValidationUI: true,
  handleBubble: 'hide',
  fieldWrapper: '.fieldset',
  iVal: {
    'recheckDelay': 200,
  }
});

// start polyfilling
webshim.polyfill('forms forms-ext');

/////////////////////////////////////////
///     ZXCVBN Password Feedback
/////////////////////////////////////////

var strength = {
	0: "Horrible!",
	1: "Bad!",
	2: "Weak.",
	3: "Good.",
	4: "Strong!"
}

var password = document.getElementById('pass1');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function()
{
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if(val !== "") {
    text.innerHTML = "<strong>" + strength[result.score] + "</strong> " + "<span class='help-text'>" + result.feedback.warning + ". " + result.feedback.suggestions + "</span"; 
  }
  else {
    text.innerHTML = "";
  }
});

/////////////////////////////////////////
///  action toggles for cards
/////////////////////////////////////////

$('.card-action').click(function() {
  $(this).next('div').toggle();
  // $(this).prev('dd').toggle();
});

/////////////////////////////////////////
/// placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-success').click(function() {
  $('#result').load('assets/includes/logon-exists.html');
});
