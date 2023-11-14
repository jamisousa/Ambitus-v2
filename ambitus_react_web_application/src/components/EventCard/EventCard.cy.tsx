import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "../../utils/contexts/globalThemeContext";
import EventCard from "./EventCard";
import { EventCardProps } from "../../types/EventCardType";
import { DashContentProvider } from "../../utils/contexts/dashboardAction";

const eventsMock: EventCardProps = {
  eventInfo: {
    title: "Teste",
    location: "Teste",
    date: "Teste",
    category: "Teste",
    image: "Teste",
  },
  clickAction: () => {},
};

describe("EventCard", () => {
    it("Should render the navigation bar with login links", () => {
        cy.mount(
          <ThemeProvider>
            <DashContentProvider>
              <Router>
                <EventCard
                  eventInfo={eventsMock.eventInfo}
                  clickAction={eventsMock.clickAction}
                />
              </Router>
            </DashContentProvider>
          </ThemeProvider>
        );

    cy.contains("Teste").should("exist");
  });
});