# SmoothScrollFirefox

This repo contains modified user.js files that change the default scrolling behaviour in Firefox.<br>
These should work in Librewolf and Mullvad Browser since they're firefox forks.<br>

Just copy the code of the profile you want and paste it in your user.js<br>
To find where your user.js is, just type ```about:support``` in the firefox address bar and open the Profile Directory<br>

**Note:**<br>
*If you use arkenfox.js and have ```privacy.resistFingerprinting``` - ```True``` it will interfere with scrolling "smoothness" since it locks the framerate to 60hz.
This should only be noticeable in monitors with a higher refresh rate.*

# Linux imwheel users:

**I made a profile to be used alongside imwheel in speed 2 for firefox.**

What is imwheel and how to use it:

imwheel let's you change your scrolling speed in Linux, you'll need it if you feel like your scrolling speed is too slow.<br>
Install imwheel first then run the example script "imwheel.sh"<br>
<br>
The example script will show a simple GUI with zenity to edit the multiplier you wanna add to your scroll speed.<br>
For this profile to work the best, use speed 2.<br>
If your OS supports adding apps/commands directly to the startup, just use that, if not, create a script in ```/etc/profile.d/```<br>
<br>
The command to run imwheel on startup would be:  ```imwheel -kill -b "4 5"```<br>
(By adding -kill -b "4 5" in the end, it will start imwheel and only change the mousewheel. This way it won't interfere with the forward and backward buttons in your mouse)

# imwheel per-app basis:

The above steps make imwheel work on all apps. If you want to change the scrolling speed on a per app basis instead, you can do the following:<br>
```
nano .imwheelrc
```
Remove the contents that were created by the script (if you used it before) and add the Apps class like this instead:
```
"^(discord-screenaudio|discord|steam)$"
None,      Up,   Button4, 2
None,      Down, Button5, 2
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
Shift_L,   Up,   Shift_L|Button4
Shift_L,   Down, Shift_L|Button5
```
To know the window class name in x11, do `xprop | grep WM_CLASS` then click the window you want.
This way, imwheel will only change the mouse speed to double on the specific Apps you chose.

# My Firefox Cosmetic Tweaks

I have some custom changes in my Firefox browser.
For example Shorter flexible spaces and a smaller and less intrusive PiP icon that shows up in the upper left corner in videos (the first time it shows, it can be a bit bugged, just click on it the first time and restart your browser)

# My Firefox Configs Tweaks (I also use Arkenfox):

Disable WebRTC (this leaks your IP address even if you use a VPN):
```media.peerconnection.enabled``` - ```False```<br>

Disable ALT opening firefox menu:
```ui.key.menuAccessKeyFocuses``` - ```False```<br>

Enable autoscrolling for Linux:
```general.autoScroll``` - ```True```<br>

Make Firefox UI look bigger without using global scalling:
```layout.css.devPixelsPerPx``` - ```1.15```<br>
