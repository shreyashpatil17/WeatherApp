import "./bottomcard.css";

const BottomCard = ({data}) => {

  const convertTimeTo12HourFormat = (dateTimeString) => {
    const [datePart, timePart] = dateTimeString.split(' ');
    
    const convertTo12HourFormat = (timeString) => {
      const [hours, minutes] = timeString.split(':');
      let period = 'AM';
      let hour = parseInt(hours, 10);
  
      if (hour === 0) {
        hour = 12;
      } else if (hour === 12) {
        period = 'PM';
      } else if (hour > 12) {
        hour -= 12;
        period = 'PM';
      }
  
      return `${hour}:${minutes} ${period}`;
    };
  
    return convertTo12HourFormat(timePart);
  };


    return(
        <div className="bottomcard">
            <h4 className="bottomcard-text1">{convertTimeTo12HourFormat(data.time)}</h4>
            <img src={data.condition.icon} alt="condition img"/>
            <h4 className="bottomcard-text2">{data.condition.text}</h4>
        </div>
    );
}

export default BottomCard;