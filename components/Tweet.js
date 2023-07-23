export default function Tweet() {
  return (
    <div>
      <TweetHeader />
    </div>
  );
}

export function TweetHeader() {
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        src="/assets/kylie.png"
        alt=""
        className="w-11 h-11 rounded-full object-cover"
      />
      <div>
        <div className=" text-gray-500 flex items-center space-x-2">
          <span>@kylie</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>2 hours ago</span>
        </div>
        <span>Text</span>
      </div>
    </div>
  );
}
