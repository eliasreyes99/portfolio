import "../css/home.css";
import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import SimplePopover from "./SimplePopover";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Alerts from "./Alerts";
export default function Home() {
  const [alert, setAlert] = useState({ description: "", status: "" });
  const [sending, setSending] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_3gcha69",
        "template_minf2rk",
        form.current,
        "hRLAM9mKWOrcWw8nF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert({ description: "Email sent", status: "alert-success" });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setAlert({
            description: "Error to send email",
            status: "alert-error",
          });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };
  return (
    <div id="home" className="home">
      {alert.description && (
        <Alerts description={alert.description} status={alert.status} />
      )}
      <br />
      <div className="card_presentation">
        <div>
          <div className="imagen"></div>
        </div>
        <div className="description">
          <h1>Welcome to my portfolio!</h1>
          <h3>
            I'm a full-stack web developer, and here you'll find some of my
            projects showcasing my skills and experience.
          </h3>
        </div>
      </div>
      <div className="contact">
        <a
          title="Linkedin"
          href="https://www.linkedin.com/in/elias-reyes-gonzalez-873778269/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinIcon size={30} className="linkedin" color="#0A66C2" />
        </a>
        <a
          title="GitHub"
          href="https://github.com/eliasreyes99"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon size={30} className="github" color="#181717" />
        </a>
        <SimplePopover title="Send Mail">
          <div className="sendMail">
            <form ref={form} onSubmit={sendEmail}>
              <section>
                <label>Name</label>
                <input required type="text" name="user_name" />
              </section>
              <section>
                <label>Email</label>
                <input required type="email" name="user_email" />
              </section>
              <section>
                <label>Message</label>
                <textarea required name="message" id="text"></textarea>
              </section>
              <button type="submit" value="Enviar">
                {sending ? "Sending..." : "Send Mail"}
              </button>
            </form>
          </div>
        </SimplePopover>
      </div>
    </div>
  );
}
