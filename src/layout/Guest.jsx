import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Guest({ children }) {
    return (
        <Fragment>
            <Header />
            <div>
                {children}
            </div>
            <div className="text-center">
                <Footer />
            </div>
        </Fragment>
    )
}