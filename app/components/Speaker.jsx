"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../globals.css";
import { Button } from "./shared/Button";

export const speakerList = [
  {
    id: 1,
    name: " Kemisola Bolarinwa",
    position: "Founder/CEO Nextwear Technologies",
    profile: "/Kemisola.jpeg",
    bio: "",
  },
  {
    id: 2,
    name: "Dr. Segun Aina",
    position: "Chairman Opolo Global Innovation",
    profile: "/DrSegunAina.jpg",
    bio: "",
  },
  {
    id: 3,
    name: "Dr. Bosun Tijani",
    position:
      "Minister of Communications, Innovation and Digital Economy, Nigeria",
    profile: "/Bosun-Tijani.jpg",
    bio: "Dr. Bosun Tijani is the Minister of Communications, Innovation and Digital Economy of the Federal Republic of Nigeria. He is the co-founder and former CEO of Co-Creation Hub (CcHUB), the leading pan-African technology and innovation center with presence in Nigeria, Kenya, Rwanda and Namibia. Under his leadership, CcHUB became a vital catalyst for the African tech ecosystem, promoting collaboration, knowledge sharing and the development of groundbreaking solutions to local and global challenges. Prior to CcHUB, he led the networking and coordination of innovation agencies across Europe as European Innovation Manager at PERA, and also previously worked at the International Trade Centre, in Geneva Switzerland. Dr. Tijani holds a Bachelor's Degree in Economics from the University of Jos, a Masters degree in Information Systems and Management from Warwick University and a Doctorate degree in Innovation and Economic Development from the University of Leicester. He is a member of Board of Trustees of the United Nations Institute for Training and Research (UNITAR) and the International Telecommunications Union (ITU) Digital Innovation Board for the Innovation and Entrepreneurship Alliance for Digital Development",
  },
  {
    id: 4,
    name: "Professor Abiodun Musa Aibinu",
    position: "Vice Chancellor of Summit University",
    profile: "/abiodunmusa.jpg",
    bio: "Abiodun Musa AIBINU (Ph.D.), is a highly-motivated career driven achiever with over Eighteen (18) years working experience in the field of: Information and Communication Technology (ICT); Robotics, Mechatronics Engineering, Telecommunication Engineering, Project Management, Spectrum Management, Industrial Automation, Teaching and Research in the field of Artificial Intelligence, ICT and Robotics. He received: National Diploma award from The Polytechnic, Ibadan, Nigeria; BSc degree from Obafemi Awolowo University (OAU), Ile-Ife, Nigeria; M.sc degree from Blekinge Institute of Technology (BTH), Sweden and Doctoral degree from International Islamic University Malaysia, (IIUM), Malaysia. \n He has been actively involved in teaching, supervision, mentoring and research activities at various universities in Nigeria and Malaysia. He is presently Vice-Chancellor, Chief Executive, and Academic Officer at Summit University, Offa, Kwara state, Nigeria and a research-resource person to: Nigerian Air Force, Nigerian Army, and National Defense Headquarters and other agencies having memorandum of Understanding with FUT Minna. \n However, prior to venturing into academic field, he has worked with: MTN Communication (Nigeria) Limited; GS Telecom (Nigeria) Limited; DCC Satellite and Networks Limited; Oganla Consulting and Investment (OCI) limited; Communications Associates (COMSAC) (Nigeria) Limited just to mention but a few. \n Professor Aibinu has participated and won several academics and research awards at various international and national exhibitions and was nominated for 2012 promising researcher award and best teacher award at IIUM Malaysia. He has also won several research grant awards in and outside Nigeria among which include Nigerian Communications Commission research grants for 2014 and 2015; TETFUND Research grants 2013 etc. He has authored and co-authored several publications in both local and international journals and conferences. Some of his published work are highly cited in the academic field.",
  },
  {
    id: 5,
    name: "Pharm Olu Akanmu",
    position: "Ex CEO Opay, Director of Lagos Business School",
    profile: "/Oluakanmu.jpg",
    bio: "",
  },
  {
    id: 6,
    name: "Dr Adesola Adeduntan",
    position: "President Sequoia Financial Limited & Fmr CEO First Bank Group",
    profile: "/AdesolaAdeduntan.jpg",
    bio: "",
  },
  {
    id: 7,
    name: "Dr Olabunmi Ajala",
    position:
      "National Director National Center for Artificial Intelligence and Robotics (NCAIR)",
    profile: "/bunmiajala.jpg",
    bio: "",
  },
  {
    id: 8,
    name: "Babatunde Fatai",
    position: "Manager, Emerging Technologies",
    profile: "/Babatunde.jpeg",
    bio: "Babatunde Fatai is a visionary leader in Africa's emerging technologies ecosystem, driving innovation and digital transformation across the continent. He is currently the emerging Technologies Manager at MTN Nigeria and has worked for and collaborated with multinationals such as PwC and Unilever, he pioneers advancements in AI, spatial computing, cloud computing, and other emerging technologies. A passionate futurist and advocate for youth empowerment and tech adoption, Babatunde hosts the XRAtlas Podcast and founded the African XR Community, inspiring a connected and innovative Africa. ",
  },
  // {
  //   id: 9,
  //   name: "Joshua Olaiya ",
  //   position: "Founder, CEO and Board Chairman of iAurora",
  //   profile: "/JoshuaOlaiya.png",
  //   bio: "Joshua Olaiya, Founder, CEO and Board Chairman of iAurora, also Founded the biggest tech podcast/community in Africa with a 20K podcast subcriber and had recently founded Africa's first, only and biggest rocket and drone manufacturing company. He's a young self-taught robotics engineer with seven years of experience. He began coding at 13 with Scratch, Python, and C++, developed my first game and mobile app at 15, and crafted a hand-gesture robot prototype for the disabled at 17. \n His achievements, including recognition from Tesla, BBC, Deutsche Welle, T-Motor, Silverbird TV, Anybotics, Agility Robotics & notable social media influencers, placed him among the top 200 influencers globally, alongside figures like Bill Gates & other top global leaders. \n Additionally, He once holds the 18th rank in robotics worldwide by Favikon. His entrepreneurial spirit earned me an entrepreneur programme from the University of Oxford, where he also holds a diploma in electrical and electronic engineering from the U.K, complemented by City and Guild certification.",
  // },
];

export default function Speakers() {
  return (
    <main className="flex flex-col gap-10 pt-5 md:pt-20" id="speakers">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Speakers
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Meet the Visionaries
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Thunderous voices of transformation, lightning voices of inspiration. Our lineup of speakers isn't one you want to miss.`}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper flex h-auto w-full"
        >
          {speakerList.map((speaker) => (
            <SwiperSlide
              key={speaker.id}
              className="swiper-slide flex flex-col items-center"
            >
              <div className="h-80 w-full relative">
                <Image
                  src={speaker.profile}
                  alt={`Profile of ${speaker.name}`}
                  fill
                  className="object-cover h-80 rounded-lg"
                />
              </div>
              <div className="mt-3 text-center">
                <h2 className="text-black text-sm md:text-lg font-bold">
                  {speaker.name}
                </h2>
                <p className="text-gray-700 text-xs md:text-sm">
                  {speaker.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button variant="primary" href="/speakers" className="!px-8 lg:mt-5">
          Full Speaker Lineup
        </Button>
      </div>
    </main>
  );
}
