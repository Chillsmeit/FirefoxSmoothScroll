# FirefoxSmoothScroll

**Tries to deliver a smoother scrolling experience in Firefox** <br>
- *Works in any OS, and Firefox forks (Librewolf, Mullvad browser, etc)* <br>

#### How to "Install"?
- Just copy this repository `user.js` to your Firefox profile folder<br>
#### How do you find your Firefox profile folder?
- In the Firefox address bar type `about:support` click `Open Directory` in `Profile Directory`
- Drag and drop the `user.js` into the folder

#### Arkenfox users

- Arkenfox uses its own `user.js`, so don't overwrite it.
- Instead, rename this file to `user-overrides.js` and put it in your profile folder.
- Arkenfox's updater merges it into the final `user.js` automatically, so your settings survive updates.

#### ⚠️ Fingerprinting protection, if you use Firefox with Arkenfox, Librewolf or Mullvad

- `privacy.resistFingerprinting` locks the framerate to 60Hz, which is why scrolling feels clunky with it on. 
- **This `user.js` sets it to `false`, which disables fingerprinting protection.**
- That protection is most of the point of these browsers, so set it back to `true` and accept the 60Hz scrolling if you want it.

#### Optional:
- I included in this repository two cosmetic tweaks.
- Shorter flexible spaces that look like this:<br>
![Untitled](https://github.com/Chillsmeit/SmoothScrollFirefox/assets/93094077/9f6aa784-6c26-4d55-ab5e-e1f433ee63db) 
- And smaller and less intrusive PiP icon that shows up in the upper left corner in videos:
![Wilderness](https://github.com/Chillsmeit/SmoothScrollFirefox/assets/93094077/59f55333-335d-4fd9-8b1e-9f5627105022) <br>

#### How to "Install" Optional?
- Either download the chrome.zip from the releases tab and extract it or download the repo source code
- Go into your Firefox Profile directory and put the chrome folder there
