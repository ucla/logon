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
///       TOS enable/disable
/////////////////////////////////////////

document.getElementsByName("tos")[0].addEventListener("scroll", checkScrollHeight, false);

function checkScrollHeight(){
    var agreementTextElement = document.getElementsByName("tos")[0] 
    if ((agreementTextElement.scrollTop + agreementTextElement.offsetHeight) >= agreementTextElement.scrollHeight){
        document.getElementsByName("agree-to-tos")[0].disabled = false;
    }
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