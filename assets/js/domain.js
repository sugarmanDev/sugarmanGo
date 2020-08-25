var getDomain = window.location.hostname;

var targetDomain = '';

if(getDomain =='salk.co.kr' || getDomain == 'sugarmandev.github.io') {
  targetDomain = 'https://gimyo.co.kr/salk';
}
else {
  targetDomain = 'http://localhost/salk';
}
