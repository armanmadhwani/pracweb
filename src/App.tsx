import React from 'react';
import { motion } from 'framer-motion';
import { VideoSection } from './components/VideoSection';
import { ImageSection } from './components/ImageSection';

function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black flex flex-col items-center justify-start"
    >
      {/* Hero Video Section */}
      <div className="w-full max-w-[1920px]">
        <VideoSection
          src="compilated.mp4"
          aspectRatio="16:9"
          className="h-screen"
        />
      </div>

      {/* Featured Image Section */}
      <div className="w-full max-w-[1280px] px-4">
        <ImageSection
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1280&h=720"
          alt="Creative workspace"
        />
      </div>

      {/* Second Video Section */}
      <div className="w-full max-w-[1920px]">
        <VideoSection
          src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-vlogger-recording-camera-9089-large.mp4"
          aspectRatio="16:9"
        />
      </div>

      {/* Mobile Videos Grid */}
      <div className="w-full max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <VideoSection
          src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-with-smartphone-40832-large.mp4"
          aspectRatio="9:16"
        />
        <VideoSection
          src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-happily-in-a-party-dress-40847-large.mp4"
          aspectRatio="9:16"
        />
        <VideoSection
          src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-modeling-for-camera-34407-large.mp4"
          aspectRatio="9:16"
        />
        <VideoSection
          src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-walking-in-the-city-during-sunset-42909-large.mp4"
          aspectRatio="9:16"
        />
      </div>
    </motion.div>
  );
}

export default App;
