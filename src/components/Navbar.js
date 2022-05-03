export default function Navbar () {

  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      

      <a href="#" class="navbar-brand">Brand</a>
      
     <button
        type="button"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>


      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div class="navbar-nav">
          <a href="#" class="nav-item nav-link active">Home</a>
          <a href="#" class="nav-item nav-link">Profile</a>
          

          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Messages</a
            >
            <div class="dropdown-menu">
              <a href="#" class="dropdown-item">Inbox</a>
              <a href="#" class="dropdown-item">Sent</a>
              <a href="#" class="dropdown-item">Drafts</a>
            </div>
          </div>
        </div>


        <form class="d-flex ms-auto">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" />
            <button type="button" class="btn btn-secondary">
              <i class="bi-search"></i>
            </button>
          </div>
        </form>

      </div>
    </div>
  </nav>
  )
}