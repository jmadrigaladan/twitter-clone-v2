import PostFeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
export default function Home() {
  return (
    <div className="bg-black min-h-screen text-[#E7E9EA] max-w-[1400px] mx-auto flex">
      <Sidebar />
      <PostFeed />
      <Trending />
      {/* <Trending /> */}
    </div>
  );
}
