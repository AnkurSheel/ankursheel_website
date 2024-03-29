---
title: 'How to export highlights and annotations from a Kobo Aura'
excerpt: 'Exporting annotations/highlights from a Kobo can be a pain. Luckily, there is a setting which you can use to easily export them to a txt file.'
tags:
    - 'tutorial'
    - 'productivity'
---

I read many books on my Kobo Aura, and I write my own annotations or highlight interesting takeaways. Exporting them manually to my laptop is a pain. Luckily, there is a way that we can export it to a text file.

## Steps

-   Plug in the Kobo eReader.
-   Open the file **_Kobo eReader.conf_** in a text editing program. Its located in the **_.kobo/Kobo_** folder on the KoboReader drive.
-   Add the following code to the file at the bottom

```ini
[FeatureSettings]
ExportHighlights=true
```

-   Save the file. Make sure the extension is _.conf_ and not _.txt_.
-   Safely eject your Kobo e-reader from the computer.

Now, when you long-press, a book menu will have an extra option, **"Export highlights"**.

Using this will prompt you for a file name and export the annotations to a file(with the specified name) in the device's root directory.
