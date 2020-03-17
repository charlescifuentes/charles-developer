import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import backImg from "../images/web-developer-background.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contactarme = ({ data }) => {
  const [state, setstate] = useState({})
  const [sendMessage, setSendMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleChange = e => {
    setstate({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setSendMessage(true))
      .catch(error => setErrorMessage(true))
  }

  console.log(state)

  return (
    <Layout>
      <SEO
        title="Contactarme"
        keywords={[
          `software developer`,
          `fullstack developer`,
          `software engineer`,
        ]}
      />

      <Header title={data.allWordpressPage.edges[0].node.title} />

      <section
        className="paralax-mf bg-image route"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">
                        {data.allWordpressPage.edges[0].node.acf.form_title}
                      </h5>
                    </div>
                    <div>
                      <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <input type="hidden" name="form-name" value="contact" />
                        {sendMessage ? (
                          <div className="sendmessage">
                            Your message has been sent. Thank you!
                          </div>
                        ) : (
                          ""
                        )}
                        {errorMessage ? (
                          <div className="errormessage">
                            Error sending the message!
                          </div>
                        ) : (
                          ""
                        )}
                        <p hidden>
                          <label>
                            Don’t fill this out:{" "}
                            <input name="bot-field" onChange={handleChange} />
                          </label>
                        </p>
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder={
                                  data.allWordpressPage.edges[0].node.acf
                                    .input_field_name
                                }
                                data-rule="minlen:4"
                                data-msg="Please enter at least 4 chars"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder={
                                  data.allWordpressPage.edges[0].node.acf
                                    .input_field_email
                                }
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder={
                                  data.allWordpressPage.edges[0].node.acf
                                    .input_field_subject
                                }
                                data-rule="minlen:4"
                                data-msg="Please enter at least 8 chars of subject"
                                onChange={handleChange}
                              />
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder={
                                  data.allWordpressPage.edges[0].node.acf
                                    .input_field_message
                                }
                                onChange={handleChange}
                              ></textarea>
                              <div className="validation"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                            >
                              {
                                data.allWordpressPage.edges[0].node.acf
                                  .button_form_text
                              }
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">
                        {
                          data.allWordpressPage.edges[0].node.acf
                            .contact_info_title
                        }
                      </h5>
                    </div>
                    <div className="more-info">
                      <p
                        className="lead"
                        dangerouslySetInnerHTML={{
                          __html:
                            data.allWordpressPage.edges[0].node.acf
                              .contact_info_content,
                        }}
                      />
                      <ul className="list-ico">
                        <li>
                          <FontAwesomeIcon icon={faGlobe} />
                          <span className="ion-ios-location"></span>
                          {data.allWordpressPage.edges[0].node.acf.location}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faPhone} />
                          <span className="ion-ios-telephone"></span>
                          {data.allWordpressPage.edges[0].node.acf.phone}
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faEnvelope} />
                          <span className="ion-email"></span>{" "}
                          {data.allWordpressPage.edges[0].node.acf.email}
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href={
                              data.allWordpressPage.edges[0].node.acf
                                .facebook_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              data.allWordpressPage.edges[0].node.acf
                                .instagram_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <FontAwesomeIcon icon={faInstagram} />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              data.allWordpressPage.edges[0].node.acf
                                .twitter_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <FontAwesomeIcon icon={faTwitter} />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              data.allWordpressPage.edges[0].node.acf
                                .linkedin_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href={
                              data.allWordpressPage.edges[0].node.acf
                                .youtube_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <FontAwesomeIcon icon={faYoutube} />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contactarme

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "contactarme" } }) {
      edges {
        node {
          title
          content
          acf {
            form_title
            contact_info_title
            contact_info_content
            location
            phone
            email
            facebook_url
            instagram_url
            twitter_url
            linkedin_url
            youtube_url
            input_field_name
            input_field_email
            input_field_subject
            input_field_message
            button_form_text
          }
        }
      }
    }
  }
`
