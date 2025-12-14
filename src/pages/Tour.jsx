import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import tours from '../data/tours'
import Gallery from '../components/Gallery'

export default function Tour(){
  const { id } = useParams()
  const nav = useNavigate()
  const tour = tours.find(t=>t.id===id)
  if(!tour) return <div style={{padding:40, color:'#fff'}}>Tour not found</div>

  const scrollToContact = () => {
    // Try to navigate to home then scroll to contact section smoothly
    if (window.location.pathname !== '/'){
      nav('/')
      setTimeout(()=>{
        const el = document.getElementById('contact')
        if(el) el.scrollIntoView({behavior:'smooth'})
      }, 200)
    } else {
      const el = document.getElementById('contact')
      if(el) el.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <div className="tour-page">
      <div style={{padding:'20px'}}>
        <button className="back" onClick={() => nav('/')} style={{
          background: '#3f51b5',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          cursor: 'pointer',
          color: '#fff',
          transition: 'all 200ms'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#2d3a8c'
          e.currentTarget.style.transform = 'scale(1.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#3f51b5'
          e.currentTarget.style.transform = 'scale(1)'
        }}
        >←</button>
      </div>
      <div className="tour-hero" style={{backgroundImage:`url(${tour.img})`}}>
        <div className="hero-overlay">
          <h1>{tour.title}</h1>
          <p>{tour.location} • {tour.days} days</p>
        </div>
      </div>

      <div className="tour-content">
        <div className="left">
          <h2>About this tour</h2>
          <p>{tour.desc}</p>
          <h3>Itinerary</h3>
          <ul>{tour.details.itinerary.map((it, i)=> <li key={i}>{it}</li>)}</ul>
          <h3>Gallery</h3>
          {tour.photos && <Gallery photos={tour.photos} />}
        </div>
        <aside className="right">
          <div className="box">
            <h3>Price</h3>
            <div className="price big">${tour.price}</div>
            <p className="muted">{tour.details.expenses}</p>
            <button
          className="btn"
          onClick={() =>
          window.open("https://wa.me/9779801113350?text=Hello%20I%20want%20to%20know%20more%20about%20your%20offers%20and%20pacakages", "_blank")
  }
>
  Book Now
</button>

          </div>
        </aside>
      </div>
    </div>
  )
}

