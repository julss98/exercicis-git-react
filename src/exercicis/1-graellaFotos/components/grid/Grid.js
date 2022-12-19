import "./Grid.css";
import Photos from "../photos/Photos";



function Grid({photos}){
      return( 
        photos.map((eachPhoto) => {
            return (
              <Photos
                image={eachPhoto.imageSrc}
                id={eachPhoto.id}
                key={eachPhoto.id}
              />
        );
          }))}



export default Grid;

/*
 <>
    <image imageSrc={image} />
    <id id={id} />
</>
*/