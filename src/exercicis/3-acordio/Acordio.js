import "./Acordio.css";
import Estructura from "./components/Estructura";


const informacio = [
    {
        title: 'Títol 1',
        content: 'Contingut interessant a',
        id: 1,
    },
    {
        title: 'Títol 2',
        content: 'Contingut interessant b',
        id: 2,
    },
    {
        title: 'Títol 3',
        content: 'Contingut interessant c',
        id: 3,
    },
    {
        title: 'Títol 4',
        content: 'Contingut interessant d',
        id: 4,
    },
    {
        title: 'Títol 5',
        content: 'Contingut interessant e',
        id: 5,
    },
];

function Acordio (){

    return (
        <>
            <h1>Título de los títulos</h1>
            {informacio.map((apartat) => {
                return (
                    <Estructura
                        title = {apartat.title}
                        content = {apartat.content}
                        key = {apartat.id}
                    />
                );
            })}
        </>
    )
}
        
        
        

export default Acordio;




