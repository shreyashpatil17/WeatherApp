import "./currentcard.css";


const CurrentCard = ({data}) => {

    const currentData = data.current;

    //Formatting Date and Time to a Desired Format
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        
        const timeFormat = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        
        const dateFormat = new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        const formattedTime = timeFormat.format(date);
        const formattedDate = dateFormat.format(date);
        
        return `${formattedTime}    ${formattedDate}`;
    };

    return(
        <div className="current-card">

            <div className="current-card-top">
                <img src={currentData.condition.icon} alt="Current IMG"/>
                <h3>{currentData.condition.text}</h3>
            </div>

            <div className="current-card-bottom">

                <div className="current-card-bottom-1">
                    <h3>Temperature (°C) : {currentData.temp_c} °C</h3>
                    <h3>Temperature (°F) : {currentData.temp_f} °F</h3>
                    <h3>Humidity : {currentData.humidity}</h3>
                    <h3>Precipitation : {currentData.precip_mm} mm</h3>
                </div>

                <div className="current-card-bottom-2">
                    <h3>Wind Degree : {currentData.wind_degree}</h3>
                    <h3>Wind Direction : {currentData.wind_dir}</h3>
                    <h3>Wind Speed : {currentData.wind_kph} KmPH</h3>
                    <h3>Last Update Time : {formatTimestamp(currentData.last_updated)}</h3>
                </div>
                
            </div>

        </div>
    );
}

export default CurrentCard;