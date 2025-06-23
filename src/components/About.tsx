export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm border-y border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hey there! I'm <span className="text-white font-semibold">Riju Naskar</span>, a passionate Full-Stack Developer and a second-year BCA student with a strong foundation in both frontend and backend technologies.
              I love building intuitive, scalable, and performant web applications from scratch.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With around a year of hands-on coding experience, I’ve worked with modern frontend tools like <span className="text-white font-semibold">HTML, CSS, JavaScript, React, Svelte</span>, and backend tech like <span className="text-white font-semibold">Node.js, Express, MySQL, MongoDB, and C#</span>.
              My goal is to blend aesthetic UI with solid backend logic to craft awesome digital experiences.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-purple-900/30 border border-purple-500/20 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-pink-900/30 border border-pink-500/20 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold text-pink-400">20+</div>
                <div className="text-gray-400">Projects Built</div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-full p-1 transform hover:rotate-0 transition-transform duration-300 backdrop-blur-sm w-72 h-72 rotate-3">
              <img
                src="https://sdmntprwestus3.oaiusercontent.com/files/00000000-a4d0-61fd-8026-f9f027fdc676/raw?se=2025-06-23T15%3A08%3A26Z&sp=r&sv=2024-08-04&sr=b&scid=0101d1de-e94b-56bc-90b4-ede1f55d8f5a&skoid=c953efd6-2ae8-41b4-a6d6-34b1475ac07c&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-23T13%3A51%3A18Z&ske=2025-06-24T13%3A51%3A18Z&sks=b&skv=2024-08-04&sig=etsZRJqJzz9tAKiB1qb9ADX08JoWHCZWpb09tSthSps%3D"
                alt="Profile"
                className="rounded-full shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
