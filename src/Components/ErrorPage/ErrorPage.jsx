import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>            
            <p>you have a mistake</p>
            <button className="btn"><NavLink to={'/'}>Back to home page</NavLink></button>
        </div>
    );
};

export default ErrorPage;