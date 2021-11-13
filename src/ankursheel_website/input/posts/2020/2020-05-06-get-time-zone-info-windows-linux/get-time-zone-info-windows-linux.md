---
title: 'How to get TimeZoneInfo on Windows and Linux'
excerpt: 'Lets see how we can get the TimeZoneInfo regardless of whether the code is running on Windows or Linux'
coverImage: './cover.jpg'
tags:
    - 'snippet'
    - 'csharp'
---

Recently, I ran into a minor issue with timezones. I was able to get the timezone on my local system, but as soon I deployed, I started getting an error.

## Problem

Unfortunately, Windows and Linux use different timezone systems.

-   On Windows, they are identified by a value provided by Microsoft and take a form such as "New Zealand Standard Time".
-   On Linux/OSX, they are identified by a value provided by IANA in the TZDB and take a form such as "Pacific/Auckland".

This makes it a little tricky to get the TimeZoneInfo, especially if you want to make sure the code works regardless of the system it is running on.

## Solution

The easiest way to solve this is to check if the Windows value exists in the list of time zones. If it exists, use the Windows value to get the time zone info; else, use the IANA value.

```csharp
var nzTimeZone = TimeZoneInfo.GetSystemTimeZones().Any(x => x.Id == "New Zealand Standard Time")
    ? TimeZoneInfo.FindSystemTimeZoneById("New Zealand Standard Time")
    : TimeZoneInfo.FindSystemTimeZoneById("Pacific/Auckland");
```
