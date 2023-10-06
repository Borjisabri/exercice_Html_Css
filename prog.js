// const sabri = "sabri borji"
// for(i in sabri){
//     console.log(`${sabri[i]}`)
// }

// const isRight = (a, guess) => {
//   if (a >= 0 && a <= 10) {
//     guess();
//   }
// };
// const guess = () => console.log("bien choisie");

// isRight(4, guess);
// const students = [
//     {
//       name: "John",
//       notes: [1, 20, 18, 19, 12],
//     },
//     {
//       name: "Jane",
//       notes: [17, 18, 20, 13, 15],
//     },
//     {
//       name: "Sophie",
//       notes: [17, 12, 14, 15, 13],
//     },
//     {
//       name: "Marc",
//       notes: [2, 3, 5, 8, 9],
//     },
//     {
//       name: "Manon",
//       notes: [18, 17, 18, 19, 12],
//     },
//   ];

//   students.forEach((student) => {
//     const moyen =
//       student.notes.reduce((num, s) => num + s, 0) / student.notes.length;
//     console.log(student.name, " : ", moyen);
//     student.moyen = moyen;
//   });

//   students.sort((a, b) => a.moyen - b.moyen); // Sort by descending average (highest to lowest)

//   console.table(students);

// console.log(Date.now());
// let j = 0
// const t = setInterval(()=>{
//     console.log(j);
//     j++
//     if (j==6) {
//         clearInterval(t)
//     }
// },1000)
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data);
      }, 2000);
    });
  };
  
  const dataPromise = fetchData();
  
  dataPromise.then((result) => {
    console.log(result.message); // Output: "Data fetched successfully!"
  });
  