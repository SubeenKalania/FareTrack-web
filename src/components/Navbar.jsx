import Button from "./Button";
import Avatar from "./Avatar";
import { Link } from "react-router";

function Navbar({ onSignUpClick, user }) {
  return (
    <>
      <div className="border border-b-gray-800 flex items-center justify-between p-5">
        <div>
          <span className="font-semibold text-2xl text-white">fare</span>
          <span className="text-2xl font-semibold text-buttonHoverBg">
            track
          </span>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-400 font-inter hover:text-buttonBg">
              Search flights
            </Link>
            <Avatar name={user.name} />
          </div>
        ) : (
          <Button text="Sign up" variant="secondary" onClick={onSignUpClick} />
        )}
      </div>
    </>
  );
}

export default Navbar;