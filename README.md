# SmoothScrollFirefox

This repo contains modified user.js files that change the default scrolling behaviour in Firefox.<br>
I made different versions, these were made on a 35'' UltraWide Monitor with Windows, speed settings *may* have to be adjusted<br>

Just copy the code of the profile you want and paste it in your user.js<br>
The user.js file is located in:<br>
`C:\Users\<yourusername>\AppData\Roaming\Mozilla\Firefox\Profiles\<yourprofilename>\`<br>
<br>
If you have more than one profile and don't know which one to choose, go with the most recent one (Date modified.)<br>
If you don't have a user.js inside your folder, just create one.

<br>

# Linux & imwheel profile how to:

imwheel let's you change your scrolling speed in Linux, it's usually needed in Gnome.<br>
Install imwheel first then run the example script.<br>
<br>
This script will show a simple GUI to edit the multiplier you wanna add to your scroll speed (basically a config for the imwheel service).<br>
If your OS supports adding apps/commands directly to the startup, just use that, if not, create a script in ```/etc/profile.d/```<br>
<br>
The command to run imwheel on startup would be:  ```imwheel -kill -b "4 5"```<br>
(By adding -kill -b "4 5" in the end, will start imwheel and only affect the mousewheel and not the forward and backward button)

**Made a profile to be used alongside imwheel in speed 2 for firefox.**

# Further Tweaks

If you're annoyed like me and Alt is always opening the Firefox menu, go to About:config and change ```ui.key.menuAccessKeyFocuses``` to False
