import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Section1 = () => {
  return (
    <section className="bg-gradient relative min-h-screen flex items-center text-white">
      <div className="absolute inset-0 z-[-1]">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/vedio/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-opacity-70 bg-black"></div>
      </div>
      <div className="container mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          transition={{
            type: 'spring',
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
                xs: '1.5rem', // Small screens
                sm: '2rem', // Medium screens
                lg: '3rem', // Large screens
              },
            }}
          >
            Indulge your senses in a world of mouthwatering flavors, culinary inspiration.
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-300 mb-4"
            sx={{
              fontSize: {
                xs: '1rem', // Small screens
                sm: '1.25rem', // Medium screens
                lg: '1.5rem', // Large screens
              },
            }}
          >
            At Shabir Dinner, we believe that good food is not only about taste
            but also about the stories behind it.
            <br />
            Experience the magic of culinary inspiration in every dish we serve.
          </Typography>
        </motion.div>
        <Button
          variant="contained"
          className="hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full"
        >
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default Section1;
