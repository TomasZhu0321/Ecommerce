import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about"></PageHero>
      <Wrapper className="page section section-center">
        <img src={aboutImg}></img>
        <article>
          <div className="title">
            <h2>hidden meaning within your furniture</h2>
            <div className="underline"></div>
          </div>
          <p>
            Furniture contains numerous traces of what we are and who we are and
            who we think we are. Cupboards, for example, contain our past - as
            well as our regrets and secrets. Keys which fit no locks, pieces of
            paper with obsolete phone numbers and pin numbers written on them,
            stray playing cards, inexplicable plastic things and old French
            francs. Why we keep any of this stuff I do not know, except as
            something to hand on to our own children, to keep in cupboards of
            their own - our endless inheritance of waste.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
