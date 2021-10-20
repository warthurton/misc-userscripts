// ==UserScript==
// @name         Microsoft Teams close tab after launch
// @namespace    https://github.com/warthurton
// @version      0.1
// @description  Close the annoying tab leftover after the teams client launches.
// @author       Wayne Arthurton
// @run-at      document-idle
// @match        https://teams.microsoft.com/dl/launcher/*
// @icon         https://www.google.com/s2/favicons?domain=microsoft.com
// @grant        window.close
// ==/UserScript==

(function () {
	'use strict';

	function callbackclose() {
		return function () {
			close();
		}
	}

	// Time to wait in seconds
	var waitTime = 20;

	setTimeout(callbackclose(), waitTime * 1000);
})();
