import React, { useState } from 'react'
import Banner from '../components/Banner'
import TravelCard from '../components/TravelCard'
import tours from '../data/tours'
import blogs from '../data/blogs'

const memoryPhotos = [
  '/images/1765290625930.JPG',
  '/images/1765290625942.JPG',
  '/images/1765290625950.jpg',
  '/images/1765290625960.jpg',
  '/images/1765290625968.jpg',
  '/images/1765290625980.jpg',
]

export default function Home() {
  const trending = tours.filter(t => t.trending)
  const upcoming = tours.filter(t=>t.upcoming)
  
  return (
    <div className="home-page">
      <Banner />

      <section className="section">
        <h2 className="section__title section__title--strong">Trending</h2>
        <div className="grid grid--cards">
          {trending.map(tour => (
            <TravelCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      <section className="section">
  <h2 className="section__title section__title--strong">Upcoming Trips</h2>
  <div className="grid grid--cards">
    {upcoming.map(t => (
      <TravelCard key={t.id} tour={t} />
    ))}
  </div>
</section>


      <section className="section section--tight">
        <div className="section__heading">
          <div>
            {/* <span className="section__subtitle">Recent</span> */}
            <h2 className="section__title section__title--pink">Memories</h2>
          </div>
          {/* <div className="pager">
            <button className="pager__btn">‹</button>
            <button className="pager__btn">›</button>
          </div> */}
        </div>
        <div className="cards cards--scroll">
          {memoryPhotos.slice(0, 5).map((src, idx) => (
            <article key={idx} className="thumb">
              <img src={src} alt={`Memory ${idx + 1}`} />
              <p className="thumb__label">Memory {idx + 1}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <div>
            {/* <span className="section__subtitle">Featured</span> */}
            <h2 className="section__title section__title--pink">Photos</h2>
          </div>
        </div>
        <div className="grid grid--photos">
          {memoryPhotos.slice(0, 3).map((src, idx) => (
            <img className="photo" src={src} alt={`Featured ${idx + 1}`} key={idx} />
          ))}
        </div>
      </section>

      {/* <section className="section">
        <div className="section__heading">
          <h2 className="section__title section__title--strong">Blogs</h2>
        </div>
        <p className="muted">Send us your story....</p>
      
      </section> */}
    </div>
  )
}
