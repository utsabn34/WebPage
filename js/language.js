// JavaScript Document
// JavaScript Document


var country = Country();

function Country()
{
	var optionbar = (document.getElementById("optionbar"));
	var cntryform = (document.getElementById("cntryform"));
	var cntry = (document.getElementById("country"));
	var flagbtn = (document.getElementById("flagbtn"));
	var flag = (document.getElementById("flag"));
	var that = this;
	this.flags =[];
	this.ul;
	this.parent =cntry;
	this.optionbar = optionbar;
	this.countryName = [];
	this.cntryform = cntryform;
	this.choose = this.cntryform.children[0];
	this.flag = flag;
	this.flagbtn = flagbtn;
	
	
	this.list = function()
	{
		for(var i=0;i<that.choose.childElementCount;i++)
		{
			var option = that.choose.children[i];
			var src = option.getAttribute("pic");
			that.flags.push(src);
			var source = option.value;
			that.countryName.push(source);
		}
		
	}();
	
	this.menu = function()
	{
		var ul = document.createElement("ul");
		ul.style.float="none";
		ul.style.display= "none";
		ul.style.width="80px";
		that.optionbar.appendChild(ul);
		that.ul = ul;
		
		
		
		for(var i=0;i<that.flags.length;i++)
		{
			var li = document.createElement("li");
			li.style.float="left";
			li.style.marginTop="2px";
			li.style.height="18px";
			li.style.listStyle="none";
			ul.appendChild(li);
			
			var span = document.createElement("span");
			li.appendChild(span);
			span.innerHTML = that.countryName[i];
			
			var img = document.createElement("img");
			img.style.cursor="pointer";
			img.style.height="15px";
			img.style.float="left";
			li.appendChild(img);
			img.setAttribute("src",that.flags[i]);
			
			
			
			li.onclick = (function(i,ul)
			{
				return function()
				{
					that.choose.children[i].value = that.countryName[i];
					that.flag.setAttribute("src",that.flags[i]);
					that.ul.style.display = "none";
				}
			})(i,ul);
			
			that.flagbtn.onclick = function()
			{
				that.ul.style.display = "block";
				
			}
		}
	}();
}
