import { Link } from "react-router-dom";

function CommonLayout({children}){

return(
<div>

<nav className="navbar navbar-success bg-success p-3">
<h3 className="text-white">Veggy</h3>

<div>
<Link to="/" className="btn btn-light">Home</Link>
<Link to="/checkout" className="btn btn-light ms-2">Cart</Link>
</div>

</nav>

<div className="container mt-4">
{children}
</div>

</div>
)

}

export default CommonLayout;
