'use strict'

const creaturesArray = []
const keywordArray = []
const hornsArray = [];

function Creature(creatureObj) {
  this.image_url = creatureObj.image_url;
  this.title = creatureObj.title;
  this.description = creatureObj.description;
  this.keyword = creatureObj.keyword;
  this.horns = creatureObj.horns;

  creaturesArray.push(this);
  // keywordArray.push(this.keyword);
}

Creature.prototype.render = function () {




  var source = $('#photo-template-handlebars').html();
  var template = Handlebars.compile(source);
  console.log($('#creatures'))
  $('#creatures').append(template(this))


  // $newSection.find('h2').text(this.title);
  // $newSection.find('img').attr('src', this.image_url);
  // $newSection.find('img').attr('alt', this.title);
  // $newSection.find('img').attr('data-keyword', this.keyword);
  // $newSection.find('img').attr('data-horns', this.horns);
  // $newSection.find('img').attr('class', this.keyword)
  // $newSection.find('p').text(this.description);

  // $('main').append($newSection);

  // const dropDownMenu = $('#drop-down-option').html();
  // const $newOption = $('<option></option>');
  // $newOption.html(dropDownMenu);

  // const dropDownMenuHorns = $('#drop-down-option-horns').html();
  // const $newOptionHorns = $('<option></option>');
  // $newOptionHorns.html(dropDownMenuHorns);

  // // $newOption.find('option').attr('value', this.keyword)
  // // $newOption.find('option').text(this.keyword)
  // // $newOption.append($)

};

// creaturesArray.forEach(creature => {
//   $('#creatures').append(new Creature(creature).render());
// })


$.get('page-1.json', data => {
  data.forEach(creature => {
    new Creature(creature).render();
    if (!keywordArray.includes(creature.keyword)) {
      keywordArray.push(creature.keyword)
      $('#drop-down-menu').append($('<option></option>').attr('value', creature.keyword).text(creature.keyword).attr('class', creature.keyword))
    }
    if (!hornsArray.includes(creature.horns)) {
      hornsArray.push(creature.horns)
      $('#drop-down-horns').append($('<option></option>').attr('value', creature.horns).text(creature.horns).attr('class', creature.keyword).attr('data-horns', creature.horns))
    }
  })
})

$('#page-2').click(function () {
  $('section').html('');
  $('#drop-down-menu').html('');
  $('#drop-down-menu').append($('<option></option>').text(' keyword '))
  $.get('page-2.json', data => {
    data.forEach(creature => {
      new Creature(creature).render();
      if (!keywordArray.includes(creature.keyword)) {
        keywordArray.push(creature.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', creature.keyword).text(creature.keyword).attr('class', creature.keyword))
      }
      if (!hornsArray.includes(creature.horns)) {
        hornsArray.push(creature.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', creature.horns).text(creature.horns).attr('class', creature.keyword).attr('data-horns', creature.horns))
      }
    })
  })
})

$('#page-1').click(function () {
  $('section').html('')
  $('#drop-down-menu').html('')
  $('#drop-down-menu').append($('<option></option>').text(' keyword '))
  let keywordArray = [];
  let hornsArray = [];
  $.get('page-1.json', data => {
    data.forEach(creature => {
      new Creature(creature).render();
      if (!keywordArray.includes(creature.keyword)) {
        keywordArray.push(creature.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', creature.keyword).text(creature.keyword).attr('class', creature.keyword))
      }
      if (!hornsArray.includes(creature.horns)) {
        hornsArray.push(creature.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', creature.horns).text(creature.horns).attr('class', creature.keyword).attr('data-horns', creature.horns))
      }
    })
  })
})
$('#drop-down-option').click(function () {
  $('section').html('')
  $.get('page-1.json', data => {
    data.forEach(creature => {
      new Creature(creature).render();
      if (!keywordArray.includes(creature.keyword)) {
        keywordArray.push(creature.keyword)
        $('#drop-down-menu').append($('<option></option>').attr('value', creature.keyword).text(creature.keyword).attr('class', creature.keyword))
      }
      if (!hornsArray.includes(creature.horns)) {
        hornsArray.push(creature.horns)
        $('#drop-down-horns').append($('<option></option>').attr('value', creature.horns).text(creature.horns).attr('class', creature.keyword).attr('data-horns', creature.horns))
      }
    })
  })
})


$('#drop-down-menu').on('change', function () {

  let currentSelection = $('#drop-down-menu').find(':selected').text()
  event.preventDefault();

  $('h2').hide();
  $('img').hide();
  $('p').hide();
  console.log('clicked');
  $(`.${currentSelection}`).show();

  console.log(currentSelection)
})

$('#drop-down-horns').on('change', function () {

  let currentSelection = $('#drop-down-horns').find(':selected').text()
  event.preventDefault();

  $('h2').hide();
  $('img').hide();
  $('p').hide();
  console.log('clicked');
  $(`img[data-horns=${currentSelection}]`).show();

  console.log(currentSelection)
})
