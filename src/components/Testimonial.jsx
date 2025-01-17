import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"om prakash thakur"}
          feedback={"Your Teaching skills are so good."}
        />

        <TestimonialCard
          name={"Ramzi"}
          feedback={
            "Wow what a portfolio, doesn't expected this to be on youtube!"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src={"https://avatars.githubusercontent.com/omprakash3000"}
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
