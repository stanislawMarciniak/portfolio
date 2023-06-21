import { Container } from "@chakra-ui/react";
import contactImg from "/public/assets/img/contact-img.svg";
import Image from "next/image";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        {/* <Row className="align-items-center">
          <Col size={12} md={6}>
            <Image src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};
