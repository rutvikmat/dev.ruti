import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        particles: {
          number: { value: 40 },
          size: { value: 2 },
          move: { speed: 1 },
          links: {
            enable: true,
            distance: 120,
            color: "#6C63FF",
            opacity: 0.3,
          },
        },
      }}
    />
  );
}