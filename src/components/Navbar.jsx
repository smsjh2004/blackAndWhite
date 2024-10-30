import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar() {
    return (
        <div className="nav">
            <div>
                <Link to="/Home">
                    홈
                </Link>
            </div>
            <div>
                <Link to="/Restaurant">
                    식당위치
                </Link>
            </div>
            <div>
                <Link to="/Member">
                    출연자정보
                </Link>
            </div>
        </div>
    )
}