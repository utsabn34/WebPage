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
	this.flags = [];
	this.ul;
	this.parent =cntry;
	this.out = optionbar;
	this.countryName = [];
	this.form = cntryform;
	this.flagElement = flag;
	this.button = flagbtn;
	this.selected = this.form.children[0];
	
	
	this.list = function()
	{
		for(var i=0;i<that.selected.childElementCount;i++)
		{
			var option = that.selected.children[i];
			var src = option.getAttribute("pic");
			that.flags.push(src);
			var src = option.value;
			that.countryName.push(src);
		}
		console.log(that.flags);
		console.log(that.countryName);
	}();
	
	this.createMenu = function()
	{
		var ul = document.createElement("ul");
		that.out.appendChild(ul);
		that.ul = ul;
		
		
		
		for(var i=0;i<that.flags.length;i++)
		{
			var li = document.createElement("li");
			ul.appendChild(li);
			
			var img = document.createElement("img");
			li.appendChild(img);
			img.setAttribute("src",that.flags[i]);
			
			var span = document.createElement("span");
			li.appendChild(span);
			span.innerHTML = that.countryName[i];
			
			li.onclick = (function(i,ul)
			{
				return function()
				{
					that.form.value = that.countryName[i];
					that.flagElement.setAttribute("src",that.flags[i]);
					ul.style.display = "none";
				}
			})(i,ul);
			
			that.button.onclick = function()
			{
				that.ul.style.display = "block";
			}
		}
	}();
}
