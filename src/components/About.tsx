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
              I recently completed my full Web Development course, and alongside that, I've been actively developing <span className="text-white font-semibold">RAGE:MP servers</span> for over a year. I'm still working on exciting server projects, and in the past, I’ve built several RAGE:MP servers that became quite popular before eventually going offline. These experiences taught me a lot about multiplayer systems, optimization, and real-time server-side scripting.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With around a year of hands-on coding experience, I’ve worked with modern frontend tools like <span className="text-white font-semibold">HTML, CSS, JavaScript, React, Svelte</span>, and backend tech like <span className="text-white font-semibold">Node.js, Express, MySQL, MongoDB, and C#</span>.
              My goal is to blend aesthetic UI with solid backend logic to craft awesome digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed italic text-purple-300">
              I’m still learning every day — because for me, <span className="text-white font-semibold">learning never stops.</span>
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
                src="https://cdn.discordapp.com/attachments/1336257205741031426/1386271213738922074/IMG_20250525_030534_163.webp?ex=685a6aad&is=6859192d&hm=f375d940220c16c5bbd512e3b8703c0f7ae3fa9e1e5f40b3a006636f296a148f&"
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
