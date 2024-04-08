import { WorkHero } from "@/components/sections/work-hero";
import { Container } from "../../components/container";
import { ContactHero } from "@/components/sections/contact-hero";

export default async function Home() {
  return (
      <Container>
        <ContactHero/>
        <WorkHero/>
      </Container>
  );
}
