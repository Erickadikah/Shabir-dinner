import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Section1 = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <video autoPlay loop muted className="w-full h-full object-cover transform translate-y-10">
          <source src="/vedio/background.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/images/overlay-pattern.png")',
            opacity: 0.1,
          }}
        ></div>
      </div>
      <div className="container mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          className="mb-8"
        >
          <Typography
            variant="h2"
            component="h1"
            className="text-cyan-300 font-extrabold mb-4"
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "2rem",
                lg: "3rem",
              },
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Indulge your senses in a world of mouthwatering flavors, culinary inspiration.
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-300 mb-4"
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
                lg: "1.5rem",
              },
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            At Shabir Dinner, we believe that good food is not only about taste
            but also about the stories behind it.
            <br />
            Experience the magic of culinary inspiration in every dish we serve.
          </Typography>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Testimonial Section */}
          <div className="bg-gray-900 p-6 rounded-lg md:col-span-1">
            <Typography variant="h5" className="text-white mb-2">
              What Our Customers Say
            </Typography>
            <div className="p-4 bg-gray-800 rounded-lg">
              <Typography variant="body1" className="text-gray-300">
                Absolutely delicious! The food at Shabir Dinner is a culinary delight. Every dish tells a unique story. I love it!
              </Typography>
              <Typography variant="caption" className="text-gray-500 mt-2">
                - John Doe, Food Enthusiast
              </Typography>
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="bg-yellow-600 p-6 rounded-lg md:col-span-1">
            <Typography variant="h5" className="text-white mb-2">
              Ready to Explore?
            </Typography>
            <Typography variant="body1" className="text-gray-800">
              Discover our exquisite menu and experience the magic of culinary inspiration. Order now!
            </Typography>
            <Button
              variant="contained"
              className="bg-white text-yellow-600 font-semibold px-6 py-2 mt-4"
              sx={{
                boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
