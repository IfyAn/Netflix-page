const tabItems=document.querySelectorAll('.tab-item');
var tabContentItems=document.querySelectorAll('.tab-content-item');

//Select tab Content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab Content From DOM
    var tabContentItem=document.querySelector(`#${this.id}-content`);
    //Add Show Class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}

//Listen For a tab Click
tabItems.forEach(item=>item.addEventListener('click', selectItem));