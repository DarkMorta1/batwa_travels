import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TravelCard({ tour }) {
  const nav = useNavigate()

  return (
    <article className="trend-card">
      <div className="trend-card__media">
        <img src={tour.img} alt={tour.title} />
        <span className="badge badge--price">{tour.price}</span>
      </div>
      <div className="trend-card__body">
        <h3 className="trend-card__title">{tour.title}</h3>
        <p className="trend-card__meta">
          {tour.days} Days • {tour.location}
        </p>
        <button
          className="btn btn--pink"
          onClick={() => nav(`/tour/${tour.id}`)}
        >
          View Details
        </button>
      </div>
    </article>
  )
}
