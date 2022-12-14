import React from "react";
import AdoptedKittens from "./AdoptedKittens";

export default function AboutUs() {
  return (
    <div class="flex justify-center bg-gradient-to-b from-pink to-cultured">
      <div class="flex flex-wrap justify-center w-5/6 md:w-2/3 lg:w-2/3  ">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div class="bg-cardpaper col-span-1 sm:col-span-3 flex flex-col text-center rounded-lg shadow-lg mt-10">
            <h3 class="flex rounded-t-lg place-content-center justify-center font-medium text-3xl text-white bg-coral opacity-80 p-2">
              About Us
            </h3>
            <div class="p-5 m:p-8 lg:p-10  text-black opacity-80">
              <p class=" mb-3">
                Fullstack Felines is a volunteer run animal adoption center and
                community focused rescue.
              </p>
              <p>
                Our adoption center is friendly, welcoming and open to the
                public. People often say when they visit us, “the animals all
                seem so healthy, calm and happy.” That’s because they are! Our
                team of caring volunteers works with the animals 7 days a week
                and unlike most shelters, they are free to roam and play all
                day. This nurturing approach to socialization directly
                translates into healthy and well-adjusted animals, who make a
                great companions. We understand, however, that just as in the
                human world, not everyone is right for each other, which is why
                we take a personalized approach to the adoption process.
              </p>
            </div>
          </div>

          <div class="bg-cardpaper flex flex-col text-center rounded-lg shadow-lg">
            <h3 class="flex rounded-t-lg place-content-center font-medium text-3xl text-white bg-coral opacity-80 p-2">
              Mission
            </h3>

            <div class="p-5 lg:p-10  text-black opacity-80">
              <p class=" mb-3">
                We are raising funds and promoting initiatives to support the
                community cats that still live on the streets and need our help
                the most. We believe in taking action with urgency in order to
                raise public awareness about some of the most pressing issues
                facing today’s cat population.
              </p>
            </div>
          </div>

          <div class="bg-cardpaper flex flex-col text-center rounded-lg shadow-lg mb-10 col-span-1 sm:col-span-2">
            <h3 class="flex rounded-t-lg place-content-center font-medium text-3xl text-white bg-coral opacity-80 p-2">
              What We Offer
            </h3>

            <div class="p-5 m:p-8 lg:p-10  text-black opacity-80">
              <p class=" mb-3">
                When you adopt an animal from Fullstack Felines, you save a life
                and a space opens up which will welcome another great dog or cat
                and save its life. In addition, besides the obvious advantage of
                saving a life you also get a chance to find a companion who is a
                good match for your personality and lifestyle.
                <p class="mt-2">
                  You will work with trained and experienced adoption counselors
                  who are familiar with the animals and will help you to choose
                  the best pet for your particular situation. We get a
                  tremendous variety of animals: purebreds, mixed breeds, all
                  ages, sizes, colors, and personalities. This will allow you to
                  have the most options when adopting your new lifelong pet.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div class="">
          <span class="font-bold text-3xl sm:text-4xl font-heading text-coral mb-4 flex justify-center mb-8">
            Recent Adoptions
          </span>
        </div>
        <div class="flex flex-row justify-center">
          <AdoptedKittens />
        </div>
        <div class="flex flex-col justify-center">
          <div class="flex justify-center">
            <h3 class="font-bold text-3xl sm:text-4xl font-heading text-coral mb-8">
              Our Team
            </h3>
          </div>
          <div class="grid grid-cols-2 gap-10 sm:gap-2 sm:grid-cols-4 sm:flex sm:content-center sm:items-center mb-24">
            <div class=" w-40 flex justify-center flex-col items-center content-center">
              <img
                class="block h-24 w-24 rounded-full block-center transition duration-300 hover:scale-105"
                src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661203037/IMG_2622_iglwiy.jpg"
                alt="Chani's profile photo"
              />
              <div class="text-center">
                <div class="">
                  <p class="text-md text-black font-semibold">Chani Ngan</p>
                  <p class="text-cafe font-medium px-2 text-sm">
                    Web developer
                  </p>
                </div>
                <div class="flex justify-center">
                  <a
                    class="mx-2 rounded-full border hover:bg-github border-transparent transition duration-300 hover:scale-125"
                    href="https://github.com/chaningan"
                    type="submit"
                  >
                    <img
                      class="w-5 border-none "
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307010/GitHub-Mark-32px_in6mob.png"
                    />
                  </a>
                  <a
                    class="rounded border hover:bg-indeed border-transparent transition duration-300 hover:scale-125"
                    href="https://www.linkedin.com/in/chani-ngan/"
                  >
                    <img
                      class="w-5 border-none"
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307536/558722_kgpq09.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-40 flex justify-center flex-col items-center content-center">
              <img
                class="block h-24 w-24 rounded-full block-center transition duration-300 hover:scale-105"
                src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660882850/linkedinprofilepic_yfubxx.jpg"
                alt="Nico's profile photo"
              />
              <div class="text-center">
                <p class="text-md text-black font-semibold">Nico Francis</p>
                <p class="text-cafe font-medium px-2 text-sm">Web developer</p>
                <div class="flex justify-center">
                  <a
                    class="mx-2 rounded-full border hover:bg-github border-transparent transition duration-300 hover:scale-125"
                    href="https://github.com/nicofrancis"
                    type="submit"
                  >
                    <img
                      class="w-5 border-none "
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307010/GitHub-Mark-32px_in6mob.png"
                    />
                  </a>
                  <a
                    class="rounded border hover:bg-indeed border-transparent transition duration-300 hover:scale-125"
                    href="https://www.linkedin.com/in/nicolo-francis-b683a1173"
                  >
                    <img
                      class="w-5 border-none"
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307536/558722_kgpq09.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-40 flex justify-center flex-col items-center content-center">
              <img
                class="block h-24 w-24 rounded-full block-center transition duration-300 hover:scale-105"
                src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661308830/96214715_mbdq0d.jpg"
                alt="Jayden's profile photo"
              />
              <div class="text-center">
                <p class="text-md text-black font-semibold">Jayden Lundahl</p>
                <p class="text-cafe font-medium px-2 text-sm">Web developer</p>
                <div class="flex justify-center">
                  <a
                    class="mx-2 rounded-full border hover:bg-github border-transparent transition duration-300 hover:scale-125"
                    href="https://github.com/jaydenlundahl"
                    type="submit"
                  >
                    <img
                      class="w-5 border-none "
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307010/GitHub-Mark-32px_in6mob.png"
                    />
                  </a>
                  <a
                    class="rounded border hover:bg-indeed border-transparent transition duration-300 hover:scale-125"
                    href="https://www.linkedin.com/in/jayden-lundahl-40b66a23a/"
                  >
                    <img
                      class="w-5 border-none"
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307536/558722_kgpq09.png"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class=" w-40 flex justify-center flex-col items-center content-center">
              <img
                class="block h-24 w-24 rounded-full block-center transition duration-300 hover:scale-105"
                src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1660855641/42664665_iel3nq.jpg"
                alt="Stephan's profile photo"
              />
              <div class="text-center">
                <p class="text-md text-black font-semibold">Stephan Manley</p>
                <p class="text-cafe font-medium px-2 text-sm">Web developer</p>
                <div class="flex justify-center">
                  <a
                    class="mx-2 rounded-full border hover:bg-github border-transparent transition duration-300 hover:scale-125"
                    href="https://github.com/SMan91"
                    type="submit"
                  >
                    <img
                      class="w-5 border-none "
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307010/GitHub-Mark-32px_in6mob.png"
                    />
                  </a>
                  <a
                    class="rounded border hover:bg-indeed border-transparent transition duration-300 hover:scale-125"
                    href="https://www.linkedin.com/in/stephan-manley-667001248/"
                  >
                    <img
                      class="w-5 border-none"
                      src="https://res.cloudinary.com/dkmoq49jf/image/upload/v1661307536/558722_kgpq09.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
