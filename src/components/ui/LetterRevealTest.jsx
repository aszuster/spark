import React from "react";
import { motion } from "framer-motion";

export const LetterRevealTest = ({text, className}) => {
  // Dividir por palabras pero mantener los espacios
  const words = text.split(/(\s+)/);
  
  return (
    <div className={`relative inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        if (word.match(/\s+/)) {
          // Si es un espacio, renderizarlo directamente
          return <span key={wordIndex}>{word}</span>;
        }
        
        // Si es una palabra, dividir en letras
        return (
          <span key={wordIndex} className="inline-block">
            {word.split("").map((letter, letterIndex) => {
              const globalIndex = words.slice(0, wordIndex).join('').length + letterIndex;
              return (

                  <motion.span
                    className="inline-block"
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.05 * globalIndex,
                    }}
                  >
                    {letter}
                  </motion.span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};