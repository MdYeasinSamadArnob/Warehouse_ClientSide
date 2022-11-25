import React from 'react'
import Banner from '../../components/Banner/Banner'
import InventoryCard from '../../components/Card/InventoryCard'
import FAQ from '../../components/FAQ/FAQ'
import Header from '../../components/Header/Header'
import InventoryItem from '../../components/InventoryItem/InventoryItem'
import PageTitle from '../../components/PageTitle/PageTitle'
import ShowReview from '../../components/ReviewCard/ShowReview'
import RateUs from '../../components/TimeLine/RateUs'
import TrustSection from '../../components/TrustSection/TrustSection'



function Home() {
  return (
      <>
      <PageTitle title="Home"></PageTitle>
    {/* <Header/> */}
    <Banner/>
    {/* <InventoryCard/> */}
    <InventoryItem/>
    <TrustSection/>
    <FAQ/>
    <RateUs/>
    <ShowReview/>
    </> 
  )
}

export default Home