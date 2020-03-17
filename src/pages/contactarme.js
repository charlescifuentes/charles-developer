import React from "react"
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

const handleSuccess = e => {
  e.preventDefault()
  console.log("Message sent successfully")
}

const Contactarme = ({ data }) => (
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
                      action={handleSuccess}
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className="contactForm"
                    >
                      <div id="sendmessage">
                        Your message has been sent. Thank you!
                      </div>
                      <div id="errormessage"></div>
                      <input type="hidden" name="bot-field" />
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
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
                              id="email"
                              placeholder="Your Email"
                              data-rule="email"
                              data-msg="Please enter a valid email"
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
                              id="subject"
                              placeholder="Subject"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 8 chars of subject"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              id="message"
                              rows="5"
                              data-rule="required"
                              data-msg="Please write something for us"
                              placeholder="Message"
                            ></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            class="button button-a button-big button-rouded"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="title-box-2 pt-4 pt-md-0">
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
                            data.allWordpressPage.edges[0].node.acf.facebook_url
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
                            data.allWordpressPage.edges[0].node.acf.twitter_url
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
                            data.allWordpressPage.edges[0].node.acf.linkedin_url
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
                            data.allWordpressPage.edges[0].node.acf.youtube_url
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
          }
        }
      }
    }
  }
`
