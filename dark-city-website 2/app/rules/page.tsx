import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AlertTriangle, Ban, Car, Crown, BookOpen } from "lucide-react"

const rules = [
  {
    id: "rdm",
    title: "RDM - Random Death Match",
    icon: AlertTriangle,
    definition: "قتل لاعب آخر بدون سبب أو تفاعل رول بلاي مسبق.",
    description: "يُمنع منعاً باتاً قتل أي لاعب دون وجود سيناريو رول بلاي واضح. يجب أن يكون هناك تفاعل وسبب منطقي قبل أي عملية قتل.",
    examples: [
      "قتل لاعب فور رؤيته دون أي حوار",
      "إطلاق النار على شخص لمجرد أنه يمر بجانبك",
      "قتل شخص لأنه نظر إليك بطريقة غريبة",
      "الانتقام من لاعب في سيناريو جديد"
    ],
    punishment: "تحذير أو حظر مؤقت حسب شدة المخالفة"
  },
  {
    id: "vdm",
    title: "VDM - Vehicle Death Match",
    icon: Car,
    definition: "استخدام السيارة كسلاح لقتل أو إيذاء اللاعبين الآخرين.",
    description: "يُحظر استخدام المركبات بشكل متعمد لدهس أو إيذاء اللاعبين. السيارات للتنقل وليست للقتل.",
    examples: [
      "دهس لاعب متعمداً بالسيارة",
      "ملاحقة شخص بالسيارة لقتله",
      "استخدام السيارة لإخراج لاعب من مكانه",
      "الاصطدام المتعمد بسيارات الآخرين لإيذائهم"
    ],
    punishment: "تحذير أو حظر مؤقت، وقد يصل للحظر الدائم في الحالات المتكررة"
  },
  {
    id: "lar",
    title: "LAR - Leaving to Avoid Roleplay",
    icon: Ban,
    definition: "الخروج من اللعبة أثناء سيناريو رول بلاي لتجنب العواقب.",
    description: "يُمنع الخروج من السيرفر أثناء أي تفاعل رول بلاي سواء كان مطاردة أو اعتقال أو أي سيناريو آخر. يجب إكمال السيناريو حتى النهاية.",
    examples: [
      "الخروج أثناء مطاردة الشرطة لك",
      "الخروج عند محاولة اعتقالك",
      "الخروج أثناء سرقة أو عملية إجرامية",
      "الخروج لتجنب دفع غرامة أو عقوبة"
    ],
    punishment: "حظر مؤقت لا يقل عن 24 ساعة"
  },
  {
    id: "golden",
    title: "القانون الذهبي",
    icon: Crown,
    definition: "قيمة حياتك - Value of Life",
    description: "يجب على كل لاعب أن يتعامل مع شخصيته كما لو كانت حياته الحقيقية. لا تخاطر بحياتك بشكل غير منطقي، واحترم السلاح الموجه إليك.",
    examples: [
      "إذا كان شخص يوجه إليك سلاحاً، يجب أن تتعاون",
      "لا تقاوم 5 أشخاص مسلحين وأنت بمفردك",
      "لا تقفز من مكان عالٍ لتهرب",
      "لا تتصرف كما لو أنك لا تستطيع الموت"
    ],
    punishment: "تحذير شديد أو حظر حسب الحالة"
  }
]

const generalRules = [
  "احترم جميع اللاعبين والإداريين",
  "لا تستخدم ألفاظاً نابية أو عنصرية خارج سياق الرول بلاي",
  "لا تستخدم أي برامج غش أو تعديلات غير مسموحة",
  "لا تشارك معلومات من خارج اللعبة (Metagaming)",
  "التزم بالشخصية التي تلعبها (لا تكسر الرول)",
  "لا تزعج اللاعبين الجدد وساعدهم على التعلم",
  "بلّغ عن أي مخالفة تراها للإدارة",
  "قرارات الإدارة نهائية وغير قابلة للنقاش العلني"
]

export default function RulesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              <span className="text-primary">قوانين</span> السيرفر
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              اقرأ القوانين بعناية قبل اللعب. الجهل بالقانون ليس عذراً.
            </p>
          </div>
          
          {/* Main Rules */}
          <div className="space-y-6 mb-12">
            {rules.map((rule) => (
              <RuleCard key={rule.id} rule={rule} />
            ))}
          </div>
          
          {/* General Rules */}
          <div className="p-6 bg-card border border-border rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">قوانين عامة</h2>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {generalRules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Warning */}
          <div className="mt-8 p-4 bg-primary/10 border border-primary/30 rounded-xl text-center">
            <p className="text-foreground font-medium">
              مخالفة القوانين قد تؤدي إلى الحظر المؤقت أو الدائم من السيرفر
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

function RuleCard({ rule }: { rule: typeof rules[0] }) {
  const Icon = rule.icon
  
  return (
    <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1">{rule.title}</h3>
          <p className="text-primary font-medium text-sm">{rule.definition}</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {rule.description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-semibold mb-2 text-foreground/80">أمثلة على المخالفة:</h4>
          <ul className="space-y-1">
            {rule.examples.map((example, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-destructive rounded-full" />
                {example}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:border-r md:pr-4 border-border">
          <h4 className="text-sm font-semibold mb-2 text-foreground/80">العقوبة:</h4>
          <p className="text-xs text-primary bg-primary/10 px-3 py-2 rounded-lg">
            {rule.punishment}
          </p>
        </div>
      </div>
    </div>
  )
}
