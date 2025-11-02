import { Brain, Code2, Zap, Shield, Workflow, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Custom AI models and machine learning solutions tailored to your business needs",
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "End-to-end software development services with cutting-edge technologies",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation and workflow optimization",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and data protection in every solution we deliver",
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Seamless integration with your existing systems and infrastructure",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Solutions designed to grow with your business and adapt to changing needs",
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-foreground"></div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Our Services
            </span>
            <div className="h-px w-12 bg-foreground"></div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
            Comprehensive
            <br />
            <span className="gradient-text">AI & Software Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empowering businesses with intelligent technology solutions that drive innovation and efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-gradient-start))] to-[hsl(var(--accent-gradient-end))] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
