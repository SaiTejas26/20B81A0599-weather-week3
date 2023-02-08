// let div1=document.getElementById("usingFetch");
// let response=fetch("http://jsonplaceholder.typicode.com/users");
// response.then((res)=>{
//     res.json().then((data)=>{
//         data.forEach(ele=>{
//             console.log(ele.name+":::"+ele.email);
//         });
//     });
// });
function abc()
{
var Name1=document.getElementById("Name").value
let wData= fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name1+"&appid=877f816970c02f0d05130b8f1a78f5fb");
wData.then((result)=>{
    result.json().then((data)=>{
        let {main:{temp, temp_min, temp_max}} = data;
        document.getElementById("p").innerHTML=data.main.temp_max+" "+data.main.temp_min
    });
    zz()
})
}
function zz()
{
    var Name1=document.getElementById("Name").value
    let wData= fetch("https://api.openweathermap.org/data/2.5/weather?q="+Name1+"&appid=877f816970c02f0d05130b8f1a78f5fb");
    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['min', 'max'],
        datasets: [{
          label: 'temperature',
          data: [12, 19],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}