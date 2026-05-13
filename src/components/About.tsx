const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <p className="text-gray-300 text-lg leading-relaxed">
                Olá! Sou <span className="text-purple-400 font-semibold">Cauan Amorim Gomes</span>, 
                um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento 
                web full stack, eu crio soluções digitais que combinam funcionalidade, performance e design elegante.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <p className="text-gray-300 text-lg leading-relaxed">
                Minha jornada no desenvolvimento começou com a curiosidade de entender como as coisas 
                funcionam, e se transformou em uma paixão por construir aplicações que fazem a diferença. 
                Estou sempre aprendendo novas tecnologias e buscando os melhores padrões de desenvolvimento.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <p className="text-gray-300 text-lg leading-relaxed">
                Quando não estou codificando, você pode me encontrar explorando novas tecnologias, 
                contribuindo para projetos open source, ou compartilhando conhecimento com a comunidade dev.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Experiência</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Desenvolvimento Full Stack</h4>
                    <p className="text-gray-400">Criação de aplicações web completas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">UI/UX Design</h4>
                    <p className="text-gray-400">Interfaces modernas e responsivas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">API Development</h4>
                    <p className="text-gray-400">Desenvolvimento de APIs RESTful</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold">Database Design</h4>
                    <p className="text-gray-400">Modelagem e otimização de bancos de dados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400 text-sm">Projetos Completados</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Tecnologias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
