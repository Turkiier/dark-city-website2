import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Heart, Flame, Wrench, Car, Skull } from "lucide-react"

const jobs = [
  {
    id: "police",
    title: "الشرطة",
    icon: Shield,
    description: "كن حارساً للقانون والنظام في المدينة. طارد المجرمين وحافظ على سلامة المواطنين.",
    duties: [
      "تطبيق القانون والحفاظ على النظام",
      "ملاحقة المجرمين والمشتبه بهم",
      "حماية المواطنين والممتلكات",
      "التحقيق في الجرائم والحوادث",
      "التعاون مع الوحدات الأخرى"
    ],
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30 hover:border-blue-500/60"
  },
  {
    id: "ems",
    title: "الإسعاف",
    icon: Heart,
    description: "أنقذ الأرواح وقدم الرعاية الطبية الطارئة. كن البطل الذي يحتاجه الناس في أصعب اللحظات.",
    duties: [
      "الاستجابة لحالات الطوارئ الطبية",
      "إنعاش المصابين وتقديم الإسعافات الأولية",
      "نقل المرضى إلى المستشفى",
      "العمل مع فرق الإنقاذ الأخرى",
      "توثيق الحالات الطبية"
    ],
    color: "from-green-500/20 to-green-600/10",
    borderColor: "border-green-500/30 hover:border-green-500/60"
  },
  {
    id: "fire",
    title: "الدفاع المدني",
    icon: Flame,
    description: "واجه الخطر لإنقاذ الآخرين. أطفئ الحرائق وأنقذ المحاصرين من المباني.",
    duties: [
      "إطفاء الحرائق والسيطرة عليها",
      "إنقاذ المحاصرين في المباني",
      "التعامل مع المواد الخطرة",
      "تقديم الدعم في الكوارث",
      "التوعية بالسلامة العامة"
    ],
    color: "from-orange-500/20 to-orange-600/10",
    borderColor: "border-orange-500/30 hover:border-orange-500/60"
  },
  {
    id: "mechanic",
    title: "الميكانيكي",
    icon: Wrench,
    description: "أصلح السيارات وساعد العالقين على الطريق. كن الخبير الذي يعتمد عليه الجميع.",
    duties: [
      "إصلاح المركبات المتعطلة",
      "سحب السيارات المحطمة",
      "تقديم خدمات الصيانة",
      "بيع قطع الغيار والإكسسوارات",
      "تعديل وتحسين السيارات"
    ],
    color: "from-yellow-500/20 to-yellow-600/10",
    borderColor: "border-yellow-500/30 hover:border-yellow-500/60"
  },
  {
    id: "taxi",
    title: "التاكسي",
    icon: Car,
    description: "تجول في شوارع المدينة وأوصل الركاب إلى وجهاتهم. اكتشف كل زاوية في المدينة.",
    duties: [
      "نقل الركاب بأمان",
      "معرفة شوارع المدينة جيداً",
      "الالتزام بقوانين المرور",
      "تقديم خدمة مميزة للعملاء",
      "الحفاظ على نظافة السيارة"
    ],
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/30 hover:border-cyan-500/60"
  },
  {
    id: "gangs",
    title: "العصابات",
    icon: Skull,
    description: "اختر طريق الظل وانضم إلى عالم الجريمة. لكن احذر، فالشرطة تراقب كل تحركاتك.",
    duties: [
      "بناء إمبراطورية إجرامية",
      "السيطرة على المناطق",
      "التعامل مع العصابات الأخرى",
      "تنفيذ العمليات بحذر",
      "الهروب من الشرطة"
    ],
    color: "from-primary/20 to-primary/10",
    borderColor: "border-primary/30 hover:border-primary/60"
  }
]

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="text-primary">الوظائف</span> المتاحة
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              اختر مسيرتك المهنية في DARK CITY. كل وظيفة تقدم تجربة فريدة ومسؤوليات مختلفة.
            </p>
          </div>
          
          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          {/* Note */}
          <div className="mt-12 p-6 bg-card border border-border rounded-xl text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-bold">ملاحظة:</span> للحصول على وظيفة رسمية، يجب عليك أولاً إكمال عملية التفعيل والموافقة عليها من قبل الإدارة.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

function JobCard({ job }: { job: typeof jobs[0] }) {
  const Icon = job.icon
  
  return (
    <div className={`p-6 bg-gradient-to-br ${job.color} border ${job.borderColor} rounded-xl transition-all duration-300 group`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-card rounded-lg flex items-center justify-center">
          <Icon className="h-7 w-7 text-foreground" />
        </div>
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {job.description}
      </p>
      
      <div>
        <h4 className="text-sm font-semibold mb-2 text-foreground/80">المهام:</h4>
        <ul className="space-y-1">
          {job.duties.map((duty, index) => (
            <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {duty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
