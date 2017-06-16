let configText=require('../config.json')
module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = configText.greetText;
	return greet;
}
