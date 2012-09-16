<?php
/*============================================================================================================================================================
Project	:	Playbook
File	: 	items.php
Author	: 	Kushal Gandhi
Date	:	19/5/2012
Purpose	:	Maintain arrayes of Categories and Items.
Output	:	JSON encoded object
============================================================================================================================================================*/
$data = array();	//declare main Array
$category = $_GET['category'];
$data['Categories'] = array("Fruits","Flowers","Animals","Birds","Vehicles"); //Array of Categories [Add new Category Here]

//Array of Items for particular Categories 	[Add Items for Category]
$data["Fruits"] 	= array("Apple","Banana","Mango","Orange","Strawberry","Cherry","Guava","Kiwi","Lemon","Pear","Coconut","Mangosteen","Tomato");
$data["Flowers"] 	= array("Rose","Lotus","Pollen");
$data["Animals"] 	= array("Tiger","Dog","Horse");
$data["Birds"]  	= array("Sparrow","Staroffice","Swallow","Bullfinch");
$data["Vehicles"]   = array("Excavator","Helicopter","Truck","Bus","Car");

//For particular Category 
if(isset($category) && $category != "")
{
	$key = array_keys($data);
	if(in_array($category,$key))
	{
		$data['items'] = $data[$category];
		foreach($data[$category] as $key=>$value)
		{
			$value = strtolower($value);
			if(file_exists("images/".$value.".png"))//It will give an array which will contain detail about existence of images.
			{
				$data['exists'][$key] = $value; 
			}
			else
			{
				$data['exists'][$key] = "";
			}
		}
	}
}
else	//Give all Categories - For index.php
{
		foreach($data["Categories"] as $key=>$value)
		{
			shuffle($data[$value]);
			$data["Category"][$value] = $data[$value][0];
			$value = strtolower($data[$value][0]);
			if(file_exists("images/".$value.".png"))//It will give an array which will contain detail about existence of images.
			{
				$data['exists'][$key] = $value; 
			}
			else
			{
				$data['exists'][$key] = "";
			}
		}

}
if($category === "Random")//For Random Category 
{
	$data['random'] = array();
	foreach($data as $key=>$value)
	{
		if($key !== "Categories" && $value != "" && $key !=="")
		{
			foreach($data[$key] as $value1)
			{
				if($value1 != "" && !in_array($value1,$data['random']))
				{
					$data['random'][] = $value1; 
				}
			}
		}
	}
	shuffle($data['random']);		
	for($i=0;$i<10;$i++)	//[Give 10 Items in array]
	{
		$data['items'][$i] = $data['random'][$i]; 
		$img = strtolower($data['random'][$i]);
		if(file_exists("images/".$img.".png"))//It will give an array which will contain detail about existence of images.
		{
			$data['exists'][$i] = $value; 
		}
		else
		{
			$data['exists'][$i] = "";
		}
	}
}
echo json_encode($data); // Give JSON encoded object of an array
?>