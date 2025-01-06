import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ImageSectionProps {
  src: string;
  alt: string;
}

export function ImageSection({ src, alt }: ImageSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[720px] relative overflow-hidden flex items-center justify-center"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}