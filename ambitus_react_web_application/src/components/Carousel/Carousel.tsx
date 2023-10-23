import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../resources/img/Carousel1.svg";
import carousel2 from "../../resources/img/Carousel2.svg";
import carousel3 from "../../resources/img/Carousel3.svg";
import styles from "./Carousel.module.css";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import { useTheme } from "../../utils/contexts/globalThemeContext";

const IntroCarousel = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //carousel control
  const [curIndex, setCurIndex] = useState<number>(0);

  const handleChangeCurIndex = (index: number) => {
    setCurIndex(index);

    if (curIndex == 2) {
      setTimeout(() => {
        setLoading(true);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }, 4000);
    }
  };

  const carouselPlaceholders = [
    {
      title: "Encontre eventos e ações da comunidade!",
      descripton:
        "Encontre os eventos e ações da comunidade que estão acontecendo perto de você e participe daqueles que mais te engajam.",
    },
  ];

  //styles
  const { currentTheme } = useTheme();
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;

  return (
    <div className={`${styles.carouselsection} ${textStyle}`}>
      {loading ? (
        <div className={styles.loadersection}>
          <ClipLoader
            color={"#000"}
            loading={true}
            size={100}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {" "}
          <Carousel
            showArrows={false}
            selectedItem={curIndex}
            onChange={handleChangeCurIndex}
            showStatus={false}
            showThumbs={false}
            showIndicators={true}
          >
            <div>
              <img src={carousel1} alt="Imagem Carrosel 1" />
              <h1>{carouselPlaceholders[0].title}</h1>
              <h2>{carouselPlaceholders[0].descripton}</h2>
            </div>
            <div>
              <img src={carousel2} alt="Imagem Carrosel 2" />
              <h1>{carouselPlaceholders[0].title}</h1>
              <h2>{carouselPlaceholders[0].descripton}</h2>
            </div>
            <div>
              <img src={carousel3} alt="Imagem Carrosel 3" />
              <h1>{carouselPlaceholders[0].title}</h1>
              <h2>{carouselPlaceholders[0].descripton}</h2>
            </div>
          </Carousel>
          <div className={styles.carouselindicators}>
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`${styles.indicator} ${
                  index === curIndex ? styles.active : ""
                }`}
              ></div>
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default IntroCarousel;
