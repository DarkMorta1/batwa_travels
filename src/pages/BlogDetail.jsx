import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogs from '../data/blogs'


export default function BlogDetail(){
  const { id } = useParams()
  const nav = useNavigate()
  const blog = blogs.find(b => b.id === id)
  
  if(!blog) return <div style={{padding:40, color:'#fff'}}>Blog not found</div>
  
  return (
    <div style={{padding:'28px'}}>
      <button className="back" onClick={() => nav('/blogs')} style={{
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
      <div className="blog-detail">
  <h1>{blog.title}</h1>
  <div className="meta">{blog.date} • By {blog.author}</div>

  <div className="blog-detail-body">
    <div className="blog-text">
      {blog.content.split('\n').filter(p => p.trim()).map((p, i) => (
        <p key={i}>{p.trim()}</p>
      ))}
    </div>

    <div className="blog-image">
      <img src={blog.thumb} alt={blog.title} />
    </div>
  </div>
</div>
    </div>
  )
}
