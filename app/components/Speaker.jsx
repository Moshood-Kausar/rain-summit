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
    bio: "Bolarinwa Kemisola is a distinguished Robotics and Embedded System Engineer with over 13 years of exceptional expertise in the technology sector. She is the Founder and CEO of Nextwear Technologies, Nigeria's pioneering wearable technology startup. Through Nextwear Technologies, Kemisola designs and develops innovative wearable devices that address critical health-related challenges. Among her groundbreaking achievements is the invention of the Smart Bra Cup Diagnostic Device, a wearable solution designed to detect the earliest stages of breast cancer. This revolutionary innovation has garnered global recognition and numerous awards, positioning her as a trailblazer in healthcare technology. Kemisola's passion for leveraging technology to improve lives extends beyond her professional achievements. She is a staunch advocate for STEM education, particularly for girls, working tirelessly to bridge the gender gap in STEM fields. As the President of the Women-in-ICT Foundation, she serves as an influential role model, empowering young women and encouraging their participation in the male-dominated tech industry. Her unwavering dedication to innovation and societal impact has earned her numerous accolades, including induction into the Nigerian Women First Achievers Hall of Fame by the Federal Government of Nigeria. She has been recognized by UN Women for her efforts in promoting gender equality and women empowerment through gender-responsive technology. Kemisola's outstanding achievements have also been celebrated through the Lord's Achievers Award for Best Innovative Excellence in Science, the Standard Chartered Bank Women in Technology Award, and the Origo Canada Innovation Impact Award. She has been honored as a Global SDG Advocate and Practitioner by Alphazulu Advocate, UK, and received the Health Tech Innovation of the Year Award at the Africa Tech Festival. Additionally, her exemplary leadership has led to her inclusion in the Barack Obama Africa Leaders Network and recognition with the Royal African Young Leadership Award. Kemisola is also an Affiliate of the International Telecommunication Union (ITU), further solidifying her role as a global advocate for technological advancement and innovation. Bolarinwa Kemisola's professional journey is a testament to her relentless commitment to advancing technology, promoting gender equality, and driving transformative healthcare innovations.",
  },
  {
    id: 2,
    name: "Dr. Segun Aina",
    position: "Chairman Opolo Global Innovation",
    profile: "/DrSegunAina.jpg",
    bio: "Dr Segun Aina is a global professional banking leader, internationally rated fintech ecosystem builder and respected futurist. With three decades of distinguished banking career in three banks including six-year tenure as Bank Chief Executive Officer, Dr Aina is the inaugural Chairman of Global Banking Education Standards Board (GBEStB), former Chairman of Accion Bank Nigeria, Odua Investment Co Ltd, former Director of First Atlantic Bank Ghana, among other past board positions. He served as 17th President of Chartered Institute of Bankers of Nigeria. He is the founding President and currently Chairman, Board of Trustees of Fintech Association of Nigeria (FINTECHNGR), founding President of the Africa Fintech Network (AFN) , founding member of the Board of Global Fintech Alliance and pioneer Chairman of International Digital Economies Association (IDEA) In these roles, he has championed, coordinated, and led advocacy and initiatives aimed at improving financial and payment systems, banking regulations, financial literacy and innovation in financial services across Africa and globally. As an innovation ecosystem builder, Dr Aina who has been variously described as Africa's Fintech Grandmaster, has incubated a number of successful fintech startups and sits on the Boards of various institutions in Banking, Insurance, Agriculture and Technology sectors. He also serves as a member of the UK- Africa Fintech Investment Group, a UK Govt initiative. Dr Aina's unique contributions to the academic sector includes membership of the pioneer Advancement Board of Obafemi Awolowo University and currently Chairman Advancement Board of Federal University of Technology Akure, co-Chairman National Think Tank on Research for Innovation and Policy (initiative of University of Ibadan Research Foundation of which he is a member) and Member, Osun State University Advancement Board. Dr. Aina is a distinguished alumnus of University of Lagos and University of Ibadan and had executive business education in INSEAD France, Harvard Business School (HBS), IMD Switzerland, and the Lagos Business School (LBS). He is Fellow of London Institute of Banking and Finance, Chartered Institute of Bankers of Nigeria, Charteted nstitute of Directors, Institute of Chartered Arbitrators among others. He holds the Nigeria National honours of Officer of the Order of Federal Republic (OFR) since and has received honorary doctorate degrees from four renowned Universities.",
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
    profile: "/abiodunmusa.jfif",
    bio: "Abiodun Musa AIBINU (Ph.D.), is a highly-motivated career driven achiever with over Eighteen (18) years working experience in the field of: Information and Communication Technology (ICT); Robotics, Mechatronics Engineering, Telecommunication Engineering, Project Management, Spectrum Management, Industrial Automation, Teaching and Research in the field of Artificial Intelligence, ICT and Robotics. He received: National Diploma award from The Polytechnic, Ibadan, Nigeria; BSc degree from Obafemi Awolowo University (OAU), Ile-Ife, Nigeria; M.sc degree from Blekinge Institute of Technology (BTH), Sweden and Doctoral degree from International Islamic University Malaysia, (IIUM), Malaysia. He has been actively involved in teaching, supervision, mentoring and research activities at various universities in Nigeria and Malaysia. He is presently Vice-Chancellor, Chief Executive, and Academic Officer at Summit University, Offa, Kwara state, Nigeria and a research-resource person to: Nigerian Air Force, Nigerian Army, and National Defense Headquarters and other agencies having memorandum of Understanding with FUT Minna. However, prior to venturing into academic field, he has worked with: MTN Communication (Nigeria) Limited; GS Telecom (Nigeria) Limited; DCC Satellite and Networks Limited; Oganla Consulting and Investment (OCI) limited; Communications Associates (COMSAC) (Nigeria) Limited just to mention but a few. Professor Aibinu has participated and won several academics and research awards at various international and national exhibitions and was nominated for 2012 promising researcher award and best teacher award at IIUM Malaysia. He has also won several research grant awards in and outside Nigeria among which include Nigerian Communications Commission research grants for 2014 and 2015; TETFUND Research grants 2013 etc. He has authored and co-authored several publications in both local and international journals and conferences. Some of his published work are highly cited in the academic field.",
  },
  {
    id: 5,
    name: "Pharm Olu Akanmu",
    position: "Ex CEO Opay, Director of Lagos Business School",
    profile: "/Oluakanmu.jfif",
    bio: "Experienced commercial leader with an unusual diversity of experience in consumer goods, manufacturing, healthcare, telecommunications, financial services and Fintech at very senior levels with successful track records. A deep wealth of cross-industry innovative experience invaluable in providing strong strategic leadership and board-governance to organizations. Was President/ Co-CEO of OPay-Nigeria, one of Nigeria's largest Fintech platforms with Unicorn valuation. Successful track records in growing and scaling businesses at executive (C) levels in telecommunications, banking and fintech industries invaluable in providing strategic leadership and governance to businesses at the convergence of these and similar industries. Was Executive Director-Retail Banking, First City Monument Bank; Chief Marketing Officer at Airtel Nigeria (mobile telecoms network with more than 23m subscribers) with responsibility to lead commercial strategy and achieve revenue targets of more than USD 1.5billion annually. Previously Managing Director/ CEO- Retail Banking at former BankPHB. Start-up experience at MTN-Nigeria playing critical roles in the phenomenal growth of MTN-Nigeria to a network in excess of ten million subscribers in its first five years. Was the Chief Architect of the phenomenal success of the MTN brand and consumer marketing strategy in Nigeria, a key reason for the legacy advantage and out-performance of MTN among its peers in the Nigeria telecommunications industry. Multi-industry retail and consumer business expert. Has shown consistent strong adaptive skills to cross to new territories / industry contexts and deliver excellent results. A thought-leader in Strategy, Marketing and Management whose articles and pubic presentations are highly-sought in the consumer business community. A transformational leader, an enterprise digital transformation leader, strong galvanizer of people and organization builder.",
  },
  {
    id: 6,
    name: "Dr Adesola Adeduntan",
    position: "President Sequoia Financial Limited & Fmr CEO First Bank Group",
    profile: "/AdesolaAdeduntan.jfif",
    bio: "Adesola Adeduntan is an accomplished banking transformational leader, with over 30 years experience, who served as the Chief Executive Officer of FirstBank Group between 2016 - 2024 providing strategic leadership to its over 25,000 employees across its Nigerian, African and International businesses. He became the Executive Director/Group Chief Financial Officer of the Bank in July 2014. Under his leadership, FirstBank successfully implemented one of the most comprehensive corporate transformation programs of any bank in Africa, cutting across customer led innovation, building a digitalized bank, repairing its balance sheet, culture change, rebuilding human capital, reinventing HR practices and safeguarding its assets for the digital age. He is widely credited with the turnaround of the FirstBank's fortunes from an ROE position of 0.6% in FY2015 to over 20% in FY2023, increasing profitability from N10bn to N317bn in 2023 and restoring the Bank's credit rating to parity with its peers and sovereign. He led the digital transformation of the Bank growing its number of digital customers from 0.6m to over 23m and number of customer accounts from 10.9m to over 42m. Prior to joining First Bank, he was the pioneer Director, Chief Financial Officer, Business Manager at the African Finance Corporation with overall responsibility for running its Finance and Treasury Division comprising Finance, Controls, Treasury and Funds Management, Banking Operations and Settlement and Information Technology Departments. At AFC, he led the team that designed and delivered the AFC's international investment grade credit rating of A3, which made AFC the second highest rated entity in Africa. He was also previously a Senior Vice-President, Chief Financial Officer of Citibank's Nigerian subsidiary and also a Senior Manager at KPMG. He is a member of the Bretton Woods Committee, a nonpartisan network of prominent global citizens that works to demonstrate the value of international economic cooperation and foster strong, effective Bretton Woods institutions as forces for global well-being. He has an MBA from Cranfield University and was awarded an Honorary Doctorate of Science from the same institution in 2022. His first degree was a Doctor of Veterinary Medicine from the University of Ibadan. He is a Fellow of the Chartered Institute of Bankers and Institute of Chartered Accountants of Nigeria.",
  },
  {
    id: 7,
    name: "Dr Olabunmi Ajala",
    position:
      "National Director National Center for Artificial Intelligence and Robotics (NCAIR)",
    profile: "/bunmiajala.jpg",
    bio: "Dr Bunmi Ajala is a Data Scientist and an Economist with high-level experience providing expertise in national strategy, policies, and programs relating to Artificial Intelligence (AI) Data, Research, and Digital Public Infrastructure. He leverages research and data-driven insights to craft strategies for enhancing productivity using digital technologies. He previously lectured and served as Learning Analytics Lead at the School of Economics, Finance and Accounting, Coventry University (UK) and also facilitated several Data Science training in Nigeria and Namibia. He is a member of the International AI Safety Team, working on the “State of the Science Report,” and was part of the Technological Innovation Group of the AU-EU Research and Innovation Advisory Group for “Mainstreaming Research and Innovation in Africa-European Cooperation”. Also the lead author of the article that used Twitter data to analyse public sentiments about the Africa Free Continental Free Trade Agreement (AfCFTA) and has extensive experience and competence in handling structured and unstructured data and developing Machine Learning algorithms.",
  },
  {
    id: 8,
    name: "Babatunde Fatai",
    position: "Manager, emerging Technologies",
    profile: "/Babatunde.jpeg",
    bio: "Babatunde Fatai is a visionary leader in Africa's emerging technologies ecosystem, driving innovation and digital transformation across the continent. He is currently the emerging Technologies Manager at MTN Nigeria and has worked for and collaborated with multinationals such as PwC and Unilever, he pioneers advancements in AI, spatial computing, cloud computing, and other emerging technologies. A passionate futurist and advocate for youth empowerment and tech adoption, Babatunde hosts the XRAtlas Podcast and founded the African XR Community, inspiring a connected and innovative Africa. ",
  },
  // {
  //   id: 9,
  //   name: "Joshua Olaiya ",
  //   position: "Founder, CEO and Board Chairman ",
  //   profile: "/JoshuaOlaiya.png",
  //   bio: "Joshua Olaiya, Founder, CEO and Board Chairman of iAurora, also Founded the biggest tech podcast/community in Africa with a 20K podcast subcriber and had recently founded Africa's first, only and biggest rocket and drone manufacturing company. He's a young self-taught robotics engineer with seven years of experience. He began coding at 13 with Scratch, Python, and C++, developed my first game and mobile app at 15, and crafted a hand-gesture robot prototype for the disabled at 17. His achievements, including recognition from Tesla, BBC, Deutsche Welle, T-Motor, Silverbird TV, Anybotics, Agility Robotics & notable social media influencers, placed him among the top 200 influencers globally, alongside figures like Bill Gates & other top global leaders. Additionally, He once holds the 18th rank in robotics worldwide by Favikon. His entrepreneurial spirit earned me an entrepreneur programme from the University of Oxford, where he also holds a diploma in electrical and electronic engineering from the U.K, complemented by City and Guild certification.",
  // },
];

export default function Speakers() {
  return (
    <main className="flex flex-col gap-10 py-5 md:py-20" id="speakers">
      <div className="">
        <h3 className="text-primary text-xs md:text-2xl font-medium">
          Speakers
        </h3>

        <div>
          <h4 className="text-dark mt-2.5 text-lg md:text-3xl font-semibold">
            Meet the Visionaries
          </h4>
          <p className="text-sm md:text-lg mt-1.5">{`Thunderous voices of transformation, lightning voices of inspiration. Our lineup of speakers isn't one you want to miss. GUESS WHO?`}</p>
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
          Full speaker lineup
        </Button>
      </div>
    </main>
  );
}
