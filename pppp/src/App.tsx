import React, { useState, useEffect, useRef, useCallback } from 'react';
import Aside from './Components/Aside';
import Navbar from './Components/Navbar';
import PinGrid from './Components/MainContent';
import Model from './Components/Model';

interface Pin {
  id: number;
  url: string;
  title: string;
  user: string;
  userImage: string;
  description: string;
}

const PinterestClone: React.FC = () => {
  const [pins, setPins] = useState<Pin[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  // --- Logic: Mock Content ---
  const generateMockContent = (pageNum: number): Pin[] => {
    const variations = [{h: 300}, {h: 700}, {h: 450}, {h: 800}, {h: 550}];
    return Array.from({ length: 15 }, (_, i) => {
      const id = pageNum * 15 + i;
      const size = variations[id % variations.length];
      return {
        id,
        url: `https://picsum.photos/seed/${id}/500/${size.h}`,
        title: `Creative Inspiration ${id}`,
        user: `Artist_${id}`,
        userImage: `https://i.pravatar.cc/150?u=${id}`,
        description: "Exploring vertical masonry layouts in React. #design #vibes",
      };
    });
  };
  const fetchPins = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 600)); 
    const newPins = generateMockContent(page);
    setPins(prev => [...prev, ...newPins]);
    setPage(p => p + 1);
    setLoading(false);
  }, [page, loading]);
  useEffect(() => { fetchPins(); }, []);
  const lastPinRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) fetchPins();
    });
    if (node) observer.current.observe(node);
  }, [loading, fetchPins]);
  return (
    <div className="min-vh-100 bg-white">
  {/* --- Navbar --- */}
      <Navbar />
      <div className="d-flex">
        {/* --- Sidebar --- */}
       <Aside/>
  {/* --- Main Content --- */}
  <PinGrid 
    pins={pins} 
    loading={loading} 
    lastPinRef={lastPinRef} 
    setSelectedPin={(pin: Pin) => setSelectedPin(pin)} 
  />
</div>
      {/* --- Modal --- */}
    return (
  <div className="app-container">
    {selectedPin && (
      <Model 
        selectedPin={selectedPin} 
        onClose={() => setSelectedPin(null)} 
      />
    )}
  </div>
);
    </div>
  );
};
export default PinterestClone;