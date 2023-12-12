import React from "react";
import Pricing from "./projects";
import Link from "next/link";

const PropertyCard = () => {
  return (
    <main
      className="py-6 px-4 sm:p-6 md:py-10 md:px-10"
      style={{
        height: "70vh",
        backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url('/images/location.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overflow: "hidden",
      }}
    >
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 mt-10">
        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            Beach House in Collingwood
          </h1>
          <p class="text-xl leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            Our Location
          </p>
        </div>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="/images/jelof-rice.jpg"
            alt=""
            class="w-full h-80 object-cover sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />

          <img
            src="/images/pilau.jpg"
            alt=""
            class="hidden w-full h-80 object-cover sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-40"
            loading="lazy"
          />

          <img
            src="/images/jelof-2.jpg"
            alt=""
            class="hidden w-full h-80 object-cover md:block lg:row-start-2 lg:col-span-2 lg:h-40"
            loading="lazy"
          />
        </div>
        <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt class="sr-only">Reviews</dt>
          <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              class="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>
              4.89 <span class="text-slate-400 font-normal">(128)</span>
            </span>
          </dd>
          <dt class="sr-only">Location</dt>
          <dd class="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              class="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Nairobi, Kenya
          </dd>
        </dl>
        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
        <Link href="/signin">
        <button
          type="button"
          class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        >
          Get started
        </button>
        </Link>
        </div>
        <p class="mt-4 lg:text-xl sm:text-sm text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-white">
          At Afri Dinner, we take pride in delivering the true essence of
          African cuisine to your table, with a delightful blend of flavors and
          culture. Our restaurant offers a wide range of mouthwatering African
          dishes, featuring a rich tapestry of ingredients and cooking styles
          that represent the diverse regions of the continent. We are pleased to
          bring the same exquisite culinary experience to your doorstep through
          our convenient and reliable delivery service, allowing you to savor
          the authentic tastes of Africa in the comfort of your own home.
        </p>
      </div>
    </main>
  );
};

const Adds = () => {
  return (
    <div>
      <PropertyCard />
      <Pricing />
    </div>
  );
};

export default Adds;

