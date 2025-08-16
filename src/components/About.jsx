import React from 'react'
import { motion } from 'framer-motion'
import Target from 'lucide-react/dist/esm/icons/target'
import Award from 'lucide-react/dist/esm/icons/award'
import Users from 'lucide-react/dist/esm/icons/users'
import Globe from 'lucide-react/dist/esm/icons/globe'

export default function About() {
  const stats = [
    {
      icon: Target,
      number: "15+",
      label: "Missões Espaciais",
      description: "Telescópios utilizados em missões reais"
    },
    {
      icon: Award,
      number: "98%",
      label: "Precisão",
      description: "Taxa de precisão em observações"
    },
    {
      icon: Users,
      number: "500+",
      label: "Astronautas",
      description: "Profissionais que confiam em nossos equipamentos"
    },
    {
      icon: Globe,
      number: "25",
      label: "Países",
      description: "Presença em agências espaciais globais"
    }
  ]

  const values = [
    {
      title: "Inovação Constante",
      description: "Desenvolvemos tecnologias que ultrapassam os limites da exploração espacial, sempre buscando soluções mais avançadas e eficientes.",
      gradient: "from-primary-500 to-accent-500"
    },
    {
      title: "Qualidade Espacial",
      description: "Cada telescópio passa por rigorosos testes em condições extremas, garantindo performance excepcional no espaço.",
      gradient: "from-accent-500 to-primary-500"
    },
    {
      title: "Missão Exploratória",
      description: "Nossa missão é capacitar astronautas com as melhores ferramentas para descobrir novos horizontes no universo.",
      gradient: "from-primary-600 to-accent-600"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Pioneiros em
            <span className="text-gradient"> Tecnologia Espacial</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Há mais de uma década desenvolvendo equipamentos de observação astronômica 
            para as principais agências espaciais do mundo. Nossa tecnologia está presente 
            em missões que expandem os limites do conhecimento humano.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group"
              >
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-secondary-900 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-lg font-semibold text-primary-600 mb-3">
                  {stat.label}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-secondary-900 mb-8">
              Nossa História de Inovação
            </h3>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    2010 - Fundação
                  </h4>
                  <p className="text-secondary-600">
                    Início da jornada com foco em equipamentos para observação espacial de alta precisão.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-3 h-3 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    2015 - Primeira Missão
                  </h4>
                  <p className="text-secondary-600">
                    Nosso primeiro telescópio foi utilizado com sucesso em uma missão da Estação Espacial Internacional.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    2024 - Liderança Global
                  </h4>
                  <p className="text-secondary-600">
                    Reconhecidos como líderes em tecnologia de telescópios para aplicações espaciais profissionais.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-secondary-900">
              Nossos Valores
            </h3>

            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className={`w-full h-1 bg-gradient-to-r ${value.gradient} rounded-full mb-4`}></div>
                <h4 className="text-xl font-semibold text-secondary-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}