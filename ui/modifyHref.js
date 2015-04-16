function modifyHref()
{
	var sc = document.getElementsByClassName("zzim _sr_zzim");
	if (sc.length == 0)
		return;

	for(var k=0; k < sc.length; ++k){
		var a = as[k];
		a.setAttribute("oldHref", a.href);
		var script = "device.toastPopup('aaa')";
		a.setAttribute("href", "javascript:'';");
		a.setAttribute("onclick", "agate.runAction(\""+script+"\"),undefined");
	}
	}
	return;
}

modifyHref();