/*
Напиши скрипт, который для каждого элемента массива ingredients:

1. Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс item.
4. После чего вставит все <li> за одну операцию в список ul.ingredients.
*/

const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const mainList = document.querySelector("#ingredients");

const ingredient = ingredients.map((ingr) => {
  // console.log(ingr);

  const items = document.createElement("li");
  // console.log(items);

  items.textContent = ingr;
  items.classList.add("item");

  return items;
});

mainList.append(...ingredient);
console.log(mainList);
