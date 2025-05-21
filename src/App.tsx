import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';
import './styles/App.css';

function App() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
 
  // UBAH NAMA DAN NIM ANGGOTA
  const teamMembers = [
    {
      name: "John Doe",
      nim: "2110191001"
    },
    {
      name: "Jane Smith",
      nim: "2110191002"
    },
    {
      name: "Mike Johnson",
      nim: "2110191003"
    },
    {
      name: "Sarah Wilson",
      nim: "2110191004"
    }
  ];

  // Animasi variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="container">
      <div className="glow" />
      <div className="glow-secondary" />
      
      {/* Partikel-partikel tambahan */}
      <div className="floating-particle particle-1"></div>
      <div className="floating-particle particle-2"></div>
      <div className="floating-particle particle-3"></div>
      <div className="floating-particle particle-4"></div>
      
      {/* Orbs bercahaya */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <Particles
        className="particles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#ffffff", "#4cc9f0", "#3a86ff", "#8338ec"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.2,
              straight: false,
              direction: "none",
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle", "star"],
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
          },
          detectRetina: true,
        }}
      />
      
      <motion.div 
        className="content"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <motion.div className="main-content" variants={itemVariants}>
          <motion.div className="team-section">
            <div className="team-photo-container">
              <motion.img
                className="team-photo"
                // UBAH GAMBAR TIM
                src="https://images.unsplash.com/photo-1747607174999-0ca07c1ef75a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tim Kami"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              />
              <div className="photo-overlay">
                {/* UBAH NAMA KELOMPOK */}
                <h2 className="photo-title">Kelompok X</h2>
              </div>
            </div>
            
            <div className="team-info">
              <div className="info-header">
                <h3 className="info-title">Apa itu App Engine ?</h3>
                {/* UBAH DESKRIPSI */}
                <p className="info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              
              <div className="team-members-section">
                <h4 className="team-members-title">Anggota Tim</h4>
                <ul className="team-list">
                  {teamMembers.map((member, index) => (
                    <motion.li
                      key={index}
                      className="team-list-item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-nim">{member.nim}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
