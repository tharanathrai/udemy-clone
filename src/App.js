import "./App.css";
import ContentBanner from "./components/banner/banner";
import TopCategories from "./components/topCategories/topCategories";
import Topics from "./components/topics/topics";
import Instructor from "./components/instructor/instructor";
import Partners from "./components/partners/partners";
import UdemyBusiness from "./components/udemyBusiness/udemyBusiness";
import ChangeLife from "./components/changeLife/changeLife";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TabbedNavigation from "./components/tabbedNavigation/tabbedNavigation";
import AlsoLearning from "./components/alsoLearning/alsoLearning";
import CourseCarousel from "./components/courseCarousel/courseCarousel";
import MiniHeader from "./components/miniHeader/miniHeader";

function App() {
  return (
    <div>
      <MiniHeader></MiniHeader>
      <Header></Header>
      <ContentBanner></ContentBanner>
      <TabbedNavigation></TabbedNavigation>
      <CourseCarousel></CourseCarousel>
      <TopCategories></TopCategories>
      <Topics></Topics>
      <Instructor></Instructor>
      <Partners></Partners>
      <UdemyBusiness></UdemyBusiness>
      <ChangeLife></ChangeLife>
      <Footer></Footer>
    </div>
  );
}

export default App;
