
jQuery(document).ready(function ($) {
    const $header = $(".header");
    const $body = $("body");
    const $navOnClick = $(".header__nav_on-click");
    const $arrowUp = $(".arrow-up");
    const $headerLinks = $(".header__nav_on-click a")
    //const $burger = $(".burger");
    //$burger.on("click", function () {
    //  $navOnClick.fadeToggle();
    //})
    $header.on("click", ".burger", function (e) {
        $navOnClick.fadeToggle();
    });
   
    $(window).on(
        "scroll",
        $.debounce(100, function () {
            if ($(this).scrollTop() > 200) {
                $header.addClass("sticky");
                $body.addClass("body__sticky");
                $arrowUp.addClass("active");           
            } else {
                $header.removeClass("sticky"); 
                $arrowUp.removeClass("active");  
                $body.removeClass("body__sticky");       
            }  
        })
    );

    $arrowUp.on("click", function () {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    $headerLinks.on("click", function (e) {
       // e.preventDefault();
        const target = $(this).attr("href");
        console.log($(target).offset().top);
        $("html, body").animate({scrollTop: $(target).offset().top - 120 }, 500);
    });
    /*
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // получаем массив полей формы и конвертируем в массив
        let arrayData = Array.from(event.target.elements);
        let newComent = {};
        arrayData.map((el) => {
          if (el.name) {
            // если есть поле name, то соединяем новые данные с объектом newUser
            return Object.assign(newComent, { [el.name]: el.value });
          }
        });
      
        // Создаем нового юзера
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify(newComent),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((coment) => {
            // Создаем блок для нового юзера
            const newComentForm = document.createElement("div");
            newComentForm.classList.add("coment");
      
            const usersBlock = document.querySelector(".users");
      
            newComentForm.innerHTML = `
            <h2>${user.name}</h2>
          <p>${user.coment}</p>
            `;
            usersBlock.append(newComentForm);
      
            arrayData.map((el) => {
              if (el.name) {
                el.value = "";
              }
            });
          });
      });
      */
      



});


