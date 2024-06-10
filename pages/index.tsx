import MainNavigation from "@/components/MainNavigation";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";


function Home(){
return <main>
    <MainNavigation/>
   <Header/>
   <About/>
   <Projects/>
   <Contact/>
   <Footer/>
</main>
}
export default Home;