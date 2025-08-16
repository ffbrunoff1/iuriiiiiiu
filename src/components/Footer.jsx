import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Mail, Phone, MapPin, Rocket, Star, Globe } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Telescópios', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const products = [
    'Stellar Explorer Pro',
    'Cosmic Observer Elite',
    'Galaxy Hunter Max',
    'Manutenção Espacial',
    'Treinamento Astronautas'
  ]

  const certifications = [
    'Certificação NASA',
    'ISO 9001:2015',
    'Padrão Espacial Europeu',
    'Certificação INPE',
    'Qualidade Militar'
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-pattern-stars opacity-10"></div>
      
      <div className="relative z-10">
        <div className="section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-xl">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Iuriiiiiiu</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Pioneiros em tecnologia de telescópios espaciais, desenvolvendo equipamentos 
                  de precisão para astronautas e missões de exploração do universo.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-accent-400" />
                    <span className="text-sm text-gray-300">15+ Missões Espaciais</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-primary-400" />
                    <span className="text-sm text-gray-300">25 Países Atendidos</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Navegação Rápida</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full group-hover:bg-accent-400 transition-colors"></span>
                        <span>{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h5 className="text-lg font-semibold mb-4 text-accent-400">Nossos Produtos</h5>
                  <ul className="space-y-2">
                    {products.slice(0, 3).map((product, index) => (
                      <li key={index} className="text-gray-400 text-sm">
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Contato</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">+55 (11) 99999-9999</p>
                      <p className="text-gray-500 text-sm">Suporte 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">missoes@iuriiiiiiu.space</p>
                      <p className="text-gray-500 text-sm">Resposta em 2 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300">São Paulo, Brasil</p>
                      <p className="text-gray-500 text-sm">Centro de Operações</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Rocket className="w-5 h-5 text-accent-400" />
                    <span className="font-semibold">Atendimento Especial</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Comunicação via satélite para missões em órbita
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6">Certificações</h4>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-xl border border-white/10">
                  <h5 className="font-bold mb-3 text-accent-400">Missão em Andamento</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Telescópios Ativos</span>
                      <span className="text-white font-semibold">47</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Missões Ativas</span>
                      <span className="text-white font-semibold">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Dados Coletados</span>
                      <span className="text-white font-semibold">2.4 TB</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20">
          <div className="container-max py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2024 Iuriiiiiiu. Todos os direitos reservados.
                </p>
                <span className="text-gray-500">|</span>
                <p className="text-gray-400 text-sm">
                  Criado com <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 italic transition-colors">Papum</a>
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Política de Privacidade</span>
                <span>•</span>
                <span>Termos de Uso</span>
                <span>•</span>
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}