import React from "react";

export default function Faq() {
  return (
    <div class="flex flex-grow bg-gradient-to-b from-pink to-cultured">
      <div class="h-1/2 wrapper shadow-lg mt-9 bg-cardpaper overflow-hidden mx-auto max-w-md rounded-lg ">
        <h1 class="m-4 p-2 font-bold flex justify-center text-xl text-coral">
          Frequently Asked Questions (FAQ)
        </h1>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="w-full px-4 py-2">
            <details class="mb-4 w-auto">
              <summary class="font-semibold bg-coral rounded-md py-2 px-4 text-white">
                WHAT DO YOUR ADOPTION FEES INCLUDE?
              </summary>
              <p class="pt-4 px-4 text-cafe opacity-80">
                The adoption fee covers the animals spay/neuter, current
                vaccinations, heartworm testing/treatment, feline leukemia and
                FIV testing, and microchip.{" "}
              </p>
              <p class="p-4 text-cafe opacity-80">
                Kittens (under 4 months) have been vaccinated against Distemper,
                Feline Leukemia and Feline AIDS tested, and fecal checked. They
                have been spayed/neutered. The Rabies Vaccination will be given
                when the kitten reaches 4 months. A neuter deposit may be
                necessary when adopting a kitten that is not yet
                spayed/neutered.{" "}
              </p>
            </details>
            <details class="mb-4">
              <summary class="font-semibold bg-coral rounded-md py-2 px-4 text-white">
                IS IT DIFFICULT TO ADOPT?
              </summary>
              <p class="pt-4 px-4 text-cafe opacity-80">
                We have policies for approving adoptions. They are designed to
                ensure that each animal is placed with a responsible person
                prepared to make a lifelong commitment, and to avoid the kinds
                of problems that may have caused the animal to be brought to the
                shelter in the first place.
              </p>
              <p class="p-4 text-cafe opacity-80">
                An important part of the process is to match the lifestyle and
                needs of the adopter with the individual dog or cat. If the
                screening process occasionally seems overly strict, try to
                remember that the shelter’s first priority is to protect the
                animal’s best interests.
              </p>
            </details>
            <details class="mb-4">
              <summary class="font-semibold bg-coral rounded-md py-2 px-4 text-white">
                ARE THERE REQUIREMENTS FOLLOWING THE ADOPTION?
              </summary>
              <p class="pt-4 px-4 text-cafe opacity-80">
                Having a companion animal brings rewards and responsibilities.
                Following your pet’s adoption, you will be responsible for
                making sure your pet is safe and for providing regular
                veterinary care.
              </p>
              <p class="p-4 text-cafe opacity-80">
                Be sure your dog has appropriate identification. Provide
                nutritious food and fresh water for your pet. Make time for
                exercise, training, and play. Finally, enjoy your new life with
                your new loving companion.
              </p>
            </details>
            <details class="mb-4">
              <summary class="font-semibold bg-coral rounded-md py-2 px-4 text-white">
                WHAT IF I HAVE QUESTIONS AFTER I GET MY NEW PET HOME?
              </summary>
              <p class="pt-4 px-4 text-cafe opacity-80">
                We understand that after you get our pet home, the adjustment
                period can be difficult. We encourage you to call us with any
                questions or problems, hopefully, before small problems become
                big ones!
              </p>
              <p class="p-4 text-cafe opacity-80">
                We are very experienced with pet transitions and welcome the
                opportunity to help make it as smooth for you and your pet as
                possible. And even when all is going well, we love getting calls
                just to know how our “alumni” are doing.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
