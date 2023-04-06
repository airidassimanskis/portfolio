import React, { useState, useEffect } from "react"
import "./css/Contacts.css"

const Contacts = () => {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    const handleEmailSubmit = () => {
        if (title.length < 5 || message.length < 5) {
            return
        } else {
            const mailLink = `mailto:airidassimanskis@gmail.com?subject=${title}&body=${message}`
            window.open(mailLink, "_blank")
        }
    }

    return (
        <div className="contacts" id="contacts">
            <h1>Contacts</h1>
            <form className="contacts-form">
                <div>
                    <div className="input-group">
                        <input
                            type="text"
                            className="contacts-input"
                            placeholder="Title"
                            value={title}
                            minLength={5}
                            maxLength={200}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            required
                        ></input>
                        <label className="contacts-label">Title</label>
                    </div>
                </div>

                <div>
                    <div className="input-group message">
                        <textarea
                            className="contacts-input contacts-textarea"
                            placeholder="Hi👋"
                            value={message}
                            minLength={5}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            required
                        ></textarea>
                        <label className="contacts-label">Message</label>
                    </div>
                </div>
                <button className="contacts-button" onClick={handleEmailSubmit}>
                    <span>Send</span>
                </button>
            </form>

            <br />
            <p><b>OR</b></p>
            <br />
            <div className="contacts-icons-container">
                <a
                    href="https://www.linkedin.com/in/airidas-%C5%A1imanskis-31638124b/"
                    target="_blank"
                >
                    <img
                        className="contacts-icons"
                        src="./icons/linkedin.png"
                        alt=""
                    />
                </a>
                <a href="https://github.com/airidassimanskis" target="_blank">
                    <img
                        className="contacts-icons"
                        src="./icons/github.png"
                        alt=""
                    />
                </a>
            </div>
        </div>
    )
}

export default Contacts
