import './Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)


function Header() {
  return (
    <div className="menu">
        <table>
            <tr>
            {/* <i class="fa-solid fa-cart-shopping"></i> */}
            {/* <FontAwesomeIcon icon={fa-cart-shopping} /> */}

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