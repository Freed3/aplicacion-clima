let urlBase ='https://api.openweathermap.org/data/2.5/weather'
let api_key = '844855e8decb50145e0712e919e20232';

let difkelvin = 273.15;

let ciudad = 'Medellin'


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
   if(ciudad){
    fetchDatoClima(ciudad)
   }   
    
});

function fetchDatoClima(ciudad){

fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
  .then((data) => data.json())
  .then((data) => mostrarDatosClima(data));

}

function mostrarDatosClima(data){
 
    
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = ''

    const ciudadNombre=data.name
    const paisNombre=data.sys.country
    const temperatura=data.main.temp
    const humedad=data.main.humidity
    const descripcion=data.weather[0].description
    const icono=data.weather[0].icon

    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=`${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo=document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difkelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es: ${humedad}%`;
    
    const descripcionInfo=document.createElement('p')
    descripcionInfo.textContent= `La descripcion  meteorologica es: ${descripcion}`
    
    const iconoInfo=document.createElement('img')
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)

}


