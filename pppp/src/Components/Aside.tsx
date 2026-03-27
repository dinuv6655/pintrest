

// Iska naam 'Aside' rakhein (Capital A)
export default function Aside() {
  return (
    <aside className="sidebar-container d-none d-lg-flex flex-column align-items-center py-4 bg-white border-end">
      <div className="d-flex flex-column gap-5 text-dark">
        <div className="sidebar-icon active">
          <i className="bi bi-house-door-fill fs-4"></i>
        </div>
        <div className="sidebar-icon">
          <i className="bi bi-compass fs-4"></i>
        </div>
        <div className="sidebar-icon">
          <i className="bi bi-plus-circle-fill fs-4"></i>
        </div>
        <div className="mt-auto mb-4 sidebar-icon">
          <i className="bi bi-gear-fill fs-4 text-secondary"></i>
        </div>
      </div>
    </aside>
  );
}