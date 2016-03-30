<!DOCTYPE html>
<html lang="en">
<head>
<title>NLP Demos</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<link href="font/css/fontello.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Droid+Sans:400,700' rel='stylesheet' type='text/css'>
</head>
<body>

<div class="container work">
<h1>Edit Distance</h1>
<p>This program calculates the minimum edit distance (also called the Levenshtein distance) between two words. The insertion, deletion and substitution costs are tuneable
parameters.</p>
<table>
	<tr><td>Target word:</td><td><input type="text" id="target"></input></td></tr>
<tr><td>Source word:</td><td><input type="text" id="source"></input></td></tr>
<tr><td>insertion cost:</td><td><select id="insCost" size="1" style="width:70px;">
	<?php foreach(range(0,10) as $i){
		if($i == 2){echo "<option value='$i' selected='selected'>$i</option>";}
		else{echo "<option value='$i'>$i</option>";}
	}?>	
</select></td></tr>
<tr><td>deletion cost:</td><td><select id="delCost" size="1" style="width:70px;">
	<?php foreach(range(0,10) as $i){
		if($i == 2){echo "<option value='$i' selected='selected'>$i</option>";}
		else{echo "<option value='$i'>$i</option>";}
	}?>	
</select></td></tr>
<tr><td>substitution cost:</td><td><select id="subCost" size="1" style="width:70px;">
	<?php foreach(range(0,10) as $i){
		if($i == 1){echo "<option value='$i' selected='selected'>$i</option>";}
		else{echo "<option value='$i'>$i</option>";}
	}?>		
</select></td></tr>
<tr><td><button type="submit" class="btn btn-large" id="okay"> CALCULATE</button></td></tr>
<tr><td>Edit Distance:</td><td id="minEdit"></td></tr>
<tr><td>Alignment:</td><td id="alignment"></td></tr>
</table>
</div>

<script src="js/jquery-1.10.1.min.js"></script>

<script src="js/minedit.js"></script>
<script>
$('#myModal').modal('hidden')
</script>
</body>
</html>