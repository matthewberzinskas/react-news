import { useState } from "react";

export default function Navbar(props) {
  console.log("navBar props", props);

  const [value, setValue] = useState("");

  // When the form is submitted, pass the search term
  // to the callback function, reset the value.
  const onSubmit = (e) => {
    e.preventDefault()
    props.callBack(value);
    setValue("")
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          React News
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          {/* <div class="navbar-nav">
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Messages
              </a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">
                  Inbox
                </a>
                <a href="#" class="dropdown-item">
                  Sent
                </a>
                <a href="#" class="dropdown-item">
                  Drafts
                </a>
              </div>
            </div>
          </div> */}

          <form className="d-flex ms-auto" onSubmit={onSubmit}>
            <div className="input-group p-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={e => setValue(e.target.value)}
                value={value}
              />

              <button
                className="btn btn-secondary"
                type="submit"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
