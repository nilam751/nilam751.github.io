           
            
        var storedNames = JSON.parse(localStorage.getItem("meals")); //Rtriving values stored in localstorage.
       
        
        //get search data from API and display
        async function getMealData(val){
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
            const mealData = await response.json();
            console.log(mealData);
            divList.innerHTML="";
            for(let i=0 ;i<mealData.meals.length ; i ++){                    
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class" , "card");
                newDiv.style.width = "18rem";
                newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${mealData.meals[i].strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${(mealData.meals[i].strMeal.length>20?mealData.meals[i].strMeal.substring(0,20)+"...":mealData.meals[i].strMeal.substring(0,25))} </h5>  
                    <a href="mealdetail.html?id=${mealData.meals[i].idMeal}" class="btn btn-primary">More info...</a><input id="${mealData.meals[i].idMeal}" type="button" class="favorite" onclick="addToFav(this);"/>                                    
                    </div>
                </div>`;                 
                divList.append(newDiv);
            }
       }

       document.getElementById("btnSearch").addEventListener("click",function(){            
        if(document.getElementById("txtSearch").value.length <= 0){
                alert("Please enter search value.");
          } else{
                getMealData(document.getElementById("txtSearch").value);
          }                 
          //document.getElementById("txtSearch").value = "";
       });
        
        const divList = document.getElementById("divList");
        const favoritesEl =  document.querySelectorAll(".favorite");
        favoritesEl.forEach(function(ele){
            ele.addEventListener("click",function(){
                if(ele.classList.contains("favorite")){
                    ele.classList.add("favoriteAdded");
                    ele.classList.remove("favorite");
                }else{
                    ele.classList.add("favorite");
                    ele.classList.remove("favoriteAdded");
                }
            });
        });
        function addToFav(ele){             
            if(ele.classList.contains("favorite")){
                ele.classList.add("favoriteAdded");
                ele.classList.remove("favorite");
                storedNames.push(ele.getAttribute("id"));
            }else{
                ele.classList.add("favorite");
                ele.classList.remove("favoriteAdded"); 
            }
            localStorage.setItem("meals", JSON.stringify(storedNames)); //Storing mealid in localstorage.
        }

       //display search result from API 
    function autoSearch(value) { 
        document.getElementById('datalist').innerHTML = ''; 
        if(value.trim().length==1){ //because API link is just for first character search
            let tags = [];
            let reqval = value.trim()[0];                                    
            const request1 = new XMLHttpRequest();
            request1.open("GET",`https://www.themealdb.com/api/json/v1/1/search.php?f=${reqval}`);
            request1.send();                            
            request1.addEventListener("load",function(){
                const data1 = JSON.parse(this.responseText);
                var keys = Object.keys(data1);                  
                    keys.forEach(function(key){
                            for(let i=0;i<data1[key].length;i++){                                             
                            tags.push(data1[key][i].strMeal);
                            }    
                            l = value.length;
                            let n = tags.length; 
                            for (let i = 0; i < n; i++) { 
                                if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {                               
                                    let node = document.createElement("option");
                                    let val = document.createTextNode(tags[i]);
                                    node.appendChild(val); 
                                    document.getElementById("datalist")
                                        .appendChild(node);
                                }
                            }                  
                    });  
                });
            } 
        }
