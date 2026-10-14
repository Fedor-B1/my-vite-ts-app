import { NavLink } from "react-router";

export function NotFoundPage() {
    return (
        <div>
            <p>Oooops... we did not found anything... So sorry!</p>
            <NavLink to="/">Go to main page</NavLink>
        </div>
    )
}