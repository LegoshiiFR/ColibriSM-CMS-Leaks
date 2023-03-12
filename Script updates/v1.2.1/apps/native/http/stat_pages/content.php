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

$page = fetch_or_get($_GET['page'], 'terms');

if (in_array($page, array('terms','privacy_policy','cookies_policy','about_us','faqs')) != true) {
	cl_redirect("404");
}

$page_titles         = array(
	'terms'          => cl_translate('Terms of Use'), 
	'privacy_policy' => cl_translate('Privacy policy'), 
	'cookies_policy' => cl_translate('Cookies policy'), 
	'about_us'       => cl_translate('About us'), 
	'faqs'           => "F.A.Qs"
);

$cl["app_statics"] = array(
	"styles" => array(
		cl_css_template("statics/css/apps/stat_pages/style.master"),
		cl_css_template("statics/css/apps/stat_pages/style.mq")
	)
);

if ($cl["theme_mode"] == "N") {
	array_push($cl["app_statics"]["styles"], cl_css_template("statics/css/apps/stat_pages/style.dark"));
}

$cl["page_title"] = $page_titles[$page];
$cl["page_desc"]  = $cl["config"]["description"];
$cl["page_kw"]    = $cl["config"]["keywords"];
$cl["pn"]         = "stat_pages";
$cl["sbr"]        = true;
$cl["sbl"]        = true;
$cl["http_res"]   = cl_template(cl_strf("%s/content",$page));


