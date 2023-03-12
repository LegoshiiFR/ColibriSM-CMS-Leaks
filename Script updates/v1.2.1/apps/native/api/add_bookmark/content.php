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
	$post_id   = fetch_or_get($_POST['post_id'], 0);
	$post_data = cl_raw_post_data($post_id);

	if (not_empty($post_data)) {
		if (cl_has_saved($me['id'], $post_id) != true) {
            cl_db_insert(T_BOOKMARKS, array(
                'publication_id' => $post_id,
                'user_id'        => $me['id'],
                'time'           => time()
            ));

            $data['code']    = 200;
            $data['message'] = "";
            $data['data']    = array(
                "bookmark"   => true
            );
        }
        else {
            cl_db_delete_item(T_BOOKMARKS, array(
                'publication_id' => $post_id,
                'user_id'        => $me['id']
            ));

            $data['code']    = 200;
            $data['message'] = "";
            $data['data']    = array(
                "bookmark"   => false
            );
        }
	}
	else {
		$data['code']    = 400;
        $data['message'] = "Post id is missing or invalid";
    	$data['data']    = array();
	}
}