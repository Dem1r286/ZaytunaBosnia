import React from "react";

const ExploreInvestment = () => {
  const Data = [
    { 
      text: "Welcome to the realm of opportunities in Bosnia's real estate market, where you can discover your dream residence amidst a backdrop of stunning landscapes, rich history, and warm hospitality. Whether you seek a charming countryside villa, a modern apartment in the heart of the bustling cities, or a serene retreat by the crystal-clear lakes, Bosnia offers a diverse range of options to suit every taste and lifestyle. With its affordable prices, favorable investment climate, and a growing market, now is the perfect time to explore the vast potential of Bosnia's real estate sector. Let us guide you on this exciting journey as we unveil the possibilities that await you in finding your perfect home in this remarkable country.",
      urlImage: "./src/assets/realestate.mp4", 
      urlButton: "#",
      heading: "Find Your Dream Residence: Bosnia's Real Estate" 
    },
    { 
      text: "Unlock the potential of agricultural investment and bask in the opportunities that Bosnia's fertile lands and thriving agricultural sector present. Embracing a rich heritage of traditional farming practices combined with modern techniques, Bosnia offers a promising landscape for those seeking to invest in agriculture and farmland. With its diverse climate and abundant natural resources, the country boasts an array of crops, including fruits, vegetables, grains, and livestock.",
      urlImage: "./src/assets/agriculture.mp4", 
      urlButton: "#",
      heading: "Cultivating Success: Investing in Bosnia's Agriculture and Farmland" 
    },
    { 
      text: "Embrace the entrepreneurial spirit by investing in and launching new businesses, tapping into the boundless opportunities that await. Whether you're an aspiring entrepreneur or a seasoned investor, Bosnia offers a fertile ground for innovation and growth, with a supportive business environment, skilled workforce, and strategic location at the crossroads of Europe. From dynamic startups to thriving industries, the potential for success is limitless. Seize the moment and embark on a journey of entrepreneurial fulfillment in Bosnia, where dreams turn into reality and ventures flourish.",
      urlImage: "./src/assets/investment.mp4", 
      urlButton: "#",
      heading: "Seizing the Enterpreneurial Spirit: Investing in and Starting New Businesses" 
    },
    { 
      text: "Invest in knowledge and make a lasting impact through education, driving positive change in Bosnia and beyond. By investing in educational initiatives, whether through scholarships, infrastructure development, or innovative programs, you empower individuals and communities to unlock their full potential and contribute to the progress of society. Education serves as a catalyst for transformation, equipping future leaders, fostering innovation, and building a brighter future. Join the movement of investing in knowledge to create a ripple effect of positive change that will shape the destiny of Bosnia and leave a lasting legacy for generations to come.",
      urlImage: "./src/assets/education.mp4", 
      urlButton: "#",
      heading: "Education for Lasting Impact: Investing in Knowledge to Create Positive Change" 
    }
  ];

  return (
    <div id="explore-investment" className="flex flex-col justify-center items-center px-30 py-20 rounded-2xl">

      <div className="flex justify-center items-center gap-10 mb-36">
        <img src="./src/assets/logo.png" alt="Bosnia Real Estate Logo" className="w-20" />
        <h2 className="font-semibold text-3xl">
          Explore Bosnia's Investment Potential
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center gap-[20vh]">
        {Data.map((item, idx) => (
          item.text && ( 
            <div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-center gap-[10vw] items-center h-[400px]`}>

              <div className="max-w-2xl text-center">
                <div className="flex flex-col justify-center items-center gap-10">
                <p className="font-semibold text-2xl text-gray-800">{item.heading}</p>
                <p className="text-md">{item.text}</p>
                </div>
                {item.urlButton && (
                  <a href={item.urlButton} className="mt-10 inline-block bg-[#22c55e] text-white px-4 py-2 rounded-md hover:bg-[#1a9b61] transition">
                    Learn More
                  </a>
                )}
              </div>
              
              {item.urlImage && (
                <div>
                  <video autoPlay muted loop playsInline src={item.urlImage} alt="Investment Opportunity" className="rounded-2xl max-w-[700px] max-h-[500px]">Your browser does not support the video tag.</video>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ExploreInvestment;


