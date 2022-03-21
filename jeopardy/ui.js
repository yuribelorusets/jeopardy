"use strict";

const BASE_API_URL = "http://jservice.io/api/";

const $table = $("table");
const $loader = $(".fa-spinner");
const $start = $("#start");

// Value of game will become the Game instance populated below 
let game;



/** Fill the HTML table #jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/ game.numCluesPerCat <tr>s,
 *   each with a question for each category in a <td>
 *   (initially, just show a "?" where the question/answer would go.)
 */
function fillTable() {

  const $tableHead = $("<thead class='th'></thead>");
  const $tableBody = $("<tbody class='tb'></tbody>");
  $table.append($tableHead);
  $table.append($tableBody);

  const $categories = $("<tr></tr>");

  for (let i = 0; i < game.numCategories; i++) {

    let $category = $("<th></th>");

    $category.text(`${game.categories[i].title}`);

    $categories.append($category);
  }

  $tableHead.append($categories);

  for (let i = 0; i < game.numCluesPerCat; i++) {

    let $currentRow = $("<tr></tr>");

    for (let j = 0; j < game.numCategories; j++) {

      let $clue = $("<td><i class='fas fa-question-circle'></i></td>");

      $clue.attr("categoryIndex", j);
      $clue.attr("clueIndex", i);
      $currentRow.append($clue);

    }

    $tableBody.append($currentRow);
  }
}


/** Handle clicking on a clue: show the question or answer, update clue status.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question
 * - if currently "question", show answer
 * - if currently "answer", ignore click
 * 
 * */
function handleClick(evt) {

  const $clue = $(evt.target);


  if ($clue.hasClass("fas")) {

    const $parent = $($clue.parent());
    const categoryIndex = $parent.attr("categoryIndex");
    const clueIndex = $parent.attr("clueIndex");

    const clue = game.categories[categoryIndex].clues[clueIndex];

    $clue.hide();
    $parent.text(`${clue.question}`);
    clue.updateShowingStatus();
    return;
  }

  if ($clue.is("td")) {
    const $clue = $(evt.target);
    const categoryIndex = $clue.attr("categoryIndex");
    const clueIndex = $clue.attr("clueIndex");

    const clue = game.categories[categoryIndex].clues[clueIndex];

    $clue.text(`${clue.answer}`);
    $clue.css("background-color", "green");
    clue.updateShowingStatus();
    return;
  }

}


/**
 * Shows loading spinner, hides start button and game board
 */
function showLoadingState() {
  $loader.css("display", "inline-block");
  $table.hide();
  $start.hide();
}

/**
 * Shows game board, updates start button text and hides loading spinner
 */
function hideLoadingState() {
  $table.show();
  $loader.css("display", "none");
  $start.text("Restart");
  $start.show();
}


// DO NOT CHANGE ANY CODE BELOW THIS LINE

/**
 * Generates new game instance and populates game board in DOM
 */
async function startGame() {
  if (game) {
    $table.empty();
  }

  showLoadingState();

  game = new Game(6, 5);
  await game.populateCategoryData();

  fillTable();
  hideLoadingState();
}

$("#start").on("click", startGame);
$("#jeopardy").on("click", "td", handleClick);