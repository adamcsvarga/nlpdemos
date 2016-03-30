//main conversation data
var dialogueTable = {
	"hello": [
		"Hi, how are you?",
		"Hello dear"],
	"i will": [
		"You will do so. I beleive it too...",
		"Will you be able to do so?"],
	"what is": [
		"I'm more interested in you, not in *"],
	"yes": [
		"Are you sure?",
		"You seem to be very optimistic."],
	"yeah": [
		"Are you sure?",
		"You seem to be very optimistic."],
	"no": [
		"Never say no...",
		"You seem to be very pessimistic."],
	"can i": [
		"Sure! Why not?",
		"Just carry on..."],
	"fine": [
		"Okay, now tell me about your problem."],
	"computer": [
		"I like computers.",
		"Do you like computers?"],
	"thanks?": [
		"Yo're welcome.",
		"No mention."],
	"no problem": [
		"Everybody on this planet has some problem.",
		"Are you sure you have no problem?"],
	"stress": [
		"Relax, take it easy."],
	"live in": [ 
		"That's a nice place."],
	"come from": [ 
		"That's a nice place."],
	"city": [ 
		"That's a nice place."],
	"country": [ 
		"That's a nice place."],
	"pet": [
		"Everybody likes cute pets! I have a hamster named Bob.",
		"Are you afraid of it?"],
	"dog": [
		"Everybody likes cute pets! I have a hamster named Bob.",
		"Are you afraid of it?"],
	"cat": [
		"Everybody likes cute pets! I have a hamster named Bob.",
		"Are you afraid of it?"],
	"animal": [
		"Everybody likes cute pets! I have a hamster named Bob.",
		"Are you afraid of it?"],
	"can i": [
		"Of course you can *",
		"Are you kidding? You can always *",
		"Perhaps you would like to be able to *"],
	"sad": [
		"Don't worry, be happy!",
		"Come on, everything will get better.",
		"Let me help you feel better."],
	"can you": [
		"Don't you beleive that I can *",
		"You want me to be able to *"],
	"you are": [
		"What makes you think that I am *",
		"Does it make you feel good to beleive I am *"],
	"wish": [
		"Do you sometimes wish you were *"],
	"feel": [
		"Does that bother you?",
		"Do you often feel *",
		"Tell me more about your feelings",
		"Do you enjoy feeling *",
		"Why do you feel that way?"],
	"you don't": [
		"Do you really think I don't *",
		"Perhaps in good time I will *"],
	"family": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"father": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"mother": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"brother": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"sister": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"husband": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"wife": [
		"Tell me more about your family.",
		"How do you get along with your family?",
		"Is your family important to you?",
		"Do you often think about your family?"],
	"friend": [
		"Do your friends worry you?",
		"Are you sure you have any friends?"],
	"friends": [
		"Do your friends worry you?",
		"Are you sure you have any friends?"],
	"dream": [
		"What does that dream suggest to you?",
		"Do you dream often?",
		"Are you disturbed by your dreams?",
		"What person appears in your dreams?"],
	"like": [
		"What makes you like *",
		"Why do you like *"],
	"i don't": [
		"Why don't you *",
		"Do you want to *"],
	"i am": [
		"Did you came to me because *",
		"How long have you been *",
		"Do you enjoy being *"],
	"i'm": [
		"Did you came to me because *",
		"How long have you been *",
		"Do you enjoy being *"],
	"love": [
		"Maybe love is a bit too strong word for your feeling about *",
		"Why do you love *",
		"What is your favourite thing about *",
		"Do you really love, or just like *"],
	"sex":[
		"Are you satisfied with your sex life?",
		"Do you consider this an abnormal sexual activity?",
		"Does talking about sex make you uncomfortable?",
		"Let's talk about sex."],
	"hate":[
		"How do you express your hatred of *",
		"Is it because of your past that you hate *",
		"What makes you hate *",
		"Sometimes I also hate *",
		"Have you tried doing someting about *"],
	"fear":[
		"Relax.",
		"Would you like your friends to help you overcome your fear of *",
		"What scares you about *",
		"Why are you frightened by *"],
	"scare":[
		"Relax.",
		"Would you like your friends to help you overcome your fear of *",
		"What scares you about *",
		"Why are you frightened by *"],
	"afraid":[
		"Relax.",
		"Would you like your friends to help you overcome your fear of *",
		"What scares you about *",
		"Why are you frightened by *"],
	"want":[
		"Why do you want *",
		"What if you never got *",
		"Sometimes I also want *"],
	"who":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"what":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"when":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"where":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"how":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"why":[
		"Why do you ask?",
		"What do you think?",
		"Have you asked anyone else?"],
	"because": [
		"Is that a real reason?",
		"Does that explain anything?"],
	"sorry": [
		"You don't have to apologize.",
		"No problem."],
	"maybe": [
		"Why the uncertain tone?",
		"You aren't sure?",
		"Why don't you know?"],
	"your": [
		"Why are you concerned about my *",
		"What about your?"],
	"he": [
		"Tell me more about this person.",
		"What is your relationship to this person?"],
	"she": [
		"Tell me more about this person.",
		"What is your relationship to this person?"],
	"always": [
		"Can you think of a specific example?",
		"Really? Always?",
		"When for example?"],
	"money": [
		"What do you spend your money on?",
		"Do you have enough money?"],
	"work": [
		"Have you considered changing jobs?",
		"Is your work stressul?",
		"Do you like your boss?",
		"Are you satisfied with your career?"],
	"job": [
		"Have you considered changing jobs?",
		"Is your work stressul?",
		"Do you like your boss?",
		"Are you satisfied with your career?"],
	"boss": [
		"Have you considered changing jobs?",
		"Is your work stressul?",
		"Do you like your boss?",
		"Are you satisfied with your career?"],
	"study": [
		"Do you study enough?",
		"Do you have good grades?",
		"Do you like what you're studying?"],
	"school": [
		"Do you study enough?",
		"Do you have good grades?",
		"Do you like what you're studying?"],
	"university": [
		"Do you study enough?",
		"Do you have good grades?",
		"Do you like what you're studying?"],
	"college": [
		"Do you study enough?",
		"Do you have good grades?",
		"Do you like what you're studying?"],
	
};

//1st to 3rd person conversion
var first2ThirdTable = {
	"are":"am",
	"am":"are",
	"were":"was",
	"was":"were",
	"you":"me",
	"i":"you",
	"your":"my",
	"my":"your",
	"i've":"you've",
	"you've":"i've",
	"i'm":"you're",
	"you're":"i'm",
	"me":"you"};
	
//initialize
document.getElementById('chatfield').value = ">>>Hello, I'm Eliza. How may I help you?";

//get answer if keyword has been found
function getAnswer(keyword, text) {
	var answer = dialogueTable[keyword][Math.floor(Math.random()*dialogueTable[keyword].length)]
	if(answer.substr(answer.length - 1) != '*') {
		return answer;}
	else {
		
		//delete all text before the keyword and the keyword itself
		var regular =  new RegExp("^.*" + keyword + " ");
		var cut = text.replace(regular, "");
		
		//exchange 1st and 3rd person pronouns
		for(var key in first2ThirdTable) {
			if(cut.match(".*\\b" + key + "\\b.*")) {
				cut = cut.replace(key, first2ThirdTable[key] + "XXchangedYY"); //needed to avoid exchanging more than once
			}			
		}
		cut = cut.replace("XXchangedYY", "");
		
		//copy transformed text in place of the '*'
		answer = answer.replace("?","");
		answer = answer.replace("*", cut);
		
		return answer;
	}
}

//get random answer if there was no keyword found
function getRandom() {
	var ansNo = Math.floor(Math.random()*8);
	switch(ansNo){
		case 0: return "That is very interesting.";
		case 1: return "Please go on.";
		case 2: return "I didn't understand that.";
		case 3: return "What do you think about it?";
		case 4: return "Please continue.";
		case 5: return "Are you serious?";
		case 6: return "OK I see.";
		case 7: return "Could you be more specific?";
	}
	return null;
}

//finding the specific keywords in the text typed in
function findKeyword(text) {
	text = text.replace("[?!\\.]","");
	
	for(var key in dialogueTable) {
		if(text.indexOf(key) > -1) {
			return key;}}
	
	return null;
}

//execute when Send button is clicked
document.getElementById('okay').onclick = function(e) {
	var textO = document.getElementById('answer').value
	var text = document.getElementById('answer').value.toLowerCase();
	keyword = findKeyword(text);
	if(keyword) {
		var answer = getAnswer(keyword, text);}
	else {
		var answer = getRandom();}
	
	document.getElementById('chatfield').value = document.getElementById('chatfield').value + '\n' + textO + '\n>>>' + answer;
	document.getElementById('answer').value = ""	
	document.getElementById('chatfield').scrollTop = document.getElementById('chatfield').scrollHeight;
}

function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            document.getElementById('okay').click();
        }
    }



