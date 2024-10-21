function openGoogleMaps() {
  window.location.href =
    'https://www.google.de/maps/place/Ruwoldtweg+6,+22309+Hamburg/@53.6096245,10.048644,17z/data=!3m1!4b1!4m5!3m4!1s0x47b1890d744ae17f:0x843cb222b30ef6a5!8m2!3d53.6096213!4d10.0508327';
}

$(document).ready(function (e) {
  $('#googleMaps-Image, #googleMaps-ImageMobile').on('click', openGoogleMaps);

  //navbar
  $('.navT, #navitem, #navitem2, #navitem3, #navitem4').on('click', function () {
    $('.navT').toggleClass('active');
    $('#menu').toggleClass('open');
    $('.content').toggleClass('shift');
  });

  let movingB = document.getElementById('scrollanimation');
  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value < 3300) {
      movingB.style.height = value * 0.8 + 'px';
    }
  });
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 2200) {
      $('#scrollanimation').css('backgroundColor', '#C5A15D');
    } else if ($(window).scrollTop() < 2200) {
      $('#scrollanimation').css('backgroundColor', '#C5A15D');
    } else {
      $('#scrollanimation').show();
    }
  });

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 500) {
      $('.ScrollAnimation').fadeOut();
    } else {
      $('.ScrollAnimation').fadeIn();
    }
  });

  //title effeckt
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 300) {
      $('.aboutus-title').show();
      $('.aboutus-title h1').css(
        'animation',
        'slide-rotate-hor-top 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      );
    } else {
      $('.aboutus-title').fadeOut();
    }
  });

  //img effeckt
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 400) {
      $('.aboutTop_img').show();
      $('.aboutTop_img').css('animation', 'img_anim 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both ');
    } else {
      $('.aboutTop_img').fadeOut();
    }
  });

  //video effeckt
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 3200) {
      $('.video').show();
      $('.video').css('animation', 'img_anim 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both ');
    } else {
      $('.video').fadeOut();
    }
  });

  //membership title
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1100) {
      $('.membership-titel').fadeIn();
      $('.membership-titel h1').css('animation', 'text_anim-title 2s forwards ');
    } else {
      $('.membership-titel').fadeOut();
    }
  });

  //membership title
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1100) {
      $('.membership-titel').fadeIn();
      $('.membership-titel h1').css('animation', 'text_anim-title 2s forwards ');
    } else {
      $('.membership-titel').fadeOut();
    }
  });

  //membership card 1
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 1300) {
      $('.cardSection').fadeIn();
      $('.c1').css('animation', 'card-anim 1s forwards ');
      $('.c2').css('animation', 'card-anim 1.5s forwards ');
      $('.c3').css('animation', 'card-anim 2s forwards ');
    } else {
      $('.cardSection').fadeOut();
    }
  });

  //Bilder Galarie
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 2300) {
      $('.galarie-bilder').fadeIn();
      $('.gb').css('animation', 'img_anim 1.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both  ');
    } else {
      $('.galarie-bilder').fadeOut();
    }
  });

  //Mobile about bot text
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 700) {
      $('.aboutUs-mobile-bottomText').css('animation', 'text_anim 2s forwards ');
    }
  });

  // Bilder Galarie Funktion
  $('.galarie-bilder .gb').on('click', function () {
    const clickedClass = $(this)
      .attr('class')
      .split(' ')
      .find((c) => c.startsWith('galarie'));
    const bigClass = `${clickedClass}-big`;

    $(`.${bigClass}`).toggleClass('hidden');
  });

  $('.gb-big').on('click', function () {
    $(this).toggleClass('hidden');
  });
});

function toandrey() {
  window.location = 'https://www.instagram.com/andrey_vassilev/';
}
function tolara() {
  window.location = 'https://www.instagram.com/lauralilalaura/';
}
function tohaidar() {
  window.location = 'https://www.instagram.com/haidardawud/';
}
function visitInsta() {
  window.location = 'https://www.instagram.com/harlekin.ev/';
}

function handleContact() {
  var email = 'info@harlekin-ev.com';
  var subject = 'Einfache Mitgliedschaft';
  var emailBody = 'Guten Tag, ich würde gerne mehr über die einfache Mitgliedschaft wissen.';
  document.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
}
