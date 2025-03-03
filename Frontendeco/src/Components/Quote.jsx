import { motion } from "framer-motion";

const Quote = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="py-50 bg-[#1e2d40] text-[#e8e4d9] text-center"
    >
      <blockquote className="text-3xl md:text-4xl font-serif italic">
        "Art is never finished, only abandoned."
      </blockquote>
      <p className="text-lg font-serif mt-4">— Inspired by Leonardo da Vinci</p>
    </motion.section>
  );
};

export default Quote;
