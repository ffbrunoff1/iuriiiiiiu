import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Mail from 'lucide-react/dist/esm/icons/mail'
import Phone from 'lucide-react/dist/esm/icons/phone'
import MapPin from 'lucide-react/dist/esm/icons/map-pin'
import Clock from 'lucide-react/dist/esm/icons/clock'
import Send from 'lucide-react/dist/esm/icons/send'
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mission: '',
    message: ''
  })
  const [status, setStatus] = useState({ message: '', isError: false, isLoading: false })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ message: '', isError: false, isLoading: true })

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setStatus({
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        isError: false,
        isLoading: false
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        mission: '',
        message: ''
      })
    } catch (error) {
      setStatus({
        message: 'Erro ao enviar mensagem. Tente novamente.',
        isError: true,
        isLoading: false
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 99999-9999",
      subtitle: "Suporte 24/7 para missões críticas"
    },
    {
      icon: Mail,
      title: "Email",
      content: "missoes@iuriiiiiiu.space",
      subtitle: "Resposta garantida em 2 horas"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, Brasil",
      subtitle: "Centro de Operações Espaciais"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24/7 Disponível",
      subtitle: "Suporte ininterrupto para astronautas"
    }
  ]

  const missionTypes = [
    "Exploração de Superfície Lunar",
    "Observação de Exoplanetas",
    "Mapeamento de Asteroides",
    "Pesquisa de Galáxias Distantes",
    "Monitoramento de Estações Espaciais",
    "Missão Personalizada"
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-900 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-stars opacity-20"></div>
      
      <div className="relative z-10 container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Inicie Sua
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent"> Missão Espacial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entre em contato com nossa equipe de especialistas em tecnologia espacial. 
            Estamos prontos para equipar sua próxima missão de exploração.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="bg-gradient-to-br from-accent-500 to-primary-500 p-3 rounded-xl">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-accent-300 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Por que Escolher Nossos Telescópios?
              </h4>
              <div className="space-y-4">
                {[
                  "Tecnologia testada em missões reais da NASA",
                  "Suporte técnico 24/7 via comunicação satelital",
                  "Garantia estendida para condições espaciais extremas",
                  "Treinamento especializado para astronautas",
                  "Atualizações de software remotas"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                Solicitar Orçamento para Missão
              </h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Tipo de Missão
                  </label>
                  <select
                    name="mission"
                    value={formData.mission}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all"
                  >
                    <option value="">Selecione o tipo de missão</option>
                    {missionTypes.map((type, index) => (
                      <option key={index} value={type} className="text-secondary-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Detalhes da Missão *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition-all resize-none"
                    placeholder="Descreva os requisitos específicos da sua missão, orçamento estimado e cronograma..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status.isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-accent-600 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-6 h-6" />
                  )}
                  {status.isLoading ? 'Enviando...' : 'Enviar Solicitação'}
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      status.isError 
                        ? 'bg-red-500/20 border border-red-500/30 text-red-200' 
                        : 'bg-green-500/20 border border-green-500/30 text-green-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}