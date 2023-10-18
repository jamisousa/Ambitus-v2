import { getDashContent } from "../../utils/contexts/dashboardAction";
import EventDetails from "../EventDetails/EventDetails";
import EventsList from "../EventsList/EventsList";

const DashboardContent = () => {
  const { currentContent } = getDashContent();

  const eventsMock = {
    title: "Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cum pariatur esse recusandae quaerat provident, ad veritatis quia explicabo omnis, minus repellendus dignissimos dolore expedita similique, maiores ipsam assumenda. Nemo provident tenetur modi optio. Officiis quidem fugit perferendis pariatur voluptate ab eveniet aut eligendi earum repellendus hic incidunt molestiae magnam fugiat est ut vero voluptatem, corrupti corporis odit modi, omnis aliquam, itaque maiores! Facilis assumenda vel rerum ex consequuntur accusamus earum perferendis! Odio ipsum deleniti recusandae ea. Iste sed amet maxime ipsum incidunt nobis dolor tempore quis enim! Molestias provident repellendus molestiae doloribus culpa incidunt nesciunt exercitationem placeat autem fuga.",
    location: "Test",
    date: "Test",
    author: "Test",
    image: "Test",
  };

  return (
    <>
      {currentContent == "events" ? (
        <EventsList />
      ) : (
        <EventDetails eventinfo={eventsMock} />
      )}
    </>
  );
};

export default DashboardContent;
