import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const StatsCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats: Stat[] = [
    { value: 500, label: 'Projects Completed', suffix: '+' },
    { value: 200, label: 'Happy Clients', suffix: '+' },
    { value: 15, label: 'Years Experience', suffix: '+' },
    { value: 50, label: 'Team Members', suffix: '+' },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Counter
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </motion.div>
              <p className="font-medium mt-2 group-hover:text-foreground transition-colors duration-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ end, duration, suffix = '', inView }: { end: number; duration: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return (
    <motion.div 
      className="text-5xl font-extrabold text-primary group-hover:text-secondary transition-colors duration-300"
      animate={{ 
        textShadow: [
          '0 0 10px hsl(223 93% 23% / 0.2)',
          '0 0 20px hsl(37 90% 53% / 0.3)',
          '0 0 10px hsl(223 93% 23% / 0.2)',
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {count}{suffix}
    </motion.div>
  );
};

export default StatsCounter;
