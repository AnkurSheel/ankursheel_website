---
title: 'How to setup WordPress locally: Installing MySQL'
excerpt: The third post in the series Testing WordPress Locally deals with installing MySQL on windows.
category: "programming"
tags:
    - tutorial
    - wordpress
series: 'Setting up WordPress locally'
---

## Installing MySQL on Windows

-   Go to the MySQL Website and download the installer file from the windows section.
-   Run the installer.
-   Choose the Developer Default and click on Execute.
-   On the MySQL Server Configuration Dialog, enter the password for the root/administrator access.

## Testing MySQL on Windows

-   Run the command prompt as **Administrator**.
-   Navigate to the bin directory in the MySQL server installation directory.
-   Type _mysql -u root -p_.
-   At the prompt, enter the password.
-   MySQL starts, and you should see the MySQL prompt.
-   Type _quit_ to exit.

## Activating MySQL for PHP

-   Open the _php.ini_ file for editing
-   Remove the semicolon from the line _;extension_dir ="ext"_
    -   If the line does not exist, add the line.
-   Change ext to point to the ext folder in the PHP install directory.
-   Remove the semicolon from the line _;extension=php_mysqli.dll_
    -   If the line does not exist, add the line.
-   Restart the APACHE server.
