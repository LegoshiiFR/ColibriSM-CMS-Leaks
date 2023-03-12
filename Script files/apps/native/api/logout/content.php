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
	cl_db_delete_item(T_SESSIONS, array(
		"user_id"  => $me["id"],
		"platform" => "mobile_ios"
	));

	cl_db_delete_item(T_SESSIONS, array(
		"user_id"  => $me["id"],
		"platform" => "mobile_android"
	));

	$data         = array(
		'valid'   => true,
		'code'    => 200,
		'message' => 'Signout successful',
		'data'    => array()
	);
}