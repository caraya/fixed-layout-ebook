// Fixed Layout Epub Script
// Carlos Araya (carlos.araya@gmail.com)

// There will be things we only want to do if we're in an ePub Reader.
// isReadingSystem tests if we're in a user agent by testing for the navigator property
// then we test if the navigator object has the epubReadingSystem propery
// we join the 2 with a logical and (&&) meaning they both have to be true for isReadingSystem to be true
var isReadingSystem = navigator && window.navigator.epubReadingSystem;

$( document ).ready(function() {
  // window.alert( "ready!" );
 $( '#p04-dreams' ).animate({opacity: '1'}, 500 );
 $( '#p04-challenges').animate({opacity: '1'}, 2000 );
 $( '#p04-opportunities' ).animate({opacity: '1'}, 5000);
});