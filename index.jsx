import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Heart, Music, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Birthday() {
  const [isOpen, setIsOpen] = useState(false);

  // Cores temáticas que combinam Billie Eilish (tons escuros/verdes) e Taylor Swift (pastéis/românticos)
  const billieColors = {
    primary: "#1A4D3A", // Verde escuro característico
    secondary: "#0A2F23", // Verde mais escuro
    accent: "#94C9B9" // Verde claro
  };

  const taylorColors = {
    primary: "#E0B0D5", // Rosa pastel
    secondary: "#B19CD9", // Lilás
    accent: "#F8C8DC" // Rosa claro
  };

  const baianaColors = {
    gold: "#FFD700", // Dourado baiano
    blue: "#00BFFF", // Azul typical
    white: "#FFFFFF" // Branco
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Elementos decorativos - flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: -100, 
              x: Math.random() * window.innerWidth, 
              opacity: 0,
              rotate: 0
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 7,
            }}
          >
            {i % 3 === 0 ? (
              <Music className="w-5 h-5 text-green-400" />
            ) : i % 3 === 1 ? (
              <Star className="w-4 h-4 text-purple-400" />
            ) : (
              <Sparkles className="w-4 h-4 text-pink-400" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Padrões baianos decorativos */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-28 h-28 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="closed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                {/* Envelope do cartão com tema baiano e musical */}
                <div className="bg-gradient-to-br from-green-100 via-white to-purple-100 rounded-2xl shadow-2xl p-8 md:p-12 border-4 border-yellow-300 relative overflow-hidden">
                  {/* Elementos decorativos de canto */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/40 to-transparent rounded-br-full" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-200/40 to-transparent rounded-tl-full" />
                  
                  {/* Padrões baianos */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
                  
                  {/* Conteúdo */}
                  <div className="relative z-10 text-center space-y-8">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Gift className="w-20 h-20 mx-auto text-green-500 drop-shadow-lg" />
                    </motion.div>
                    
                    <div>
                      <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4">
                        Para Você,
                      </h1>
                      <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Minha Baiana!
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-600 mt-4">🎵 Billie & Taylor Style 🎵</p>
                    </div>

                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center justify-center gap-2 text-green-600"
                    >
                      <Heart className="w-6 h-6 fill-current" />
                      <span className="text-lg font-medium">Clique para abrir sua surpresa</span>
                      <Heart className="w-6 h-6 fill-current" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.9, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-green-200">
                {/* Cabeçalho com gradiente temático */}
                <div className="bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10"
                  >
                    <div className="flex justify-center items-center gap-4 mb-3">
                      <Music className="w-8 h-8 text-white drop-shadow-lg" />
                      <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
                      <Music className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                      Feliz 19 Anos, Minha Baiana!
                    </h2>
                    <p className="text-white/90 text-lg mt-2 drop-shadow">
                      Que seu dia seja tão especial quanto você!
                    </p>
                  </motion.div>
                </div>

                {/* Conteúdo da mensagem */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="p-6 md:p-10 space-y-6 bg-gradient-to-b from-green-50/50 to-white"
                >
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p className="text-base md:text-lg font-serif">
                      <span className="text-2xl font-bold text-green-600">Minha querida baiana,</span> hoje você completa 19 anos! 
                      Uma idade tão especial merece uma celebração à altura do seu bom gosto musical - entre os beats da Billie 
                      e as melodias da Taylor, você encontra sua própria trilha sonora.
                    </p>

                    <p className="text-base md:text-lg font-serif">
                      Sua energia baiana contagiante combina perfeitamente com a autenticidade da Billie Eilish e a 
                      sensibilidade da Taylor Swift. Você é essa mistura perfeita de força suave e personalidade vibrante 
                      que ilumina qualquer ambiente.
                    </p>

                    <p className="text-base md:text-lg font-serif">
                      Que esse novo ciclo traça não apenas mais um ano de vida, mas sim um capítulo repleto das 
                      <span className="font-semibold text-purple-600"> "Lover"</span> moments da Taylor e da 
                      <span className="font-semibold text-green-600"> "Happier Than Ever"</span> energia da Billie!
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
                      <p className="text-lg text-gray-800 italic">
                        "A baiana que conquista o mundo com seu axé e seu bom gosto musical!"
                      </p>
                    </div>

                    <p className="text-base md:text-lg font-serif">
                      Que seus 19 anos sejam repletos de conquistas, amores verdadeiros, amizades sinceras e, 
                      claro, muitas músicas incríveis para embalar cada momento especial.
                    </p>

                    <div className="text-center pt-4">
                      <p className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-green-600 via-purple-600 to-pink-600 bg-clip-text">
                        Axé, Meu Amor! Parabéns!
                      </p>
                      <p className="text-lg text-gray-600 mt-2 font-serif italic">
                        Com todo carinho do mundo - seu fã número 1!
                      </p>
                    </div>
                  </div>

                  {/* Elementos decorativos - corações musicais */}
                  <div className="flex justify-center gap-4 pt-6">
                    {[...Array(7)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -15, 0],
                          scale: [1, 1.3, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        {i % 3 === 0 ? (
                          <Music className="w-7 h-7 text-green-400" />
                        ) : i % 3 === 1 ? (
                          <Heart className="w-7 h-7 text-purple-400 fill-current" />
                        ) : (
                          <Star className="w-7 h-7 text-pink-400 fill-current" />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Botão fechar */}
                  <div className="text-center pt-6">
                    <Button
                      onClick={() => setIsOpen(false)}
                      className="bg-gradient-to-r from-green-500 to-purple-500 hover:from-green-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Fechar Cartão
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}