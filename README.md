Getting started - ColibriSM           

[ColibriSM](index.html)
=======================

1.  [Home](index.html)
2.  Quick Start

Quick Start
===========

Installation
------------

### Uploading files

To install ColibriSM, first of all you need to upload the files that are in the \`Script files\` folder to your server

###### How to upload ColibriSM to server?

*   Upload all files & folders located inside \`Script files\` folder to your server. Please note that you do not need to upload the \`Script files\` folder itself, but only its contents, including folders, as shown below:
*   ![Screenshot](./assets/images/img-1.png)
*   Open your browser, (Google Chrome is recommended).
*   Go to http://www.your-site.com/install

### Installing script

The ColibriSM installation process itself is very simple

###### How to install ColibriSM?

*   Before we start the installation, please make sure you have the following extensions installed on your server
    *   PHP 5.5 +
    *   MySQLi Extension
    *   GD Library
    *   PHP MB-string
    *   PHP Zip
    *   cURL Module

###### Getting started installation

After you have checked all the ColibriSM requirements that are listed above are present in your server, go to the address http(s)://your-site.com/install

![Screen shot](./assets/images/img-2.png)

  

###### On the page with this form, you need to fill it with the following data

*   **SQL Host name:** Your MySQL host name, e.g: localhost
*   **SQL Username:** Your MySQL username.
*   **SQL Password:** Your MySQL user password.
*   **SQL Database:** Your MySQL database name.
*   **Site URL:** Your website URL address with which your site will work
*   **Site Name:** Your site name, max 32 characters.
*   **Site Title:** Your site title, max 55 characters.
*   **Site E-mail:** Your site email address. E.g. yoursitename@gmail.com etc.
*   **Admin Password:** Choose your admin password.

After you fill out the form with the data, click on the install button and wait until the installation process is complete without leaving the page! Please note that the installation process may take several minutes.

###### After the installation is complete, you will get a page that looks like this:

![Screen shot](./assets/images/img-3.png)

### Nginx

However if your server is using Nginx, please follow these instructions below:

1.  Open your server's root nginx.conf file, most of the time It's located it in: /etc/nginx/nginx.conf
2.  Open the home directory of the script, you should be able to find this file (nginx.conf):
    
      
    
    ![Screen shot](./assets/images/img-6.png)
    
3.  Open the located file, and copy its content to your root nginx.conf file: /etc/nginx/nginx.conf
4.  If you find it something difficult to do, please contact your hosting provider, and they will do it for you easily.

### What is next?

If you did everything as indicated above, then your site should be installed and ready to run, but before you do this you need to configure oAuth (Login via Facebook, Twitter or Google) login system

###### Here is an example of how to do it

1.  Login to your site
2.  Go to Contol panel
    
    ![Screen shot](./assets/images/img-5.png)
    
    Or open this link (http://your-site-domain.com/admin\_panel) replacing the "your-site-domain.com" with your domain
    
      
    
    The oAuth configuration page looks like this
    
    ![Screen shot](./assets/images/img-4.png)
    
      
    
    ##### Callback urls for each provider should be like below
    
    *   https://www.YOUR-SITE.COM/oauth/twitter
    *   https://www.YOUR-SITE.COM/oauth/google
    *   https://www.YOUR-SITE.COM/oauth/facebook

#### Important!

After the installation is finished, please make sure to delete the folder "install" and "colibri-db.sql" file from your script's root folder

[Installation](#installation-section)

[Uploading files](#step1) [Installing script](#step2)

[Nginx](#nginx) [What is next?](#waht-is-next) [FAQs](faqs.html) [License](license.html)

© 2021 ColibriSM All rights reserved