import axios from 'axios'
import Logo from '../components/Logo'
import CreatePost from '../components/CreatePost'
import UpdatePost from '../components/UpdatePost'
import { useState, useEffect } from 'react'

const Admin = (props) => {
  const [posts, setPosts] = useState([])

  //retrieve and set Posts to edit/update
  const getPosts = async () => {
    const res = await axios.get(
      'https://whispering-dawn-47473.herokuapp.com/city'
    )
    setPosts(res.data.city)
  }

  useEffect(() => {
    getPosts()
  }, [])

  console.log(props.user)

  return (
    <div user={props.user}>
      <br />
      <div>
        <Logo siteLogo={props.siteLogo} />
      </div>
      <div>
        <CreatePost />
        <h1>Update Post</h1>
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
