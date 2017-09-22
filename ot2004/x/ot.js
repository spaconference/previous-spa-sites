function adjustLayout()
{

  // Get natural heights
  var cHeight = xHeight("contentcontent")+xHeight("top");
  var lHeight = xHeight("leftcontent");

  // Find the maximum height
  var maxHeight = Math.max(cHeight, lHeight);
	
	// Go to height of window if that's larger
	maxHeight=Math.max(maxHeight, document.documentElement.clientHeight );

  // Assign maximum height to all columns
  xHeight("content", maxHeight-xHeight("top"));
  xHeight("left", maxHeight);
}

window.onload = function()
{
  xAddEventListener(window, "resize",
    adjustLayout, false);
  adjustLayout();
}
