import React from "react";
import AdoptedKittens from "./AdoptedKittens";

export default function AboutUs() {
  return (
    <div>
      <h3>About Us</h3>
      <p>
        Fullstack Felines is a volunteer run animal adoption center and
        community focused rescue located in Los Angeles, California.
      </p>
      <p>
        Our adoption center is friendly, welcoming and open to the public.
        People often say when they visit us, “the animals all seem so healthy,
        calm and happy.” That’s because they are! Our team of caring volunteers
        works with the animals 7 days a week and unlike most shelters, they are
        free to roam and play all day. This nurturing approach to socialization
        directly translates into healthy and well-adjusted animals, who make a
        great companions. We understand, however, that just as in the human
        world, not everyone is right for each other, which is why we take a
        personalized approach to the adoption process.
      </p>
      <h3>Mission Statement</h3>
      <p>
        We are raising funds and promoting initiatives to support the community
        cats that still live on the streets and need our help the most. We
        believe in taking action with urgency in order to raise public awareness
        about some of the most pressing issues facing today’s cat population.
        Please join us by supporting our efforts to make a measurable difference
        in the lives of these precious felines.
      </p>
      <h3>What We Offer</h3>
      <p>
        Our store has a wide variety of kittens, anything your looking for you
        can find here! If you have any special requests please contact us!
      </p>
      <h3>Our Team</h3>
      <ul>
        <li>Stephan</li>
        <li>Chani</li>
        <li>Nico</li>
        <li>Jayden</li>
      </ul>
      <AdoptedKittens />
    </div>
  );
}
