/* global $ */
$(document).ready(function(){
  $('.single-item-top').slick({
    autoplay: true,
    autoplaySpeed: '4000',
    pauseOnHover: false,
    vertical: true
  });
  $('.single-item-bottom').slick({
    autoplay: true,
    autoplaySpeed: '4000',
    pauseOnHover: false
  });
  $(document).foundation();
  quotegen();
  $( "#quote_btn" ).click(function() {
  quotegen();
});
$(window).fadeThis();
$('#phone').hover(function(e){
  $("#ContactText").html('My Google Voice Number is <a href="tel:804-476-2453">804-476-2453</a>')
});
$('#mail').hover(function(e){
  $("#ContactText").html('Email is probably the best way to reach me. Let me know <a href="mailto:kasey@kaseyclark.com"> kasey@kaseyclark.com</a>')
});
$('#linkedin').hover(function(e){
  $("#ContactText").html('Find my Linkedin profile <a href="https://www.linkedin.com/in/kaseyjclark"> here</a>')
});
$('#twitter').hover(function(e){
  $("#ContactText").html("Only need 140 characters to tell me you'd like to work together, eh? I like your style <a href='https://twitter.com/kasey_clark'>@kasey_clark</a>")
});
$('#github').hover(function(e){
  $("#ContactText").html("This is getting a little more personal, but I dig it. See some of my public projects on my <a href='http://github.com/yesakmac'>github.</a>")
});
$('#googleplus').hover(function(e){
  $("#ContactText").html("If your main mechianism for communicating is google plus, I'm not sure we're going to work out. Sorry.")
});
});

var quotes = [
  {"name" : "Albert Einstien", "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving."},
  {"name" : "Elon Musk", "quote": "When something is important enough, you do it even if the odds are not in your favor."},
  {"name" : "Jim Rohn", "quote": "Take care of your body. It's the only place you have to live."},
  {"name" : "Peter Straub", "quote": "If I planned everything out in advance, I'd expire of boredom."},
  {"name" : "Ray Kurzweil", "quote": "A successful person isn't necessarily better than her less successful peers at solving problems; her pattern-recognition facilities have just learned what problems are worth solving."},
  {"name" : "Bill Gates", "quote": "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."},
  {"name" : "Dr Seuss", "quote": "Step with care and great tact, and remember that life's a great balancing act."},
  {"name" : "Ron Swanson", "quote": "Never half-ass two things, whole-ass one thing."},
  {"name" : "Peter Straub", "quote": "If I planned everything out in advance, I'd expire of boredom."},
  {"name" : "Ray Kurzweil", "quote": "A successful person isn't necessarily better than her less successful peers at solving problems; her pattern-recognition facilities have just learned what problems are worth solving."}
];

function quotegen(){
    var quote = quotes[Math.floor(Math.random()*quotes.length)];
  console.log(quote.name + " " + quote.quote)
  if (document.getElementById('quote_text').innerText === quote.quote)
  {
    console.log('duplicated');
    quotegen();
  }
  else{
   document.getElementById('quote_name').innerText = quote.name;
   document.getElementById('quote_text').innerText = quote.quote;
 } 
}