
var startTime;
var running;

function body_onload()
{
	document.getElementById("unlock").hidden = true;
}

function start_onclick()
{
	startTime = (new Date).getTime();
	running = true;
	update();
	document.getElementById("start").hidden = true;
	document.getElementById("unlock").hidden = false;
}

function unlock_onclick()
{
	if (document.getElementById("code").value === "1234")
	{
		document.getElementById("message").innerHTML = "You Win!";
		document.getElementById("unlock").hidden = true;
		running = false;
	}
	else
	{
		document.getElementById("code").value = "";
	}
}

function update()
{
	var elapsed = (new Date).getTime() - startTime;
	var remaining = (10 * 60 * 1000) - elapsed;
	var min = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
	var sec = Math.floor((remaining % (1000 * 60)) / 1000);
	var ms  = Math.floor((remaining % (1000)));
	document.getElementById("clock").innerHTML = min.toString().padStart(2, "0") + ":" +
	                                             sec.toString().padStart(2, "0") + "." +
	                                             ms.toString().padStart(3, "0");

	if (running)
	{
		setTimeout(update, 13);
	}
}