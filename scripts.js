const popup = function() {
        
    const create = function() {

        let popupAList = document.querySelector('.popup');
        
        if (popupAList) {
            popupAList.querySelector('.popup_case').innerHTML = '';

            return popupAList;
        }

        popupAList = document.createElement('div');
        console.log(popupAList);
        
        const popupCase = document.createElement('div');

        popupAList.classList.add('popup');
        popupCase.classList.add('popup_case');
        popupAList.appendChild(popupCase);
        popupAList.addEventListener('click', remove);

        return popupAList;
    };

    const show = function(event) {
        const popupAList = create();

        const banner = document.querySelector('.presentations1');
        popupAList.querySelector('.popup_case').innerHTML = banner.innerHTML;
        popupAList.classList.add('active');

        document.body.appendChild(popupAList);
    };

    const remove = function() {
        let popupAList = document.querySelector('.popup');
        if (!popupAList) return;
        console.log(popupAList);
        popupAList.remove();
    };

    let div_press = document.querySelectorAll('div:last-child a');
    console.log(div_press);
     
    for (let index = 0; index < div_press.length; index++) {
        let taskListItem = div_press[index];
        console.log(taskListItem);
        taskListItem.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            show(event);
        });
    }

};

popup();

const popup_form = function() {
    
    let button = document.querySelectorAll('.button_write');
    console.log(button);

    

    const create_form = function() {

        let popupAList = document.querySelector('.popup_form');
        
        if (popupAList) {
            popupAList.querySelector('.popup_case_form').innerHTML = '';

            return popupAList;
        }

        popupAList = document.createElement('div');
        console.log(popupAList);
        
        const popupCase = document.createElement('div');

        popupAList.classList.add('popup_form');
        popupCase.classList.add('popup_case_form');
        popupAList.appendChild(popupCase);
        close();
        
        return popupAList;
        
    };

    const show = function(event) {
        const popupAList = create_form();

        const banner = document.querySelector('.form_pop');
        popupAList.querySelector('.popup_case_form').innerHTML = banner.innerHTML;
        popupAList.classList.add('active');

        document.body.appendChild(popupAList);
    };

    const remove = function() {
        let popupForm = document.querySelector('.popup_form');
        console.log(popupForm);
        if (!popupFormt) return;
        popupForm.remove();  
    };

    const close = function() {
    let closeForm = document.querySelector('.close_form');
    console.log(closeForm);
    closeForm.addEventListener('click', remove);
    };
    
    for (let index = 0; index < button.length; index++) {
        let taskListItem = button[index];
        console.log(taskListItem);
        taskListItem.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            show(event);
        });
    }
    

};

popup_form();