function hideElementById(id)
{
	var element = document.getElementById(id);
	if (element)
  		element.style.display='none';
}

function hideElementByTag(tag)
{
  	var tags=document.getElementsByTagName(tag);
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function hideElementByClass(className)
{
  	var tags=document.getElementsByClassName(className);
  	
	for (i = 0; i < tags.length; ++i) {
  		var element = tags[i];
  		element.style.display='none';
  	}		
}

function css(selector, property, value) {
    for (var i=0; i < document.styleSheets.length; ++i) {
        try {
          document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {
        }
    }
}

function changeMarginTopById(id, value) {
  var element = document.getElementById(id);
  element.style.marginTop = value;
}

function modifyHref()
{
  var sc = document.getElementsByClassName("list_btn");
  alert("test1");
  if (sc.length == 0)
    return;
  alert("test2");
  
  for (var i=0; i < sc.length; ++i) {
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

hideElementById('common_header');
hideElementByClass('sr_opt_depth');
hideElementByClass('paging_guide');
hideElementById('_filterTabTitleWrapper');
hideElementById('_banners');
hideElementById('_power_link');
hideElementById('_popularKeywordPart');
hideElementByClass('notice_area');
hideElementByClass('paging_guide');
hideElementById('common_footer');

modifyHref();
