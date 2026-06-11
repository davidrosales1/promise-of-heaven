import { BookSection } from "./components/BookSection";
import { ConcertSection } from "./components/ConcertSection";
import { Hero } from "./components/Hero";
import { InterviewsSection } from "./components/InterviewsSection";
import { MiniNav } from "./components/MiniNav";
import { ResourcesSection } from "./components/ResourcesSection";
import { SiteHeader } from "./components/SiteHeader";
import { StayConnected } from "./components/StayConnected";
import { SupportSection } from "./components/SupportSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <MiniNav />
      <main>
        <BookSection />
        <ConcertSection />
        <InterviewsSection />
        <ResourcesSection />
        <SupportSection />
        <StayConnected />
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
}

export default App;
