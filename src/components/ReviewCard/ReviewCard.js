import React from 'react'
import StarRatings from 'react-star-ratings';

function ReviewCard({name, description,rating}) {
  return (
    <div className="w-full mx-1 h-[450px] md:w-[550px] md:h-[350px] border-2 m-5 p-5">
     
    <div className="flex items-start">
    <div className="flex-shrink-0">
    
  </div>
  <div className="ml-6">
    <p className="flex items-baseline">
      <span className="text-gray-600 font-bold">{name}</span>
      <span className="ml-2 text-green-600 text-xs">Verified Buyer</span>
    </p>
    <div className="flex items-center mt-1">
      
    <StarRatings
          starDimension="15px"
          starRatedColor="orange"
          starSpacing="1px"
          rating={parseInt(rating)}
          numberOfStars={5}
          name='rating'
        />
    </div>
    <div className="flex items-center mt-4 text-gray-600">
      <div className="flex items-center">
        <span className="text-sm">Product Quality</span>
        <div className="flex items-center ml-2">
         
        
        <StarRatings
          starDimension="12px"
          starRatedColor="orange"
          starSpacing="1px"
          rating={parseInt(rating)}
          numberOfStars={5}
          name='rating'
        />
        
        </div>
      </div>
      <div className="flex items-center ml-4">
        <span className="text-sm">Purchasing Experience</span>
        <div className="flex items-center ml-2">
         
        <StarRatings
          starDimension="12px"
          starRatedColor="orange"
          starSpacing="1px"
          rating={parseInt(rating)}
          numberOfStars={5}
          name='rating'
        />
        </div>
      </div>
    </div>
    <div className="mt-3">
      <span className="font-bold">What User Tell About!!!</span>
      <p className="mt-1">{description}</p>
    </div>
    <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
      <button className="flex items-center">
        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z"/></svg>
        <span className="ml-2">Share</span>
      </button>
      <div className="flex items-center">
        <span>Was this review helplful?</span>
        <button className="flex items-center ml-6">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"/></svg>
          <span className="ml-2">56</span>
        </button>
        <button className="flex items-center ml-4">
          <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z"/></svg>
          <span className="ml-2">10</span>
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ReviewCard