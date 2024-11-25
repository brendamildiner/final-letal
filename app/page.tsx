"use client";

import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import VideoComponent from '@/app/componentes/video';
import Sticky from '@/app/componentes/Sticky';


import FlourishV1 from '@/app/componentes/componente1';
import FlourishV2 from '@/app/componentes/componente2';
import FlourishV3 from '@/app/componentes/componente3';
import FlourishV4 from '@/app/componentes/componente4';
import FlourishV5 from '@/app/componentes/componente5';
import FlourishV6 from '@/app/componentes/componente6';
import FlourishV7 from '@/app/componentes/componente7';
import FlourishV8 from '@/app/componentes/componente8';
import GasesParallax from '@/app/componentes/GasesParallax';



const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#000',
  color: '#fff',
  fontFamily: 'Protest_Guerrilla, sans-serif', // Aquí puedes cambiar la tipografía según necesites
  paddingLeft: '80px',
};

const countStyle: CSSProperties = {
  fontSize: '8rem',
  fontWeight: 'bold',
  color: '#e60000', // color rojo similar al de la imagen
  fontFamily: 'Protest_Guerrilla, sans-serif', // Cambia a la fuente específica si la tienes disponible
};

const textStyle: CSSProperties = {
  fontSize: '1.5rem',
  fontFamily: 'Protest_Guerrilla, sans-serif',
  color: '#fff',
  marginTop: '1rem',
};








{/* 0 a 99.01% */ }
const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (counterRef.current) {
            observer.unobserve(counterRef.current); // Deja de observar después de activar
          }
        }
      },
      { threshold: 0.8 } // Activar cuando el 80% del componente sea visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = 0;
    const endValue = 99.01;
    const duration = 2; // duración en segundos

    let startTimestamp = null;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = (timestamp - startTimestamp) / (duration * 1000);
      const currentCount = Math.min(
        startValue + progress * (endValue - startValue),
        endValue
      );
      setCount(currentCount.toFixed(2));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div ref={counterRef} style={containerStyle}>
      <motion.div
        style={countStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <h3 className='w-full max-w-1xl leading-relaxed font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[4px] textStyle mb-[-10px]'>¿CUÁL ES EL GAS MÁS EMITIDO?</h3>
        {count}%
      </motion.div>
      <div style={textStyle}>
        <p className='mt-[-35px] w-[500px] flex leading-relaxed'>de las emisiones anuales mundiales son de CO2. Su persistencia en la atmósfera agrava el cambio climático y sus consecuencias ambientales.</p>
      </div>
    </div>
  );
};












const AttentionPoster: React.FC = () => {
  // Estado para controlar el scroll
  const [scrollY, setScrollY] = useState(0);
  const [showGases, setShowGases] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInsideSection, setIsInsideSection] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar si la visualización está en pantalla

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Detectamos cuando la sección es visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // Consideramos la sección visible cuando está al menos al 50% en la vista
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);



  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isInsideSection && sectionRef.current) {
        e.preventDefault();

        // Scroll horizontal limitado
        const maxScrollLeft = sectionRef.current.scrollWidth - sectionRef.current.clientWidth;
        if (
          (e.deltaY > 0 && sectionRef.current.scrollLeft < maxScrollLeft) ||
          (e.deltaY < 0 && sectionRef.current.scrollLeft > 0)
        ) {
          sectionRef.current.scrollLeft += e.deltaY;
        } else {
          // Permitir scroll vertical si se alcanza el inicio o el fin
          setIsInsideSection(false);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isInsideSection]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setIsInsideSection(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.1, // Ajustá este valor según lo que consideres como estar "dentro" de la sección
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Función para actualizar el estado de scroll
  const handleScroll = () => {

    //para definir en qué momento se ocultan las imagenes de gases (con el titulo de la VIS 1)
    const TopCiudad = document.getElementById('TopCiudad');
    if (TopCiudad) {
      const titlePosition = TopCiudad.offsetTop;
      setScrollY(window.scrollY);


      // Oculta las imágenes de gases al alcanzar la sección "¿Qué tipo de emisiones de CO₂ existen?"
      if (window.scrollY >= titlePosition - window.innerHeight) {
        setShowGases(false);
      } else {
        setShowGases(true);
      }
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <main>
        {/*///////// PORTADA /////////////*/}
        {/* RECTANGULO ROJO */}
        <br />
        <div className="relative bg-[#d20303] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
              backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          />

          {/* Flechas decorativas en las esquinas */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>


          {/* ATENCION */}
          <h1 className="font-protest-guerrilla text-center text-xl font-bold mb-4 uppercase tracking-wider">
            ¡ATENCIÓN!
          </h1>

          <ParallaxProvider>
            <Parallax speed={-10}>

              {/* EL PODER DE LAS POTENCIAS ES */}
              <p className="font-protest-guerrilla text-center text-4xl mb-4 uppercase tracking-wide">
                El poder de las potencias es
              </p>


              {/* LETAL */}
              <div className="font-protest-guerrilla text-center text-[160px] sm:text-[300px] font-black tracking-wider leading-none">
                LETAL
              </div>
            </Parallax>
          </ParallaxProvider>

          <div className="font-protest-guerrilla absolute left-6 center text-xs sm:text-sm">



            {/* AÑOS */}
            <span className="bg-black text-yellow-500 px-2 py-1 rounded">1990</span>
          </div>
          <div className="absolute right-6 center text-xs sm:text-sm">
            <span className="bg-black text-yellow-400 px-2 py-1 rounded">2060</span>
          </div>

          {/* Texto inferior */}
          <div className="font-protest-guerrilla absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs tracking-wider">
            VISUALIZACIÓN DE DATOS, UTDT
          </div>
        </div>



        {/*///////// INTRODUCCION //////////*/}
        {/* Texto explicativo */}
        <p className="font-coda text-[20px] text-left mt-20 mx-auto max-w-4xl leading-relaxed text-white">
          Las <span className="bg-yellow-400 text-black px-1">potencias mundiales</span> lideran el desarrollo global, pero también son responsables de un devastador impacto ambiental. A través de la emisión masiva de CO2, sus políticas y prácticas están acelerando cada vez más el <span className="bg-yellow-400 text-black px-1">cambio climático</span> y poniendo en riesgo el futuro de nuestro planeta. Es hora de responsabilizar a quienes contribuyen más al problema y exigir un cambio radical hacia un mundo más sostenible.
        </p>

        <br />








        {/*///////// GASES //////////////*/}
        {/* Contenedor de los gases */}
        <section className=" sticky top-0">

          <div className="justify-left items-left mt-20 mx-20 z-50">

            <GasesParallax />

          </div>

        </section>


        {/*//////// TEXTOS DE GASES /////////////////////*/}
        <section className="h-[600px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
              <div className='absolute right-4 h-[600px] w-[600px] flex items-start px-4'>

            <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla text-[#D9D9D9] text-left text-2xl font-bold my-20 ml-[45px] textStyle">
                ¿QUÉ SON LOS GASES DE EFECTO INVERNADERO?
            </h3> 

                <p className="font-coda text-[20px] text-left w-full max-w-1xl leading-relaxed text-white">
                  Los gases de efecto invernadero (GEI) son compuestos en la atmósfera que atrapan el calor, evitando que escape al espacio y manteniendo la Tierra a una temperatura habitable. Los principales GEI incluyen <span className="bg-blue-400 text-black px-1 py-0.5 mx-1">dióxido de carbono</span> (CO₂), <span className="bg-red-600 text-black px-1 py-0.5 mx-1">metano</span> (CH₄) y <span className="bg-purple-600 text-black px-1 py-0.5 mx-1">óxidos de nitrógeno</span> (NOx). </p>

              </div>

            </Parallax>

          </ParallaxProvider>

        </section>


        <section className="h-[600px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
              <div className='absolute right-4 w-[600px] flex items-start px-4'>

              <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla uppercase text-[#D9D9D9] text-left text-2xl font-bold my-20 ml-[45px] textStyle">
                ¿Cómo regresan éstos gases a la Tierra?
            </h3> 

                <p className='font-coda text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white'>
                  Naturalmente, la luz solar atraviesa la atmósfera y llega a la superficie de la Tierra, calentándola. Parte de este calor es reflejado, nuevamente, desde La Tierra hacia el espacio en forma de radiación infrarroja. Pero, con la intervención del ser humano se genera un exceso de gases de efecto invernadero.
                </p>

              </div>

            </Parallax>

          </ParallaxProvider>

        </section>

        <section className="h-[1000px]">

          <ParallaxProvider>

            <Parallax speed={-10}>
              <div className='absolute right-4 h-[600px] w-[600px] flex items-start px-4'>

              <h3 className="max-w-1xl leading-relaxed font-protest-guerrilla uppercase text-[#D9D9D9] text-left text-2xl font-bold my-20 ml-[45px] textStyle">
                ¿Cómo afectan al ser humano?
            </h3> 

                <p className="font-coda text-[20px] flex text-left w-full max-w-1xl leading-relaxed text-white">
                  Con más gases de efecto invernadero en la atmósfera, una mayor cantidad de este calor es atrapada en lugar de escapar al espacio. La presencia adicional de estos gases dificulta que el calor regrese al espacio, causando que más calor se "reabsorba" en la atmósfera, generando una desregulación en la temperatura de La Tierra.
                </p>
              </div>

            </Parallax>

          </ParallaxProvider>

        </section>





        {/* //////// CIUDAD //////////////*/}

        <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle mb-[-10px]">¿QUÉ ACTIVIDADES LIBERAN ESTOS GASES?
        </h2>




        {/* //////// CIUDAD ILUSTRACION //////////////*/}
        <ParallaxProvider scrollAxis="horizontal">
          <Parallax speed={-1}>

            <section>

              <div id="TopCiudad"
                ref={sectionRef}
                className="flex justify-center my-8 overflow-x-auto whitespace-nowrap w-full"
                style={{ height: '750px' }}>

                <div className="inline-block min-w-[10000px]">
                  <Image src="/ciudad.svg" alt="Visualización de datos" width={11103} height={850} />
                </div>
              </div>

            </section>

          </Parallax>
        </ParallaxProvider>






        {/* ///////// CONTADOR DE CO2 ///////// */}
        <Counter />






        {/*////////// VISUALIZACION 1 //////////*/}
        {/* Título a visualización 1 LOS TIPOS DE EMISIONES*/}

        {/*}    <h3 className="text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[70px]">¿CUÁLES SON LAS ACTIVIDADES MÁS CONTAMINANTES?</h3>


        {/* Visualización 1 */}
        <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-8">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle">¿CUÁLES SON LAS ACTIVIDADES MÁS CONTAMINANTES?
                </h2>
                <FlourishV1 />
              </pre>
            </Sticky>

          </div>
        </div>






        {/*////// VISUALIZACION 2 /////////*/}
        {/* Título a visualización 2 */}

        {/* Visualización 2 */}
        <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-8">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle">¿QUIÉNES SON LOS RESPONSABLES DE ESTAS EMISIONES?
                </h2>
                <FlourishV2 />
              </pre>
            </Sticky>

          </div>
        </div>







        {/* ///////// VISUALIZACION 3 /////////// */}

        <div className="grid grid-cols-8 gap-6 mt-20" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-5">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle">LAS POTENCIAS A TRAVÉS DEL TIEMPO
                </h2>

                <FlourishV3 />
              </pre>
            </Sticky>

          </div>



          {/* Columna izquierda: Textos de las potencias */}
          <div className="col-span-3 space-y-20 overflow-y-auto">
            <ParallaxProvider>

              <Parallax speed={-10}>
                <section className="h-[1000px]"></section>




                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1970 y 1980, <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> lideraba en emisiones de CO₂ gracias a su industrialización y consumo de combustibles fósiles. <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">La Unión Soviética</span> también presentaba altas emisiones, mientras que <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> e <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> contribuían poco debido a su limitada industrialización en esta etapa.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1980 y 1990, <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> mantuvo el liderazgo en emisiones, aunque comenzaba a estabilizarse. <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">La Unión Soviética</span> tenía altos niveles de CO₂ por su industria pesada, mientras Europa Occidental iniciaba políticas de reducción de emisiones. <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> empezaba a crecer, pero aún en niveles bajos.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 1990 y 2000, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> aumentó notablemente sus emisiones al consolidarse como potencia manufacturera. Mientras, las emisiones de <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> y <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> se mantuvieron estables y la última profundizó sus políticas ambientales, logrando una reducción progresiva.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-left text-white text-lg leading-relaxed">
                    Entre 2000 y 2010, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> superó a Estados Unidos en emisiones debido a su expansión industrial y uso intensivo de carbón. <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> mostró una leve baja, <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> continuó su descenso, y las emisiones de <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> aumentaron con su crecimiento económico.
                  </h2>

                </section>

                <section className="h-[600px]">

                  <h2 className="font-coda text-[20px] text-left w-full leading-relaxed text-white">
                    Entre 2010 y 2020, <span className="bg-[#b51a00] px-1 py-0.5 mx-1">China</span> lidera ampliamente en emisiones, mientras que <span className="bg-[#fff995] text-black px-1 py-0.5 mx-1">Estados Unidos</span> y <span className="bg-[#fffb00] text-black px-1 py-0.5 mx-1">Rusia</span> siguen reduciendo su huella de carbono. Las emisiones de <span className="bg-[#ff2600] px-1 py-0.5 mx-1">India</span> continúan en ascenso y <span className="bg-[#ff8800] text-black px-1 py-0.5 mx-1">Japón</span> se mantiene muy constante, siendo, hasta la actualidad, la potencia con menor cantidad de emisiones.
                  </h2>

                </section>

              </Parallax>

            </ParallaxProvider>

          </div>


        </div>















        {/* ////////// CONSECUENCIAS //////////// */}
        {/* RECTANGULO NARANJA */}
        <br />

        <div className="relative bg-[#ff8800] text-black p-8 rounded-xl max-w-[1410px] h-[750px] mx-auto flex flex-col justify-center items-center overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Cambia 0.5 para ajustar la velocidad
              backgroundImage: 'url(/path/to/your/background/image.jpg)', // Ruta de la imagen de fondo
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: -1,
            }}
          />

          {/* Flechas decorativas en las esquinas */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-4 border-l-4 border-black rotate-180"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-t-4 border-r-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b-4 border-l-4 border-black -rotate-180"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-4 border-r-4 border-black rotate-180"></div>


          <ParallaxProvider>
            <Parallax speed={-10}>

              {/* CONSECUENCIAS */}
              <div className="font-protest-guerrilla text-center text-[160px] sm:text-[180px] font-black tracking-wider leading-none">
                CONSECUENCIAS
              </div>
            </Parallax>
          </ParallaxProvider>
        </div>







        {/* ///////// VISUALIZACIÓN 5 - deshielo //////////// */}










        {/* ///////// VIDEO //////////// */}


        <section className='h-[900]'>

          <Sticky>
            <pre>
              <VideoComponent />
            </pre>
          </Sticky>



          <ParallaxProvider>
            <Parallax speed={3}>

              <div className="grid grid-cols-8 gap-6 mt-20 top-0" style={{ marginRight: '50px', marginLeft: '10px' }}>

                <div className='col-span-5'></div>

                <div className='col-span-3'>

                  <p className="text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '50px', marginBottom: '90px' }}>
                    “Un grupo de científicos advierten que en 2025 los daños por las emisiones de CO2 serán <span className="bg-yellow-400 text-black px-1">irreversibles</span> y desencadenarán el principio del fin del mundo” - Diario El Crosinta
                  </p>

                </div>
              </div>

            </Parallax>
          </ParallaxProvider>

        </section>












        {/* ///////// VISUALIZACIÓN 4 - temperatura //////////// */}


        <div className="grid grid-cols-8 gap-6 mt-20" style={{ marginRight: '50px', marginLeft: '10px' }}>

          {/* Columna derecha: Visualización fija */}
          <div className="col-span-5">

            <Sticky>
              <pre>
                <h2 className="font-protest-guerrilla text-[#D9D9D9] text-left text-4xl font-bold my-20 ml-[45px] textStyle">CALENTAMIENTO GLOBAL
                </h2>

                <FlourishV8 />
              </pre>
            </Sticky>

          </div>



          {/* Columna izquierda: Textos de las potencias */}
          <div className="col-span-3 space-y-20 overflow-y-auto">
            <ParallaxProvider>

              <Parallax speed={-10}>
                <section className="h-[1000px]"></section>


                <section className="h-[600px]">

                  <p className="font-coda text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '20px', marginBottom: '90px' }}>
                    El exceso de gases de efecto invernadero, como el dióxido de carbono, atrapa más calor en la atmósfera. Esto eleva las temperaturas globales, alterando patrones climáticos, provocando <span className="bg-yellow-400 text-black px-1">fenómenos extremos</span> como sequías e inundaciones, y afectando la biodiversidad al desestabilizar ecosistemas y derretir los polos.
                  </p>

                </section>

                <section className="h-[600px]">

                  <p className="font-coda text-[#D9D9D9] text-lg leading-relaxed" style={{ marginTop: '20px', marginBottom: '90px' }}>
                    Los glaciares se derriten con rapidez. El nivel del mar aumenta por el deshielo. Las selvas se secan y, la flora y fauna luchan por sobrevivir.
                  </p>

                </section>


                <section className="h-[600px]">


                </section>

              </Parallax>

            </ParallaxProvider>

          </div>


        </div>







        






        {/* ///////// PREDICCIONES //////////// */}
        <h3 className="font-protest-guerrilla text-[#D9D9D9] flex text-left text-4xl font-bold my-20 ml-[70px]">¿QUÉ QUEDARÁ DE NOSOTROS EN 2060?</h3>

        <div className="flex justify-center my-8 ml-8">
          <Image src="/prediccion-oficial.svg" alt="Visualizacion de datos" width={1800} height={500} />
        </div>

        <p className="font-coda text-[20px] text-left mt-20 mx-auto max-w-4xl leading-relaxed text-white mt-[] mb-[400px]">

          Las decisiones políticas y económicas de las potencias impulsan el cambio climático, afectando a todo el planeta y poniendo en riesgo nuestro futuro. Exijamos acciones responsables y tomemos decisiones diarias que protejan el medio ambiente. <span className="bg-yellow-400 text-black px-1">El cambio empieza con cada uno de nosotros.</span>
        </p>







      </main >

    </>
  );
};


export default AttentionPoster;