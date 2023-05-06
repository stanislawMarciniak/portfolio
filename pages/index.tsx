import { services } from "@/data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        My name is <b>Stanisław</b>! I am a freshman at{" "}
        <i>
          <a href="https://p.lodz.pl/"> University of Technology</a>
        </i>
        . I love to learn new things and technologies thats why I am looking for
        first work experience. I would like to broaden my horizonts with
        practical knowledge. In my free time I like reading economy books and
        playing chess! I am motivated and ready to work hard and develop my
        coding skills.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-green-700 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide text-gray-50">
          What I Offer
        </h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, id) => (
            <div
              key={id}
              className="col-span-2 p-2 rounded-lg bg-green-50 dark:bg-dark-200 md:col-span-1 "
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
