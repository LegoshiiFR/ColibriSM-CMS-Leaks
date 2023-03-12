<?php 
# @*************************************************************************@
# @ @author Mansur Altamirov (Mansur_TL)									@
# @ @author_url 1: https://www.instagram.com/mansur_tl                      @
# @ @author_url 2: http://codecanyon.net/user/mansur_tl                     @
# @ @author_email: highexpresstore@gmail.com                                @
# @*************************************************************************@
# @ ColibriSM - The Ultimate Modern Social Media Sharing Platform           @
# @ Copyright (c) 21.03.2020 ColibriSM. All rights reserved.                @
# @*************************************************************************@

if (empty($cl['is_logged'])) {
	$data         = array(
		'code'    => 401,
		'data'    => array(),
		'message' => 'Unauthorized Access'
	);
}
else {
	$data["code"]    = 200;
	$data["valid"]   = true;
	$data["message"] = "";
	$data["data"]    = array(
		"profile_visibility" => $me["profile_privacy"],
		"contact_privacy"    => $me["contact_privacy"],
		"search_visibility"  => (($me["index_privacy"] == "Y") ? true : false)
	);
}