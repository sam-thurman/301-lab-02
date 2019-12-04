const creaturesArray = []
const keywordArray = []

function Creature(creatureObj) {
  this.image_url = creatureObj.image_url;
  this.title = creatureObj.title;
  this.description = creatureObj.description;
  this.keyword = creatureObj.keyword;
  this.horns = creatureObj.horns;

  creaturesArray.push(this);
  keywordArray.push(this.keyword);
}

Creature.prototype.render = function () {

  const myTemplate = $('#photo-template').html();
  const $newSection = $('<section></section>');
  $newSection.html(myTemplate);

  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);
  $newSection.find('img').attr('data-keyword', this.keyword);
  $newSection.find('p').text(this.description);

  $('main').append($newSection);

  const dropDownMenu = $('#drop-down-option').html();
  const $newOption = $('<option></option>');
  $newOption.html(dropDownMenu);

  // $newOption.find('option').attr('value', this.keyword)
  // $newOption.find('option').text(this.keyword)
  // $newOption.append($)

};


$.get('page-1.json', data => {
  data.forEach(creature => {
    new Creature(creature).render();

    $('#drop-down-menu').append($('<option></option>').attr('value', creature.keyword).text(creature.keyword).attr('id', creature.keyword))

  })
})


$('option').on('click', function () {
  event.preventDefault();
  $('img').hide();
  console.log('clicked')
})
