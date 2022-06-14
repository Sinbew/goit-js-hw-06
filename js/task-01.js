const list = document.querySelector("#categories");

console.log(`Number of categories:`, list.children.length);

const item = [...list.children];

const result = item.forEach((elem) => {
  console.log("Category:", elem.children[0].textContent);
  console.log("Elements:", elem.children[1].children.length);
});
