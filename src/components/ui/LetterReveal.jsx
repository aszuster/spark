import React from "react";
import { motion } from "framer-motion";

export const LetterReveal = ({text, className}) => {
  // Dividir por palabras pero mantener los espacios
  const words = text.split(/(\s+)/);
  
  return (
    <div className={`relative block ${className}`}>
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
                <span
                  key={`${wordIndex}-${letterIndex}`}
                  className="inline-block overflow-hidden"
                  style={{
                    height: '1.2em',
                    lineHeight: '1em',
                    verticalAlign: 'top',
                    paddingRight: '2px'
                  }}
                >
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                      delay: 0.05 * globalIndex,
                    }}
                  >
                    {letter}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
};