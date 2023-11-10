import React from "react";

const Services = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[85vh] object-cover transform translate-y-10 z-[-1]"
      >
        <source src='/vedio/production2.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0">
        {/* Overlay with linear gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8))',
          }}
        />
      </div>
      <div className="container mx-auto relative z-10 h-full">
        <h2 className="text-3xl text-center font-semibold text-black mb-12">
          Let&rsquo;s do it together
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <ServiceCard
            image="/images/icon-service-1.svg"
            title="Branding & Digital Strategies"
            description="Brand strategy is all about developing a unique identity that distinguishes your business from"
          />
          <ServiceCard
            image="/images/icon-service-2.svg"
            title="Web Design & App Development"
            description="Web design & development is an umbrella term that describes the process of creating a website"
          />
          <ServiceCard
            image="/images/icon-service-3.svg"
            title="Results-Driven Digital Marketing"
            description="Digital marketing potential customers using the internet & other forms of digital communication"
          />
          <ServiceCard
            image="/images/icon-service-4.svg"
            title="Custom Software Development"
            description="Custom Software Development is the process of conceptualizing, designing, building & deploying"
          />
          {/*<ServiceCard
            image="/images/icon-service-5.svg"
            title="Social Media Marketing"
            description="Social media marketing is the use of social media platforms to connect with your audience to"
        />*/}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description }) => {
  return (
    <>
      <div className="bg-gray-100 shadow-lg p-4 rounded-lg transform hover:scale-105 transition-transform">
        <img src={image} alt="icon" className="w-16 h-16 mx-auto" />
        <h3 className="text-xl font-semibold text-black mt-4">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <span className="text-blue-500 hover:underline block mt-4">
          Find out more
        </span>
      </div>
    </>
  );
};

export default Services;
