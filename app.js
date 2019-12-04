const creaturesArray = []

function Creature(creatureObj) {
  this.img_url = creatureObj.img_url;
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

  $newSection.fnd('h2').text(this.title);
  $newSection.find('img').attr('src', this.img_url);
  $newSection.find('img').attr('alt', this.title);
  $newSection.find('img').attr('data-horns', this.horns);
  $newSection.find('p').text(this.description);

  $('main').append($newSection);
};

$.get('page-1.json', data => {
  data.forEach(creature => {
    new Creature(creature).render();
  })
})
