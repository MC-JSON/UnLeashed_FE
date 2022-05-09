///recommendation form that emails to admin

//admin
//admin forms for editing reviews

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
      </div>
      <section>
        {posts.map((posts) => (
          <div>
            <PostLayout
              name={posts.name}
              date={posts.date}
              description={posts.description}
              stay={posts.stay}
              treat={posts.treat}
              walk={posts.walk}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default City
