const images = [
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const headlines = [
  "Unleash Your Creative Potential",
  "Innovation Starts Here",
  "Transform Your Digital Workflow",
  "Building Tomorrow's Solutions Today",
  "Elevate Your Business Strategy",
  "Seamless Experiences, Powerful Results",
  "Redefine What's Possible",
  "Streamline Your Path to Success",
  "The Future of Digital Experience",
  "Technology That Empowers",
];

const subheadlines = [
  "Harness the power of our platform to bring your ideas to life. Start creating with confidence and precision.",
  "Our cutting-edge tools help you stay ahead in an ever-evolving digital landscape. Join thousands of satisfied users.",
  "Simplify complex processes and focus on what truly matters - delivering exceptional value to your customers.",
  "From concept to execution, our platform provides everything you need to build scalable, robust solutions.",
  "Unlock new opportunities with our intelligent ecosystem designed for growth-focused professionals.",
  "Intuitive interface meets powerful functionality. Experience the perfect balance of simplicity and capability.",
  "Join a community of innovators and push the boundaries of what's possible in your industry.",
  "Our platform adapts to your needs, providing the flexibility and tools required for your unique challenges.",
  "Built for the demands of modern business. Scale confidently with enterprise-grade performance and security.",
  "Transform your workflow with AI-powered tools that optimize efficiency and drive remarkable outcomes.",
];

export const getRandomImage = (): string => {
  return images[Math.floor(Math.random() * images.length)];
};

export const getRandomHeadline = (): string => {
  return headlines[Math.floor(Math.random() * headlines.length)];
};

export const getRandomSubheadline = (): string => {
  return subheadlines[Math.floor(Math.random() * subheadlines.length)];
};