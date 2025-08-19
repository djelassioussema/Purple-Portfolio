import React from 'react';
import { Globe, Code, TrendingUp, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Globe,
      number: '25+',
      label: 'AI Models Deployed'
    },
    {
      icon: Code,
      number: '50+',
      label: 'Projects Delivered'
    },
    {
      icon: TrendingUp,
      number: '4+',
      label: 'Years Experience'
    },
    {
      icon: Zap,
      number: '20+',
      label: 'Technologies Mastered'
    }
  ];

  const tabs = [
    { id: 'vision', label: 'Vision', active: true },
    { id: 'expertise', label: 'Expertise', active: false },
    { id: 'innovation', label: 'Innovation', active: false }
  ];

  const skills = [
    'Strategic Planning',
    'AI Innovation',
    'Solution Architecture'
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Solutions <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Architect</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Crafting intelligent systems that push the boundaries of what's possible with AI
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <div className="flex items-start space-x-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                AM
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Ali Mohsin</h2>
              <p className="text-purple-400 mb-1">Senior AI Solutions Architect</p>
              <p className="text-gray-400">Available for new projects</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 mb-6">
            <div className="flex space-x-1 bg-gray-800/50 rounded-lg p-1 max-w-md">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    tab.active
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vision Content */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Vision</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Pioneering the future of AI-driven applications, I specialize in transforming complex business challenges into intelligent, scalable solutions that deliver measurable impact.
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>


          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;