// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/AnimatedStatsSection.css'; 

// const AnimatedStatsSection = () => {
//   const statsData = [
//     { count: 850, label: 'Project Successfully Delivered' },
//     { count: 500, label: 'Clients All Over the World' },
//     { count: 1000, label: 'Students Trained' },
//   ];

//   const [animated, setAnimated] = useState(false);
//   const [animatedNumbers, setAnimatedNumbers] = useState(Array(statsData.length).fill(0));

//   useEffect(() => {
//     // Trigger animation when component mounts
//     setAnimated(true);

//     // Animate numbers
//     const animationDuration = 2000; // 2 seconds
//     const interval = animationDuration / 100; // Update every 20 milliseconds
//     const step = animatedNumbers.map((number, index) => statsData[index].count / (animationDuration / interval));

//     const updateNumbers = () => {
//       setAnimatedNumbers((prevNumbers) =>
//         prevNumbers.map((number, index) => {
//           const nextNumber = number + step[index];
//           return nextNumber > statsData[index].count ? statsData[index].count : nextNumber;
//         })
//       );
//     };

//     const animationInterval = setInterval(updateNumbers, interval);

//     // Clean up interval on component unmount
//     return () => clearInterval(animationInterval);
//   }, [animated]);

//   useEffect(() => {
//     // Initialize animatedNumbers to start from 1
//     if (animated) {
//       setAnimatedNumbers(statsData.map(() => 1));
//     }
//   }, [animated]);

//   return (
//     <section className={`section2 mb-5 p-4 me-5 ms-5 ${animated ? 'fade-in' : ''}`}>
//       <div className="container-fluid mt-4 mb-5 text-center">
//         <div className="row">
//           {statsData.map((stat, index) => (
//             <div
//               key={index}
//               className="col text-center p-4 border rounded shadow"
//               style={{
//                 background: 'linear-gradient(to bottom, #d9d9d9, #c0c0c0)', // Metallic and light gray gradient
//                 border: '1px solid #a9a9a9', // Light gray border
//               }}
//             >
//               <h2 style={{ color: 'black' }}>{Math.floor(animatedNumbers[index])}+</h2>
//               <p className="lead"><strong>{stat.label}</strong></p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedStatsSection;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnimatedStatsSection = () => {
  const statsData = [
    { count: 850, label: 'Projects Delivered' },
    { count: 500, label: 'Global Clients' },
    { count: 1000, label: 'Students Trained' },
  ];

  const [animated, setAnimated] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState(Array(statsData.length).fill(0));

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.stats-section');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (animated) {
      setAnimatedNumbers(statsData.map(() => 1));
      
      const animationDuration = 2000;
      const interval = 20;
      const steps = statsData.map(stat => stat.count / (animationDuration / interval));
      
      const animationInterval = setInterval(() => {
        setAnimatedNumbers(prev => 
          prev.map((val, idx) => {
            const nextVal = val + steps[idx];
            return nextVal > statsData[idx].count ? statsData[idx].count : nextVal;
          })
        );
      }, interval);

      return () => clearInterval(animationInterval);
    }
  }, [animated]);

  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="row g-2 g-md-5 justify-content-center">
          {statsData.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div 
                className="stat-card h-100 p-4 rounded shadow text-center"
                style={{
                  background: 'linear-gradient(to bottom, #d9d9d9, #c0c0c0)',
                  border: '1px solid #a9a9a9',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = ''}
              >
                <h2 
                  className="display-4 fw-bold mb-3" 
                  style={{ 
                    color: 'black',
                    fontSize: 'calc(1.5rem + 1.5vw)'
                  }}
                >
                  {Math.floor(animatedNumbers[index])}+
                </h2>
                <p 
                  className="mb-0 fw-bold"
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-section {
            padding: 3rem 0 !important;
          }
          .stat-card {
            margin-bottom: 1rem;
          }
        }
        @media (max-width: 576px) {
          .stat-card {
            padding: 1.5rem 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedStatsSection;