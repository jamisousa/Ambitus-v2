import { getDashContent } from "../../utils/contexts/dashboardAction";

const DashboardContent = () => {

    const { currentContent } = getDashContent();

    return(
        <>
            {currentContent == 'events' ? <p>Render events here</p> : <p>Render something else here</p>}
        </>

    );

}

export default DashboardContent;