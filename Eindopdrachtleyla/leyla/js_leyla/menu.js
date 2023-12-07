

const menuBtns = document.querySelectorAll('.menu-btns');
const foodItems = document.querySelectorAll('.food-item');

let activeBtn = "courses";

showFoodMenu(activeBtn);

menuBtns.forEach((btn) =>{
     btn.addEventListener('click', () => {
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
     });

});

function resetActiveBtn(){
    menuBtns.forEach((btn) => {
        btn.classList.remove('active-btn');
    });

}

function showFoodMenu(newMenuBtn) {
    activeBtn = newMenuBtn;
    foodItems.forEach((item) => {
     if(item.classList.contains(activeBtn)){
        item.computedStyleMap.display = "grid";
     }else {
        item.computedStyleMap.display ="none";
     }
    });
}