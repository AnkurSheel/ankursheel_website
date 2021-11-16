---
title: 'How to setup WordPress locally: Installing WordPress'
excerpt: The final post in the Testing WordPress Locally series deals with Installing WordPress on windows.
tags:
    - tutorial
    - Wordpress
series: 'Setting up WordPress locally'
---

## Setting up MySQL database

-   Login to **phpMyAdmin**.
-   Click on the **Databases** tab.
    -   Create a new Database.
    -   Set the name for your database.
    -   Set the Collation to: _utf8_unicode_ci_.

## Configuring PHP for Wordpress

-   Open _php.ini_ (in the System Directory) for editing.
-   Remove the semicolon from the line _;extension=php_mysql.dll_.
    -   If the line does not exist, add the line.
-   Restart the server

## Installing Wordpress on Windows

-   Go to the WordPress Website and download the zip file.
-   Extract the WordPress directory to the webserver Document Root.
-   Open the WordPress directory.
-   Copy the _wp-config-sample.php_ to _wp-config.php_.
-   Open _wp-config.php_ for editing and update the following settings.

```php
define('DB_NAME', 'database_name_here');
define('DB_USER', 'username_here');.
define('DB_PASSWORD', 'password_here');.
```

-   In the browser, navigate to _http://localhost:8080/wordpress_.
-   Fill in the details and click on **Install WordPress**.

## Testing Wordpress

-   In the browser, navigate to _http://localhost:8080/wordpress/wp-admin_.
-   Enter your details and log in.
-   You should see the WordPress dashboard.
