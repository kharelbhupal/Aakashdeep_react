import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function FloatingSocial() {
  return (
    <div className="floating-social">
      <a
        href="https://www.tiktok.com/@aakashdeep_construction"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link tiktok"
      >
        <FaTiktok />
      </a>

      <a
        href="https://www.linkedin.com/company/aakashdeep/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61577831923705"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link facebook"
      >
        <FaFacebookF />
      </a>

      <a
        href="https://www.instagram.com/aakashdeep_consulting?igsh=NWpkbHJuZmI0NGNs"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link instagram"
      >
        <FaInstagram />
      </a>

      <a href="#" className="social-link youtube">
        <FaYoutube />
      </a>
    </div>
  );
}
