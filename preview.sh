#!/bin/bash
cd node
npx tailwind build -c ./tailwind.config.js -i ../src/ankursheel_website/input/assets/_site.css -o ../src/ankursheel_website/input/assets/styles.css --watch
