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

$cl['follow_suggestion'] = cl_get_follow_suggestions(6);
$cl['hot_topics']        = cl_get_hot_topics(6);
$cl['visitor_uniqid']    = null;

if (empty($_COOKIE['visid'])) {
	$cl_unid_hash = sha1(rand(11111, 99999)) . time() . md5(microtime());

	setcookie("visid", $cl_unid_hash, strtotime("+ 1 year"), '/') or die('unable to create cookie');
}

else {
	$cl['visitor_uniqid'] = $_COOKIE['visid'];
}
