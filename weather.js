console.log("shiv->project");
let loc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");
searchbutton.addEventListener('click',(e)=>
{
e.preventDefault();
getweather(searchinput.value);
searchinput.value='';
});
const getweather=async(city)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a55eb67d3ab603364807b073cdd2b4cd `,
    {mode: 'cors'}
    );
const weatherdata=await response.json();
console.log(weatherdata);
const{name}=weatherdata;
const{feels_like}=weatherdata.main;
const{id,main}=weatherdata.weather[0];
loc.textContent=name;
climate.textContent=main;
tempvalue.textContent=Math.round(feels_like-273);
if(id<300 && id>200){
    tempicon.src="thunder.png";
}
if(id<=400 && id>=300){
    tempicon.src="sun.png";
}
else if(id<=600 && id>=500){
    tempicon.src="rain.png";
}

 else if(id<=700 && id>=600){
    tempicon.src="snow.png";
}
 else if(id<=800 && id>=700){
    tempicon.src="sun.png";
}
else if(id>=801){
    tempicon.src="clouds.png";
}
}  ///try
catch(error){
    alert('city not found');
}
}; //async func

window.addEventListener("load" ,()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/";
const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a55eb67d3ab603364807b073cdd2b4cd `
fetch(api).then((Response)=>{
    return Response.json();
})
.then(data =>
  {
const{name}=data;
const{feels_like}=data.main;
const{id,main}=data.weather[0];

loc.textContent=name;
climate.textContent=main;
tempvalue.textContent=Math.round(feels_like-273);
if(id<300 && id>200){
    tempicon.src="thunder.png";
}
if(id<=400 && id>=300){
    tempicon.src="sun.png";
}
else if(id<=600 && id>=500){
    tempicon.src="rain.png";
}

 else if(id<=700 && id>=600){
    tempicon.src="snow.png";
}
 else if(id<=800 && id>=700){
    tempicon.src="sun.png";
}

console.log(data);
  })
   }
      )}
})

