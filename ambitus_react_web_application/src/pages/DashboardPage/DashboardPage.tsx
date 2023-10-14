import AccessNavbar from "../../components/AccessNavbar/AccessNavbar";
import DashboardContent from "../../components/DashboardContent/DashboardContent";
import { DashContentProvider } from "../../utils/contexts/dashboardAction";

const DashboardPage = () => {
    return(
        <DashContentProvider>
            <AccessNavbar navbarType={"withIcons"}/>
            <DashboardContent/>
        </DashContentProvider>
    );    
}
export default DashboardPage;