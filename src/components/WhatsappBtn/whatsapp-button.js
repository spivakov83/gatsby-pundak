import React from "react"
import './whatsapp-button.css'

function WhatsappBtn() {
    return (
        <>
            <a href="https://api.whatsapp.com/send?phone=+972503909088&text=%D7%94%D7%99%D7%99%20%D7%A4%D7%95%D7%A0%D7%93%D7%A7,%20%D7%90%D7%A4%D7%A9%D7%A8%20%D7%9C%D7%94%D7%96%D7%9E%D7%99%D7%9F?" className="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
        </>

    )
}

export default WhatsappBtn;