import Banner from "@/components/banner/Banner";
import Blogs from "@/components/blogs/Blogs";
import Education from "@/components/education/Education";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import SkillCard from "@/components/skill/SkillCard";


export default function Home() {
  return (
<div className="container mx-auto">
  <Banner/>
  <ProjectsGrid/>
  <SkillCard/>
  <Education/>
  <Blogs/>
</div>
  )
}
