import React, { useEffect, useRef, useState } from "react";
import Camera from "../components/Camera";
import { SelectButton } from "primereact/selectbutton";
import { useUserInfo } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

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
  const { userInfo } = useUserInfo();
  const navigate = useNavigate();

  console.log(userInfo);

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      window.scrollTo({
        top: 0,
      });

      if (!userInfo.email) {
        navigate("/login");
      }
    }

    return () => {
      ignore = true;
    };
  }, []);

  const [selectedPose, setSelectedPose] = useState("");
  const [file, setFile] = useState(undefined);

  const [value, setValue] = useState("Upload File");
  const options = ["Upload File", "Open Webcam"];

  const imageRef = useRef(null);
  const handleChange = (e) => {
    const selectElement = e.target;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const dataSrcValue = selectedOption.getAttribute("data-src");
    console.log(dataSrcValue);
    imageRef.current.src = dataSrcValue;
    setSelectedPose(selectedOption.value);
  };
  return (
    <section className="container xs:px-5 mx-auto min-h-screen">
      <div className="w-full md:w-1/2 mx-auto pt-5">
        <div className="flex flex-col items-center text-black dark:text-main">
          <h1 className="heading-1">"Yoga Pose Correction System"</h1>
          <h3 className="py-10 capitalize">
            Please select a pose for practice
          </h3>
          <select
            className="w-full px-3 py-4 text-sm leading-tight bg-white dark:bg-gray-700 dark:text-main border rounded shadow shadow-primary appearance-none outline-primary"
            id="country"
            name="country"
            // ref={selectedCountryRef}
            required
            defaultValue=""
            onChange={handleChange}
          >
            <option disabled value="">
              Select Pose
            </option>
            {poses.map((pose) => (
              // <option value={country} selected={country === user.country}>
              //   {country}
              // </option>
              <option value={pose.name} key={pose.name} data-src={pose.src}>
                {pose.name}
              </option>
            ))}
          </select>
          <div className="w-full">
            <img
              ref={imageRef}
              // src="../images/tree_pose.jpeg"
              alt="Please select a pose"
              className="my-5 w-full bg-center bg-cover bg-no-repeat border border-black rounded"
            />
            {selectedPose !== "" && (
              <div className="text-center py-20">
                <SelectButton
                  className="pt-10"
                  value={value}
                  options={options}
                  onChange={(e) => setValue(e.value)}
                />
                <div className="mt-5">
                  {value === "Upload File" ? (
                    <>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="file_input"
                      >
                        Upload file
                      </label>
                      <input
                        className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </>
                  ) : value === "Open Webcam" ? (
                    <>
                      <Camera />
                    </>
                  ) : (
                    <h2 className="tracking-widest text-center pb-5 font-bold text-xl">
                      Kindly select an option.
                    </h2>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
