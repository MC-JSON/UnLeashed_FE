///recommendation form that emails to admin

//admin link access

//mapbox?

import axios from 'axios'
import PostLayout from '../components/PostLayout'
import Logo from '../components/Logo'
import { useState, useEffect } from 'react'

const City = (props) => {
  const [posts, setPosts] = useState([])

  //retrieve and set Countries
  const getPosts = async () => {
    const res = await axios.get('http://localhost:3001/city')
    setPosts(res.data.city)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <div>
        <Logo siteLogo={props.siteLogo} />
        <h1>Ruthie Recommends</h1>
      </div>
      <div className="intro">
        Ruthie recommends her favorite dog friendly spots in every city she has
        visited across the globe! Below you will find links to some of her
        favorite dog friendly places to Stay, get a Treat, or take a Walk in
        each city.
      </div>
      <section className="map post-map">
        {posts.map((posts) => (
          <div>
            <PostLayout
              name={posts.name}
              image={posts.image}
              date={posts.date}
              description={posts.description}
              stay={posts.stay}
              stayLink={posts.stayLink}
              treat={posts.treat}
              treatLink={posts.treatLink}
              walk={posts.walk}
              walkLink={posts.walkLink}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
export default City
