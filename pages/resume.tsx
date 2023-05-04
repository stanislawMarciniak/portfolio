import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import React from "react";

const resume = () => {
  return (
    <div className="px-4 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <p className="font-semibold">
              <a href="https://p.lodz.pl/">
                Lodz University of Technology (first year)
              </a>
            </p>
            <p>
              I am majoring in{" "}
              <i>
                <a href="https://rekrutacja.p.lodz.pl/pl/information-technology-i-stopnia-centrum-ksztalcenia-miedzynarodowego-ife">
                  information technology
                </a>
              </i>{" "}
              at{" "}
              <i>
                <a href="https://www.ife.p.lodz.pl/">IFE</a>
              </i>
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 mt-6 md:grid-cols-2">
        <div>
          <h5 className="my-6 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, id) => (
              <Bar data={language} key={id} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-6 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, id) => (
              <Bar data={tool} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
