const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'GraphQL', level: 75 },
        { name: 'PostgreSQL', level: 80 },
      ],
    },
    {
      title: 'Ferramentas',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Tecnologias e ferramentas que domino
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '⚡', label: 'Performance', desc: 'Otimização de código' },
            { icon: '📱', label: 'Responsivo', desc: 'Design adaptável' },
            { icon: '♿', label: 'Acessível', desc: 'Para todos' },
            { icon: '🔒', label: 'Seguro', desc: 'Boas práticas' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 text-center hover:border-purple-500/40 transition-all"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="text-white font-semibold mb-1">{feature.label}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
