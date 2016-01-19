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
  // $(this).prev('dd').toggle();
});

/////////////////////////////////////////
/// placeholder behaviour for prototype
/////////////////////////////////////////

$('.logon-success').click(function() {
  $('#result').load('assets/includes/logon-exists.html');
});

    
