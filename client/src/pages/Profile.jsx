import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL, capitalizeFirstChar } from "../utils";
import { capitalizeEveryFirstChar } from "../utils";
import ImageLoader from "../loaders/ImageLoader";
import { format } from "date-fns";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });

    let ignore = false;
    axios
      .get(`${SERVER_URL}/api/user/profile/${id}`)
      .then((response) => {
        if (!ignore) {
          console.log(response.data);
          setUser(response.data);
        }
      })
      .catch((e) => {
        //console.log(e.response?.data?.error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-main dark:bg-dark-main">
      <div className="flex flex-col">
        {/* Cover Image */}
        <ImageLoader
          src={`${user.cover}`}
          alt="User Cover"
          className="w-full xl:h-[20rem] object-cover object-center lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
        />

        {/* Profile Image */}
        <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
          <ImageLoader
            src={user.avatar}
            alt="User Profile"
            className="rounded-md  object-cover object-center lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-primary relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
          />
          {/* FullName */}
          <div className="w-full my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white ">
            <h1 className="text-left lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl">
              {(user.firstName + " " + user.lastName).toUpperCase()}
            </h1>
            <p className="my-3 text-sm">
              Member Since:{" "}
              {format(new Date(user?.dateJoined || 0), "MMM d, y")}
            </p>
          </div>
        </div>
        <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
          {/* Bio */}
          <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
            {user.bio}
          </p>
          {/* Detail */}
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Name
                    </dt>
                    <dd className="text-lg font-semibold">
                      {capitalizeEveryFirstChar(
                        user.firstName + " " + user.lastName
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </dt>
                    <dd className="text-lg font-semibold">{user.email}</dd>
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                  <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Country
                    </dt>
                    <dd className="text-lg font-semibold">
                      {capitalizeFirstChar(user.country)}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}