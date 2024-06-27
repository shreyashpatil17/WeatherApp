import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./mainpage.css";
import LocationCard from "../../Components/LocationCard/LocationCard";
import CurrentCard from "../../Components/CurrentCard/CurrentCard";
import BottomCards from "../../Components/BottomCards/BottomCards";

const MainPage = () => {

    const [data,setData] = useState([]);

    const apiKey = process.env.REACT_APP_WEATHERAPI_KEY;

    const city = 'Mumbai';
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},India`;

    



    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(url);
                setData(response.data);
            }
            catch(error){
                console.log(error);
            }
        };

        fetchData();

    }, [url]);


    return(
        <>
            <div className="mainpage">
                <NavBar/>
                
                <div className="card-display">

                    <div className="card-display-top">
                        <div className="card-display-top-1">
                            {/* Display LocationCard only when Data is fetched */}
                            {data && Object.keys(data).length !== 0 && (
                                <LocationCard data={data} />
                            )}
                        </div>
                        <div className="card-display-top-2">
                            {/* Display CurrentCard only when Data is fetched */}
                            {data && Object.keys(data).length !== 0 && (
                                <CurrentCard data={data} />
                            )}
                        </div>
                    </div>

                    <div className="card-display-bottom">
                        {/* Display LocationCard only when Data is fetched */}
                        {data && Object.keys(data).length !== 0 && (
                            <BottomCards data={data} />
                        )}
                    </div>

                </div>

            </div>
        </>
    );
}

export default MainPage;