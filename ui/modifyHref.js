function modifyHref()
{
	var sc = document.getElementsByClassName("list_btn");
	if (sc.length == 0)
		return;
	
	for (var i=0; i < lis.length; ++i) {
		var li = lis[i];
		var as =li.getElementsByTagName("a");
		// for(var k=0; k < as.length; ++k){
			var a = as[1];
			// if(a.href.indexOf("tel:") != 0){
				a.setAttribute("oldHref", a.href);
				var script = "device.toastPopup('sss')";
				a.setAttribute("href", "javascript:agate.runAction(\""+script+"\"),undefined");
			// }
		// }
	}
	return;
}

modifyHref();