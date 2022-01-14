---
title: 'Setup WordPress locally: Installing an Apache Web Server'
excerpt: In the first part of the series, we will install Apache (webserver) on our machine.
category: "programming"
tags:
    - tutorial
    - wordpress
series: 'Setting up WordPress locally'
---

## Installing Apache on Windows

-   Go to the [Apache Website](https://httpd.apache.org/download.cgi) and download the installer file.
-   Make sure Internet Information Services (IIS) is not running.
-   If IIS is running, you will find the IIS console at Start->Control Panel->Administrative Tools->Internet Services Manager. Shut it down.
-   Run the installer
-   In the Server Information dialogue, enter the following
    -   **Network Domain:** The domain name. For local testing, enter _localhost_.
    -   **Server Name:** The name of the server. For local testing, enter _localhost_.
    -   **Email Address:** The email address where you want to receive email messages about the webserver.
    -   **Run Mode:** In most cases, you would want to run Apache as a service.
-   You can change the installation directory if you click on Custom.
-   Click Install.

## Installing and Starting Apache Manually

If you choose to run the apache server manually in the Run Mode, you must install it. This can be done as follows.

-   Run the command prompt as **Administrator**.
-   Navigate to the bin directory in the Apache install directory and run the following command: _httpd.exe -k install_
-   Start the server using the Apache Monitor in the taskbar.

## Un-Installing Apache

Navigate to the bin directory in the Apache install directory and run the following command _httpd.exe -k uninstall_

## Configuring Apache

To change any settings, edit the httpd.conf file. On Windows, you can access this file through the menu at Start -> Programs -> Apache HTTPD Server -> Configure Apache Server -> Edit the Apache httpd.conf File.

Restart the server for the changes to take effect.
