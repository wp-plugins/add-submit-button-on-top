jQuery(function ($) {
	// adds 2nd SAVE CHANGES button to the settings pages 
	$('#wpbody-content .wrap form p.submit input[value=Save Changes]').clone().prependTo('#wpbody-content .wrap form');
	$('#wpbody-content .wrap form > input[value=Save Changes]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
	// adds 2nd UPDATE FILE button to the settings pages 
	$('.plugin-editor-php #wpbody-content .wrap form input[value=Update File]').clone().prependTo('.plugin-editor-php #wpbody-content .wrap form div:eq(0)');
	$('.plugin-editor-php .wrap form div:eq(0) > input[value=Update File]').wrap('<p class="submit" style="margin:5px 0 10px 0;padding:0;" />');
    $('.theme-editor-php #wpbody-content .wrap form input[value=Update File]').clone().prependTo('.theme-editor-php #wpbody-content .wrap form div:eq(0)');
	$('.theme-editor-php .wrap form div:eq(0) > input[value=Update File]').wrap('<p class="submit" style="margin:5px 0 10px 0;padding:0;" />');
	// adds 2nd UPDATE PROFILE button to the settings pages 
	$('#wpbody-content .wrap form p.submit input[value=Update Profile]').clone().prependTo('#wpbody-content .wrap form');
	$('#wpbody-content .wrap form > input[value=Update Profile]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
});