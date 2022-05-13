import axios from 'axios'
import Logo from '../components/Logo'
import CreatePost from '../components/CreatePost'
import UpdatePost from '../components/UpdatePost'
import { useState, useEffect } from 'react'

const Admin = (props) => {
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
    <div user={props.user}>
      <div>
        <Logo siteLogo={props.siteLogo} />
      </div>
      <div>
        <CreatePost />
        <h2>Update Post</h2>
        {posts.map((posts) => (
          <UpdatePost
            id={posts._id}
            name={posts.name}
            image={posts.image}
            date={posts.date}
            description={posts.description}
            stay={posts.stay}
            treat={posts.treat}
            walk={posts.walk}
          />
        ))}
      </div>
    </div>
  )
}
export default Admin
