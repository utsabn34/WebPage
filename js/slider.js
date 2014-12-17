// JavaScript Document

var slide = new slider();
slide.initialize();

function slider()
{
var that = this;

this.parent = (document.getElementsByClassName("slider"))[0];	
this.list = this.parent.children[0];
this.left_nav;
this.right_nav;
this.nav_list;
this.nav_list_item = [];

this.anim_id;
this.auto_anim_id;
this.dx;

this.lmargin = 0;
this.anim_delay=3000;
this.auto_anim_delay=5000;


this.totallist = (this.list.childElementCount);
this.currentindex = 1;

  this.initialize = function ()
	  {
	  var left = document.createElement("div");
	 // left.style.backgroundImage="url(img/activelft.png)";
	  //left .style.cursor="pointer";
	  //left.setAttribute("src","img/activelft.png");
	  left.style.position = "absolute";
	  left.style.left = "5px";
	  left.style.top = "250px";
	  left.style.background="white";
	  left.style.border="1px solid";
	  that.parent.appendChild(left);
	  that.left_nav = left;
	  
	  left.onclick=(function (elem)
	  {
		  return function(){
			  that.pauseAutoAnim();
			  that.anim(1);
		  }
	  })(left);
	  
	  var right = document.createElement("div");
	  
	  right.style.position = "absolute";
	  right.style.border="1px solid";
	  right.style.right = "5px";
	  right.style.top = "250px";
	  //right.style.backgroundImage="url(img/activert.png)";
	  
	  that.parent.appendChild(right);
	  that.right_nav = right;
	  
	  right.onclick=(function (elem)
	  {
		  return function(){
			  that.pauseAutoAnim();
			  that.anim(-1);
		  }
	  })(right);
	  
	  var list_container = document.createElement("ul");
	  //list_container.style.position = "absolute";
//	  list_container.style.left = ((1000-(15*that.totallist))/2)+"px";
//	  list_container.style.bottom = "5px";
//	  list_container.style.width = "auto";
//	  list_container.style.height = "10px";
	  
	  for(var i=0;i<that.totallist;i++)
	  {
		   var list_item = document.createElement("li");
		   list_item.style.float = "left";
		   //list_item.style.width = "10px";
//		   list_item.style.height = "10px";
//		   list_item.style.borderRadius = "5px";
//		   list_item.style.marginRight = "5px";
		   list_container.appendChild(list_item);
		   that.nav_list_item.push(list_item);
	  }
	  that.resetNavIcon();
	  
	  that.parent.appendChild(list_container);
	  that.nav_list = list_container;
	  
	  that.auto_anim_id= setInterval(that.autoAnim,that.anim_delay);
	  
	  }//initialize end

  this.anim = function (temp)
  {
	  that.dx = temp;
	  that.stop();
	  if(!(temp==1 && that.currentindex<=1) )
	  if(!(temp==-1 && that.currentindex >= that.totallist) )
		  {
			  that.anim_id = setInterval(function (){that.move(temp);},50);
		  }
  }
  
  
  
  this.autoAnim =function()
  {
	  console.log(that.currentindex);
	  if(that.currentindex==1)
	  {
		 that.dx = -1;
	  }
	  if(that.currentindex==that.totallist)
	  {
		  that.dx = 1;
	  }
	   that.anim(that.dx);
  }
			
  this.move = function(dx)
  {
	  that.lmargin = that.lmargin+(dx*100);
	  that.list.style.marginLeft = that.lmargin+"px";
	  if(that.lmargin%1000==0)
	  {
		  that.stop();
		  if(dx ==1)
		  {
			  that.currentindex -=1;
		  }
		  else
		  {
			  that.currentindex +=1;
		  }
		  that.resetNavIcon();
		  
		  if(that.auto_anim_status=="false") {clearInterval(that.auto_anim_id);}
	  }
  }
 
 this.resetNavIcon = function()
 {
	 for(var i=0;i<that.totallist;i++)
	  {
		  if((i+1) == that.currentindex)
		  {
			  that.nav_list_item[i].style.background = "white";
		  }
		  else
		  {
			  that.nav_list_item[i].style.background = "gray";
		  }
	  }
 }
  
  this.stop = function()
  {
	  clearInterval(that.anim_id);
  }
  this.pauseAutoAnim = function()
  {
	  //clearInterval(that.auto_anim_id);]
	  that.auto_anim_status = "false";
	  setTimeout(function (){ 
	  that.auto_anim_status = "true";
	  clearInterval(that.auto_anim_id); //prevent multiclick
	  that.auto_anim_id= setInterval(that.autoAnim,that.anim_delay);
	  }
	  ,that.auto_anim_delay);
  }
	
}
