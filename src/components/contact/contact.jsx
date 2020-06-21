import React, { useEffect } from "react";
import { CONTACT_FORM_LINK } from '../../utils/consts';

const Contact = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.id = "mcjs"
    script.type = 'text/javascript';
    script.text = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/27344ae133a4f5b6d0481091b/9ce7569bb7b08b4486aec8f7b.js")';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (

    <section className="newsletter_area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-12">
            <div className="subscription_box text-center">
              <h2 className="text-uppercase text-white">FEEL FREE TO CONTACT ME</h2>
              <a className="primary_btn" href={CONTACT_FORM_LINK}><span>CONTACT</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )

}

export default Contact;