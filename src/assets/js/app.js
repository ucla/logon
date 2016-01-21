/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

// start polyfilling
webshim.polyfill('forms-ext');

/////////////////////////////////////////
///     initialize foundation
/////////////////////////////////////////

// http://foundation.zurb.com/sites/docs/javascript.html#initializing
$(document).foundation();

/////////////////////////////////////////
///  action toggles for cards
/////////////////////////////////////////

$('.card-action').click(function() {
  $(this).next('div').toggle();
  // $(this).prev('dd').toggle();
});

/////////////////////////////////////////
///  show email field if no UID
/////////////////////////////////////////

$('#email-toggler').click(function() {
  if ($(this).is(':checked') ) {
    $('#email-toggle').show('fast');
    $('#uclaid').prop('disabled',true);
  } else {
    $('#email-toggle').hide('fast');
    $('#uclaid').prop('disabled',false);
  }
});

/////////////////////////////////////////
/// placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-success').click(function() {
  $('#result').load('assets/includes/logon-exists.html');
});
