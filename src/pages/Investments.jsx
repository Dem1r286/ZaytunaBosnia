import React from "react";
import HowOurAgencyWork from "../components/Main/Investments page/HowOurAgencyWork";
import HeroRealEstate from "../components/Main/Investments page/HeroRealEstate";
import InvestmentSection from "../components/Main/Investments page/InvestmentSection";
import HeroAgriculture from "../components/Main/Investments page/HeroAgriculture";
import Carousel from "../components/Main/Investments page/Carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";


const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Investments = () => {
  const investmentEducationData = [
    {
      title: "Waqf (Islamic Endowment)",
      description:
        "Establishing or contributing to educational Waqf funds can play a crucial role in supporting education in Bosnia. Waqf allows individuals and organizations to allocate assets, such as land or financial resources, for the perpetual benefit of educational institutions and students. Income generated from these endowments can be used to provide scholarships to underprivileged students, construct or maintain schools and libraries, and offer educational programs. By creating Waqf funds dedicated to education, individuals and organizations can leave a lasting legacy that continually contributes to the development of education in Bosnia.",
      buttonText: "Learn More",
      imageSrc: "/src/assets/education.jpg",
    },
    {
      title: "Scholarship and Grants",
      description:
        "Investing in scholarships and grants is a direct way to empower Bosnian students to pursue higher education and achieve their academic aspirations. These financial aids can alleviate the financial burden on students and their families, covering tuition fees, textbooks, and living expenses. Scholarships and grants can be designed to target students with outstanding academic performance, those from marginalized communities, or those pursuing specific fields of study. By providing such opportunities, investors can help unlock the potential of Bosnian youth and contribute to a more educated and skilled workforce.",
      buttonText: "Learn More",
      imageSrc: "/src/assets/scholarship.jpg",
    },
    {
      title: "Teacher Training and Development",
      description:
        "Enhancing the quality of education in Bosnia hinges on the professional growth of its educators. Investing in teacher training and development programs is instrumental in achieving this goal. Funds can support workshops, seminars, and certifications that help teachers improve their pedagogical skills, adapt to modern teaching methods, and stay updated with educational advancements. By empowering teachers, investors ensure that students receive a high-quality education, fostering a more knowledgeable and skilled workforce for Bosnia's future.",
      buttonText: "Learn More",
      imageSrc: "/src/assets/teachertraining.svg",
    },
    {
      title: "Infrastructure and Technology",
      description:
        "Modernizing educational infrastructure and integrating technology into the learning environment is essential for preparing Bosnia's youth for the challenges of the 21st century. Investment in the construction, renovation, or expansion of schools, colleges, and universities can provide students with safe and conducive spaces for learning. Additionally, providing access to digital resources, such as computers, internet connectivity, and educational software, equips students with vital digital literacy skills. This investment not only improves the educational experience but also enhances Bosnia's competitiveness in a globalized world.",
      buttonText: "Learn More",
      imageSrc: "/src/assets/infrastructure.png",
    },
  ];

  const investmentStartupData = [
    {
      title: "Startup Investment",
      description:
        "Investing in startups in Bosnia presents an exciting opportunity for both local and international investors. To embark on this journey, one can start by researching the vibrant startup ecosystem in Bosnia and Herzegovina. Attend local startup events, network with entrepreneurs, and explore co-working spaces to gain insights into the entrepreneurial landscape. Collaborating with local accelerators and incubators can be instrumental in identifying promising startups for investment. Additionally, seeking legal and financial advice to navigate the regulatory framework and investment procedures is essential. Bosnia welcomes foreign investors, and there are various avenues, such as angel investing, venture capital, and crowdfunding, to engage with startups. By fostering connections within the local entrepreneurial community and staying informed about emerging opportunities, investors can contribute to the growth and innovation of Bosnia's startup ecosystem while potentially reaping the rewards of their investments.",
      imageSrc: "/src/assets/startupinvestment.svg",
    },
    {
      title: "Starting New Businesses",
      description:
        "Starting a new business in Bosnia and Herzegovina is a promising venture in a rapidly evolving market. To embark on this entrepreneurial journey, aspiring business owners should begin with comprehensive market research to identify opportunities and assess demand. Crafting a solid business plan, choosing the right legal structure, and securing financing are pivotal steps. Additionally, selecting an appropriate location, building a competent team, and implementing effective marketing strategies are essential for success. Adherence to legal and regulatory requirements and sound financial management practices are also critical. Bosnia's entrepreneurial ecosystem welcomes innovation and investment, making it an exciting destination for those eager to launch and grow their own businesses.",
      imageSrc: "/src/assets/business.svg",
    },
    {
      title: "Legal and Regulatory Guidance",
      description:
        "Zaytuna is well-equipped to provide invaluable legal and regulatory guidance across a wide spectrum of business domains. With our team of experienced legal experts, we offer comprehensive support to entrepreneurs and organizations, ensuring compliance with local laws and regulations. Whether you are launching a startup, expanding your business, or seeking to navigate complex legal frameworks, we provide tailored solutions to address your specific needs. Our services encompass contract drafting and review, intellectual property protection, licensing, and regulatory compliance assessments. We understand that staying abreast of evolving legal landscapes is crucial for business success, and Zaytuna is committed to helping our clients navigate these complexities with confidence and ease, allowing them to focus on their core operations and growth objectives.",
      imageSrc: "/src/assets/legalguidance.svg",
    },
    {
      title: "Market and Research Analysis",
      description:
        "Zaytuna is your trusted partner for Market Research and Trend Analysis services. Our dedicated team of experts conducts comprehensive research to provide businesses in Bosnia and Herzegovina with a deep understanding of market dynamics and emerging trends. We offer tailored solutions to help you make informed decisions, whether you're launching a new product, expanding your market presence, or seeking investment opportunities. Our services encompass competitor analysis, consumer surveys, market sizing, and trend forecasting. With Zaytuna by your side, you can gain a competitive advantage by staying ahead of market developments, identifying growth prospects, and crafting strategies aligned with the latest trends. We are committed to delivering accurate and actionable market intelligence to drive your business forward in an ever-evolving landscape.",
      imageSrc: "/src/assets/marketresearch.svg",
    },
  ];

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const packageType = searchParams.get("container");
  
    const RealEstateRef = useRef(null);
    const EducationRef = useRef(null);
    const StartupRef = useRef(null);
    const AgricultureRef = useRef(null);
  
    useEffect(() => {
      if (packageType) {
        let targetRef;
        if (packageType === "real-estate") targetRef = RealEstateRef;
        if (packageType === "education") targetRef = EducationRef;
        if (packageType === "startup") targetRef = StartupRef;
        if (packageType === "agriculture") targetRef = AgricultureRef;
    
        if (targetRef?.current) {
          const targetPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
    
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }
    }, [packageType]);
   
  return (
    <div id="investments" className="flex justify-center items-center flex-col">
      <div
        id="real-estate" ref={RealEstateRef}
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/wavesinvestments.svg')" }}
      >
        <HeroRealEstate />

        <HowOurAgencyWork />

        <div className="flex justify-center items-center flex-col py-20 pb-80 w-screen gap-40 mt-30">
          <InvestmentSection
            title="CONSTRUCTION SERVICES"
            description=" Our construction services are synonymous with precision, reliability,
          and craftsmanship. We excel in both residential and commercial
          construction projects, from elegant homes to sophisticated corporate
          spaces. Our commitment to quality is unwavering, and we employ the
          latest construction techniques and materials to ensure durability and
          sustainability. At Zaytuna, we understand that every project is
          unique, and we tailor our approach to meet your specific needs and
          preferences. From concept to completion, our construction services
          embody excellence in every detail, making us your trusted partner for
          turning dreams into reality."
            imageSrc="src/assets/construction.jpg"
            reverseLayout={true}
          />

          <InvestmentSection
            title="INTERIOR DESIGN"
            description="Zaytuna's interior design services are the epitome of creativity and functionality. 
        Our team of skilled interior designers has a knack for transforming spaces into captivating, 
        harmonious environments that reflect your individual style and purpose. Whether it's a cozy 
        home interior or a sophisticated office layout, we take a client-centric approach to curate 
        interiors that resonate with your vision. From selecting the perfect color palette and furnishings
         to optimizing spatial flow and incorporating sustainable design elements, our interior design 
         solutions are tailored to your unique needs. At Zaytuna, we believe that a well-designed interior
          is not only visually stunning but also enhances your daily living or working experience. 
          Discover the artistry of interior design with Zaytuna"
            imageSrc="src/assets/interiordesign.jpg"
          />

          <InvestmentSection
            title="PROPERTY OWNERSHIP"
            description=" Zaytuna is proud to offer specialized Property Ownership Mediation
          Services in Bosnia and Herzegovina. Our team of experienced mediators
          understands the complexities of property disputes in this region and
          is dedicated to facilitating fair and efficient resolutions. Whether
          you're dealing with issues related to land ownership, boundary
          disputes, or property rights, our expert mediators will work
          diligently to find mutually agreeable solutions that align with local
          laws and regulations. At Zaytuna, we are committed to providing a
          supportive and impartial platform for property owners to resolve
          conflicts amicably, ensuring that your property ownership experience
          is as smooth and hassle-free as possible in Bosnia and Herzegovina."
            imageSrc="src/assets/propertyownership.jpg"
            reverseLayout={true}
          />
        </div>
      </div>

      <div
        style={{ backgroundImage: "url('/src/assets/background.svg')" }}
        className="flex justify-center items-center w-screen flex-col gap-60 bg-cover bg-center w-screen">

        <div id="education" ref={StartupRef} 
          className="flex justify-center items-center gap-20 flex-col pt-120">
          <div className="flex flex-col text-center gap-3">
            <p className="font-black text-5xl text-center">
              Empowering Bosnia: Strategic Education Investments
            </p>
            <p>
              Empowering minds with knowledge, fostering innovation, and
              creating opportunities for a brighter future through education.
            </p>
          </div>
          <Carousel investmentData={investmentEducationData} />
        </div>

        <div
          id="startup"  ref={EducationRef}
          className="flex justify-center items-center gap-20 flex-col pb-120">
          <div className="flex flex-col text-center gap-3">
            <p className="font-black text-5xl text-center">
              Supporting Startups: Investing in Bosnia's Future
            </p>
            <p>
              Supporting new businesses with the right resources, fostering
              investment, and driving economic growth for a sustainable future.
            </p>
          </div>
          <Carousel investmentData={investmentStartupData} />
          <Link to="/contact">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-[#22c55e] shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-1 block px-4 py-2 rounded-xl">
                <div className="relative z-1 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Contact Us
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </Link>
        </div>

      </div>

      <div
        id="agriculture" ref={AgricultureRef}
        className="flex flex-col justify-center items-center bg-cover bg-center pb-100"
        style={{
          backgroundImage: "url('/src/assets/agriculturebackground.svg')",
        }}
      >
        <HeroAgriculture />
        <div className="flex flex-col gap-40">
          <InvestmentSection
            title="Food Production"
            description=" Food production in Bosnia and Herzegovina is a burgeoning sector offering enticing 
          opportunities for savvy investors. The country’s favorable agricultural conditions, coupled with 
          its strategic location in Europe, provide a solid foundation for agricultural ventures. As the 
          world’s focus on sustainability and organic products grows, Bosnia and Herzegovina is well-positioned 
          to meet this demand. Investment possibilities range from crop cultivation and livestock farming to
           dairy and meat processing, catering to both domestic and international markets. Embracing modern 
           technologies and sustainable practices can enhance productivity and product quality. Furthermore, 
           the rising consumer interest in locally sourced and organic foods adds to the sector's appeal, 
           making it a promising arena for investors looking to capitalize on this evolving market."
            imageSrc="src/assets/foodproduction.jpg"
            reverseLayout={true}
          />

          <InvestmentSection
            title="Greenhouses"
            description=" Incorporating modern technology into greenhouse agriculture has revolutionized the way
           we cultivate crops. These technologically advanced greenhouses leverage automation, precision agriculture,
            and controlled environments to optimize conditions for plant growth. Through the use of sensors, 
            data analytics, and smart irrigation systems, farmers can closely monitor and regulate factors such 
            as temperature, humidity, and nutrient levels, ensuring ideal conditions year-round. Additionally, 
            the integration of renewable energy sources and efficient climate control systems makes modern greenhouses
             not only highly productive but also environmentally sustainable. This fusion of agriculture and cutting-edge
              technology represents a significant leap forward in our ability to meet the demands of a growing global 
              population while minimizing resource usage and environmental impact."
            imageSrc="src/assets/greenhouse.jpg"
            reverseLayout={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Investments;
