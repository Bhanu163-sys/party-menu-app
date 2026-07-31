import Header from "../Header";
import {useAuth} from '../../context/AuthContext'
import {Navigate} from 'react-router-dom'
import FoodCard  from "../FoodCard";

import './index.css'

const sampleCard = {
  id: 1,
  name: "Tandoori Chicken",
  category: "main",
  isVeg: false,
  description:
    "Succulent chicken marinated in yogurt and spices, roasted in a clay oven until charred and juicy.",
  fullDescription:
    "Succulent chicken marinated in yogurt, ginger-garlic paste, and aromatic spices, then roasted in a traditional clay tandoor until perfectly charred on the outside and juicy. Served with mint chutney and onion rings.",
  image:
    "https://images.unsplash.com/photo-1775211578178-61f06027adf3?auto=format&fit=crop&w=1200&q=80",
  ingredients: [
    {
      name: "Chicken (bone-in)",
      quantity: "500 g",
    },
    {
      name: "Hung curd",
      quantity: "1/2 cup",
    },
  ],
  servings: "For 2 people",
}

const Home = () =>{
    const {isAuthenticated} = useAuth()
    if(!isAuthenticated){
       return <Navigate to="/signin" replace/>
    }
    return(
            <div className="home-con">
                <Header />

                <FoodCard cardDetails={sampleCard} />
                
            </div>
        )
}


export default Home