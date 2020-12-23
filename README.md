This repo has the code for meme generator , you can generate your own memes by through https://hkmandali.github.io/meme-generator/ , click on gen to go to next image . To host your code on github pages , just do the below changes in your code .

> npm install gh-pages --save-dev ( from your terminal in the same location as repo)

> Package.json - "homepage": " https://hkmandali.github.io/meme-generator/",

> "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    
