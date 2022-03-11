
import proplanAdulto from '../components/Images/proplan-adulto.jpeg';
import royalGato from '../components/Images/royal-gato.jpeg';
import royalMaxi from '../components/Images/royal-maxi.jpg';
import vitalAdulto from '../components/Images/vital-adulto.jpg';


const alimentos = [
    {
        id: "1",
        name: "Proplan Adultos",
        category: "Perros",
        image: <img src={proplanAdulto} alt="proplanAdulto" />,
        price: 5500,
        stock: 50,
    },
    {
        id: "2",
        name: "Royal Canin",
        category: "Gatos",
        image: <img src={royalGato} alt="royalGato" />,
        price: 4500,
        stock: 30,
    },
    {
        id: "3",
        name: "Royal Canin - Maxi Adultos",
        category: "Perros",
        image: <img src={royalMaxi} alt="royalMaxi" />,
        price: 8500,
        stock: 50,
    },
    {
        id: "4",
        name: "Vital Can - Adultos",
        category: "Perros",
        image: <img src={vitalAdulto} alt="vitalAdulto" />,
        price: 6500,
        stock: 50,
    },
]
const getFetch = new Promise(  (resolve, reject) => {
    let condition= true
    if (condition) {  
        setTimeout( ()=> { resolve(alimentos)}, 4000);    
    }   else { reject ('Not found')
             }
             
    
    
}
)

export default getFetch
