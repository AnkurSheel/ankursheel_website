---
title: "How to echo commands as they are executed in a shell script"
excerpt: "It is helpful to log the shell commands being executed when running a bash script (especially when debugging it). Let see what commands we can use to log the commands"
category: "programming"
coverImage: "./cover.jpg"
tags:

- "snippet"

---

<!-- https://unsplash.com/s/photos/ubuntu -->

It is helpful to log the shell commands being executed when running a bash script (especially when debugging it).

As an example, we will use this bash file.

```bash
#!/bin/bash  
  
Name="Ankur"  
  
echo $Name  
ls | wc -l
```

When we execute this script, we can see this as the output.

```
Ankur
10
```

## Solution 1

You can use `set -v` in the shell script.

```bash
#!/bin/bash  
set -v

Name="Ankur"  
  
echo $Name  
ls | wc -l
```

On running this script, we can see

```
Name="Ankur"  

echo $Name
Ankur
ls | wc -l
10
```

_Note: You can turn off this behaviour by using `set +v`._

You can see that although it showed the command being executed, it did not expand the variable in the echo command.

## Solution 2

You can use `set -x` in a shell script.

```bash
#!/bin/bash  
set -x

Name="Ankur"  
  
echo $Name  
ls | wc -l
```

On running this script, we can see

```
+ Name=Ankur
+ echo Ankur
Ankur
+ ls
+ wc -l
10
```

_Note: To turn off this behaviour, you can use `set +x`._

It showed the executed command and added a `+` sign before the command. It also expanded the variable name.

## Conclusion

We looked at 2 ways of showing the commands being executed in a shell script. These can be extremely helpful when debugging your shell script.
