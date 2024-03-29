---
title: 'How to setup WordPress locally: Installing PHP'
excerpt: In this part of the series, we will Install PHP on our local machine.
category: "programming"
tags:
    - tutorial
    - wordpress
series: 'Setting up WordPress locally'
---

## Installing PHP on Windows

-   Go to the PHP website and download the zip file.
-   Make sure the zip file contains the dll for the correct version of the Apache.
-   Extract the zip file to a location that does not contain spaces.

## Configuring APACHE for PHP

Open httpd.conf for editing. You can access this file through the menu at Start -> Programs -> Apache HTTPD Server -> Configure Apache Server -> Edit the Apache httpd.conf File

-   Configure Apache to load the PHP module.

    -   Find the _**LoadModule**_ section.
    -   Add the following line to _LoadModule_\_ php5*module* “[path to php5apache2_4.dl in the PHP folder]”. This would be something Like _"D:/Softwares/php/php5apache2_\__4.dll"_. Make sure that you use forward slashes.

-   Configure Apache to recognize PHP extensions.
    -   Find the _**AddType**_ section.
    -   Add the following line _AddType application/x-httpd-php .php_
-   Restart the APACHE server.

If you see errors, check the Apache error.log

## Configuring PHP

-   Copy _php.ini_ to the Windows directory.
-   Open _php.ini_ for editing.
-   Set your local timezone.
    -   Find this line; date.timezone = and remove the semicolon in front of it.
    -   Find the timezone code from Php timezones and add the code for the timezone after the = sign.
-   Restart the APACHE server.
