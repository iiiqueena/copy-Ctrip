function mouseOverColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#4285f4';// body...
}
function mouseOutColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#a4cbff';// body...
}
function trangle(){
	this.getElementsByTagName('div').style.display = 'block';
}

function tab(title,content){
	var contenttitle = document.getElementsByClassName(title);
	var content = document.getElementsByClassName(content);
	var firsttitle = contenttitle[0];
	var firstcontent = content[0];
	var click = function (navindex) {
		console.log(navindex);
		return function() {			
			if (firsttitle) {
				firstcontent.style.display = 'none';
			}
			content[navindex].style.display = 'block';
			//content[navindex].getElementsByClassName('selectcontent').style.display = 'block';
			first = content[navindex];
			// body...
		};
		// body...
	}
	// body...
	for (var i = 0; i < contenttitle.length; i++) {
		contenttitle[i].onclick = click(i);
	}
}
function subtab(tab,content,subcontent,backgroundColor1,color1,backgroundColor2,color2){
	var subtab = document.getElementById(tab).getElementsByTagName('li');
	var subcontent = document.getElementById(content).getElementsByClassName(subcontent);
	console.log('123' + content);
	var firstcontent = subcontent[0];
	var firsttab = subtab[0];
	var click = function (navindex) {
		console.log(navindex);
		return function() {			
			if (firsttab) {
				firstcontent.style.display = 'none';
				firsttab.style.backgroundColor = backgroundColor1;
				firsttab.style.color = color1;
			}
			subtab[navindex].style.backgroundColor = backgroundColor2;
			subtab[navindex].style.color = color2;
			subcontent[navindex].style.display = 'block';
			firsttab = subtab[navindex];
			firstcontent = subcontent[navindex];
			// body...
		};
		// body...
	}
	// body...
	for (var i = 0; i < subtab.length; i++) {
		subtab[i].onclick = click(i);
	}
	// mouseClick(tab);

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
	tab('contenttitle','content');
	tab('navtitle','tripcontent');
	subtab('hoteltab','hotelcontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('airtab','aircontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('freetab','freecontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('traintab','traincontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('oltab','olcontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('allsalestab','allsalescontent','contentphoto','white','#2c7ae0','#2c7ae0','white');
	subtab('outdoortab','outdoorcontent','contentphoto','white','#2c7ae0','#2c7ae0','white');
	document.getElementsByClassName('navtitle').onclick = trangle();


}