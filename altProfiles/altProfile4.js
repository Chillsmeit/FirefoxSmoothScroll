//******************//
//* Scrolling Start //
//******************//
user_pref("general.smoothScroll",                                       true);// Default Settings Below and edited out
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);// [false]
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);// [120] fling
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   300);// [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       350);// [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           20);// [12]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      300);// [2000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "1.5");// [1.3]
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");// ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");// ["0.4"]
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);// [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);// [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);// [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);// [true]
user_pref("mousewheel.default.delta_multiplier_x",                       100);// [100]
user_pref("mousewheel.default.delta_multiplier_y",                       200);// [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);// [100]
user_pref("apz.allow_zooming",                                          true);// [true]
user_pref("apz.force_disable_desktop_zooming_scrollbars",              false);// [false]
user_pref("apz.paint_skipping.enabled",                                 true);// [true]
user_pref("apz.windows.use_direct_manipulation",                        true);// [true]
user_pref("dom.event.wheel-deltaMode-lines.always-disabled",           false);// [false]
user_pref("general.smoothScroll.durationToIntervalRatio",                200);// [200]
user_pref("general.smoothScroll.lines.durationMaxMS",                    150);// [150]
user_pref("general.smoothScroll.lines.durationMinMS",                    150);// [150]
user_pref("general.smoothScroll.other.durationMaxMS",                    150);// [150]
user_pref("general.smoothScroll.other.durationMinMS",                    150);// [150]
user_pref("general.smoothScroll.pages.durationMaxMS",                    150);// [150]
user_pref("general.smoothScroll.pages.durationMinMS",                    150);// [150]
user_pref("general.smoothScroll.pixels.durationMaxMS",                   150);// [150]
user_pref("general.smoothScroll.pixels.durationMinMS",                   150);// [150]
user_pref("general.smoothScroll.scrollbars.durationMaxMS",               150);// [150]
user_pref("general.smoothScroll.scrollbars.durationMinMS",               150);// [150]
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",               200);// [200]
user_pref("general.smoothScroll.mouseWheel.durationMinMS",                50);// [50]
user_pref("layers.async-pan-zoom.enabled",                              true);// [true]
user_pref("layout.css.scroll-behavior.spring-constant",                "250");// [250]
user_pref("mousewheel.transaction.timeout",                             1500);// [1500]
user_pref("mousewheel.acceleration.factor",                               10);// [10]
user_pref("mousewheel.acceleration.start",                                -1);// [-1]
user_pref("mousewheel.min_line_scroll_amount",                             5);// [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);// [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      3);// [3]
//****************//
//* Scrolling End //
//****************//


//****************//
//* Tweaks Start  //
//****************//

// Change it to true if you prefer privacy over scrolling smoothness it makes scrolling less smooth/clunky because it locks it to 60hz
user_pref("privacy.resistFingerprinting", false);

//Turn off Alt key menu
user_pref("ui.key.menuAccessKeyFocuses", false);

//Enables scrollclick scrolling
user_pref("general.autoScroll", true);

//Enables customization (chrome folder)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//Breaks some Websites if set to 1
//user_pref("network.http.referer.XOriginPolicy", 0);//Breaks some Websites if set to 1

//Disables WebRTC which can leak your real IP even when using a VPN.
//user_pref("media.peerconnection.enabled", false);

//**************//
//* Tweaks End  //
//**************//