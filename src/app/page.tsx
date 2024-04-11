import { Container } from "@/components/Container";
import { ExperienceHero } from "@/components/sections/experience-hero";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { SkillsHero } from "@/components/sections/skills-hero";
import { WorkHero } from "@/components/sections/work-hero";

export default function Home() {
  return(
    <Container>
      <HomepageHero />
      <ExperienceHero/>
      <SkillsHero/>
      <WorkHero/>
    </Container>
  );
};
