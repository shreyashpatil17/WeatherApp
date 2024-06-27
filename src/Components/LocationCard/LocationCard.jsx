import "./locationcard.css";

const LocationCard = ({data}) => {

    const locationData = data.location;
    
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
        <div className="location-card">
            <h3>City : {locationData.name}</h3>
            <h3>State : {locationData.region}</h3>
            <h3>Country : {locationData.country}</h3>
            <h3>Latitude : {locationData.lat}</h3>
            <h3>Longitude : {locationData.lon}</h3>
            <h3>Local Time :  {formatTimestamp(locationData.localtime)}</h3>
        </div>
    );
}

export default LocationCard;