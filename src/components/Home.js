import img1 from "../images/download1.jpg";
import img2 from "../images/download2.jpg";

const Home = () => {
  return (
    <>
      Home
      <img src="https://media.istockphoto.com/id/615398182/vector/blue-india-icon.jpg?s=612x612&w=0&k=20&c=WhYJDuAejMl4vbrZ8DZt57RssIF3Enhs-SFqShM-E5c=" />
      <img src={img1} />
      <div style={{ backgroundImage: `url(${img2})` }}>Image found</div>
      <div className="bgm">ANother image</div>
    </>
  );
};

export default Home;
