const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {
  
  const itemRef = document.createElement("li");
  itemRef.classList.add("item");
  itemRef.textContent = ingredient;
  return itemRef;
})

document.querySelector("#ingredients").append(...ingredientsItems); 