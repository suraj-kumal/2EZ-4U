import YoutubeH from "@/app/Data/YoutubeH";
import Link from "next/link";

const HomeYoutube = () => {
  const playlists = YoutubeH();

  return (
    <div className="bg-[#6AAAD0] h-full px-8 py-8">
      <h1 className="text-2xl font-bold text-center mb-8 underline underline-offset-4">
        Playlists
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {playlists.map((playlist, index) => (
          <Link href={playlist.url} key={index} target="_blank">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 flex flex-col items-center justify-center">
              <img
                className="w-56 h-28 object-cover mx-4 my-4 rounded-xl"
                src={`https://img.youtube.com/vi/${playlist.videoId}/0.jpg`}
                alt={playlist.title}
              />
              <div className="p-4">
                <h2 className="font-semibold text-gray-800 mb-2 text-sm text-center">
                  {playlist.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeYoutube;
