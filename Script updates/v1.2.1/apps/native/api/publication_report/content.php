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

    $report_reason    = fetch_or_get($_POST['reason'], false); 
    $post_id          = fetch_or_get($_POST['post_id'], false); 
    $comment          = fetch_or_get($_POST['comment'], false); 
    $post_data        = cl_raw_post_data($post_id);

    if (empty($post_data)) {
        $data['code']    = 400;
        $data['message'] = "Post id is missing or invalid";
        $data['data']    = array();
    }

    else if(in_array($report_reason, array_keys($cl['post_report_types'])) != true) {
        $data['code']    = 400;
        $data['message'] = "Report reason id is missing or invalid";
        $data['data']    = array();
    }

    else {
        cl_db_delete_item(T_PUB_REPORTS, array(
            'user_id' => $me['id'],
            'post_id' => $post_id
        ));

        cl_db_insert(T_PUB_REPORTS, array(
            'user_id' => $me['id'],
            'post_id' => $post_id,
            'reason'  => $report_reason,
            'comment' => (empty($comment)) ? "" : cl_croptxt($comment, 2900),
            'seen'    => '0',
            'time'    => time()
        ));

        $data['code']    = 200;
        $data['message'] = "Report sent successfully";
        $data['data']    = array();
    }
}