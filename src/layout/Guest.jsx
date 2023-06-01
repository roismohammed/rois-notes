import { Fragment } from "react";

export default function Guest({ children }) {
    return (
        <Fragment>
            <div>
                {children}
            </div>
        </Fragment>
    )
}