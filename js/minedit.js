function minEditDistance(target, source){
	var n = target.length;
	var m = source.length;
	var distance = [];
	var pointers = [];
	for(var i = 0; i <= n; i++) {
		distance[i] = [];
		pointers[i] = [];
		for(var j = 0; j <= m; j++){
			distance[i][j] = undefined;
			pointers[i][j] = [undefined, undefined, undefined, undefined];
		}
    }
	
	//initialize the distance matrix and pointer matrices
	distance[0][0] = 0;
	for(var i = 1; i <= n; i++){
		var tChar = target[i - 1];
		distance[i][0] = distance[i - 1][0] + insCost(tChar);
		pointers[i][0] = [i - 1, 0, tChar, '*'];
	}
	for(var j = 1; j <= m; j++){
		var sChar = source[j - 1];
		distance[0][j] = distance[0][j - 1] + delCost(sChar);
		pointers[0][j] = [0, j - 1, '*', sChar];
	}
	
	
	//helper function for creating distance/pointer pairs
	function getPair(row, col, func, tChar, sChar){
		var dist = 0;
		switch(func){
			case 'ins' : dist = distance[row][col] + insCost(tChar);        break;
			case 'sub' : dist = distance[row][col] + subCost(tChar, sChar); break;
			case 'del' : dist = distance[row][col] + delCost(sChar);        break;
			default	   : break;
		}
		var pointer = [row, col, tChar, sChar];
		return [dist, pointer];		
	}

	//for each cell of the matrix, choose insertion, substitution,
	//or deletion, whichever gives the shortest distance
	for(var i = 1; i <= n; i++){
		for(var j = 1; j <= m; j++){
			var tChar = target[i - 1];
			var sChar = source[j - 1];
			pairs = [getPair(i - 1, j    , 'ins', tChar, '*'  ),
					 getPair(i - 1, j - 1, 'sub', tChar, sChar),
					 getPair(i    , j - 1, 'del', '*'  , sChar)];
			var min = pairs[0][0]; var minInd = 0;
			for(var k = 1; k < 3; k++){
				if(pairs[k][0] < min){
					min = pairs[k][0];
					minInd = k;
				}
			}
			distance[i][j] = min;
			pointers[i][j] = pairs[minInd][1];
			console.log(distance[i][j], pairs[minInd][1]);
		}	
	}
	
	//follow pointers backwards through the path selected
	var tChars = [];
	var sChars = [];
	var row = n, col = m;
	while(true){
		var rowN = pointers[row][col][0];
		var colN =  pointers[row][col][1];
		var tChar = pointers[row][col][2];
		var sChar = pointers[row][col][3];
		if(rowN == undefined && colN == undefined){break;}
		else{row = rowN; col = colN;
		tChars.push(tChar);
		sChars.push(sChar);}
	}
	
	//return distance and two character strings
	var targetString = tChars.reverse().join('');
	var sourceString = sChars.reverse().join('');
	return [distance[n][m], targetString, sourceString];
}

function insCost(c){
	return parseInt(document.getElementById("insCost").value);
}

function delCost(c){
	return parseInt(document.getElementById("delCost").value);
}

function subCost(c1, c2){
	if(c1 == c2){return 0;}
	else{return parseInt(document.getElementById("subCost").value);}
}

document.getElementById("okay").onclick = function(e){
	var dArr = minEditDistance(document.getElementById("target").value, document.getElementById("source").value);
	document.getElementById("minEdit").innerHTML = dArr[0];
	document.getElementById("alignment").innerHTML = dArr[1] + '<br>' + dArr[2];	
}