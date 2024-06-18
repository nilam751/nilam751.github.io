function countTask(){
    const divtaskcount = document.getElementById("divtaskcount");
    divtaskcount.textContent =  document.querySelectorAll(".unchecked").length;
}
countTask();
const todoEls = document.querySelectorAll(".listitem");
todoEls.forEach(function(ele){
    ele.addEventListener("click",function(){
        if(ele.classList.contains("checked")){
           ele.classList.remove("checked");
           ele.classList.add("unchecked");
        }else{
            ele.classList.add("checked");
            ele.classList.remove("unchecked");
        }                
        countTask();
    });
}); 

const btnsave = document.getElementById("btnSave");
const todoList = document.getElementById("divTodolist");
btnsave.addEventListener("click",function(){            
    if( document.getElementById("txtTodo").value == ""){
        alert("Please add todolist..");
    }else{
            let itemEl  = document.createElement("div");
            
            itemEl.setAttribute("class" , "listitem"); 
            itemEl.classList.add("unchecked");
           
            let divText = document.createElement("div");
            divText.textContent = document.getElementById("txtTodo").value;
            itemEl.append(divText);                    
            
            itemEl.addEventListener("click",function(){
                if(itemEl.classList.contains("checked")){
                    itemEl.classList.remove("checked");
                    itemEl.classList.add("unchecked");
                }else{
                    itemEl.classList.add("checked");
                    itemEl.classList.remove("unchecked");
                }                
                countTask();
            });                    
            let delspan = document.createElement("span");
            delspan.setAttribute("class" , "deleteList");
            delspan.innerHTML = '&nbsp';
            delspan.addEventListener("click",function(){ 
                delspan.parentNode.style.transform ='scale(0.8,0.8)';
                delspan.parentNode.style.opacity = 0;  
                setTimeout(function() {  delspan.parentNode.remove() ;}, 500);                           
            });
            itemEl.append(delspan);   
            todoList.append(itemEl);
            itemEl.style.transform ='scale(0.8,0.8)';
            itemEl.style.opacity = 0.5; 
            setTimeout(() => {
                itemEl.style.transform ='scale(1,1)';
                itemEl.style.opacity = 1; 
            }, 50);
            countTask();
            document.getElementById("txtTodo").value = ""
    }
});

const divComlpeteAll = document.getElementById("divComlpeteAll");
divComlpeteAll.addEventListener("click",function(){             
    const todoEls = document.querySelectorAll(".listitem");
    todoEls.forEach(function(ele){      
            if(ele.classList.contains("checked")){ 
                              
            }else{                        
                ele.classList.add("checked");
                ele.classList.remove("unchecked");    
            }
    }); 
    countTask();
});

const deleteitem = document.querySelectorAll(".deleteList");
deleteitem.forEach(function(ele){
    ele.addEventListener("click",function(){              
       ele.parentNode.style.transform ='scale(0.8,0.8)';
       ele.parentNode.style.opacity = 0;  
       setTimeout(function() {  ele.parentNode.remove() ;}, 500);
    });
}); 

const clearCompleted = document.getElementById("clearCompleted");
clearCompleted.addEventListener("click",function(){
    const todoEls = document.querySelectorAll(".checked");
    todoEls.forEach(function(ele){
         ele.remove();
    }); 
});

const uncomplete = document.getElementById("uncomplete");
uncomplete.addEventListener("click",function(){
    const eles = document.querySelectorAll(".listitem");
    eles.forEach(function(ele){
         if(ele.classList.contains("checked")){
            ele.style.display = "none";
         }else{
            ele.style.display = "block";
         }
    });            
});

const completed = document.getElementById("completed");
completed.addEventListener("click",function(){
    const eles = document.querySelectorAll(".listitem");
    eles.forEach(function(ele){
         if(!ele.classList.contains("checked")){
            ele.style.display = "none";
         }else{
            ele.style.display = "block";
         }
    });            
});

const all = document.getElementById("all");
all.addEventListener("click",function(){
    const eles = document.querySelectorAll(".listitem");
    eles.forEach(function(ele){                 
            ele.style.display = "block";                 
    });            
   
});