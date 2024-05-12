import { SelectButton } from "primereact/selectbutton";
import { useState } from "react";
import "primereact/resources/primereact.min.css";
import { Link } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("Classifier");
  const options = ["Classifier", "Correction system"];
  window.scrollTo({
    top: 0,
  });

  return (
    <section className="container-sm min-h-screen mx-auto">
      <div className="flex flex-col items-center text-black pt-10 dark:text-main">
        <h1 className="heading-1">
          AI Yoga Sculpt Classification & Correction using Deep Learning
        </h1>
        <SelectButton
          className="pt-10"
          value={value}
          options={options}
          onChange={(e) => setValue(e.value)}
        />
        <div className="py-10 w-3/4">
          {value === "Classifier" ? (
            <>
              <h2 className="tracking-widest text-center leading-snug pb-5 font-bold text-xl">
                Classifier
                <div className="w-[90px] border border-primary rounded-lg mx-auto" />
              </h2>
              <div>
                <p>
                  This part of the project uses a KNN Classifier to classify the
                  yoga poses. Here we have trained the classified on a limited
                  number of yoga poses. The poses that we have focused on are:
                </p>
                <ul className="list-disc pl-5 pt-3">
                  <li>Tree pose</li>
                  <li>T Pose</li>
                  <li>Warrior II pose</li>
                </ul>
              </div>
              <LinkButton
                title="CNN Classifier Module"
                to="module/classifier"
              />
            </>
          ) : value === "Correction system" ? (
            <>
              <h2 className="tracking-widest text-center leading-snug pb-5 font-bold text-xl">
                Correction system
                <div className="w-[190px] border border-primary rounded-lg mx-auto" />
              </h2>
              <p>
                The Correction system uses angles between specific joints or
                body points, which are calculated from the body points given by
                posenet model. The algithm checks if the angles lie in the
                permisible range. If the practitioner performes yoga incorrectly
                then this is found from angles which are out of defined range
                and user is prompted accordinglt to correct his/her pose.
              </p>
              <LinkButton
                title="Yoga Pose Correction Module"
                to="module/correction"
              />
            </>
          ) : (
            <h2 className="tracking-widest text-center pb-5 font-bold text-xl">
              Kindly select one option.
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;

import React from "react";

function LinkButton({ title, to }) {
  return (
    <div className="flex justify-center md:justify-end">
      <Link
        to={to}
        className="bg-black px-6 py-2 my-10 inline-flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary-light before:to-primary-dark before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
      >
        {title}
      </Link>
    </div>
  );
}
