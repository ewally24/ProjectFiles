var Panel = function(width, height, $parent) {
	if(arguments.length < 2) {
		return false;
	}
	var $_element = $(document.createElement('div'));
	$_element.attr({
		"class" : "panel",
	});

	$_element.css({
		"width" : width,
		'height' : height,
		"position" : "absolute",
		"top" : "50%",
		"left" : "50%",
		"margin-left" : -width / 2,
		"margin-top" : -height / 2,
	});

	if(typeof $parent === "undefined") {
		$parent = $(document.documentElement);
	}
	else if(!$parent) {
		return false;
	}

	$parent.append($_element);
}