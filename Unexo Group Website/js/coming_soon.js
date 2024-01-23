$(document).ready(function() {

    var target_date = new Date("June 20, 2017").getTime();
  
    var days, hours, minutes, seconds;
  
    var $days = $("#days"),
      $hours = $("#hours"),
      $minutes = $("#minutes"),
      $seconds = $("#seconds");
  
    setInterval(function() {
  
      var current_date = new Date().getTime();
      var seconds_left = (target_date - current_date) / 1000;
  
      days = parseInt(seconds_left / 86400);
      seconds_left = seconds_left % 86400;
  
      hours = parseInt(seconds_left / 3600);
      seconds_left = seconds_left % 3600;
  
      minutes = parseInt(seconds_left / 60);
      seconds = parseInt(seconds_left % 60);
  
      $days.text(days);
      $hours.text(hours);
      $minutes.text(minutes);
      $seconds.text(seconds);
  
    }, 1000);
  });



  
  var typed = new Typed(".auto-type", {
    strings: ["Coming Soon...","Coming Soon...","Coming Soon...","Coming Soon..."],
    typeSpeed: 100,
    backSpeed: 30,
    showCursor: false
  });

