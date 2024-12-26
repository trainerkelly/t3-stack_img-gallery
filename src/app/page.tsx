import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/WuVrYb1hu3jbErWUgDv2aGKSQnk5B4IY1NDsiwtJPdmRAh89",
  "https://utfs.io/f/WuVrYb1hu3jb8MrLK4eRzWfKNgeGFwaDUpV3n5dcvOumMCtQ",
  "https://utfs.io/f/WuVrYb1hu3jbnoLIy7NYzDjme94irVxu6kGfU8hyMgPJRZTW",
  "https://utfs.io/f/WuVrYb1hu3jbwV9Y68QWMao9rN7pHim62nIBZxyj53u1X8eO",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
