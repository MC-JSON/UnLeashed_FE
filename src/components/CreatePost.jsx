import axios from 'axios'
import { useState } from 'react'

//form for creating new posts into database
const CreatePost = (props) => {

  const [formValue, setFormValue] = useState({
    name: '',
    image: '',
    date: '',
    description: '',
    stay: '',
    stayLink: '',
    treat: '',
    treatLink: '',
    walk: '',
    walkLink: ''
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  // handles update submit and navigates back
  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      'http://localhost:3001/create/city',
      formValue
    )
  }


  const { name, image, date, description, stay, stayLink, treat, treatLink, walk, walkLink } = formValue

  return (
    <div className="forms-wrapper">
      <h1>Create Post</h1>
      <div className="forms">
        <section className="input-section">
          <form className="create-post-form">
            <input
              type="text"
              name="name"
              placeholder="City Name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="image"
              placeholder="City Image"
              value={image}
              onChange={handleChange}
            />
            <input
              type="text"
              name="date"
              placeholder="Visit Date"
              value={date}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Visit Details"
              value={description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="stay"
              placeholder="Stay Name"
              value={stay}
              onChange={handleChange}
            />
            <input
              type="text"
              name="stayLink"
              placeholder="Stay Link"
              value={stayLink}
              onChange={handleChange}
            />
            <input
              type="text"
              name="treat"
              placeholder="Treat Name"
              value={treat}
              onChange={handleChange}
            />
            <input
              type="text"
              name="treatLink"
              placeholder="Treat Link"
              value={treatLink}
              onChange={handleChange}
            />
            <input
              type="text"
              name="walk"
              placeholder="Walk Name"
              value={walk}
              onChange={handleChange}
            />
            <input
              type="text"
              name="walkLink"
              placeholder="Walk Link"
              value={walkLink}
              onChange={handleChange}
            />
            <button
              className="create-post-button"
              onClick={handleSubmit}
            >
              Create Post
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default CreatePost
