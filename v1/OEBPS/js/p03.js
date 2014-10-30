// Fixed Layout Epub Script
// Carlos Araya (carlos.araya@gmail.com)

// There will be things we only want to do if we're in an ePub Reader.
// isReadingSystem tests if we're in a user agent by testing for the navigator property
// then we test if the navigator object has the epubReadingSystem propery
// we join the 2 with a logical and (&&) meaning they both have to be true for isReadingSystem to be true
var isReadingSystem = navigator && window.navigator.epubReadingSystem;

$( document ).ready(function() {
  // window.alert( "ready!" );
 $( '#p03-sunrise' ).animate({ left: '25%' }, 1000 );
 $( '#p03-promises').animate({opacity: '1'}, 3000 );
 $( '#p03-potential' ).animate({fontSize: '84px'}, 5000);
});

