---
title: How to filter yourself from showing up in Google Analytics
excerpt: I am going to attempt to show exactly how to add google analytics and  also to filter yourself from the data if you have a self-hosted blog using WordPress
tags:
    - tutorial
---

Google Analytics is a powerful and useful tool for anybody with any website who wants to track their traffic.

I will attempt to show exactly how to add analytics and filter yourself from the data if you have a self-hosted blog using WordPress.

## Adding Analytics

1. Sign in to your Analytics account, and click Admin in the top menu bar.
2. Select the _account_ and _property_ in the respective columns.
3. Add tracking to your website.
4. Create a new profile on Google Analytics (if you have not already created one).
5. Add the tracking code snippet to your website.
6. Click Tracking Info under the Property column.
7. Copy the **tracking code** snippet.
8. Now, you have 3 options:

    1. **Not Recommended:** Modify header.php and paste the tracking code (from step 2.2) before the `</head>` tag. This method is **NOT** recommended because if the theme is updated, you will lose your changes.
    2. Use the **Insert Headers and Footers plugin** and add it under the **Scripts in header** tab.
    3. Modify functions.php in your **child theme** and paste the following code.

    ```php
    function sp_google_analytics_tracking_code() {
        ?>
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-45876690-1']);
            _gaq.push(['_trackPageview']);
                (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
        <?php
    }

    // include GA tracking code before the closing head tag
    add_action('wp_head', 'sp_google_analytics_tracking_code');
    ```

## Creating the Filter in Google Analytics

1. On the Google Analytics admin page, click on **Filter** under the View option. Here is where you create your exclusion filter.
2. Click on **"New Filter"**.
3. Give it a meaningful name.
4. In the **Filter Type**, select **_Custom Filter_** and leave it on the default _Exclude_.
5. In the **Filter Field**, select _User Defined_.
6. In the **Filter Pattern**, add no_report.
7. Save the filter.

## Get your Google Analytics Account ID

1. Click _Property Settings_ under the property column.
2. Copy the code under **Tracking ID**. This will look something like _UA-XXXXXXXX-X._.

## Create an Html page to create a cookie excluder

Create a new Html file and paste the following code.

```html
<meta http-equiv="”Content-Type”" content="”text/html;" charset="iso-8859-1?" />google analytics cookie excluder
<!-- prevents indexing of this page by search engines --><meta name="ROBOTS" content="NOINDEX,NOFOLLOW" /><script
    type="text/javascript"
>
    // <![CDATA[
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', '<em><strong>UA-XXXXXXXX-X</strong></em>']);
    _gaq.push(['_setVar', 'no_report']);
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src =
            ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();</script
    // ]]>
<meta name="robots" content="noindex" />
<div align="center">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
        <tbody>
            <tr>
                <td>
                    <div align="center">
                        <span style="font-size: xx-large;"
                            ><span style="color: #ff6600;">google analytics cookie excluder</span></span
                        >
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

1. In the above code, change \_UA-XXXXXXXX-X \_to the tracking id.
2. Place the file anywhere on your site as long as it is under your domain, at the root or in a subdirectory.

## Excluding yourself

Only carry out the following actions for computers you want to NOT be counted in Google Analytics.

1. In the location field of your browser, open the Html file on your domain.
2. If everything works, you should see a charcoal background with orange letters saying, "google analytics cookie excluder".

## Optional Test

Go to the area of your browser that shows cookies. Search for the value you set in the cookie. If you find it, the value is set.

## Conclusion

Now you should be able to remove yourself from the google analytics data.
