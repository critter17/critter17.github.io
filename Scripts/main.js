// Gather all rating items into a list
var starContainers = document.querySelectorAll(".review_list_item");

for (let starContIdx = 0; starContIdx < starContainers.length; starContIdx++)
{
	// Event
	// mouseenter: Mouse enters a rating item
	starContainers[starContIdx].addEventListener("mouseenter", function() {
		// Gather stars and current game score
		var stars = starContainers[starContIdx].querySelectorAll(".star");
		var currentScore = starContainers[starContIdx].querySelector(".game_score");
		
		for(let starsIdx = 0; starsIdx < stars.length; starsIdx++)
		{
			// Events
			// mouseenter: Mouse enters star image
			// mouseleave: Mouse leaves star image
			// click: User clicks on star
			stars[starsIdx].addEventListener("mouseenter", function() { highlightStars(stars, starsIdx) });
			stars[starsIdx].addEventListener("mouseleave", function() { unhighlightStars(stars, parseInt(currentScore.innerHTML)) });
			stars[starsIdx].addEventListener("click", function() { setRating(currentScore, starsIdx) });
		}
	});
}

/**
 * Clears stars 
 * @param {Object} stars - List of rating star images
*/
function clearStars(stars) {
	for (let idx = 0; idx < stars.length; idx++)
	{
		stars[idx].src = "Images/star_unfill.png";
	}
}

/**
 * Highlights rating star images up to focused star
 * @param {Object} stars - List of rating star images
 * @param {number} starsIdx - Index of currently focused star
*/
function highlightStars(stars, starsIdx) {
	clearStars(stars);
	for (let idx = 0; idx <= starsIdx; idx++)
	{
		stars[idx].src = "Images/star_fill.png";
	}
}

/**
 * Unhighlights stars and then highlights the number of stars equal to current game score
 * @param {HTMLCollection} stars - List of rating star images
 * @param {number} score - Current game score
*/
function unhighlightStars(stars, score) {
	clearStars(stars);
	for (let idx = 0; idx < score; idx++)
	{
		stars[idx].src = "Images/star_fill.png";
	}
}

/**
 * Sets the current game score to the current star number
 * @param {HTMLCollection} stars - List of rating star images
 * @param {number} starsIdx - Index of currently focused star
*/
function setRating(currentScore, starsIdx) {
	currentScore.innerHTML = starsIdx + 1;
}