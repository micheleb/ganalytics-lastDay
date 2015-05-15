/*
Google Analytics Today
Copyright (C) 2013 Michele Bonazza <somethingididnotknow.wordpress.com>

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

function getUrl(code) {
	// taken from http://stackoverflow.com/questions/7509010/bookmark-with-date-in-the-url/7509107#7509107
	function pad2(n) {
		var str = String(n);
		if (str.length < 2)
			str = "0" + str;
		return str;
	}
	var date = new Date();
	var today = '', yesterday = '';
	today += date.getFullYear();
	today += pad2(date.getMonth() + 1);
	today += pad2(date.getDate());
	date.setDate(date.getDate() - 1);
	yesterday += date.getFullYear();
	yesterday += pad2(date.getMonth() + 1);
	yesterday += pad2(date.getDate());
	return 'https://www.google.com/analytics/web/?#home/' + code +'/%3F_u.date00%3D' + yesterday + '%26_u.date01%3D' + today +'/=';
}

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
