const NavBar = ({ cartCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <span className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true">
          Cart:
        </span>
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {cartCounter}
        </span>
        Items
      </div>
    </nav>
  );
};

export default NavBar;
