//
// COPY THIS AND PUT IN USER.JS
//******************************//
//*      Snappier Profile      *//
//******************************//
user_pref("general.smoothScroll",                                       true);// Default Settings Below and edited out
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);// [false]
user_pref("general.smoothScroll.mouseWheel.migrationPercent",            100);//
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);// [120] fling
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   550);// [1250]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       600);// [1000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);// [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     "1.5");// [1.3]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      450);// [2000]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0",       4);//
user_pref("general.smoothScroll.currentVelocityWeighting",             "1.0");// ["0.25"]
user_pref("general.smoothScroll.stopDecelerationWeighting",            "1.0");// ["0.4"]
// Mousewheel multiply factor - set to false if scrolling is too fast  
user_pref("mousewheel.system_scroll_override.horizontal.factor",         200);// [200]
user_pref("mousewheel.system_scroll_override.vertical.factor",           200);// [200]
user_pref("mousewheel.system_scroll_override_on_root_content.enabled",  true);// [true]
user_pref("mousewheel.system_scroll_override.enabled",                  true);// [true]
// Pixel count mousewheel scroll multipliers
user_pref("mousewheel.default.delta_multiplier_x",                       100);// [100]
user_pref("mousewheel.default.delta_multiplier_y",                       100);// [100]
user_pref("mousewheel.default.delta_multiplier_z",                       100);// [100]
//
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
user_pref("mousewheel.acceleration.factor",                                1);// [10]
user_pref("mousewheel.acceleration.start",                                 0);// [-1]
user_pref("mousewheel.min_line_scroll_amount",                             1);// [5]
user_pref("toolkit.scrollbox.horizontalScrollDistance",                    5);// [5]
user_pref("toolkit.scrollbox.verticalScrollDistance",                      1);// [3]
//If "privacy.resistFingerprinting" is set to "true", it changes the scrolling behaviour and makes it less smooth/clunky
//Change it to true if you prefer Privacy over scrolling smoothness
user_pref("privacy.resistFingerprinting",                              false);//
