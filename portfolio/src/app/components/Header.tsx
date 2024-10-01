import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:mr-8 mb-4 md:mb-0">
          <Image
            src="/profile-picture.jpg"
            alt="Evan Crews"
            width={200}
            height={200}
            className="rounded-full object-cover border-4 border-blue-400"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">Evan Crews</h1>
          <p className="text-xl mb-4">Software Engineer</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Evan-Crews" className="text-blue-400 hover:text-blue-300">GitHub</a>
            <a href="https://linkedin.com/in/evan-crews" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
            <span className="text-gray-400">(951) 204-9857</span>
            <span className="text-gray-400">evancrews21@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
