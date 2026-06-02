import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Car, Users, Gamepad2, ChevronLeft } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/city-bg.png"
            alt="مدينة ليلية"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium animate-pulse-red">
              PlayStation RP Server
            </span>
          </div>
          
          <h1 dir="ltr" className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="text-primary animate-glow inline-block">DARK</span>
            <span className="text-foreground"> CITY</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-balance">
            عش تجربة الرول بلاي الحقيقية في مدينة لا تنام. انضم إلينا واكتشف عالماً من المغامرات.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg h-14 px-8 animate-glow">
              <Link href="/register">
                انضم الآن
                <ChevronLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 border-primary/50 hover:bg-primary/10">
              <Link href="/rules">
                اقرأ القوانين
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">لماذا <span className="text-primary">DARK CITY</span>؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نقدم لك تجربة رول بلاي متكاملة مع إدارة محترفة ومجتمع نشط
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="إدارة عادلة"
              description="فريق إداري محترف يضمن تجربة لعب عادلة وممتعة للجميع"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="مجتمع نشط"
              description="انضم إلى مجتمع من اللاعبين العرب المحترفين"
            />
            <FeatureCard
              icon={<Car className="h-8 w-8" />}
              title="وظائف متنوعة"
              description="اختر من بين العديد من الوظائف وابدأ مسيرتك المهنية"
            />
            <FeatureCard
              icon={<Gamepad2 className="h-8 w-8" />}
              title="تجربة واقعية"
              description="قوانين واضحة تضمن تجربة رول بلاي حقيقية ومثيرة"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            هل أنت مستعد للانضمام إلى <span className="text-primary">المدينة المظلمة</span>؟
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            قدم طلب التفعيل الآن وانتظر مراجعته من قبل فريق الإدارة
          </p>
          <Button asChild size="lg" className="text-lg h-14 px-10 animate-glow">
            <Link href="/register">
              قدم طلب التفعيل
              <ChevronLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
