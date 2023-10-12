import MainNavigation from "@/components/MainNavigation";
import About from "@/components/about";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SkillsBox from "@/components/skillsbox";
import StickmanAnimation from "@/components/stickman";

function Home(){
return <main>
    <MainNavigation/>
   <Header/>
   <StickmanAnimation/>
   <About/>
   <Skills/>
   {/* <SkillsBox/> */}
   <Projects/>
   <div style={{height:'100vh'}}></div>
</main>
}
export default Home;