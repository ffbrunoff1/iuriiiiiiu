import React from 'react'
import { motion } from 'framer-motion'
import Star from 'lucide-react/dist/esm/icons/star'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Rocket from 'lucide-react/dist/esm/icons/rocket'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const features = [
    {
      icon: Star,
      title: "Precisão Estelar",
      description: "Tecnologia de ponta para observação astronômica profissional"
    },
    {
      icon: Zap,
      title: "Performance Extrema",
      description: "Equipamentos testados em condições espaciais reais"
    },
    {
      icon: Rocket,
      title: "Missão Espacial",
      description: "Desenvolvido especialmente para astronautas e exploradores"
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-stars opacity-30"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-accent-400 rounded-full animate-pulse"></div>
        <div className="absolute top-48 left-1/3 w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-20 w-1 h-1 bg-accent-300 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 section-padding min-h-screen flex items-center">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              >
                Explore o
                <span className="block text-gradient bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
                  Universo
                </span>
                Infinito
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                Telescópios de última geração projetados especialmente para astronautas. 
                Tecnologia espacial que permite descobrir novos mundos e expandir os limites da exploração humana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <button
                  onClick={scrollToServices}
                  className="btn-primary text-center"
                >
                  Ver Telescópios
                </button>
                <button
                  onClick={scrollToContact}
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-secondary-900 transition-all duration-300 text-center"
                >
                  Falar Conosco
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {features.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                    >
                      <IconComponent className="w-10 h-10 text-accent-400 mb-4" />
                      <h3 className="text-lg font-semibold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full opacity-20 blur-xl"
                ></motion.div>
                
                <motion.div
                  animate={{ float: true }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/30"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-8xl mb-6"
                    >
                      🔭
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Tecnologia Espacial Avançada
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      Equipamentos testados em missões reais da NASA e agências espaciais internacionais.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="text-accent-400 font-bold text-lg">50x</div>
                        <div className="text-gray-300">Ampliação</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="text-primary-400 font-bold text-lg">4K</div>
                        <div className="text-gray-300">Resolução</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="text-accent-400 font-bold text-lg">-40°C</div>
                        <div className="text-gray-300">Resistência</div>
                      </div>
                      <div className="bg-white/10 p-3 rounded-lg">
                        <div className="text-primary-400 font-bold text-lg">24h</div>
                        <div className="text-gray-300">Autonomia</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}