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
                xs: '1.8rem',
                sm: '2rem',
                lg: '3rem',
              },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow
            }}
          >
            Indulge your senses in a world of mouthwatering flavors, culinary inspiration.
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-300 mb-4"
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1.25rem',
                lg: '1.5rem',
              },
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Text shadow
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
          sx={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Text shadow
          }}
        >
          Order Now
        </Button>
      </div>
    </section>
  );
};

export default Section1;
