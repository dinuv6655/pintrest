import React from 'react';

// Types define karein
interface Pin {
  id: number;
  url: string;
  title: string;
  user: string;
  userImage: string;
  description: string; // <-- Ye line missing hogi, ise add karein
}

interface PinGridProps {
  pins: Pin[];
  loading: boolean;
  lastPinRef: (node: HTMLDivElement | null) => void;
  setSelectedPin: (pin: Pin) => void;
}
const PinGrid: React.FC<PinGridProps> = ({ pins, loading, lastPinRef, setSelectedPin }) => {
  return (
    <main className="flex-grow-1 p-2 p-md-4">
      <div className="pinterest-masonry">
        {pins.map((pin, index) => (
          <div 
            key={`${pin.id}-${index}`} 
            ref={index === pins.length - 1 ? lastPinRef : null}
            className="pin-item"
            onClick={() => setSelectedPin(pin)}
          >
            <div className="pin-card-wrapper">
              <img src={pin.url} className="pin-img" alt={pin.title} loading="lazy" />
              <div className="pin-hover-overlay">
                <button className="btn btn-danger btn-sm rounded-pill px-3 fw-bold shadow-sm align-self-end">Save</button>
                <div className="d-flex justify-content-end gap-2 mt-auto">
                   <div className="icon-circle"><i className="bi bi-upload"></i></div>
                   <div className="icon-circle"><i className="bi bi-three-dots"></i></div>
                </div>
              </div>
            </div>
            <div className="mt-2 d-flex align-items-center gap-2 px-1">
              <img src={pin.userImage} className="rounded-circle" width="28" height="28" alt="u" />
              <span className="small fw-semibold text-truncate">{pin.user}</span>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-danger"></div>
        </div>
      )}
    </main>
  );
};

export default PinGrid;