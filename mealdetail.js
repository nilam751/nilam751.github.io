 //find mealid from url and search from API for meal detail
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const id = urlParams.get('id');
 getMealDetail(id);
 async function getMealDetail(id){
     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
     const mealData = await response.json();
     console.log(mealData);
     document.getElementById("mealname").textContent = mealData.meals[0].strMeal;
     document.getElementById("divCategory").textContent = mealData.meals[0].strCategory; 
     document.getElementById("divInstructions").textContent = mealData.meals[0].strInstructions;
     document.getElementById("imgFood").setAttribute("src", mealData.meals[0].strMealThumb) ;
 }