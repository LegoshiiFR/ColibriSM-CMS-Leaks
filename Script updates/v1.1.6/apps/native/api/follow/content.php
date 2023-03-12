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
	$user_id = fetch_or_get($_POST['user_id'], 0);
    $udata   = cl_raw_user_data($user_id);

    if (not_empty($udata) && $me['id'] != $user_id) {
        if (cl_is_blocked($me['id'], $user_id) != true && cl_is_blocked($user_id, $me['id']) != true) {
            if (cl_is_following($me['id'], $user_id)) {
                
                cl_unfollow($me['id'], $user_id);

                $num1 = ($me['following'] -= 1);
                $num2 = ($udata['followers'] -= 1);

                cl_update_user_data($me['id'], array(
                    'following' => (($num1 < 0) ? 0 : $num1)
                ));

                cl_update_user_data($user_id, array(
                    'followers' => (($num2 < 0) ? 0 : $num2)
                ));

                cl_db_delete_item(T_NOTIFS, array(
                    'notifier_id'  => $me['id'],
                    'recipient_id' => $user_id,
                    'subject'      => 'subscribe',
                    'entry_id'     => $me['id']
                ));

                $data["code"]    = 200;
                $data["valid"]   = true;
                $data["message"] = "";
                $data["data"]    = array(
                    "follow"     => false
                );
            }

            else{

                cl_follow($me['id'], $user_id);

                $data["code"]    = 200;
                $data["valid"]   = true;
                $data["message"] = "";
                $data["data"]    = array(
                    "follow"     => true
                );

                cl_update_user_data($me['id'], array(
                    'following' => ($me['following'] += 1)
                ));

                cl_update_user_data($user_id, array(
                    'followers' => ($udata['followers'] += 1)
                ));

                cl_notify_user(array(
                    'subject'  => 'subscribe',
                    'user_id'  => $user_id,
                    'entry_id' => $me['id']
                ));
            }
        }

        else {
            $data['code']     = 400;
            $data['err_code'] = "invalid_request_data";
            $data['message']  = "User ID is missing or invalid";
            $data['data']     = array();
        }
    }
    else {
        $data['code']     = 400;
        $data['err_code'] = "invalid_request_data";
        $data['message']  = "User ID is missing or invalid";
        $data['data']     = array();
    }
}