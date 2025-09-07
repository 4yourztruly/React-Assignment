import {Link} from "react-router-dom"
export default function NavBar() {
    return (<>
      <div className="navbar bg-red-500 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-red-500 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <label>Create an article</label>
          <ul className="p-2">
            <li><input type="text" placeholder="Title" className="input" /></li>
            <li><input type="text" placeholder="Body" className="input" /></li>
            <li><input type="text" placeholder="Image source" className="input" /></li>
            <li><button className="btn">Create</button></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">Home</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>Create an article</summary>
          <ul className="p-2">
            <li><input type="text" placeholder="Title" className="input" /></li>
            <li><input type="text" placeholder="Body" className="input" /></li>
            <li><input type="text" placeholder="Image source" className="input" /></li>
            <li><button className="btn">Create</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/MyArticles" className="btn bg-red-500 border-none shadow-none hover:bg-white hover:text-red-500">MyArticles</Link>
  </div>
</div>
    </>)
}