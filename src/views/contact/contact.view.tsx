const ContactView = (): JSX.Element => {
  return (
    <div className="contact section">
      <h2 className="section-title">Contact</h2>

      <div className="contact__container bd-grid">
        <form method="POST" target="content" className="contact__form" id="form">
          <input
            type="text"
            placeholder="Name"
            className="contact__input"
            id="name"
            name="name"
          />
          <span id="name-alert"></span>
          <input
            type="mail"
            placeholder="Email"
            className="contact__input"
            id="email"
            name="email"
          />
          <span id="email-alert"></span>
          <textarea
            name="comment"
            id="comment"
            cols={0}
            rows={10}
            className="contact__input"
            placeholder="Leave your comment"
          ></textarea>
          <span id="comment-alert"></span>
          <input
            type="submit"
            value="Send"
            className="contact__button button"
            id="submit"
          />
        </form>
      </div>
    </div>
  )
}

export default ContactView
