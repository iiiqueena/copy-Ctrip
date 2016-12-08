function mouseOverColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#4285f4';// body...
}
function mouseOutColor() {
	var a = document.getElementById('search');
	a.style.backgroundColor = '#a4cbff';// body...
}



function showTrangle(idname,indexnum) {//三角符号
		var content = document.getElementById(idname).getElementsByTagName('li');
		for(var i=0;i<content.length;i++){
			content[i].className = '';
		}
		content[indexnum].className = 'cur';
	}
function changeTab(contentclassname,indexnum){//切换
	var content = document.getElementsByClassName(contentclassname);		
	for(var i=0;i<content.length;i++){
			content[i].style.display = 'none';
		}
		content[indexnum].style.display = 'block';
}

function tabTransCallback(tabid,contentclassname,indexnum){
		return function(){
			showTrangle(tabid,indexnum);
			changeTab(contentclassname,indexnum);
		}
}
function changeTabCallback(contentclassname,indexnum){
		return function(){
			changeTab(contentclassname,indexnum);
		}
}

function tab(tabid,contentclassname){
	var tab = document.getElementById(tabid).getElementsByTagName('li');
	for (var i = 0; i < tab.length; i++) {
		var curr_index_num = i;
		tab[i].onclick = changeTabCallback(contentclassname,curr_index_num);
	}
}

function tabTrans(tabid,contentclassname){//绑定
	var tab = document.getElementById(tabid).getElementsByTagName('li');
	for (var i = 0; i < tab.length; i++) {
		var curr_index_num = i;
		tab[i].onclick = tabTransCallback(tabid,contentclassname,curr_index_num);
	}
	
}

function subtab(tab,content,subcontent,backgroundColor1,color1,backgroundColor2,color2){
	var subtab = document.getElementById(tab).getElementsByTagName('li');
	var subcontent = document.getElementById(content).getElementsByClassName(subcontent);
	var firstcontent = subcontent[0];
	var firsttab = subtab[0];
	var click = function (navindex) {
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


window.onload = function dropDown(argument) {
	var nav_dropdown = document.getElementsByClassName('navdropdown');
	var nav_detail = document.getElementsByClassName('navdetail');
	//console.log(nav_dropdown);
	//console.log(nav_detail);
	var last = nav_detail[0];
	var show = function(index){
		return function(){
			if (last) {last.style.display = 'none';}
			nav_detail[index].style.display = 'block';
			last = nav_detail[index];
		};
	}
	for (var i = 0; i < nav_dropdown.length; i++) {
		nav_dropdown[i].onmouseover = show(i);
	// body...
	} 

	
	subtab('hoteltab','hotelcontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('airtab','aircontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('freetab','freecontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('traintab','traincontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('oltab','olcontent','subcontent','white','#666666','white','#2c7ae0');
	subtab('allsalestab','allsalescontent','contentphoto','white','#2c7ae0','#2c7ae0','white');
	subtab('outdoortab','outdoorcontent','contentphoto','white','#2c7ae0','#2c7ae0','white');
	tabTrans('navbartrip','tripcontent');
	tab('barsales','content');
}