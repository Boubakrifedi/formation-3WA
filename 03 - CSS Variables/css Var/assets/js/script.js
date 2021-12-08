/*var inputs;
var suffix;

function handleUpdate() {
  suffix = this.dataset.sizing || ' ';
  $(':root').css('--' + $(this).attr('name'), this.value + suffix);
}

$(document).ready(function() {
  inputs = $('.controls input');
  inputs.change(handleUpdate);
  inputs.mousemove(handleUpdate);
})*/
var inputs; 
inputs = $('input');
const handleChange = (item) => {
  const unite = item[0].dataset.unite;
  $(':root').css(`--${item[0].name}`, `${item[0].value}${unite}`);
}

const applyEvent = (item) => {
  item.change(() => handleChange(item));
  item.mousemove(() => handleChange(item) );
}
  inputs.each((index_unused,item) => {applyEvent($(item));} );
