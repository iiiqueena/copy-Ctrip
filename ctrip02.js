function mouseOverColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#4285f4';// body...
}
function mouseOutColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#a4cbff';// body...
}

window.onload = function dropDown(argument) {
	var nav_dropdown = document.getElementsByClassName('navdropdown');
	var nav_detail = document.getElementsByClassName('navdetail');
	//console.log(nav_dropdown);
	//console.log(nav_detail);
	var last = nav_detail[0];
	var show = function(index){
		return function(){
			console.log(index);
			if (last) {last.style.display = 'none';}
			nav_detail[index].style.display = 'block';
			//nav_detail[index].style.paddingRight = '10px';
			//console.log(nav_detail[index].style.paddingRight);
			last = nav_detail[index];
		};
	}
	for (var i = 0; i < nav_dropdown.length; i++) {
		nav_dropdown[i].onmouseover = show(i);
	// body...
	} 
	subtab();
	var selectcontent = document.getElementsByClassName('selectcontent');
		for (var a = 0; a < selectcontent.length; a++) {
			selectcontent[a].style.display = 'block';
		}
}