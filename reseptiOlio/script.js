let recipes = [
{
    name: "Tunapasta",
    cookingTime: 30, 
    ingredients : [
        'tuna',
        ' pasta'
    ]
},
{
    name: "Carbonara",
    cookingTime: 20,
    ingredients: ['bacon', ' pasta']
},
{
    name: "Bolognese",
    cookingTime: 10,
    ingredients: ['tomato', ' pasta']
},

];
let element = document.getElementById("printHere");

let html = "<table><t><th>Name</th><th>Cooking Time</th><th>Ingredients</th>";
recipes.forEach(recipe => {
    html += "<tr>"
    html += "<td>" + recipe.name + "</td>"
    html += "<td>" + recipe.cookingTime + "</td>"
    html += "<td>" + recipe.ingredients + "</td>"
    html += "</tr>"
});
element.innerHTML = "</table>";
element.innerHTML = html;
