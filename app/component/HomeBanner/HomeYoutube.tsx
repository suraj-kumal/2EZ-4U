import YoutubeH from "@/app/Data/YoutubeH";
import Link from "next/link";

const HomeYoutube = () => {
  const playlists = YoutubeH();

  return (
    <div className="bg-[#6AAAD0] h-full px-8 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Playlists</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-4 my-4">
        {playlists.map((playlist, index) => (
          <Link href={playlist.url} key={index} target="_blank">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80 flex items-center justify-center">
              <div className="c h-fit w-fit">
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeYoutube;
