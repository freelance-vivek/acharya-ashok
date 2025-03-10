import Image from "next/image"
import Logo from "../../public/images/logo-new.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          {/* <source
            srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x"
            media="(max-width: 37.5em)"
          /> */}
          <Image src={Logo} alt="Full logo" height={100} width={200} />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a
                  className="footer__link"
                  href="https://wa.me/9981933791"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Vivek Patel
            </a>
            . Copyright &copy; by
            <a href="#" className="footer__link">
              Acharya Ashok Dwivedi.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
