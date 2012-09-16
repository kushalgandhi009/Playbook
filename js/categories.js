// JavaScript Document
/*
==================================================================================================================================================================
File	:	categories.js
Author	:	Kushal Gandhi
Purpose	:	Display list of Items - categories.php
Date	:	20/5/2012
==================================================================================================================================================================
*/
$(document).ready(function(){

	$('img.on_off').on("click",Toggle);	//Bind toggle fun. to show and hide name of item
	$('#ajax_loader').ajaxStart(function(){
	$(this).css("visibility","visible").ajaxStop(function(){
	$(this).css("visibility","hidden");
	});
	});
	
	var n = 1;	//Row Number
	var a = 5;	//Number of Images per row
	var category = $('h2 span').attr('id');
	$.getJSON("items.php",{'category':category},function(data){	
											var len = data.Categories.length;	//total Categories
											for(i=0;i<len;i++)	//add options to select Category
											{
												$('select#category_select').append('<option value='+data.Categories[i]+'>'+data.Categories[i]+'</option>');
											}
											
											var len = data.items.length;	//total No. of items
											for(i=0;i<len;i++)
											{
												if(i == a)
												{
													$("div#images table").append('<tr></tr>');	//Append <tr> after append 'a' images
													n++;	//maintain Row No.
													a =a + 5; //maintain Images per row
												}
												if(data.exists[i])	//Check Image is available or not
												{
													img = data.items[i].toLowerCase();
												$('div#images tr:nth-child('+n+')').append('<td><img class="item" src=images/'+img+'.png width=150 height=150><br /><span class="no_name"><img src="images/name.png" title="Click to see name" width="150px" height="25px"/></span><span class="name" style="display:none"><b>'+data.items[i]+'</b></span></td>');
												}
												else	//Default Image 
												{
												$('div#images tr:nth-child('+n+')').append('<td><img class="item" src="images/default-item.png" width=150 height=150><br /><span class="no_name"><img src="images/name.png" title="Click to see name" width="150px" height="25px"/></span><span class="name" style="display:none"><b>'+data.items[i]+'</b></span></td>');
												}
											}
	});
	//Show and hide Name of Items
	$("span.no_name").live("click",function(){
											$(this).css("display","none");
											$(this).next('span').css("display","block");
	});
	$('option[value="'+category+']"').css("selected","selected");
});
function Change_Category()	//Change category listing as per selection in select menu
{
	var Category = $('option:selected').val();
	Get_Listing(Category);
}
//Give List of Items for particular Category
function Get_Listing(Category){
	var n = 1;
	var a = 5;
	var category = Category;
	$('h2 span').attr('id',category);	//Set new category [id] 
	$('h2 span').html(category);		//[name]
	$('div#images').html('<table border="0" cellpadding="25" cellspacing="0"><tr></tr></table>');
	$.getJSON("items.php",{'category':category},function(data){	
											var len = data.items.length;
											for(i=0;i<len;i++)
											{
												if(i == a)
												{
													$("div#images table").append('<tr></tr>');
													n++;
													a =a + 5;
												}
												if(data.exists[i])
												{
													img = data.items[i].toLowerCase();
													$('div#images tr:nth-child('+n+')').append('<td><img class="item" src=images/'+img+'.png  width=150 height=150><br /><span class="no_name"><img src="images/name.png" title="Click to see name" width="150px" height="25px"/></span><span id="name" style="display:none"><b>'+data.items[i]+'</b></span></td>');
												}
												else
												{
													$('div#images tr:nth-child('+n+')').append('<td><img class="item" src="images/default-item.png" width=150 height=150><br /><span class="no_name"><img src="images/name.png" title="Click to see name" width="150px" height="25px"/></span><span class="name" style="display:none"><b>'+data.items[i]+'</b></span></td>');
												}
											}
	});
}

function Hide_Name()	
{
	$("span.no_name").css("display","none");		
	$("span.name").css("display","block");	
}
function Show_Name()
{
	$("span.no_name").css("display","block");	
	$("span.name").css("display","none");		
}
function Toggle()	//Show and Hide Name of items
{
	var title = $(this).attr('title');
	if(title == 'On')
	{
		$(this).attr("src","images/off.png");
		$(this).attr("title","Off");
		Hide_Name();
	}
	else
	{
		$(this).attr("src","images/on.png");
		$(this).attr("title","On");
		Show_Name();
	}
}