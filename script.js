'use strict';

// 1. // Создайте объект city1 (let city1 = {}), укажите у него свойства name 
// // (название города, строка) со значением «ГородN» и population 
// // (населенность города, число) со значением 10 млн.

// // let city1 = {}
// // city1.name = 'ГородN';
// // city1.population = 1e6;

// 2. // Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.

// // let city2 = {
// //     name: "ГородM",
// //     population: 1e6
// // };

// 3. // Создайте у объектов city1 и city2 методы getName(), которые вернут 
// // соответствующие названия городов.
       
// function getName{
//     return this.name
// }
// city1.getName = getName
// city2.getName = getName

// 4. // Создайте методы exportStr() у каждого из объектов. Этот метод должен 
// // возвращать информацию о городе в формате 
// // «name=ГородN\npopulation=10000000\n». Для второго города будет строка 
// // со своими значениями. Примечание: можно обращаться к каждому свойству 
// // через цикл for/in, но методы объекта возвращать не нужно.

// function exportStr(){
//     return `name=${this.name}\npopulation=${this.population}\n`;
// }
// city1.exportStr = exportStr;
// city2.exportStr = exportStr;

// 5. // Создайте глобальную функцию getObj(), которая возвращает this. 
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

// function getObj(){
//     return this;
// }
// function getCity(){
//     return getObj.apply(this).getName()
// }
// city1.getCity = getCity
// city2.getCity = getCity

// 6. //Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.

// let d1 = [45, 78, 10, 3];
// d1[7] = 100;
// console.log(d1);
// console.log(d1[6], d1[7]);

// 7. //Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.

// let d2 = [45, 78, 10, 3];
// let sum2 = 0;
// for (let i = 0; i < d2.length; i++){
//     sum2 += d2[i];
// }
// console.log(sum2);

//8. // Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.

// let d3 = [45, 78, 10, 3];
// d3[7] = 100;
// let sum3 = 0;
// for (key in d3){
//     sum3 += d3[key]
// }
// console.log(sum3);