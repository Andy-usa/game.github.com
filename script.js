// ball - шарик на игровом поле
var ball = document.querySelector("#ball");
// stars - очки на игоровом поле
var stars = document.querySelector("#stars");
// lifes - жизни на игоровом поле
var lifes = document.querySelector("#lifes");

var colorBall = "yellow";
var i = 0; //счет игры
ball.onclick = function() { //выполняем функцию     
	       i = i + 1;  //Увелииваем счет игры
	       stars.innerText = i; //выводим количество счета игры с заменой счета
	       ball.style.top = ball.offsetTop + 10 + "px"; //Меняем отступ шарика от верхней границі на 10 пикселей при каждом клике на него
	      // ball.style.width = ball.clientWidth + 10 + "px";
	     if(colorBall == "yellow") { //если colorball равен yellow - выводим желтый цвет
	     	 ball.style.background = "#F7FE2E";//Обращаемся к стилям мячика через переменную ball
	       colorBall = "blue"; //если colorball синий
	     } else { // иначе  выводим синий цвет 
	       ball.style.background = "#0000FF";//Обращаемся к стилям мячика через переменную ball
	     	 colorBall = "yellow";
	     }
	     if(i == 5) { //Условие если переменная мячика при 15 клике больше
	     	finish(); // Условием вызываем функию finish - конец игры
	     	stars.innerText = i; // выводит в логи после окончания игры кол-во кликов по мячику
    		console.log(i);
	     }
	    }
//var end = finish;    
function finish() { //Конец игры
	     startKnopka.onclick = false; // Блокируем клик по переменной startKnopka которое вызывает блок начать
	     startBlock.style.display = "block"; //Возращаем превоначальный вид блока
	     startKnopka.innerText = "Конец игры"; // Меняем текст кнопке с Начнать на... после окончания условия
    		ball.style.display = "none";  //выключаем стиль для блока
    		ball.style.background = "#fff"; // возращаем шарику цвет стиля статовый первоначальный
    		lifes.style.display = "none"; //выключаем стиль для блока
    		stars.style.display = "none"; //выключаем стиль для блока
    		startKnopka = 0;//stars.innerText = i = 0; //счетчик текста = 0 сброс счетчика
    		ball.style.top = ball.offsetTop = 175 + "px"; // сбрасываем шарин на страртовое место
      setTimeout( function () { //вызвали функцию для обнуления счетчика подсчета кликов переменно i 
  stars.innerText = i = 0; //счетчик текста = 0 сброс счетчика 
  timer.innerText = 0;// при окончании игры обнуляет счетчик id timmer
  var chasy = setInterval(function() { //берем с function startIgra функцию setInterval
    		var timerBlock = document.querySelector("#timer"); // обращаемся внутри функции к блоку timer
    		timerBlock.innerText = 0; // задаем значение 0 переменной и его свойству timerBlock.innerText
    		if(timerBlock.innerText == -1) { // если по условию timerBlock.innerText == -1 тогда 
    			clearInterval(chasy); // тогда остановить таймер chasy на отметке 0
  		} 
    	}, 0); //0 секунд таймейр
}, 0 );	//0 секунд таймейр
      setTimeout( function rest() {
      	//startIgra();
      	var restclick = document.querySelector("#start-knopka");
      	restclick.innerText = "Попробуй Еще";
      	restclick.onclick = startIgra;
      	chasy = setInterval => nes;

      	console.log(restclick); 
      	
      }, 1000);
    	}

vpravo.onclick = function() { // Обращаемся к кнопке Вправо
	      ball.style.left = ball.offsetLeft + 10 + "px"; // При клике меняем положение в правую сторону на 10 пикселей
	      ball.style.width = ball.clientWidth - 10 + "px";
	      ball.style.height = ball.clientHeight - 10 + "px";

}


var startBlock = document.querySelector("#start-block"); //создаем переменную для обращения к id блока старта
var startKnopka = document.querySelector("#start-knopka"); //создаем переменную для обращения к id кнопки старта

    //function pizza() {
    //	console.log("dfif пицца");
   // }
    
    function startIgra() { //создаем имя функции для изменения стилей на стороне клиента старта игры
    	
    	setTimeout(function() { // Функция установить тайм-аут для функции vicluchit выполняется через время
        	vicluchit(); // Делаем задержку с помощью функции по умолчанию стиль элемента none 
        }, 1000) // 1 секунда 
 

    	 var chasy = setInterval(function nes() { //присваимаем всей пременной chasy действие отсчета через 1 сек
    		var timerBlock = document.querySelector("#timer"); // Присваиваем переменную id timer с html
    		timerBlock.innerText = timerBlock.innerText - 1; // timerBlock.innerText - равен данным id timer отображаемых данных в блоке действие вычитание -1
    		if(timerBlock.innerText == 0) { // если по условию timerBlock.innerText == 0 тогда 
    			clearInterval(chasy); // тогда остановить таймер chasy на отметке 0
    			finish();  //вызвать функциюзавершения игры финиш 
    			stars.innerText = i; // выводит в логи после окончания игры кол-во кликов по мячику
    		console.log(i);
    		} 
    	}, 1000); //1секунда


     //ball.style.display = "block"; //меняем стили на block элемент игры
    	lifes.style.display = "block";//меняем стили на block элемент игры тем самым мы включаем блоки стилей элемета жизни
    	stars.style.display = "block";//меняем стили на block элемент игры тем самым мы включаем блоки стилей элемета звезда
    	startBlock.style.display = "none"; //Убираем первоначальный блок Начать свойством none 
    	  
    }

    //startIgra() //вызываем имя функции 1 способ для вызова
    startKnopka.onclick = startIgra;//Кнопку вешаем на событие onclick = функции //2 способ передаем события запускаем всю написанию функцию startIgra, если указать startIgra() то функция сработает сразу без нажатия
       function vicluchit() {  // Создаем функцию включить для setTimout задержки мячика
       	ball.style.display = "block"; // задаем шарику стиль блока при включении функции vicluchit - задержка навключение блока
       }

//console.dir(startKnopka);

