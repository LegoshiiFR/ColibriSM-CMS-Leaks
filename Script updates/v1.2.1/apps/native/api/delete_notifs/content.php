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
	$scope = fetch_or_get($_POST['scope'], array());
    $ids   = array();

    if (not_empty($scope) && is_array($scope) && are_all($scope, "numeric")) {
        foreach ($scope as $id) {
            $ids[] = $id;
        }

        $db = $db->where('recipient_id', $me['id']);
        $db = $db->where('id', $ids, 'IN');
        $qr = $db->delete(T_NOTIFS);
        
        $data['data']    = array();
        $data['code']    = 200;
        $data['message'] = "Notifications deleted successfully";
    }

    else {
    	$data['code']    = 400;
        $data['message'] = "Notification IDs are missing or invalid";
        $data['data']    = array();
    }
}