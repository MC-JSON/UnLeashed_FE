const Logo = (props) => {
  return (
      <div className='logo-content'>
        <section className='image-container'>
          <img src={props.siteLogo} alt='UnLeashed'/>
        </section>
      </div>
  )
}

export default Logo