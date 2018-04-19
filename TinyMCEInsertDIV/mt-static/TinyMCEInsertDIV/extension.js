(function ($) {
var config = MT.Editor.TinyMCE.config;
  
$.extend(config, {
    init_instance_callback : function (ed) {
    	if (tinymce.editors.length < 2) {
    		var tmceIframe = ed.contentDocument;
    		$(tmceIframe).find("body.mceContentBody").css({'border' : 'none', 'background-color' : '#fff'});
		    var insertDiv = ed.contentDocument.activeElement.innerHTML;
			if (!insertDiv.match(/class=\"entryBody\"/g)){
		    	ed.contentDocument.activeElement.innerHTML = "<div class='entry'>" + ed.contentDocument.activeElement.innerHTML + "</div>";
			}
		}
	}
});

}(jQuery));
