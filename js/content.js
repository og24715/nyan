var tweet_btn = document.getElementsByClassName('tweet-btn js-tweet-btn')[0];
var tweet_box = document.getElementById('tweet-box-home-timeline');

var converseText = () => {
	var tweet_box = document.getElementById('tweet-box-home-timeline');
	tweet_box.innerHTML = "にゃーん";
	console.log(tweet_box);
}
var willSubmit = (e) => {
	var cmd = event.getModifierState("Meta");
	var ctrl = event.getModifierState("Control");

	if ( e.keyCode === 13 && (cmd || ctrl) ) {
		converseText();
	}
}

tweet_box.addEventListener( "keydown", willSubmit );
tweet_btn.addEventListener( "click", converseText, true);