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
///  show email field if checkbox ticked
/////////////////////////////////////////

$('#email-toggler').click(function() {
  if ($(this).is(':checked') ) {
    $('#email-toggle' ).show('fast');
  } else {
    $('#email-toggle').hide('fast');
  }
});

/////////////////////////////////////////
///  action toggles for cards
/////////////////////////////////////////

$('.card-action').click(function() {
  $(this).next('div').toggle();
});

/////////////////////////////////////////
///  placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-success').click(function() {
  $('#result').load('includes/logon-success.html');
});
