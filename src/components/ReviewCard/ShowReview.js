import React from 'react'
import ReviewCard from './ReviewCard'

function ShowReview() {

    // Fetch all the reviews from the database
    const [reviews, setReviews] = React.useState([])
    React.useEffect(() => {
        fetch('https://warehouse-serverside-537o.onrender.com/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    }, [])

  return (
    <div className="flex flex-wrap justify-center items-center my-8 py-3">
        {/* <ReviewCard name="Arnob" description="Thjsnh" rating="4"/>
        <ReviewCard name="Arnob" description="Thjsnh" rating="4"/>

        <ReviewCard name="Arnob" description="Thjsnh" rating="4"/> */}
        <h1 className="text-3xl text-center font-bold">All Our Ratings: Our Customer Says</h1>
        {reviews.map(review => (
            <ReviewCard key={review._id} name={review.name} description={review.comment} rating={review.review}/>
        ))}


    </div>
  )
}

export default ShowReview