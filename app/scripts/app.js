/////////////////////////////////////////
///     magnific popup
/////////////////////////////////////////

// set classes to be used to trigger overlays
$('.ajax-popup').magnificPopup({
  type: 'ajax'
});

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
///  hide/show input if checkbox ticked
/////////////////////////////////////////

$('#email-uclaid-toggler').click(function() {
  if ($(this).is(':checked') ) {
    $('#uclaid-toggle' ).show('fast');
    $('#email-toggle' ).hide('fast');
  } else {
    $('#uclaid-toggle').hide('fast');
    $('#email-toggle').show('fast');
  }
});

/////////////////////////////////////////
///  placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-fail').click(function() {
  $('#result').load('includes/logon-fail.html');
});
$('.logon-success').click(function() {
  $('#result').load('includes/logon-success.html');
});

$('.lookup-fail').click(function() {
  $('#result').load('includes/lookup-fail.html');
});
$('.lookup-success').click(function() {
  $('#result').load('includes/lookup-success.html');
});
