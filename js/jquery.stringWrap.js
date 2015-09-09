// This will allow you to wrap a specified number of words from the begining of a string in a class, with a 
// specified class


 // example from here: http://stackoverflow.com/questions/5458605/first-word-selector
 // fiddle here: http://jsfiddle.net/9AXvN/1/

 // usage 

 // $('div').wrapClass(2, 'className');

(function(){


  $.fn.stringWrap = function (numWords, cls) { 
      var node = this.contents().filter(function () { return this.nodeType == 3 }).first(),
          text = node.text(),
          first = text.split(" ", numWords).join(" "),
          cssClass = "";
     
      if (!node.length)
          return;

      // we check to see if cls has been defined
      if (cls === undefined | cls === null){
        cssClass = '';

      }
      else{
        cssClass == cls;  
      }        
      
      node[0].nodeValue = text.slice(first.length);
      node.before('<span class="' + cssClass + '">' + first + '</span>');
  };

})();