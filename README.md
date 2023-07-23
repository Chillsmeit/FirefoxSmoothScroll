# SmoothScrollFirefox

**Works in Windows, Linux and MacOS** *(Linux users, if you use imwheel, scroll down)* <br>
This repo contains modified `user.js` scrolling profiles in the `Profiles` folder.<br>
These should also work in Librewolf and Mullvad Browser since they're firefox forks.<br>

Just **copy the code of the profile you want and paste it in your `user.js`**<br>
To find where your `user.js` is, type `about:support` in firefox and open the "Profile Directory"<br>

**Note:**<br>
*If you use arkenfox and have `privacy.resistFingerprinting` set to `True`, it will interfere with scrolling "smoothness" since it locks the framerate to 60hz.
This should only be noticeable in monitors with a higher refresh rate.*

# My Firefox Tweaks
Check the `Firefox Tweaks` folder in this repo

### Cosmetic Tweaks:

Shorter flexible spaces like this:<br>
![Untitled2](https://github.com/Chillsmeit/SmoothScrollFirefox/assets/93094077/9acca1d7-8b90-432b-b457-6b827ecd89bc) <br>
![Untitled](https://github.com/Chillsmeit/SmoothScrollFirefox/assets/93094077/9f6aa784-6c26-4d55-ab5e-e1f433ee63db) 

Smaller and less intrusive PiP icon that shows up in the upper left corner in videos:<br>
*(the first time the Pip icon shows up can be a bit bugged. Just click on it the first time and restart your browser)* <br>
<br>
![Wilderness](https://github.com/Chillsmeit/SmoothScrollFirefox/assets/93094077/59f55333-335d-4fd9-8b1e-9f5627105022) <br>
<br>
**To enable these changes**, type `about:support` in the firefox address bar and open the Profile Directory<br>
Create a folder called `chrome`, inside this folder create two files called `userChrome.css` and `userContent.css`.<br>
Copy and paste the contents in the repo folder `Firefox Tweaks/Chrome` to your respective files.

### Configs Tweaks:

These are also available in the `tweaks.js`file in the `Firefox Tweaks` folder in this repo.<br>
You can copy the contents you want from it and paste it into your `user.js` in your profile folder.<br>
You can also change these in `about:config`:<br>

Disable WebRTC *(this leaks your IP address even if you use a VPN but some websites need it)*:<br>
set `media.peerconnection.enabled` to `False`<br>

Disable ALT opening firefox menu:<br>
set `ui.key.menuAccessKeyFocuses` to `False`<br>

Enable autoscrolling for Linux:<br>
set `general.autoScroll` to `True`<br>

Make Firefox UI look bigger without using global scalling:<br>
set `layout.css.devPixelsPerPx` to `1.15`<br>

# Linux imwheel users:

I made a profile to be used alongside imwheel for firefox.<br>
*This is for people that want to use imwheel in firefox in speed 2 only.*<br>

### What is imwheel:

imwheel let's you change your scrolling speed in Linux, you'll need it if you feel like your scrolling speed is too slow.<br>
### How to install imwheel:

Fedora:
```
rpm -i imwheel
```
Arch:
```
pacman -S imwheel
```
Debian:
```
sudo apt-get install imwheel
```
## How to use imwheel globally *(needs zenity*):
```
wget https://github.com/Chillsmeit/SmoothScrollFirefox/raw/main/Linux_imwheel/imwheelSetGlobalSpeed.sh
```
Make it executable:
```
chmod +x imwheel.sh
```
Run the script:
```
./imwheel.sh
```

The example script will show a simple GUI with zenity to edit the multiplier you wanna add to your scroll speed.<br>
For this profile to work correctly, please use speed 2.<br>
If your OS supports adding apps/commands directly to the startup, just use that, if not, create a script in ```/etc/profile.d/```<br>
<br>
The command to run imwheel on startup would be:  ```imwheel -kill -b "4 5"```<br>
*(By adding -kill -b "4 5" in the end, it will start imwheel and only change the mousewheel. This way it won't interfere with the forward and backward buttons in your mouse)*

## How to use imwheel in a per-app basis:

If you want to change the scrolling speed on a per app basis instead, you can do the following:<br>
```
touch .imwheelrc && nano .imwheelrc
```
Remove the contents that were created by the script (if you used it before) and add the Apps class like this instead: <br>
*This way, imwheel will only change the mouse speed to double on the specific Apps you chose.*
```
"^(discord-screenaudio|discord|steam)$"
None,      Up,   Button4, 2
None,      Down, Button5, 2
Control_L, Up,   Control_L|Button4
Control_L, Down, Control_L|Button5
Shift_L,   Up,   Shift_L|Button4
Shift_L,   Down, Shift_L|Button5
```
To know the window class name in x11/Xorg you can type the following in terminal and then click the window you want:
```
xprop | grep WM_CLASS
```
