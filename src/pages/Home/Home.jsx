import CharacterList from "../../components/Home/CharacterList/CharacterList";
import HomeTitle from "../../components/Home/HomeTitle/HomeTitle";
import "./home.styles.css";

function Home() {
  return (
    <div className="home-container">
      <HomeTitle />
      <CharacterList />
    </div>
  );
}

export default Home;
