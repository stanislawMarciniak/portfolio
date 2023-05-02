import { services } from "@/data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        My name is <b>Stanisław</b>! I am a freshman at{" "}
        <i>
          <a href="https://p.lodz.pl/"> University of Technology</a>
        </i>
        (majoring in{" "}
        <i>
          <a href="https://rekrutacja.p.lodz.pl/pl/information-technology-i-stopnia-centrum-ksztalcenia-miedzynarodowego-ife">
            information technology
          </a>
        </i>{" "}
        on{" "}
        <i>
          <a href="https://www.ife.p.lodz.pl/">IFE</a>
        </i>
        ). I love to learn new things and technologies thats why I am looking
        for first work experience. I would like to broaden my horizonts with
        practical knowledge. I am enthusiast of group work and I love to
        experiment with creating new code! I am motivated and ready to work hard
        and develop my coding skills.
      </h5>
      <div className="p-4 mt-5 bg-gray-400">
        <h6>What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
