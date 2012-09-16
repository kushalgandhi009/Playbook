// JavaScript Document
/*
=================================================================================================================================================================
File	:	main.js
Author	:	Kushal Gandhi
Purpose	:	Display list of Cetagories - index.php
Date	:	20/5/2012
=================================================================================================================================================================
*/

$(document).ready(function(){
	var n = 1;	//Row Number
	var a = 5;	//Number of Images per row
	$.getJSON("items.php",function(data){
										var len = data.Categories.length;	//total Categories
										for(i=0;i<len;i++)
										{
											if(i == a)
											{
												$("div#images table").append('<tr></tr>');	//Append <tr> after append 'a' images
												n++;	//maintain Row No.
												a = a + 5; //maintain Images per row
											}
											
											if(data.exists[i])	//Check Image is available or not
											{
												cat = data.Categories[i];
												var img_name = data.Category[cat].toLowerCase();
												$('div#images tr:nth-child('+n+')').append('<td><img class="category" src=images/'+img_name+'.png title='+data.Categories[i]+' width=150 height=150><br /><span><b>'+data.Categories[i]+'</b></span></td>');
											}
											else	//Default Image 
											{
												$('div#images tr:nth-child('+n+')').append('<td><img class="category" src="images/default-item.png" title='+data.Categories[i]+' width=150 height=150><br /><span><b>'+data.Categories[i]+'</b></span></td>');
											}
										}
	});
	$('div.click img').live("click",Categories_Item);//Bind Click on Category 
});

function Categories_Item()
{
	var category = $(this).attr('title');	//Name of category
	window.location = 'categories.php?category='+category;	//Will take to Category
}