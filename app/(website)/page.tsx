import { ContentBlock } from "../components/content-block";
import { FeatureSection } from "../components/feature-section";
import { Navigation } from "../components/navigation";
import { useStore } from "../../store";

export default function Home() {
  return (
    <main>
      <Navigation />
      <FeatureSection />
      <ContentBlock />
    </main>
  );
}
