import { Metadata } from "next";
import Box2 from "@/components/Box/Box2";
import Brands from "@/components/Brands";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import { Web3Provider } from "../../components/connect-button/connectKit.config";
export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {
  return (
    // <Web3Provider>
      <main> 
        <Box2 />
        <Brands />
        <FunFact />
        <Integration />        
      </main>
    // </Web3Provider>
  );
}
