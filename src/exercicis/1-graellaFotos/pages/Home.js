import "./Home.css";
import Grid from "../components/grid/Grid";

function Home(){
    const photos = [
        {   
            id: 1,
            imageSrc: "https://contents.mediadecathlon.com/p2089397/k$9668baba8fa33acf4ee381591bfe2a44/sq/bicicleta-de-montaa-nios-26-pulgadas-riverside-900-9-12-aos.jpg?format=auto&f=800x0",
        },
        {   
            id: 2,
            imageSrc: "https://www.bikestocks.es/59138-thickbox_default/bicicleta-electrica-orbea-wild-fs-h30-2021.jpg",
        },    
        {   
            id: 3,
            imageSrc: "https://contents.mediadecathlon.com/p2158919/k$ac465ffa0efc819f1bb65c4e023ca920/sq/bicicleta-de-montaa-aluminio-275-rockrider-st-530-mdb-amarillo.jpg?f=960x960",
        },
        {   
            id: 4,
            imageSrc: "https://contents.mediadecathlon.com/p2089397/k$9668baba8fa33acf4ee381591bfe2a44/sq/bicicleta-de-montaa-nios-26-pulgadas-riverside-900-9-12-aos.jpg?format=auto&f=800x0",
        },
        {   
            id: 5,
            imageSrc: "https://www.bikestocks.es/59138-thickbox_default/bicicleta-electrica-orbea-wild-fs-h30-2021.jpg",
        },    
        {   
            id: 6,
            imageSrc: "https://contents.mediadecathlon.com/p2158919/k$ac465ffa0efc819f1bb65c4e023ca920/sq/bicicleta-de-montaa-aluminio-275-rockrider-st-530-mdb-amarillo.jpg?f=960x960",
        },
        {   
            id: 7,
            imageSrc: "https://contents.mediadecathlon.com/p2089397/k$9668baba8fa33acf4ee381591bfe2a44/sq/bicicleta-de-montaa-nios-26-pulgadas-riverside-900-9-12-aos.jpg?format=auto&f=800x0",
        },
        {   
            id: 8,
            imageSrc: "https://www.bikestocks.es/59138-thickbox_default/bicicleta-electrica-orbea-wild-fs-h30-2021.jpg",
        },    
        {   
            id: 9,
            imageSrc: "https://contents.mediadecathlon.com/p2158919/k$ac465ffa0efc819f1bb65c4e023ca920/sq/bicicleta-de-montaa-aluminio-275-rockrider-st-530-mdb-amarillo.jpg?f=960x960",
        },
     ];

     return (
        <>
            <h1>Graella</h1>
         <Grid
         photos={photos}
         />
        </>
      ); 
}
export default Home;


/*import Film from "../components/film/Film";

function Home() {
  const films = [
    {
      title: "el lobo de wall street",
      description: "asdklnasdljasolndas wall street",
      review: "5*",
    },
    {
      title: "Un ciudadano ejemplar",
      description: "lorem impsum blasd",
      review: "4*",
    },
    {
      title: "La pesadilla de React",
      description: "es broma es la ostia",
      review: "5*",
    },
  ];



  
  const avisam = (text) => {
    alert(text);
  };

  return (
    <>
      <button onClick={() => avisam("has clicat nou")}>Ei, avisam</button>
      <h1>Benvinguts al TCM Netflix</h1>
      <h2>Películes destacades: </h2>
      {films.map((film) => {
        return (
          <Film
            title={film.title}
            description={film.description}
            review={film.review}
          />
        );
      })}
    </>
  );
}

export default Home;
*/