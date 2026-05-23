const recipes = [
    {
        name: "Creamy Tomato Pasta",
        cuisine: "Italian",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
        //mam this or this
        instructions: [
            "Boil pasta al dente.",
            "Simmer heavy cream, garlic, and tomato paste together.",
            "Toss and garnish with fresh basil."
        ]
    }
];

const recipeGrid = document.getElementById('recipeGrid');

recipes.forEach(recipe => {
    recipeGrid.innerHTML += `
                <div class="card">
                    <img src="${recipe.img}" alt="${recipe.name}">
                    <div class="card-content">
                        <h3>${recipe.name}</h3>
                        <small>${recipe.cuisine}</small>
                        
                        <!-- The hidden instructions -->
                        <div class="recipe-details" style="display: none;">
                            <strong>How to Cook:</strong>
                            <p>${recipe.instructions.join('<br>')}</p>
                        </div>

                        <!-- The arrow button that calls our function -->
                        <button class="arrow-btn" onclick="toggleRecipe(this)">▼</button>
                    </div>
                </div>
            `;
});


function toggleRecipe(clickedButton) {
    const cardBody = clickedButton.parentElement;
    const hiddenBox = cardBody.querySelector('.recipe-details');

    if (hiddenBox.style.display === "none") {
        hiddenBox.style.display = "block";
        clickedButton.innerHTML = "▲";
    } else {
        hiddenBox.style.display = "none";
        clickedButton.innerHTML = "▼";
    }

}
