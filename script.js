function aa()
{
    var ci=document.getElementById("city").value
    var c2=document.getElementById("myp").innerHTML
    let b=fetch("https://api.openweathermap.org/data/2.5/weather?q="+ci+"&appid=253691fc69d0453aa953d214b921d093")
    b.then((result)=>
    {
        result.json().then((data)=>
        {
            document.getElementById("myp").innerHTML="Max temparate:"+data.main.temp_max+"<br>"+data.main.temp_min
            // document.getElementById("myp").innerHTML=
            // document.write(data.main.temp_max,data.main.temp_min)
            // console.log(data)
        })  
    })
    c(ci)
}
function c(ci)
{
    let a=fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ci+"&appid=253691fc69d0453aa953d214b921d093")
a.then((result)=>
{
    let arr=[]
    let date=[]
    result.json().then((data)=>
    {
        // console.log(data)
        let weather=data.list
        let j=0
        for(let i=0;i<weather.length;i=i+8)
        {
            // console.log(weather[i].main.temp)
            arr[j]=weather[i].main.temp
            let xyz=weather[i].dt_txt.split(" ")
            date[j]=xyz[0]

            j++
        }
        for(let i=0;i<arr.length;i++)
        {
            console.log(arr[i])
        }
        z(arr,date)
    })
})
}
function z(arr,date)
{


const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: date,
            datasets: [{
              label: '# of Votes',
              data: arr,
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