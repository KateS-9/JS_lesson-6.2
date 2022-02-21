console.log("Javascript - лучший язык программирования!");

window.addEventListener("DOMContentLoaded", function() {
    // Когда страница загрузится
    setTimeout(() => {
        
        // 1. Замена приветствия с "Привет Всем!" на "Привет Виталий Валентинович!".
        document.querySelector("#greeting").innerHTML = "Привет Виталий Валентинович!";

        // 2. Установка фонового цвета (yellow) для каждого <li>.
        document.querySelector("#essentials").style.backgroundColor = "yellow";

        // 3. Создание тега изображения, установка его атрибута src http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, и вложение в div с идентификатором #greeting.
        let newImg = document.createElement("img");
        newImg.setAttribute("src", "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif");
        document.querySelector("#greeting").appendChild(newImg); 

        // 4. Создание и добавление ul элемента в конец body с классом "todo-items"
        let newUl = document.createElement("ul");
        newUl.classList.add("todo-items");
        document.body.append(newUl);

        // 5. Создание и прохождение по массиву ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'] и создание тега li для каждого элемента, например: <li>приготовить кофе</li>.
        // 6. Добавление каждого созданного ранее тега li в конструкцию ul с классом "todo-items".
        let mas = ['приготовить кофе','съесть салатик','поменять подгузник ребёнку','поехать на работу'];
        for (let i = 0; i < mas.length; i++) {
            let newLi = document.createElement("li");
            newLi.textContent = mas[i];
            document.querySelector(".todo-items").appendChild(newLi);
        }

        // 7. Добавление класса selected к <li> при щелчке по нём. Удаление его из любых других li.
        // 8. Изменение изображения, чтобы оно было последним выбранным продуктом питания.
        const selLi = document.querySelector("#essentials")
        selLi.addEventListener('click', function(el)
        {
            const selected = document.querySelectorAll(".selected")
            const mark = el.target
            Array.from(selected).forEach(selected =>
                {
                    selected.classList.remove('selected')
                });

                mark.classList.add('selected')
            let drinksSelect =
            {
                "молоко": "images/milk.jpg",
                "мёд": "images/honey.jpg",
                "вода": "images/water.jpg",
                "вино": "images/wine.jpg",
                "пиво": "images/beer.jpg",
            }

            let text = mark.innerText;
            let drinks = document.querySelector('#drinks');
            drinks.setAttribute('src', drinksSelect[text]);
        });

        const selLi2 = document.querySelector('.todo-items')
        selLi2.addEventListener('click', function(el)
        {
	        const selected2 = document.querySelectorAll('.selected')
	        const mark2 = el.target
            Array.from(selected2).forEach(selected2 =>
            {
                selected2.classList.remove('selected')
            });
            mark2.classList.add('selected')
        });

        // 9. Когда на серый div наводится указатель мыши, он удаляется из DOM.
        let ghosting = document.querySelector("#ghosting");
        ghosting.addEventListener("mouseover", disap, false);
        function disap() {
            document.querySelector("body").removeChild(ghosting);
        }

        // 10. Когда на оранжевый div наводится указатель мыши, его ширина удваивается. Когда уходим за пределы div, ширина возвращается к своему первоначальному размеру.
        let doublWidth = document.querySelector("#resize");
        doublWidth.addEventListener("mouseover",() => {doublWidth.style.width = "400px"}, false);
        doublWidth.addEventListener("mouseout",() => {doublWidth.style.width = "200px"}, false);

        // 11. Когда кнопка Reset нажата - удаляется класс selected из каждого <li> и изменяется изображение на panic.jpg.
        let res = document.querySelector("#reset")
        res.addEventListener("click", clickRes, false);
        function clickRes () {
            let select = document.querySelectorAll(".selected");
            select.forEach(sel => sel.classList.remove("selected"))
            let panic = document.querySelector("#drinks");
            panic.setAttribute("src", 'images/panic.jpg');
        }

        // 12. При нажатии клавиши 1, 2, 3, 4, 5, 6, 7, 8, 9 или 0 на странице появляется сообщение «Я НЕНАВИЖУ ЧИСЛААААА!»
        window.addEventListener("keydown", keydown, false);
        function keydown(el) {
            if ((el.keyCode >= 48 && el.keyCode <= 57) || (el.keyCode >= 96 && el.keyCode <= 105)) {
                alert("Я НЕНАВИЖУ ЧИСЛААААА!");    
            }  
        }
    }, 2500);
});