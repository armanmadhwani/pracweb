import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface VideoSectionProps {
  src: string;
  aspectRatio: "16:9" | "9:16";
  className?: string;
}

export function VideoSection({ src, aspectRatio, className = '' }: VideoSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full flex items-center justify-center ${aspectRatio === "16:9" ? "aspect-video" : "aspect-[9/16]"} ${className}`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="./compilated.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
