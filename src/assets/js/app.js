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
///  action toggles for cards
/////////////////////////////////////////

$('.card-action').click(function() {
  $(this).next('div').toggle();
});

/////////////////////////////////////////
///   password strength check
/////////////////////////////////////////
// via: http://stackoverflow.com/questions/948172/password-strength-meter/11268104#11268104

// setup how scoring works
function scorePassword(pass) {
  var score = 0;
  if (!pass)
    return score;

  // award every unique letter until 5 repetitions
  var letters = new Object();
  for (var i=0; i<pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }

  // bonus points for mixing it up
  var variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  }

  variationCount = 0;
  for (var check in variations) {
    variationCount += (variations[check] == true) ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(score);
}

// define scores
function checkPassStrength(pass) {
  var score = scorePassword(pass);
  if (score > 80)
    return 'strong';
  if (score > 60)
    return 'good';
  if (score > 30)
    return 'poor';
  if (score >= 0)
    return 'weak';

  return '';
}

// check for strength
$(document).ready(function() {
  $('#pass1').on('keypress keyup keydown', function() {
    var pass = $(this).val();
    $('#strength_human').text(checkPassStrength(pass));
    $('#strength_score').text(scorePassword(pass));
  });
});

/////////////////////////////////////////
///  placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-success').click(function() {
  $('#result').load('includes/logon-success.html');
});

