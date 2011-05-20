tryReplace("#global-nav-whotofollow a", "Whom to Follow");
tryReplace("#recommended_users h2.sidebar-title span", "Whom to follow");
tryReplace("h2.user-rec-component a.title-link", "Whom to follow");
tryReplace(".who-to-follow-header h1", "Whom to follow");

setInterval(function() { $("title").html($("title").html().replace("Who to follow", "Whom to follow")); }, 250);

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