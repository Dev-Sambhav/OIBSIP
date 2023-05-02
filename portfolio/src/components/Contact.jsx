import fb from "../assets/fb.png";
import gh from "../assets/gh.png";
import insta from "../assets/insta.png";

const Contact = () => {
  return (
    <div name="contact" className="w-full px-3 lg:pl-20 py-16 text-center">
      <h1 className="logo pl-2 font-signature text-3xl font-Title text-cyan-600 mb-7">
        Sam
      </h1>
      <h2 className="text-2xl font-[500] mb-5">Follow Me</h2>
      <div className="social-icons flex justify-center items-center space-x-5">
        <a href="https://www.facebook.com/Sambhavsharma13/" target="_blank">
          <img src={fb} alt="facebook_logo" />
        </a>
        <a href="https://github.com/Dev-Sambhav" target="_blank">
          <img src={gh} alt="github_logo"/>
        </a>
        <a href="https://www.instagram.com/sambhav____sharma/"  target="_blank">
          <img src={insta} alt="instagram_logo"/>
        </a>
      </div>
    </div>
  );
};
export default Contact;
