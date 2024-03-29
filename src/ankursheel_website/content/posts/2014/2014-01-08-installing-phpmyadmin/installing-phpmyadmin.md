---
title: 'How to setup WordPress locally: Installing phpMyAdmin'
excerpt: 'The next post in the Testing WordPress Locally series deals with Installing phpMyAdmin on windows.'
category: "programming"
tags:
    - tutorial
    - wordpress
series: 'Setting up WordPress locally'
---

## Installing phpMyAdmin on Windows

-   Go to the phpMyAdmin Website and download the zip file
-   Unpack the downloaded file to the web server Document root.
-   _Optional:_ Rename the directory.
-   Create a copy of the file _config.sample.inc.php_ and rename it to _config.inc.php_
-   Open config.inc.php for editing and add/update the following
    -   _$cfg['Server'][$i]['user'] = 'root';_
    -   _$cfg['Server'][$i]['password'] = 'root-password'_

## Configuring the web server for phpMyAdmin

-   Open the _httpd.conf_ file(located in the conf folder of the webserver) for editing
-   Find _DirectoryIndex_ and add _index.php_. This will look something like this
    -   _DirectoryIndex index.html index.php_

## Configuring php for phpMyAdmin

-   Open _php.ini_ (in the System Directory) for editing
-   Remove the semicolon from the line _;extension=php_mbstring.dll_
    -   If the line does not exist, add the line.

## Testing phpMyAdmin

-   Restart the server
-   Navigate to _http://localhost:8080/phpMyAdmin/_ on the browser.
-   You should see the phpMyAdmin login window
-   Enter the username and password in the login window.
-   You should now see the phpMyAdmin Control panel
