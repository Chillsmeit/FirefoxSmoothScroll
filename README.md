# SmoothScrollFirefox

This repo contains modified user.js files that change the default scrolling behaviour in Firefox.<br>
I made different versions, these were made on a 35'' UltraWide Monitor with Windows, speed settings *may* have to be adjusted<br>

Just copy the code of the profile you want and paste it in your user.js<br>

To find where your user.js is, just type ```about:support``` in the firefox address bar and open the Profile Directory<br>

*Note: If you use arkenfox.js and have ```user_pref("privacy.resistFingerprinting", true);``` it will interfere with scrolling smoothness since it locks the framerate to 60hz.*

# Linux imwheel users:

**I made a profile to be used alongside imwheel in speed 2 for firefox.**

What is imwheel and how to use it:

imwheel let's you change your scrolling speed in Linux, you'll need it if you feel like your scrolling speed is too slow.<br>
Install imwheel first then run the example script "imwheel.sh" which was provided by Nick Norton<br>
<br>
The example script will show a simple GUI to edit the multiplier you wanna add to your scroll speed.<br>
For this profile to work the best, use speed 2.<br>
If your OS supports adding apps/commands directly to the startup, just use that, if not, create a script in ```/etc/profile.d/```<br>
<br>
The command to run imwheel on startup would be:  ```imwheel -kill -b "4 5"```<br>
(By adding -kill -b "4 5" in the end, it will start imwheel and only change the mousewheel. This way it won't interfere with the forward and backward buttons)

# Random Firefox Tweaks

To disable ALT opening the firefox menu, turn ```ui.key.menuAccessKeyFocuses``` to False<br>
To enable autoscrolling in Firefox for Linux, turn ```general.autoScroll``` to True<br>
To make Firefox UI look bigger without using global scalling, change the ```layout.css.devPixelsPerPx``` value. For example, I use 1.15<br>
