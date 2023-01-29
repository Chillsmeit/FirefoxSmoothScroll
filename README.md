# SmoothScrollFirefox

This repo contains modified user.js files that change the default scrolling behaviour in Firefox.<br>
I made different versions, these were made on a 35'' UltraWide Monitor with Windows, speed settings *may* have to be adjusted<br>

Just copy the code of the profile you want and paste it in your user.js<br>

To find where your user.js is, just type ```about:support``` in the firefox address bar and open the Profile Directory<br>

*Note*: If you use arkenfox.js 

# Linux & imwheel users:

**I made a profile to be used alongside imwheel in speed 2 for firefox.**

How to use imwheel in case you need it:

imwheel let's you change your scrolling speed in Linux, it's usually needed in Gnome.<br>
Install imwheel first then run the example script (imwheel.sh)<br>
<br>
The example script will show a simple GUI to edit the multiplier you wanna add to your scroll speed.<br>
If your OS supports adding apps/commands directly to the startup, just use that, if not, create a script in ```/etc/profile.d/```<br>
<br>
The command to run imwheel on startup would be:  ```imwheel -kill -b "4 5"```<br>
(By adding -kill -b "4 5" in the end, it will start imwheel and only change the mousewheel. This way it won't interfere with the forward and backward button)

# Further Tweaks

If you're annoyed like me and Alt is always opening the Firefox menu, go to About:config and change ```ui.key.menuAccessKeyFocuses``` to False
