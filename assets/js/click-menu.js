var mobileMenu = '<div class="mobile" id="mobile">';
mobileMenu += '<div class="container-fluid mobile-menu">';
mobileMenu += '  <button class="close-btn toggle-mobile-menu">';
mobileMenu += '    <span class="material-icons">';
mobileMenu += '      clear';
mobileMenu += '      </span>';
mobileMenu += '  </button>';
mobileMenu += '  <div class="mobile-menu-list">';
mobileMenu += '<ul>';
mobileMenu += '      <li><a href="./location.html">위치</a></li>';
mobileMenu += '      <li><a href="./service.html">서비스</a></li>';
mobileMenu += '      <li><a href="./price.html">이용료</a></li>';
mobileMenu += '      <li><a>파트너</a></li>';
mobileMenu += '    </ul>';
mobileMenu += '    <a href="./start.html">';
mobileMenu += '      <button type="button">';
mobileMenu += '        시작하기';
mobileMenu += '      </button>';
mobileMenu += '    </a>';
mobileMenu += '  </div>';
mobileMenu += '</div>';
mobileMenu += '</div>';

$(document).on('click', '.toggle-mobile-menu', function() {
  $('.mobile-menu').toggle();

  $('html').toggleClass('prevent-scroll')
  $('body').toggleClass('prevent-scroll')
});

$(document).ready(function() {
  $('body').append(mobileMenu);
})

$(document).on('click', '.event-banner-btn', function() {
  $('.event-banner').remove();
  $('.top-nav').css('top', '0px')
});