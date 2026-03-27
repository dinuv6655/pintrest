import React from 'react';

// Pin interface define karein (Same structure jo aapki App.tsx mein hai)
interface Pin {
  id: number;
  url: string;
  title: string;
  user: string;
  userImage: string;
  description: string;
}

// Props ka type define karein
interface PinModalProps {
  selectedPin: Pin;
  onClose: () => void;
}

const PinModal: React.FC<PinModalProps> = ({ selectedPin, onClose }) => {
  return (
    <div className="pin-modal-overlay" onClick={onClose}>
      <div className="pin-modal-container" onClick={e => e.stopPropagation()}>
        <div className="row g-0 h-100 overflow-hidden rounded-5">
          {/* Left Side: Image Section */}
          <div className="col-md-7 bg-light d-flex align-items-center justify-content-center border-end">
            <img 
              src={selectedPin.url} 
              className="img-fluid" 
              style={{ maxHeight: '100%', objectFit: 'contain' }} 
              alt="Large" 
            />
          </div>

          {/* Right Side: Content Section */}
          <div className="col-md-5 p-4 d-flex flex-column bg-white">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex gap-3 fs-5">
                <i className="bi bi-three-dots cursor-pointer"></i>
                <i className="bi bi-upload cursor-pointer"></i>
              </div>
              <button className="btn btn-danger rounded-pill px-4 fw-bold shadow-sm">Save</button>
            </div>

            <h2 className="fw-bold fs-3">{selectedPin.title}</h2>
            <p className="text-muted mt-2">{selectedPin.description}</p>

            <div className="mt-4 d-flex align-items-center border p-3 rounded-4">
              <img src={selectedPin.userImage} className="rounded-circle me-3" width="45" height="45" alt="u" />
              <div>
                <h6 className="mb-0 fw-bold">{selectedPin.user}</h6>
                <small className="text-muted">12.5k followers</small>
              </div>
              <button className="btn btn-light rounded-pill ms-auto fw-bold px-3">Follow</button>
            </div>

            {/* Comment Section */}
            <div className="mt-auto border-top pt-3">
              <div className="d-flex align-items-center gap-2">
                <img src="https://i.pravatar.cc/150?u=me" className="rounded-circle" width="32" height="32" alt="me" />
                <input className="form-control rounded-pill border-0 bg-light py-2" placeholder="Add a comment" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Close Button */}
        <button className="modal-close-btn shadow" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default PinModal;