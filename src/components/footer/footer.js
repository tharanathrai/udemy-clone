import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-section">
        <div class="links-and-language-selector">
          <ul class="unstyled-list link-column ">
            <li>
              <a
                href="/udemy-business/?locale=en_US&amp;mx_pg=home-page&amp;path=%2F&amp;ref=footer"
                target="_blank"
                rel="noopener"
                data-placement="footer"
              >
                Udemy Business
              </a>
            </li>
            <li>
              <a href="/teaching/?ref=teach_footer">Teach on Udemy</a>
            </li>
            <li>
              <a href="/mobile/" target="_blank" rel="noopener noreferrer">
                Get the app
              </a>
            </li>
            <li>
              <a href="https://about.udemy.com/?locale=en-us">About us</a>
            </li>
            <li>
              <a href="https://about.udemy.com/company?locale=en-us#offices">
                Contact us
              </a>
            </li>
          </ul>
          <ul class="unstyled-list link-column ">
            <li>
              <a href="https://about.udemy.com/careers?locale=en-us">Careers</a>
            </li>
            <li>
              <a href="https://blog.udemy.com/?ref=footer">Blog</a>
            </li>
            <li>
              <a href="/support/">Help and Support</a>
            </li>
            <li>
              <a href="/affiliate/">Affiliate</a>
            </li>
            <li>
              <a href="https://investors.udemy.com">Investors</a>
            </li>
          </ul>
          <ul class="unstyled-list link-column ">
            <li>
              <a href="/terms/">Terms</a>
            </li>
            <li>
              <a href="/terms/privacy/">Privacy policy</a>
            </li>
            <li>
              <a href="/">Cookie settings</a>
            </li>
            <li>
              <a href="/sitemap/">Sitemap</a>
            </li>
            <li>
              <a href="https://about.udemy.com/accessibility-statement?locale=en-us">
                Accessibility statement
              </a>
            </li>
          </ul>
          <div class="language-selector-container">
            <button type="button">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/840px-Globe_icon-white.svg.png"
                width="30px"
              />
              <span>English</span>
            </button>
          </div>
        </div>
        <div class="logo-and-copyright">
          <div class="logo-container">
            <a href="udemy.com">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt="Udemy"
                width="91"
                height="34"
              />
            </a>
          </div>
          <div class="copyright-container">© 2021 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
