/*eslint-disabel react/prop-types */

function WeatherInformations({weather}){
    console.log(weather)

    return(
        <div>
            <h2>{weather.name}</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
            <p></p>
        </div>
    )

}

export default WeatherInformations