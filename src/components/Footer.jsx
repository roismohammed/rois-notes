import { Fragment } from "react";
import './Footer.css'
export default function Footer() {
    return (
        <Fragment>
            <div className="conatiner p-5">
                <div style={{ fontSize: '16px', color: '#55585A' }}>
                    <a href="">Facebook</a>
                    <a href="">  Instagram</a>
                    <a id="a"> © 2023 Muhammad.Rois </a>
                </div>
                <small style={{ color: '#55585A' }}>Hugo blog awesome theme on Hugo</small>
            </div>
        </Fragment>
    )
}