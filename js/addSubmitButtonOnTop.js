jQuery(function ($) {
	// adds 2nd SAVE CHANGES button to the settings pages 
	var papaSaveBTN = $('#wpbody-content .wrap h2 + form p.submit input[value=Save Changes]').clone().insertAfter('#wpbody-content .wrap h2');
	$('#wpbody-content .wrap h2 + input[value=Save Changes]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
	// adds 2nd UPDATE FILE button to the settings pages 
	var papaUpdateBTN = $('#wpbody-content .wrap h2 form p.submit input[value=Update File]').clone().insertAfter('#wpbody-content .wrap h2');
	$('#wpbody-content .wrap h2 + input[value=Update File]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
	// adds 2nd UPDATE PROFILE button to the settings pages 
	var papaUpdateBTN = $('#wpbody-content .wrap h2 + form p.submit input[value=Update Profile]').clone().insertAfter('#wpbody-content .wrap h2');
	$('#wpbody-content .wrap h2 + input[value=Update Profile]').wrap('<p class="submit" style="margin:10px 0 5px 0;padding:0;" />');
});