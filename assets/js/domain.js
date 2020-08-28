var getDomain = window.location.hostname;

var targetDomain = '';

if (getDomain == 'sugarmango.co.kr' || getDomain == 'sugarmandev.github.io') {
  targetDomain = 'https://gimyo.co.kr/sugarmango';
} else {
  targetDomain = 'http://localhost/sugarmanGo';
}