jQuery(document).ready((function(e){var n;function i(){$senseiSettings.find("section").hide(),$senseiSettings.find("a.tab").removeClass("current")}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";$senseiSettings.find("section#".concat(e)).show(),$senseiSettings.find('[href="#'.concat(e,'"]')).addClass("current"),sensei_log_event("settings_view",{view:e})}function t(){var e,n=null===(e=window.location.hash)||void 0===e?void 0:e.replace("#","");o("woocommerce-settings"===n?!$senseiSettings.find("#woocommerce-settings tr").length&&$senseiSettings.find("#sensei-promo-banner"):"sensei-content-drip-settings"===n&&(!$senseiSettings.find("#sensei-content-drip-settings tr").length&&$senseiSettings.find("#sensei-promo-banner")))}function o(e){e?($senseiSettings.find("#submit").hide(),$senseiSettings.find("h2").hide()):($senseiSettings.find("#submit").show(),$senseiSettings.find("h2").show())}$senseiSettings=e("#woothemes-sensei.sensei-settings"),t(),window.onhashchange=t;var c=null===(n=window.location.hash)||void 0===n?void 0:n.replace("#","");i(),s(c||"default-settings"),$senseiSettings.find("a.tab").on("click",(function(){var n,t=null===(n=e(this).attr("href"))||void 0===n?void 0:n.replace("#","");return window.location.hash="#"+t,i(),s(t),!1})),jQuery(".colorpicker").hide(),jQuery(".colorpicker").each((function(){jQuery(this).farbtastic(jQuery(this).prev(".color"))})),jQuery(".color").click((function(){jQuery(this).next(".colorpicker").fadeIn()})),jQuery(document).mousedown((function(){jQuery(".colorpicker").each((function(){"block"==jQuery(this).css("display")&&jQuery(this).fadeOut()}))}))}));