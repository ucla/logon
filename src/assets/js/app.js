/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////

// https://afarkas.github.io/webshim/demos/index.html
// start polyfilling
webshim.polyfill('forms-ext');

/////////////////////////////////////////
///     initialize foundation
/////////////////////////////////////////

// http://foundation.zurb.com/sites/docs/javascript.html#initializing
$(document).foundation();

/////////////////////////////////////////
///    action toggles for cards
/////////////////////////////////////////

$('.card-action').click(function() {
  $(this).next('div').toggle();
  // $(this).prev('dd').toggle();
});

/////////////////////////////////////////
///  swap to email if no UID on lookup
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
  $('#ajax-container').load('assets/includes/logon-exists.html');
});
