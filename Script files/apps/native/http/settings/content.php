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

$cl["page_title"]    = cl_translate("Account settings");
$cl["page_desc"]     = $cl["config"]["description"];
$cl["page_kw"]       = $cl["config"]["keywords"];
$cl["pn"]            = "settings";
$cl["sbr"]           = true;
$cl["sbl"]           = true;
$cl["blocked_users"] = cl_get_blocked_users();
$cl["settings_app"]  = fetch_or_get($_GET["sapp"], false);
$cl["settings_app"]  = (not_empty($cl["settings_app"])) ? cl_text_secure($cl["settings_app"]) : 0;
$cl["app_statics"]   = array(
	"styles"         => array(
		cl_css_template("statics/css/apps/settings/style.master")
	)
);

if ($cl["theme_mode"] == "N") {
	array_push($cl["app_statics"]["styles"], cl_css_template("statics/css/apps/settings/style.dark"));
}

$cl["http_res"] = cl_template("settings/content");

