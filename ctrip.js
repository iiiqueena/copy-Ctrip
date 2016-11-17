function mouseOverColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#4285f4';// body...
}
function mouseOutColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#a4cbff';// body...
}
function subtab(){
	var content = document.getElementsByClassName('content');
	//console.log(content.length);
	var contentbar = [];
	var contentdetail = [];
	//debugger;
	for (var i = 0; i < content.length; i++) {
		contentbar[i] = content[i].children[0];
		contentdetail[i] = content[i].children[1];
		var subtab = contentbar[i].getElementsByTagName('li');
		var subcontent = contentdetail[i].getElementsByClassName('subcontent');
		for (var j = 0; j < subtab.length; j++) {
			subtab[j].id = j;
			subtab[j].onclick = function(){				
				for (var a = 0; a < subcontent.length; a++) {
					subcontent[a].style.display = 'none';
					subcontent[a].className = '';
				}
				console.log(j);
				console.log(subcontent[j])//.style.display = 'block';
				console.log(123);
			};
		}
	}

	/*var subtab = document.getElementsByClassName('subtab');
	var subcontent = document.getElementsByClassName('subcontent');
	if (subtab.length != subcontent.length) {
		return;
	}	
	for (var i = 0; i < subtab.length; i++) {
		subtab[i].id = i;
		subtab[i].onclick = function(){
			for (var j = 0; j < subtab.length; j++) {
				subcontent[j].style.display = 'none';				
			}
			subcontent[this.id].style.display = 'block';			
		};//onclick触发时会遍历吗？？	
	}*/
	
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