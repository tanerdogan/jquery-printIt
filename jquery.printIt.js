/*
 * @description jQuery PrintIt plugin.
 * @usage $(element).printIt();
 * @author Taner DOGAN <www.tanerdogan.com>
 */
jQuery.fn.printIt = function(options){

    defaults = {
        cssURI: "css/print.css"
    };

    this.options = $.extend( {}, defaults, options) ;

    // Create an iframe
    _frameName = "printIt-" + (new Date()).getTime();
    var _frame = $( "<iframe name='" + _frameName + "'>" );

    // Hide frame
    _frame
    .css( "width", "1px" )
    .css( "height", "1px" )
    .css( "position", "absolute" )
    .css( "left", "-9999px" )
    .appendTo($("body"));

    var oFrame = window.frames[ _frameName ];
    var oDocument = oFrame.document;

    oDocument
    .open()
    .write("<html><head>"
        +'<link rel="stylesheet" type="text/css" href="'+this.options.cssURI+'" media="print" />'
        +"</head><body>"
        +this.html()
        +"</body></html>");
    oDocument.close();

    // Print
    oFrame.print();
}