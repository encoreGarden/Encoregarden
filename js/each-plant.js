$('.chips').material_chip();
  $('.chips-initial').material_chip({
    data: [{
      tag: 'Jen Horlmes',
    }, {
      tag: 'Tina Armstrong',
    }, {
      tag: 'Gordon Smith',
    }],
  });
  $('.chips-placeholder').material_chip({
    placeholder: 'Enter a tag',
    secondaryPlaceholder: '+Tag',
  });
