import { Container } from "../../components/Container";
import { InfoHero } from "@/components/sections/info-hero";
import { WorkHero } from "@/components/sections/work-hero";
export default async function Home() {
  return (
      <Container>
        <InfoHero/>
        <WorkHero/>
      </Container>
  );
}
