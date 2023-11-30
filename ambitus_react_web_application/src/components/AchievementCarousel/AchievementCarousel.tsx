import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./AchievementCarousel.module.css";
import { ClipLoader } from "react-spinners";
import { override } from "../../utils/spinner/spinner";
import { useTheme } from "../../utils/contexts/globalThemeContext";
import compromissadoImg from "../../resources/img/Compromissado.svg";
import conscienteImg from "../../resources/img/Consciente.svg";
import inicianteImg from "../../resources/img/Iniciante.svg";
import florestaImg from "../../resources/img/floresta.svg";
import exploradorImg from "../../resources/img/Explorador.svg";
import ecologicoImg from "../../resources/img/Ecológico.svg";
import reciclagemImg from "../../resources/img/Reciclagem.svg";

const AchievementCarousel = () => {
  const [loading, setLoading] = useState(false);

  //carousel control
  const [curIndex, setCurIndex] = useState<number>(0);

  const carouselPlaceholders = [
    { title: "Iniciante Ambiental", medalIcon: inicianteImg },
    { title: "Ativista Compromissado", medalIcon: compromissadoImg },
    { title: "Protetor da Floresta", medalIcon: florestaImg },
    { title: "Ecológico Experiente", medalIcon: ecologicoImg },
    { title: "Explorador Nato", medalIcon: exploradorImg },
    { title: "Consciente sempre", medalIcon: conscienteImg },
    { title: "Reciclagem de respeito", medalIcon: reciclagemImg },
  ];

  const handleChangeCurIndex = (index: number) => {
    setCurIndex(index);
  };

  //styles
  const { currentTheme } = useTheme();
  const textStyle =
    currentTheme === "light" ? styles.whitetext : styles.darktext;

  return (
    <div
      className={`${styles.carouselsection} ${textStyle} ${styles["carousel-container"]}`}
    >
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
            {carouselPlaceholders.map((i) => {
              const isLongText = i.title.length > 20;
              const itemClasses = isLongText
                ? `${styles.carouselItem} ${styles["long-text"]}`
                : styles.carouselItem;
              return (
                <div className={itemClasses}>
                  <img src={i.medalIcon} alt="Medalha" draggable="false" />
                  <h1>{i.title}</h1>
                </div>
              );
            })}
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

export default AchievementCarousel;
