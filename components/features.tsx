const features = [
  {
    emoji: "🪄",
    title: "AI Magic Edit",
    description:
      "Instantly remove objects, fix imperfections, and enhance photos with one click.",
  },
  {
    emoji: "🎨",
    title: "Smart Color Enhance",
    description:
      "Automatically adjust brightness, contrast, and colors to make your images pop.",
  },
  {
    emoji: "✂️",
    title: "Background Remover",
    description:
      "Erase backgrounds effortlessly and replace them with solid colors or new scenes.",
  },
  {
    emoji: "📐",
    title: "Auto Resize",
    description:
      "Resize images perfectly for social media, web, or print without losing quality.",
  },
  {
    emoji: "⚡",
    title: "Batch Editing",
    description:
      "Edit multiple photos at once to save time and maintain consistency.",
  },
  {
    emoji: "☁️",
    title: "Cloud Sync",
    description:
      "Access your projects anywhere with secure cloud storage and instant sync.",
  },
];

export default function Features() {
  return (
    <div className="pt-10">
      <h1 className="mx-auto text-4xl font-semibold tracking-tight text-purple-400">
        Smarter Editing Powered by AI
      </h1>
      <p className="mx-auto max-w-3xl pt-5 text-xl text-neutral-400">
        From quick fixes to advanced edits, Editopia gives you all the tools you
        need to create, enhance, and perfect your images with the power of AI.
      </p>

      <div className="grid max-w-6xl gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group h-[220px] rounded-2xl border border-white/20 bg-white/10 p-6 text-left backdrop-blur-md transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="text-3xl">{feature.emoji}</span>
            <h2 className="pt-4 text-xl font-semibold tracking-tight text-white">
              {feature.title}
            </h2>
            <p className="pt-3 text-base text-neutral-400 group-hover:text-neutral-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
