import { Fragment } from "react";

export default function Admin({ children }) {
    return (
        <Fragment>
            <div className="container">
                <div className="py-3">
                    {children}
                </div>
            </div>
        </Fragment>
    )
}