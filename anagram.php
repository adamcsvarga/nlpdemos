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
<h1>Anagram Search</h1>
<p>This is a very simple tool for finding the possible anagrams of English words (i. e. the permutations of the letters of the given word that are valid words themselves).
Due to computational limitations the input field is limited to 6 characters. </p>
<input type="text" id="word" maxlength="6" style="width:10%"></input><br><button type="submit" class="btn btn-large" id="okay"> FIND</button>
<div id="results"></div>

<script type="text/javascript">
var perms = [];
var dict = new Array();

address = "wordsEn.txt";

var req = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
if(req == null) {
    console.log("Error: XMLHttpRequest failed to initiate.");
}

req.onload = function() {
	dict = req.responseText.split("\r\n");
}

try {
req.open("GET", address, true);
    req.send(null);
} catch(e) {
    console.log("Oh snap");
}

function permutations(str, arr) {
	if (typeof (str) == 'string') str = str.split('');
    if (str.length == 0) perms.push(arr.join(''));
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        permutations(str, arr);
        arr.pop();
        str.splice(i, 0, x);
    }
}

function anagrams(str) {
	perms = [];
	var valids = [];
	permutations(str, []);
	for(var string in perms) {
		if (dict.indexOf(perms[string]) > -1) {
			//console.log(dict.indexOf(perms[string]));
			valids.push(perms[string]);}}
	return valids;
} 

document.getElementById('okay').onclick = function(e) {
	agList = anagrams(document.getElementById('word').value);
	document.getElementById('results').innerHTML = "<br>Possible anagrams:<ul>";
	for(var ag in agList){
		document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + "<li>" + agList[ag] + "</li>";}
	document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + "</ul>";
}
</script>


</div>

<script src="js/jquery-1.10.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/eliza.js"></script>
<script>
$('#myModal').modal('hidden')
</script>
</body>
</html>