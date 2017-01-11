/////////////////////////////////////////
///     initialize foundation
/////////////////////////////////////////

// http://foundation.zurb.com/sites/docs/javascript.html#initializing
$(document).foundation();

/////////////////////////////////////////
///    timer countdown
/////////////////////////////////////////

var intervalId = null;
var e = null;
var f = null;
var m = null;
var s = null;

var sesslen;
var timeleft;

// housekeeping, called every 1s
function countdown() {
  timeleft -= 1;
  if (timeleft <= 0) {
    var cancelbox = document.getElementById('cancelbox');
    if (cancelbox) cancelbox.style.display = 'none';
    e.innerHTML = "0:00";
    e.style.color = "#ff00a5";
    e.style.fontWeight = "bold";
    f.style.background = "#f9f9f9";
    f.style.width = '100%';

    if (intervalId) clearInterval(intervalId);
    return;
  }
  m = timeleft / 60 - (timeleft % 60) / 60;
  m = Math.round(m); //m.toFixed();
  s = timeleft % 60;
  if (s < 10) s = "0" + s;
  e.innerHTML = m + ":" + s;
  e.style.fontWeight = "bold";

  var width = 12 - timeleft / sesslen * 12.0;
  if (width) f.style.width = width + 'em';
}

// initialize the timer and set up "cancel" colors
function init_timers(_timeleft, _sesslen) {
  if (! document.getElementById) return;

  timeleft = _timeleft;
  sesslen = _sesslen;

  var cancel = document.getElementById('cancel');
  if (cancel) {
    cancel.onmouseover = function() { this.style.color = '#3399cc'; };
    cancel.onmouseout = function() { this.style.color = '#000'; };
  }
  f = document.getElementById("barfill");
  if (f) f.style.width = (100 - timeleft / sesslen * 100) + '%'

  e = document.getElementById("counter");
  if (e) intervalId = setInterval('countdown()', 1000);
}

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
///       initiate spinner
/////////////////////////////////////////

var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: .3 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: true // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('loading-spinner')
var spinner = new Spinner(opts).spin(target);