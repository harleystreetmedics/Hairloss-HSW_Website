// Tailwind via PostCSS, so the build works under both webpack and Turbopack.
// The production build uses webpack (see package.json): Turbopack's CSS loader crashes on the
// host's build container (docs/decisions.md #34).
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
