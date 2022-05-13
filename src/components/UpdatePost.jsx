import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form for updating and deleting posts
const UpdatePost = (props) => {

  const [formValue, setFormValue] = useState({
    id: props.id,
    name: props.name,
    image: props.image,
    date: props.date,
    description: props.description,
    stay: props.stay,
    stayLink: props.stayLink,
    treat: props.treat,
    treatLink: props.treatLink,
    walk: props.walk,
    walkLink: props.walkLink
  })

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  let navigate = useNavigate()

  // handles delete submit and navigates back
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    await axios.delete(`https://whispering-dawn-47473.herokuapp.com/delete/city/${props.id}`)
    navigate('/city')
  }

  const handleSubmit3 = async (e) => {
    e.preventDefault()
    await axios.put(`https://whispering-dawn-47473.herokuapp.com/update/city/${props.id}`, formValue)
    navigate('/city')
  }

  const { id, name, image, date, description, stay, stayLink, treat, treatLink, walk, walkLink } = formValue

  return (
    <div className="forms-wrapper">
      <div className="forms">
        <section className="input-section">
          <form className="update-post-form">
          <input
              type="text"
              name="id"
              placeholder="City ID"
              value={id}
              onChange={handleChange}
            />
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
              placeholder="Stay"
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
              placeholder="Treat"
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
              name="Walk"
              placeholder="Walk"
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
              className="update-post-button"
              onClick={handleSubmit3}
            >
              Update Post
            </button>
            <button
              className="delete-post-button"
              onClick={handleSubmit2}
            >
              Delete Post
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default UpdatePost
