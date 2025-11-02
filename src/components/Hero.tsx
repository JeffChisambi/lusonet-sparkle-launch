import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-holographic.jpg";
import aiShapes from "@/assets/ai-shapes.jpg";

const Hero = () => {
  return (
    <section id="main" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-card rounded-3xl p-8 lg:p-12 animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tag */}
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-foreground"></div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Transformative Potential
                </span>
                <span className="text-xs text-muted-foreground">2023</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                  AI engineering
                  <br />
                  for intelligent
                  <br />
                  solutions <Sparkles className="inline-block w-10 h-10 lg:w-12 lg:h-12 text-accent animate-pulse" />
                </h1>
              </div>

              {/* Subheading with icon */}
              <div className="flex items-start gap-4 bg-secondary/50 rounded-2xl p-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-gradient-start))] to-[hsl(var(--accent-gradient-end))] flex items-center justify-center flex-shrink-0 animate-float">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Accelerating Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Enabling organizations to leverage cutting-edge artificial intelligence technologies
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link to="/get-started">
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base group"
                >
                  Get started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img
                  src={heroImage}
                  alt="Holographic abstract art representing AI technology"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay Card - AI Community */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 animate-fade-in">
                  <h4 className="font-semibold text-foreground mb-2">AI Community</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Join the AI community and unleash your creative spirit
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--accent-gradient-start))] to-[hsl(var(--accent-gradient-end))] border-2 border-card"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">More 20k users</span>
                  </div>
                </div>
              </div>

              {/* Side Info Card */}
              <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 glass-card rounded-2xl p-6 w-64 animate-fade-in">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Experiences</div>
                  <img
                    src={aiShapes}
                    alt="AI technology abstract shapes"
                    className="w-full h-20 object-cover rounded-xl"
                  />
                  <p className="text-xs text-muted-foreground">
                    revolutionizing industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
