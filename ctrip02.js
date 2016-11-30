function mouseOverColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#4285f4';// body...
}
function mouseOutColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#a4cbff';// body...
}
function tab(title,content){
	var contenttitle = document.getElementsByClassName(title);
	var contentbar = document.getElementsByClassName(content);
	var first = contentbar[0];
	var click = function (navindex) {
		console.log(navindex);
		return function() {			
			if (first) {first.style.display = 'none';
		}

			contentbar[navindex].style.display = 'block';
			first = contentbar[navindex];
			// body...
		};
		// body...
	}
	// body...
	for (var i = 0; i < contenttitle.length; i++) {
		contenttitle[i].onclick = click(i);
	}
}
function subtab(){
	var navcontent = document.getElementsByClassName('navcontent');
	for (var j = 0; j < navcontent.length; j++) {
		console.log("j="+j);
		var subtab = navcontent[j].getElementsByClassName('subtab');
		var subcontent = navcontent[j].getElementsByClassName('subcontent');
		var first = subcontent[0];
		var click = function (navindex) {
			console.log(navindex);
			return function() {			
				if (first) {first.style.display = 'none';
			}

				subcontent[navindex].style.display = 'block';
				first = subcontent[navindex];
				// body...
			};
			// body...
		}
		// body...
		for (var i = 0; i < subtab.length; i++) {
			subtab[i].onclick = click(i);
		}
	}
	
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
	tab('contenttitle','contentbar');
	subtab();
}