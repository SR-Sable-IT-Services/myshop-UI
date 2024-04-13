import './Header.css';
function Header() {
  return (
    <div className="menu">
        <table>
            <tr>
                <td><a href="/">Home</a></td>
                <td><a href="/men">Men</a></td>
                <td><a href="/women">Women</a></td>
                <td><a href="/children">Children</a></td>
                <td><a href="/electronics">Electronics</a></td>
                <td><a href="/contact">Contact</a></td>
                <td><a href="/login">Login</a></td>
                <td><a href="/register">Register</a></td>
            </tr>

        </table>

    </div>
  );
}
export default Header;