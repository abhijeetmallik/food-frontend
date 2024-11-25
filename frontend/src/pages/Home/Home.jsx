import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import OfferMenu from '../../components/OfferMenu/OfferMenu'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
    <Header />
    <OfferMenu />
    <ExploreMenu category={category} setCategory={setCategory} />
    <FoodDisplay category={category} />
    <AppDownload />
    </div>
  )
}

export default Home
