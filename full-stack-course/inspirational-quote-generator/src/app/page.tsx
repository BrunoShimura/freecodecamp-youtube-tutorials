'use client'

import React, { useState } from 'react';

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GradientBackgroundCon, RedSpan } from "../../components/QuoteGenerator/QuoteGeneratorElements";

//Assets
import Clouds1 from "../../assets/cloud-and-thunder.png"
import Clouds2 from "../../assets/cloudy-weather.png"

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      {/* Background */}
      
      <GradientBackgroundCon>
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="cloudybackground1"
        />
        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="cloudybackground2"
        />
        <FooterCon>
          <>
            Quotes generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>❤</RedSpan> by <FooterLink 
            href="http://" 
            target="_blank" 
            rel="noopener noreferrer">@Shimura</FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  )
}
