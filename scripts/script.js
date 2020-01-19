var toggle = 0;

function menu_toggle(){

        var menulist = document.querySelector('.menulist');
        menulist.classList.toggle("menu-button-click");
        var content = document.querySelector('.content');
        content.classList.toggle("menuc-button-click");
        toggle = true;
};