
export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white sticky-top px-3 py-2 border-0 shadow-sm">
            <div className="container-fluid d-flex align-items-center flex-nowrap">
              <a className="navbar-brand text-danger me-2" href="#"><i className="bi bi-pinterest fs-2"></i></a>
              <div className="flex-grow-1 position-relative mx-2">
                <i className="bi bi-search position-absolute top-50 translate-middle-y ms-3 text-secondary"></i>
                <input className="form-control rounded-pill border-0 bg-light py-2 ps-5 shadow-none" placeholder="Search for ideas" />
              </div>
              <div className="d-flex gap-3 align-items-center flex-shrink-0 ms-2">
                <i className="bi bi-bell-fill fs-4 cursor-pointer text-secondary"></i>
                <i className="bi bi-chat-dots-fill fs-4 cursor-pointer text-secondary"></i>
                <img src="https://i.pravatar.cc/150?u=me" className="rounded-circle" width="35" height="35" alt="profile" />
              </div>
            </div>
          </nav>
  )
}
