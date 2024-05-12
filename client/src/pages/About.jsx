import React from "react";

export default function About() {
  window.scrollTo({
    top: 0,
  });

  return (
    <section className="py-16">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-dark-main sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-dark-main transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="pt-1" />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl heading-1 !text-start tracking-tight font-extrabold text-gray-900 dark:text-main sm:text-3xl md:text-4xl">
                  About us
                </h2>
                <p className="text-gray-900 dark:text-main">
                  Donec porttitor, enim ut dapibus lobortis, lectus sem
                  tincidunt dui, eget ornare lectus ex non libero. Nam rhoncus
                  diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel
                  viverra lorem volutpat sodales. In ornare porttitor odio sit
                  amet laoreet. Sed laoreet, nulla a posuere ultrices, purus
                  nulla tristique turpis, hendrerit rutrum augue quam ut est.
                  Fusce malesuada posuere libero, vitae dapibus eros facilisis
                  euismod. Sed sed lobortis justo, ut tincidunt velit. Mauris in
                  maximus eros.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 border-black w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="../images/about.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
