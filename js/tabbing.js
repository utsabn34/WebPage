// JavaScript Document
var tabbing=new Tabbing();

function Tabbing(){
	
	this.tab=(document.getElementsByClassName("tab"))[0];
	this.product=(document.getElementsByClassName("navigator"))[0];
	var that=this;
	this.producttemp=this.product.children[2];
	this.parenttab=this.tab.children[0];
	this.tabtemp=this.parenttab.children[0];
	this.childtab;
	this.count=this.parenttab.children.length;
	this.init=function(){
		for(i=0;i<that.count;i++)
		{
			that.childtab=that.parenttab.children[i];
			that.parentnav=that.product.children[i+2];
		
			//console.log(childtab);
			//console.log(childtab[i]);
		
			that.childtab.onclick=(function(childtab,parentnav){
				return function(){
					that.tabtemp.className="";
					that.tabtemp=childtab;
					that.tabtemp.className="active";
					that.producttemp.style.display="none";
					that.producttemp=parentnav;
					that.producttemp.style.display="block";
					
					
				}
			})(that.childtab,that.parentnav);
		}
	}();
}