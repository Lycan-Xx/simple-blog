const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>
                The simple blog
            </h1>

            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/contact">Get in touch</a>

            </div>
        </nav>
    );
}

export default Navbar;