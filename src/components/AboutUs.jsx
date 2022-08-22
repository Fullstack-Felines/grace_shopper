import React from "react";
import AdoptedKittens from "./AdoptedKittens";

export default function AboutUs() {
  return (
    <div class=" flex justify-center content-center  ">
      <div class="m-3 bg-brass flex flex-wrap  content-center justify-center w-5/6 md:w-4/5 lg:w-2/3">
        <h3 class="flex items-center place-content-center font-medium leading-tight text-6xl mb-2 text-cafe bg-red w-full h-28">
          About Us
        </h3>
        <div class="">
          <div class="bg-red m-6 p-5 flex flex-col text-center">
            <p class="mb-3">
              Fullstack Felines is a volunteer run animal adoption center and
              community focused rescue.
            </p>
            <p>
              Our adoption center is friendly, welcoming and open to the public.
              People often say when they visit us, “the animals all seem so
              healthy, calm and happy.” That’s because they are! Our team of
              caring volunteers works with the animals 7 days a week and unlike
              most shelters, they are free to roam and play all day. This
              nurturing approach to socialization directly translates into
              healthy and well-adjusted animals, who make a great companions. We
              understand, however, that just as in the human world, not everyone
              is right for each other, which is why we take a personalized
              approach to the adoption process.
            </p>
          </div>
          <h3 class="flex items-center place-content-center font-medium text-4xl mb-2 text-cafe bg-red w-full h-20">
            Mission Statement
          </h3>
          <div class="bg-red m-6 p-5 flex flex-col text-center">
            <p>
              We are raising funds and promoting initiatives to support the
              community cats that still live on the streets and need our help
              the most. We believe in taking action with urgency in order to
              raise public awareness about some of the most pressing issues
              facing today’s cat population. Please join us by supporting our
              efforts to make a measurable difference in the lives of these
              precious felines.
            </p>
          </div>
          <h3 class="flex items-center text-center place-content-center font-medium leading-tight text-4xl mb-2 text-cafe bg-red w-full h-20">
            What We Offer
          </h3>
          <div class="bg-red m-6 p-5 flex flex-col text-center">
            <p>
              When you adopt an animal from Fullstack Felines, you save a life
              and a space opens up which will welcome another great dog or cat
              and save its life. In addition, besides the obvious advantage of
              saving a life you also get a chance to find a companion who is a
              good match for your personality and lifestyle. You will work with
              trained and experienced adoption counselors who are familiar with
              the animals and will help you to choose the best pet for your
              particular situation. We get a tremendous variety of animals:
              purebreds, mixed breeds, all ages, sizes, colors, and
              personalities. This will allow you to have the most options when
              adopting your new lifelong pet.
            </p>
          </div>
        </div>

        <h3 class="m-3 font-medium leading-tight text-3xl mt-0 mb-2 text-brass ">
          Our Team
        </h3>

        <div class="flex flex-wrap w-full">
          <div class="mb-4 py-8 px-8 max-w-sm mx-auto bg-stone-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm-space-x-6">
            <img
              class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660855641/42664665_iel3nq.jpg"
              alt="default-profile-photo"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold px-2 mx-0.5">
                  Stephan Manley
                </p>
                <p class="text-slate-500 font-medium px-2 mx-0.5">
                  Web developer
                </p>
              </div>
              <button class="px-4 py-1 mx-2 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-emerald-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Github
              </button>
              <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                LinkedIn
              </button>
            </div>
          </div>

          <div class="mb-4 py-8 px-8 max-w-sm mx-auto bg-stone-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm-space-x-6">
            <img
              class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661203037/IMG_2622_iglwiy.jpg"
              alt="default-profile-photo"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold px-2 mx-0.5">
                  Chani Ngan
                </p>
                <p class="text-slate-500 font-medium px-2 mx-0.5">
                  Web developer
                </p>
              </div>
              <button class="px-4 py-1 mx-2 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-emerald-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Github
              </button>
              <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                LinkedIn
              </button>
            </div>
          </div>
          <div class="mb-4 py-8 px-8 max-w-sm mx-auto bg-stone-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm-space-x-6">
            <img
              class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660882850/linkedinprofilepic_yfubxx.jpg"
              alt="default-profile-photo"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold px-2 mx-0.5">
                  Nico Francis
                </p>
                <p class="text-slate-500 font-medium px-2 mx-0.5">
                  Web developer
                </p>
              </div>
              <button class="px-4 py-1 mx-2 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-emerald-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Github
              </button>
              <button class="px-4 py-1 text-sm text-blue-500 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                LinkedIn
              </button>
            </div>
          </div>
          <div class="mb-4 py-8 px-8 max-w-sm mx-auto bg-stone-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm-space-x-6">
            <img
              class="block mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://res.cloudinary.com/dg5jk9pui/image/upload/v1656364165/IMG_2256_dfapat.jpg"
              alt="default-profile-photo"
            />
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg text-black font-semibold px-2 mx-0.5">
                  Jayden Lundahl
                </p>
                <p class="text-slate-500 font-medium px-2 mx-0.5">
                  Web developer
                </p>
              </div>
              <button class="px-4 py-1 mx-2 text-sm text-green-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-emerald-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Github
              </button>
              <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                LinkedIn
              </button>
            </div>
          </div>
        </div>
        <div>
          <AdoptedKittens />
        </div>
      </div>
    </div>
  );
}
