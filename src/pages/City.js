import axios from 'axios'
import PostLayout from '../components/PostLayout'
import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import Contact from '../components/Contact'

const City = (props) => {
  const [posts, setPosts] = useState([])

  //retrieve and set Countries
  const getPosts = async () => {
    const res = await axios.get(
      'https://whispering-dawn-47473.herokuapp.com/city'
    )
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
        Ruth recommends her favorite dog friendly spots in each city she has
        visited across the globe! Below you will find links to some of her
        favorite dog friendly places to Stay, get a Treat, or take a Walk in the
        city. Before you scroll on, feel free to send Ruth a travel
        recommendation.
      </div>
      <br />
      <div>
        <Contact />
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
