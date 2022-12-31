function Navbar() {
  return (<div className="parent">
    <div className="child1">
      <h1>facebook</h1>
      <p>Connect with friends in the world around you on Facebook.</p>
    </div>

    <div className="child2">
      <form>
        <input type="text" placeholder="E-mail or Phone Number" required />
        <input type="password" placeholder="Password" required />
        <button id="btn1">log in</button>
        <button id="btn2">Forget account?</button>
        <button id="btn3">Create New Account</button>
      </form>
      <p><strong>Create a Page</strong> for a celebrity, band or business.</p>
    </div>
  </div>
  )
}
export default Navbar;