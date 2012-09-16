<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Categories</title>
<link rel="stylesheet" href="css/style.css" />
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/categories.js"></script>
</head>

<body>
<div class="head"> <a href="index.php"><img src="images/logo.png" alt="Playbook" style="padding-left:10px;" /></a> <img src="images/bfly.gif" class="fly" /> </div>
<div id="MainContent">
  <div id="title" class="title"> <img src="images/ajax-loader.gif" id="ajax_loader" style="visibility:hidden" />&nbsp;
    <select id="category_select" style=" width:auto; height:30px; padding:5px;" onchange="Change_Category()">
      <option value="" disabled="disabled" selected="selected">What you want to see</option>
      <!-- Categories Options will come here -->
    </select>
    &nbsp;&nbsp; <a href="categories.php?category=Random"><img src="images/random.png" style="height:30px; vertical-align:middle" /></a> <span class="right"> <b>Hide Name</b> &nbsp;&nbsp; <img src="images/on.png" title="On" class="on_off" /> </span>
    <h2>Showing You <?php echo '<span id="'.$_GET['category'].'"style="color:black">'.$_GET['category'].'</span>'; ?> <!-- Name Of Category --></h2>
  </div>
  <div id="images" class="click">
    <table border="0" cellpadding="25" cellspacing="0">
      <tr> 
        <!-- Items will come here--> 
      </tr>
    </table>
  </div>
</div>
<div style="clear:both"></div>
<br />
<br />
<div class="footer" style="margin-left:5px;"> <img src="images/bw_name.png" title="BombayWorks" /> </div>
</body>
</html>