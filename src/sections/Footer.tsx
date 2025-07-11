import { socialImgs } from "@/constants";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((icon) => (
            <a key={icon.url} href={icon.url} target="_blank" className="icon">
              <img src={icon.imgPath} alt="logo" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Usama Mangi | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
