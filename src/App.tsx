import { Hero } from "./components/Hero";
import { MiniNav } from "./components/MiniNav";
import { SiteHeader } from "./components/SiteHeader";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <MiniNav />
      <main>
        {/* <BookSection /> */}
        {/* <ConcertSection /> */}
        {/* <InterviewsSection /> */}
        {/* <ResourcesSection /> */}
        {/* <SupportSection /> */}
        {/* <StayConnected /> */}
      </main>
      {/* <SiteFooter /> */}
    </div>
  );
}

export default App;
