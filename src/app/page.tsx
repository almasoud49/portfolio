import Banner from "@/components/banner/Banner";
import Education from "@/components/education/Education";
import ProjectsGrid from "@/components/projects/ProjectsGrid";


export default function Home() {
  return (
<div className="container mx-auto">
  <Banner/>
  <ProjectsGrid/>
  <Education/>
</div>
  )
}
