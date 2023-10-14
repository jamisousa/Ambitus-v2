import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventsList from "../EventsList/EventsList";

const DashboardContent = () => {

    const { currentContent } = getDashContent();

    return(
        <>
            {currentContent == 'events' ? <EventsList/> : <p>Render something else here</p>}
        </>

    );

}

export default DashboardContent;