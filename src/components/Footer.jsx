import { Fragment } from "react";
import './Footer.css'
export default function Footer() {
    return (
        <Fragment>
            <div className="conatiner p-5">
                <div style={{ fontSize: '16px', color: '#55585A' }}>
                    <a style={{ color: '#55585A' }} href="https://web.facebook.com/uhammadrois">Facebook</a>
                    <a style={{ color: '#55585A' }} href="https://www.instagram.com/roess___/">  Instagram</a>
                    <a id="footer-item"> © 2023 Muhammad.Rois </a>
                </div>
                <small style={{ color: '#55585A' }}>Hugo blog awesome theme on Hugo</small>
            </div>
        </Fragment>
    )
}