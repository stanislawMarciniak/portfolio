import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "/public/assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Image from "next/image";

export const Banner = ({ id }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Fullstack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const handleSmoothScroll = (event, target) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });

      const path = window.location.pathname;
      const hash = target.slice(1);
      const url = path + "#" + hash;
      window.history.pushState(null, "", url);
    }
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id={id}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>{`Hi! I'm Stasiek`}</h2>
                  <h2>
                    <span className="txt-rotate">
                      <span className="inline-block wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    My name is <b>Stanisław</b>! I am a freshman at University
                    of Technology. I love to learn new things and technologies
                    thats why I am looking for first work experience as a{" "}
                    <b>Fullstack Developer</b>. I would like to broaden my
                    horizonts with practical knowledge. I am motivated and ready
                    to work hard and develop my coding skills.
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                  >
                    <button>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
