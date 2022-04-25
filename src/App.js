import "./styles.css";
import Nav from "./components/Nav";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main
        title="Mount Fuji"
        location="Japan"
        startDate="12 Jan, 2021"
        endDate="24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
    </div>
  );
}
