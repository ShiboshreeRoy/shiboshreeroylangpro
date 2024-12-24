import React, { useState } from 'react';
import { Box, ArrowRight, Star, Type, Gesture, Video, Image as ImageIcon } from 'lucide-react';
import { DemoSection } from './components/DemoSection';
import {
  AnimatedContainer,
  PhysicsBox,
  TextWriter,
  Text3D,
  SpringText,
  SlideTransition,
  ParallaxScroll,
  RevealOnScroll,
  FloatingElement,
  useTimeline,
  MatrixRain,
  GestureContainer,
  MouseTrailEffect,
  ParallaxImage,
  VideoPlayer,
  Carousel,
  Testimonial,
  Cube3D,
  AnimatedTable,
  AnimatedForm,
  CircleLoader,
  PulseLoader,
  ProgressBar,
  Slider,
} from './lib/shiboshreeroylang';

function App() {
  const [sliderValue, setSliderValue] = useState(50);
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <MouseTrailEffect />
      <MatrixRain className="opacity-10" />

      <ParallaxScroll className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-lg">
        <Text3D className="text-5xl py-8 text-center font-bold">
          Animation Showcase
        </Text3D>
      </ParallaxScroll>

      <div className="max-w-4xl mx-auto p-8 space-y-12 relative z-10">
        <DemoSection title="10. Loading Animations">
          <div className="flex space-x-8 items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Circle Loader</h3>
              <CircleLoader size={50} color="#3B82F6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Pulse Loader</h3>
              <PulseLoader color="#3B82F6" />
            </div>
          </div>
        </DemoSection>

        <DemoSection title="11. GUI Elements">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Progress Bar</h3>
              <ProgressBar progress={progress} className="w-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Slider</h3>
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                className="w-full"
              />
              <p className="mt-2 text-gray-600">Value: {sliderValue}</p>
            </div>
          </div>
        </DemoSection>
      </div>
    </div>
  );
}

export default App;