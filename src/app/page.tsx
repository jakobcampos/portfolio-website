import { Container } from "@/components/container";
import { ContactHero } from "@/components/sections/contact-hero";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { InfoHero } from "@/components/sections/info-hero";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { SkillsHero } from "@/components/sections/skills-hero";
import { WorkHero } from "@/components/sections/work-hero";

export default function Home() {
  return(
    <Container>
      <HomepageHero />
      <SkillsHero/>
      <WorkHero/>
    </Container>
  );
};
