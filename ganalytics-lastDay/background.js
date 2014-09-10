/*
Google Analytics Last Day
Copyright (C) 2014 Michele Bonazza <http://somethingididnotknow.wordpress.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var s = document.createElement('script');
s.src = chrome.extension.getURL('shared.js');

s.onload = function() {
	this.parentNode.removeChild(s);
};

(document.head || document.documentElement).appendChild(s);

chrome.storage.local.get('analyticsID', function(stored) {
	var id = stored.analyticsID;
  if (id === undefined) {
    // if there's no stored ID, go the configuration page
    window.location.href = 'conf.html';
	} else {
		// otherwise, redirect to Google Analytics
		document.getElementById('redirection').style.visibility = 'visible';
		window.location.href = getUrl(id);
	}
});
