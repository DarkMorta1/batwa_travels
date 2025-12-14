import React from 'react'
import { useNavigate } from 'react-router-dom'
import Gallery from '../components/Gallery'

const memoryPhotos = [
  '/images/1765290625930.JPG',
  '/images/1765290625942.JPG',
  '/images/1765290625950.jpg',
  '/images/1765290625960.jpg',
  '/images/1765290625968.jpg',
  '/images/1765290625980.jpg',
  '/images/1765290625991.jpg',
  '/images/1765290626003.jpg',
  '/images/1765290626017.jpg',
  '/images/1765290626029.jpg',
  '/images/1765290626035.jpg',
  '/images/1765290626048.jpg',
  '/images/1765290626058.jpg',
  '/images/1765290626072.jpg',
  '/images/1765290626088.jpg',
  '/images/1765290626111.jpg',
  '/images/1765290626117.jpg',
  '/images/1765290626137.jpg',
]

export default function GalleryPage(){
  const nav = useNavigate()
  
  return (
    <div style={{padding:'28px'}}>
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
      <h1 style={{color:'#fff', marginBottom:'12px'}}>Memories from Our Tours</h1>
      <p style={{color:'rgba(255,255,255,0.85)', marginBottom:'24px'}}>Gallery of beautiful moments captured by our travelers</p>
      <Gallery photos={memoryPhotos} />
    </div>
  )
}
