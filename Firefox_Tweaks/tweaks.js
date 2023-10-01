user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);//Enables customization (chrome folder)
user_pref("network.http.referer.XOriginPolicy", 0);//Breaks some Websites if set to 1
user_pref("privacy.resistFingerprinting", false);//Locks scrolling to 60hz if set to true
user_pref("ui.key.menuAccessKeyFocuses", false);//Turn off Alt key menu
user_pref("general.autoScroll", true);//Enables scrollclick scrolling
user_pref("media.peerconnection.enabled", false);//Disables WebRTC which can leak your real IP even when using a VPN. Some Websites need it
