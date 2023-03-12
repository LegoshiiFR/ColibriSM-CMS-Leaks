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
	$token = fetch_or_get($_POST['token'], null);
	$type  = fetch_or_get($_POST['type'], null);
	
	if (empty($token) || len_between($token, 50, 250) != true) {
		$data['code']    = 400;
		$data['message'] = "Incorrect token value";
		$data['data']    = array();
	}

	else if (empty($type) || in_array($type, array("ios", "android")) != true) {
		$data['code']    = 400;
		$data['message'] = "Incorrect device type value";
		$data['data']    = array();
	}

	else {
		$data['code']    = 200;
		$data['message'] = "Notification token saved";
		$data['data']    = array();

		cl_update_user_data($me["id"], array(
			"pnotif_token" => json(array(
				"token"    => cl_text_secure($token),
				"type"     => $type
			), true)
		));
	}
}