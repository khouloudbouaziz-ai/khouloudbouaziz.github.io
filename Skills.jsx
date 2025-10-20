import { motion } from 'framer-motion';

const skills = [
  { name: 'TensorFlow', level: 80 },
  { name: 'PyTorch', level: 75 },
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Azure', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'Docker', level: 70 }
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Compétences techniques</h2>
      <div>
        {skills.map((sk, i) => (
          <motion.div
            key={sk.name}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.14 }}
            viewport={{ once: true }}
            style={{ marginBottom: '1.2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{sk.name}</span>
              <span>{sk.level}%</span>
            </div>
            <div style={{
              background: '#E8E8E8',
              borderRadius: '8px',
              height: '12px',
              marginTop: '6px',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{
                  background: 'linear-gradient(90deg, #3C3B6E, #F5C518)',
                  height: '12px',
                  borderRadius: '8px'
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${sk.level}%` }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}