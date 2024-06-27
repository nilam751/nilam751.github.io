 //getting mealid saved in localstorage and displaying.
 var storedNames = JSON.parse(localStorage.getItem("meals"));
 for(let j =0  ; j<storedNames.length ; j++){
    getMealDetail(storedNames[j]);            
 }
const divList = document.getElementById("divList");       
async function getMealDetail(id){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const mealData = await response.json();
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class" , "card");
    newDiv.style.width = "18rem";
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${mealData.meals[0].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${(mealData.meals[0].strMeal.length>20?mealData.meals[0].strMeal.substring(0,20)+"...":mealData.meals[0].strMeal.substring(0,25))} </h5>  
        <a href="mealdetail.html?id=${mealData.meals[0].idMeal}" class="btn btn-primary">More info...</a><input id="${mealData.meals[0].idMeal}" type="button" class="favoriteAdded" onclick="addToFav(this);"/>                                    
        </div>
    </div>`;                 
    divList.append(newDiv);           
}
function addToFav(ele){   
       var index = storedNames.indexOf(ele.getAttribute("id")); 
       if(index !== -1){
         storedNames.splice(index,1);
       } 
        ele.closest(".card").remove();
        localStorage.setItem("meals", JSON.stringify(storedNames));
   }