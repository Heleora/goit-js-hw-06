
// const itemsByParentRef = document.querySelector("#categories").children;
// console.log(` Number of categories: ${itemsByParentRef.length}`)    

const liItemsRef = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${liItemsRef.length}`);

liItemsRef.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
    });
