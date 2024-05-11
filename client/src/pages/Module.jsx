import React, { useRef } from "react";

const poses = [
  {
    name: "Tree Pose",
    src: "../images/tree_pose.jpeg",
  },
  {
    name: "T POSE",
    src: "../images/t_pose.png",
  },
  {
    name: "Warrior II",
    src: "../images/warrior_2.jpg",
  },
];
export default function Module() {
  const imageRef = useRef(null);
  const handleChange = (e) => {
    const selectElement = e.target;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const dataSrcValue = selectedOption.getAttribute("data-src");
    console.log(dataSrcValue);
    imageRef.current.src = dataSrcValue;
  };
  return (
    <section className="container xs:px-5 mx-auto">
      <div className="w-full md:w-1/2 mx-auto pt-5">
        <div className="flex flex-col items-center text-black dark:text-main">
          <h1 className="heading-1">Yoga Pose CNN Classifier</h1>
          <h3 className="py-10 capitalize">
            Please select a pose for practice
          </h3>
          <select
            className="w-full px-3 py-4 text-sm leading-tight bg-white dark:bg-gray-700 dark:text-main border rounded shadow shadow-primary appearance-none outline-primary"
            id="country"
            name="country"
            // ref={selectedCountryRef}
            required
            onChange={handleChange}
          >
            <option disabled selected value="">
              Select Pose
            </option>
            {poses.map((pose) => (
              // <option value={country} selected={country === user.country}>
              //   {country}
              // </option>
              <option value={pose.name} data-src={pose.src}>
                {pose.name}
              </option>
            ))}
          </select>
          <div className="w-full">
            <img
              ref={imageRef}
              src="../images/tree_pose.jpeg"
              alt="pose"
              className="my-5 w-full bg-center bg-cover bg-no-repeat border border-black rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
