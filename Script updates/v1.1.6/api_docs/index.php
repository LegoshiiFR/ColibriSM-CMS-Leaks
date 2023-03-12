<?php
# @*************************************************************************@
# @ @author Mansur Altamirov (Mansur_TL)                                    @
# @ @author_url 1: https://www.instagram.com/mansur_tl                      @
# @ @author_url 2: http://codecanyon.net/user/mansur_tl                     @
# @ @author_email: highexpresstore@gmail.com                                @
# @*************************************************************************@
# @ ColibriSM - The Ultimate Modern Social Media Sharing Platform           @
# @ Copyright (c) 21.03.2020 ColibriSM. All rights reserved.                @
# @*************************************************************************@

require_once("../core/web_req_init.php");

$docs_page = fetch_or_get($_GET['page'], false);
?>
<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <title>ColibriSM API - Documentation</title>
        <meta name="description" content="">
        <meta name="author" content="ticlekiwi">

        <meta http-equiv="cleartype" content="on">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="css/hightlightjs-dark.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.8.0/highlight.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,500|Source+Code+Pro:300" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css" media="all">
        <link rel="icon" href="images/favicon.png" type="image/png">

        <script>
            hljs.initHighlightingOnLoad();
        </script>
    </head>

    <body class="one-content-column-version">
        <div class="left-menu">
            <div class="content-logo">
                <img alt="Logo" src="images/logo.png" height="32" />
                <span>API Documentation</span>
            </div>
            <div class="content-menu">
                <ul>
                    <li class="scroll-to-link <?php if(empty($docs_page)) { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs"); ?>">Get started</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'login') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=login"); ?>">Login</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'oauth_login') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=oauth_login"); ?>">Social login</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'signup') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=signup"); ?>">Signup</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'resetpassword') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=resetpassword"); ?>">Reset password</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'feeds') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=feeds"); ?>">Timeline feed</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'profile') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=profile"); ?>">My/User Profile data</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=profile#profile-data"); ?>">1. Fetch data</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=profile#profile-posts"); ?>">1. Profile posts</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'save_pnotif_token') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=save_pnotif_token"); ?>">Notification token</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'change_password') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=change_password"); ?>">Change password</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'refresh_access_token') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=refresh_access_token"); ?>">Refresh Access token</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'logout') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=logout"); ?>">Logout user</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'verify_user') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=verify_user"); ?>">Verify user account</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'create_post') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=create_post"); ?>">Create post & reply</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=create_post#howitworks"); ?>">1. How it works?</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=create_post#upload-post-media"); ?>">2. Upload media</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=create_post#delete-post-media"); ?>">3. Delete media</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=create_post#publish-post-data"); ?>">4. Publish</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'thread_data') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=thread_data"); ?>">Thread data</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=thread_data#fetch-data"); ?>">1. Fetch data</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=thread_data#load-replys"); ?>">2. Load replys</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'like_post') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=like_post"); ?>">Like / Unlike post</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'publication_repost') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=publication_repost"); ?>">Repost Post</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'bookmarks') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=bookmarks"); ?>">Bookmarks</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=bookmarks#get-bookmarks"); ?>">1. Get bookmarks</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=bookmarks#add-bookmark"); ?>">2. Add bookmark</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'fetch_likes') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=fetch_likes"); ?>">Fetch post likes</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'delete_post') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=delete_post"); ?>">Delete Post / Thread</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'search_hashtags') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=search_hashtags"); ?>">Search hashtags</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'search_people') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=search_people"); ?>">Search people</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'search_posts') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=search_posts"); ?>">Search Posts</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'follow') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=follow"); ?>">Follow & Unfollow</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'pin_post') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=pin_post"); ?>">Pin Post to Profile</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'gen_settings') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=gen_settings"); ?>">Update Profile Data</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'avatar_cover') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=avatar_cover"); ?>">Change avatar & cover</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=avatar_cover#upload-avatar"); ?>">1. Upload avatar</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=avatar_cover#upload-cover"); ?>">2. Upload cover</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=avatar_cover#move-cover"); ?>">2. Move cover</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'get_priv_settings') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=priv_settings"); ?>">User Privacy</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=priv_settings#get-settings"); ?>">1. Get settings</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=priv_settings#set-settings"); ?>">2. Change settings</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'fetch_following') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=fetch_following"); ?>">Fetch Following Users</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'fetch_followers') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=fetch_followers"); ?>">Fetch Followers</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'get_notifications') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=get_notifications"); ?>">Get notifications</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'delete_notifs') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=delete_notifs"); ?>">Delete notifications</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'messaging') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=messaging"); ?>">Messaging</a>
                        <ul>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#send-message"); ?>">1. Send Message</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#get-chats"); ?>">2. Get Chats</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#get-messages"); ?>">3. Get Messages</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#search-messages"); ?>">4. Search Messages</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#delete-message"); ?>">5. Delete Message</a>
                            </li>
                            <li class="scroll-to-link">
                                <a href="<?php echo cl_link("api_docs?page=messaging#clear-chat"); ?>">6. Clear Chat</a>
                            </li>
                        </ul>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'delete_account') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=delete_account"); ?>">Delete Account</a>
                    </li>
                    <li class="scroll-to-link <?php if($docs_page == 'language') { echo("active"); } ?>">
                        <a href="<?php echo cl_link("api_docs?page=language"); ?>">Change Language</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content-page">
            <div class="content">
                <?php if (empty($docs_page)): ?>
                    <div class="overflow-hidden content-section">
                        <?php require_once("endpoints/getstarted/content.phtml"); ?>
                    </div>
                <?php else: ?>
                    <?php if (file_exists(cl_strf("endpoints/%s/content.phtml", $docs_page))): ?>
                        <div class="overflow-hidden content-section">
                            <?php require_once(cl_strf("endpoints/%s/content.phtml", $docs_page)); ?>
                        </div>
                    <?php else: ?>
                        <div class="overflow-hidden content-section">
                            <?php require_once("endpoints/getstarted/content.phtml"); ?>
                        </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
        <script src="js/script.js"></script>
    </body>
</html>