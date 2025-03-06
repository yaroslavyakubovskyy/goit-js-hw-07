const categoriesList = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(catagory => {
  const catagoryTitle = catagory.querySelector('h2').textContent;
  const catagoryItems = catagory.querySelectorAll('ul li').length;
  console.log(`Category: ${catagoryTitle}`);
  console.log(`Elements: ${catagoryItems}`);
});
