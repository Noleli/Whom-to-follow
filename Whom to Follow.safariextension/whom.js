tryReplace("#global-nav-whotofollow a", "Whom to Follow");
tryReplace("#global-nav-who_to_follow a", "Whom to Follow");
tryReplace("#recommended_users h2.sidebar-title span", "Whom to follow");
tryReplace("h2.user-rec-component a.title-link", "Whom to follow");
tryReplace("h2.user-rec-component span.dashboard-component-title", "Whom to follow");
tryReplace(".who-to-follow-header h1", "Whom to follow");

$(document).ready(init);

function init()
{
	// Don't replace the title unless it actually contains "Who to follow"
	setInterval(function() { $("title").text($("title").text().replace("Who to follow", "Whom to follow")); }, 250);
}

function tryReplace(selector, string)
{
	var tries = 0;
	var success;
	var theLoop = setInterval(function() {
		success = replaceHtml(selector, string);
		tries++;
	}, 250);
	
	if(tries > 5 || success) clearInterval(theLoop);
}

function replaceHtml(selector, string)
{
	if($(selector).length > 0)
	{
		$(selector).html(string);
		return true;
	}
	else return false;
}