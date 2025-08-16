import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Star, Rocket, Settings } from 'lucide-react'

export default function Services() {
  const [activeTab, setActiveTab] = useState(0)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const telescopes = [
    {
      name: "Stellar Explorer Pro",
      category: "Telescópio de Missão",
      price: "R$ 450.000",
      image: "🔭",
      features: [
        "Ampliação 50x com estabilização automática",
        "Resistente a temperaturas de -50°C a +80°C",
        "Sistema de rastreamento autônomo",
        "Transmissão de dados em tempo real",
        "Bateria de 48h de autonomia",
        "Certificação espacial NASA"
      ],
      specs: {
        resolution: "Ultra HD 4K",
        weight: "3.2kg",
        range: "Até 500.000 km",
        connectivity: "Satélite + Wi-Fi"
      }
    },
    {
      name: "Cosmic Observer Elite",
      category: "Telescópio de Pesquisa",
      price: "R$ 650.000",
      image: "🌌",
      features: [
        "Ampliação 100x com correção atmosférica",
        "Espectroscópio integrado",
        "IA para identificação automática de objetos",
        "Armazenamento de 10TB",
        "Controle remoto via satélite",
        "Resistência a radiação cósmica"
      ],
      specs: {
        resolution: "8K RAW",
        weight: "5.8kg",
        range: "Até 2 milhões de km",
        connectivity: "Deep Space Network"
      }
    },
    {
      name: "Galaxy Hunter Max",
      category: "Telescópio Exploração Profunda",
      price: "R$ 950.000",
      image: "🚀",
      features: [
        "Ampliação 200x ultra-precisa",
        "Sistema de múltiplos sensores",
        "Mapeamento 3D em tempo real",
        "Detecção de exoplanetas",
        "Filtros espectrais avançados",
        "Sistema de suporte vital integrado"
      ],
      specs: {
        resolution: "16K Ultra RAW",
        weight: "8.4kg",
        range: "Sistemas solares próximos",
        connectivity: "Quantum Link"
      }
    }
  ]

  const services = [
    {
      icon: Settings,
      title: "Manutenção Espacial",
      description: "Serviços especializados de manutenção e calibração para equipamentos em órbita.",
      features: ["Diagnóstico remoto", "Correção de órbita", "Atualizações de software"]
    },
    {
      icon: Rocket,
      title: "Treinamento Astronautas",
      description: "Programas de capacitação para operação de telescópios em missões espaciais.",
      features: ["Simulações realistas", "Certificação internacional", "Suporte contínuo"]
    },
    {
      icon: Shield,
      title: "Suporte 24/7",
      description: "Assistência técnica disponível 24 horas para missões críticas.",
      features: ["Comunicação via satélite", "Resposta em 15 minutos", "Equipe especializada"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Telescópios de
            <span className="text-gradient"> Elite Espacial</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Equipamentos de última geração desenvolvidos especificamente para astronautas 
            e missões espaciais. Tecnologia que define novos padrões na exploração do universo.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {telescopes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'
                }`}
              >
                {telescopes[index].name}
              </button>
            ))}
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-200"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">{telescopes[activeTab].image}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-secondary-900">
                      {telescopes[activeTab].name}
                    </h3>
                    <p className="text-primary-600 font-semibold text-lg">
                      {telescopes[activeTab].category}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-accent-600">
                    {telescopes[activeTab].price}
                  </span>
                  <span className="text-secondary-600 ml-2">por unidade</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(telescopes[activeTab].specs).map(([key, value]) => (
                    <div key={key} className="bg-white p-4 rounded-xl border border-gray-200">
                      <div className="text-sm text-secondary-500 capitalize">{key}</div>
                      <div className="font-semibold text-secondary-900">{value}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="btn-primary w-full"
                >
                  Solicitar Orçamento
                </button>
              </div>

              <div>
                <h4 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                  <Star className="w-6 h-6 text-accent-500" />
                  Características Principais
                </h4>
                <div className="space-y-4">
                  {telescopes[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200"
                    >
                      <Zap className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-secondary-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Serviços Especializados
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-secondary-900 mb-4">
                    {service.title}
                  </h4>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-secondary-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Saiba Mais
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}