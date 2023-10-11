import MainNavigation from "@/components/MainNavigation";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

function Home(){
return <main>
    <MainNavigation/>
   <Header/>
   <About/>
   <Skills/>
   <Projects/>
   <div style={{height:'100vh'}}></div>
</main>
}
export default Home;