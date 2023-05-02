//1.
//   function getArray(number1, number2){
//   const numbers = []
//       if(number1 > number2){
//         for(let i = number1; i >= number2; i--){
//           numbers.push(i)} 
//       } else{
//           for(let i = number2; i >= number1; i--){
//             numbers.push(i)}     
//       } 
//       for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 == 0){
//         console.log(numbers[i])
//       }    
//   }
// }
//   getArray(15, 10)

//2.
// function power(num1, num2 = 2){
//     console.log(num1 ** num2)
// }
// power(5)

//3.
// function sumNumbers(n){
// let sum = 0
// for(let i = 0; i <= n; i++){
//     sum += i
// } return sum
// }
// console.log( sumNumbers(5))

//4.
//    function sumNumbers(n, m) {
//       let sumEven = 0;
//       let sumOdd = 0;
      
//       for(let i = n; i <= m; i++){
//         if(i % 2 == 0){
//         sumEven += i
//     } else {
//         sumOdd += i}
//         }
//        for(let i = m; i <= n; i++){
//         if(i % 2 == 0){
//         sumEven += i
//     } else{
//         sumOdd += i
//    }
//    }
// console.log(sumEven)
// console.log(sumOdd)
// }
//    console.log(sumNumbers(15, 10))

//5.

// function wordLength(word){
//     if(word.length == 0){
//         console.log(null)
//     } 
//     let longest = word[0]
//     for(let i = 1; i < word.length; i++){
//         if(word[i].length > longest.length){
//         longest = word[i]}
//     }
//     console.log(longest)
// }
// wordLength(['one', 'two', 'three','four','seventy'])

const time = +prompt("wie viele stunden?")
