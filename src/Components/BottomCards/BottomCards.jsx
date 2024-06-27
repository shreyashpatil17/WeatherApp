import "./bottomcards.css";
import BottomCard from "./BottomCard/BottomCard";

const BottomCards = ({data}) => {

    const forecastData = data.forecast.forecastday[0].hour;

    return(
        <div className="forecast">
            <div className="forecast-dispCards">
                {forecastData.map((data, index) => (
                    <BottomCard
                    key={index} // Using index as key, but it's better to use a unique identifier if available
                    data={data}
                />
                ))}
            </div>  
        </div>
    );
}

export default BottomCards;