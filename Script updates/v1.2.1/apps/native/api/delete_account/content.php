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
	$acc_password = fetch_or_get($_POST['password'], false);

    if (empty($acc_password) || (password_verify($acc_password, $me['password']) != true)) {
        $data['code']    = 400;
        $data['message'] = "Account password is missing or invalid";
        $data['data']    = array();
    }

    else {
        $data["code"]    = 200;
        $data["message"] = "Account deleted successfully";
        $data["data"]    = array();

        cl_delete_user_data($me['id']);
    }
}