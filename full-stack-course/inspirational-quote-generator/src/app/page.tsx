'use client'

import React, { useState } from 'react';

// Components
import { BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorModalCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan } from "../../components/QuoteGenerator/QuoteGeneratorElements";

//Assets
import Clouds1 from "../../assets/cloud-and-thunder.png"
import Clouds2 from "../../assets/cloudy-weather.png"

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      {/* Background */}
      
      <GradientBackgroundCon>

        {/* Quote generator Modal Pop-Up */}
        <QuoteGeneratorModalCon/>

        {/* Quote generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by 
              <FooterLink href="">
                ZenQuotesAPI
              </FooterLink>
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
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

        {/* Footer */}
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
