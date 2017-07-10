var gifSlide=document.getElementsByTagName("img")[0];
var gif=["image/gif2.gif","image/gif3.gif","image/gif4.gif","image/gif5.gif","image/gif6.gif","image/gif7.gif"];
var count=0;




function overlayfunck(param){

	var overlay=document.querySelector(".frontGallery");
	overlay.style.width=window.innerWidth+"px";
	overlay.style.height=window.outerHeight+"px";
	overlay.style.display="block";
	overlay.removeChild(overlay.childNodes[0])
	var img=document.createElement("img");
	img.setAttribute("src",param.querySelector("img").getAttribute("src"));
	img.style.top="25%";
	img.style.left="25%";
	overlay.appendChild(img);
}
function remove(){
	document.querySelector(".frontGallery").style.display="none";
}
function left() {
	gifSlide.setAttribute("src","gif[count]")
	count--;
	if (count<0) {
		count=gif.length-1;
	}
	document.querySelector(".frontGallery").style.display="display";
}
function right(){
	gifSlide.setAttribute("src","gif[count]")
	count++;
	if (count>=gif.length-1) {
		count=0;
	}
	document.querySelector(".frontGallery").style.display="display";
}
