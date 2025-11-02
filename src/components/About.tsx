import { ArrowUpRight } from "lucide-react";
import communityImage from "@/assets/community-illustration.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-card rounded-3xl p-8 lg:p-16 animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-8xl lg:text-9xl font-bold text-foreground leading-none flex items-center gap-6">
                  AI
                  <div className="h-1 w-20 bg-foreground"></div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Engineering as the driving force behind intelligent automation
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Leading the Future of Technology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At LusoNet, we combine expertise in artificial intelligence and software engineering to deliver transformative solutions. Our team of experts works closely with clients to understand their unique challenges and create custom solutions that drive real business value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From intelligent automation to advanced analytics, we help organizations harness the power of AI to stay ahead in an increasingly competitive landscape.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <button className="w-14 h-14 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300 group">
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <span className="text-sm text-muted-foreground">Learn more about our approach</span>
              </div>
            </div>

            {/* Right - Image and Stats */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 animate-fade-in">
                <img
                  src={communityImage}
                  alt="Community and collaboration"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Experiences</h4>
                    <p className="text-xs text-muted-foreground">revolutionizing industries</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-gradient-start))] to-[hsl(var(--accent-gradient-end))] flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-6 text-center animate-fade-in">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">200+</div>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="glass-card rounded-2xl p-6 text-center animate-fade-in">
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">98%</div>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
