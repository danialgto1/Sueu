/** @format */

import React from "react";
import Title from "./Title";

import { TweetCard } from "react-tweet-card";

const numbe = [1, 2, 3, 4, 5, 6, 7, 8];
const number = [1, 2];
function WhatTheySay() {
  return (
    <div className="flex gap-8 justify-center items-center flex-col ">
      <Title
        title="What they say "
        body="Discover what our users have to say about their experiences with SueU. Read real testimonials from satisfied customers who have benefited from our easy-to-use platform and streamlined legal solutions."
      />
      <div className="w-1/2">
        <div className="">
          {number.map((n) => (
            <TweetCard
              id="tweet"
              key={n}
              className=" shadow-md h-96 "
              engagement={{
                replies: 206,
                retweets: 17600,
                likes: 128200,
              }}
              emojis={true} // try setting this to true 👀
              showDetails={true} // try setting this to true 😬
              author={{
                name: "Ethan Hardy",
                username: "ethanhardy",
                image: "/images/Lawyers/3.png",
              }}
              tweet={`Just used @SueU for the first time to generate a legal template, and I'm blown away by how easy and quick it was! No more stress over legal paperwork. #SueU #LegalMadeSimple`}
              time={new Date(2021, 11, 21, 14, 6)}
              source="Twitter for iPhone"
              permalink="https://twitter.com/ethanhardy/status/1473278732676837382"
              theme="light"
              fitInsideContainer={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatTheySay;
