import React from "react";
import TopSection from "../../Components/Home/TopSection/TopSection";
import BottomSection from "../../Components/Home/BottomSection/BottomSection";

function Home(): React.ReactElement {
  return (
    <div className="flex flex-col h-[87%] bg-secondary">
      <TopSection />
      <BottomSection />
    </div>
  );
}

export default Home;
