const cartButtons = document.getElementsByClassName('add_to');

for (let i = 0; i < cartButtons.length; i++) {
  cartButtons[i].addEventListener('click', function(e) {
    e.preventDefault(); // ✅ 
    alert('Item added to cart!');
  });
}

document.querySelectorAll('.form input, .price input').forEach(input => {
  input.addEventListener('change', () => {
    console.log(`Filter changed: ${input.name} = ${input.checked}`);
  });
});
document.querySelector('.sort_by').addEventListener('click', () => {
  console.log('Sorting by price...');
})
