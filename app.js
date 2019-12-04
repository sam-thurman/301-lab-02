const creaturesArray = []

function Creature(creatureObj) {
  this.image_url = creatureObj.image_url;
  this.title = creatureObj.title;
  this.description = creatureObj.description;
  this.keyword = creatureObj.keyword;
  this.horns = creatureObj.horns;

  creaturesArray.push(this);
}

Creature.prototype.render = function () {

  const myTemplate = $('#photo-template').html();
  const $newSection = $('<section></section>');
  $newSection.html(myTemplate);

  $newSection.find('h2').text(this.title);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);
  $newSection.find('p').text(this.description);

  $('main').append($newSection);
};

$.get('page-1.json', data => {
  data.forEach(creature => {
    new Creature(creature).render();
  })
})
