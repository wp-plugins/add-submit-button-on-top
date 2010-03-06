jQuery(function ($) {
	// adds 2nd SAVE CHANGES button to the settings pages 
	$('#wpbody-content .wrap h2 + form p.submit input[value=Save Changes]').clone().insertAfter('#wpbody-content .wrap h2');
	$('#wpbody-content .wrap h2 + input[value=Save Changes]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
	// adds 2nd UPDATE FILE button to the settings pages 
	$('.plugin-editor-php #wpbody-content .wrap input[value=Update File], .theme-editor-php #wpbody-content .wrap input[value=Update File]').clone().insertAfter('.plugin-editor-php #wpbody-content .wrap h2, .theme-editor-php #wpbody-content .wrap h2');
	$('.plugin-editor-php .wrap h2 + input[value=Update File], .theme-editor-php .wrap h2 + input[value=Update File]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
	// adds 2nd UPDATE PROFILE button to the settings pages 
	$('#wpbody-content .wrap h2 + form p.submit input[value=Update Profile]').clone().insertAfter('#wpbody-content .wrap h2');
	$('#wpbody-content .wrap h2 + input[value=Update Profile]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
});