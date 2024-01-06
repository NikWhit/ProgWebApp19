# ProgWebApp19

## Description-
Jate is a progressive web application which functions as a word processor online. This is a function that can be used on the browser and installed onto a desktop icon for offline work. The using a webpack it has the capability to save the information on the server database.

## Install
If one is to clone the repo that this readme is in, the next step would be to run "npm i". (Especially in the root, but I found I was missing a node_module in my server file and that helped a lot). 

## Use
In the main package.json you'll see that "npm run start" will be the essential function that builds the databases, runs the server and the clint files in order to get the localhost link. You can (cmd+click) or manually run the recommended local host in the browser to see the JATE program.

## Sources
Starter Code: https://github.com/coding-boot-camp/cautious-meme. 
Also the learning material listed below helped. I pulled a lot of code from those resources.
UofU EdX bootcamp src 19-PWA/23-Ins_IndexedDB-CRUD/database.js #Src
//        19-PWA/25-Ins_Manifest #src
//# citing source to 19-PWA//19-Ins_InjectManifest/src-sw.js
19PWA/10-Stu_Webpack-Plugin
//SRC: PWA / Stu-InjectManifest

Finally - Special shout out to Sam Cordova who works as a tutor. Who didn't give me any code, but helped me through the process of uploading the required tech to my new computer after my old one kicked the bucket. I laud him for his calm, patience, and emotional intelligence in helping me through a stressful period. 

## Screenshot


## Notes to me.
Nick, Thank you for your effort in submitting the homework assignment. You've shown a developing understanding of working with Progressive Web Apps (PWAs), which are vital for providing a seamless user experience in offline modes. PWAs are indeed a significant and exciting aspect of modern web development, enhancing user engagement even without internet connectivity.

Regarding the issue you're facing, it appears there's a problem starting the server for your app. The error message from `webpack-pwa-manifest/dist/icons/index.js` suggests an issue with reading an icon file specified in your PWA configuration. This error often occurs when the file path to the icon is incorrect, the file is missing, or there are permission issues accessing the file.

To address this issue, please check the following:

1. Icon File Path: Ensure that the path to the icon in your PWA manifest or webpack configuration is correct and points to an existing file.

2. File Format and Content: Ensure that the icon file is in the correct format and not corrupted.

Correcting these aspects should help in resolving the issue and getting your server running. Keep up the good work with PWAs; they're a key part of modern web technology!

gl
Central Grader , Dec 20, 2023 at 9:55am