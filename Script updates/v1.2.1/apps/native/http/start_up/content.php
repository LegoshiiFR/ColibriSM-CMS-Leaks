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

if (empty($cl["is_logged"])) {
	cl_redirect("404");
}

else if($me["start_up"] == "done") {
	cl_redirect("home");
}

else {
	$cl["app_statics"] = array(
		"styles" => array(
			cl_css_template("statics/css/apps/start_up/style.master"),
			cl_css_template("statics/css/apps/start_up/style.mq")
		)
	);

	if ($cl["theme_mode"] == "N") {
		array_push($cl["app_statics"]["styles"], cl_css_template("statics/css/apps/start_up/style.dark"));
	}

	$cl["page_title"]  = cl_translate("Completion of registration");
	$cl["page_desc"]   = $cl["config"]["description"];
	$cl["page_kw"]     = $cl["config"]["keywords"];
	$cl["pn"]          = "start_up";
	$cl["sbr"]         = true;
	$cl["sbl"]         = true;
	$cl["suggestions"] = cl_get_follow_suggestions(20);;
	$cl["http_res"]    = cl_template("start_up/content");
}