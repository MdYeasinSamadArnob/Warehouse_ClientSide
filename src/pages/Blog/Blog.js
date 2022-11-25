import React from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'

function Blog() {
  return (
    <div className="pt-20 text-center">
      <PageTitle title="Blogs"></PageTitle>
      <h1 className="font-extrabold text-5xl">14.1 How will you improve the performance of a React Application?</h1>
      <br/>
      <p className=" text-3xl">Ans: It is improved by keeping component state local where possible, memorizing React components to save redundant re-renders, and code-splitting in React via dynamic import(). Again, windowing or list virtualization in React increases tremendously, as does lazy loading pictures in React.</p>
      <br/>
      <h1 className="font-extrabold text-5xl">14.2 What are the different ways to manage a state in a React application?</h1>
      <br/>
      <p className=" text-3xl">Ans: There are four main types of state that can be used to manage React apps:
      <ul start="1">
<li>Local state</li>
<li>Global state</li>
<li>Server state</li>
<li>URL state</li>
</ul>
</p>
      <br/>
      <h1 className="font-extrabold text-5xl">14.3 How does prototypical inheritance work?</h1>
      <br/>
      <p className=" text-3xl">Ans: Prototypical Inheritance is a Javascript feature that allows you to add methods and attributes to objects. It is a technique that allows one object to inherit the attributes and methods of another. Object has traditionally been used to retrieve and set an object's [[Prototype]]. Object and getPrototypeOf. </p>
      <br/>

      <h1 className="font-extrabold text-5xl">14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
      <br/>
      <p className=" text-3xl">Ans: using filter built-in function the search feature can be made. As the Arry has products and each products has name,price and description so when doing the filter at first it will be checked whether the name matches the requested name and iftrue it will return the product . </p>
      <br/>

      <h1 className="font-extrabold text-5xl">14.6 What is a unit test? Why should write unit tests?</h1>
      <br/>
      <p className=" text-3xl">Ans:Before code is deployed, unit testing verifies that it fulfills quality criteria. This offers a dependable engineering environment where quality is of the utmost importance. Unit testing saves time and money across the product development life cycle and helps developers write better code more effectively. </p>
      <br/>
    </div>
  )
}

export default Blog