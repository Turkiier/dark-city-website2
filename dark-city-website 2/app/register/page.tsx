"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2 } from "lucide-react"

interface FormData {
  name: string
  age: string
  psnId: string
  roleplayDefinition: string
  rdmDefinition: string
  vdmDefinition: string
  larDefinition: string
  goldenRule: string
  tiresCount: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    psnId: "",
    roleplayDefinition: "",
    rdmDefinition: "",
    vdmDefinition: "",
    larDefinition: "",
    goldenRule: "",
    tiresCount: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Save to localStorage for admin panel
    const applications = JSON.parse(localStorage.getItem("darkcity_applications") || "[]")
    const newApplication = {
      id: Date.now().toString(),
      ...formData,
      status: "pending",
      submittedAt: new Date().toISOString()
    }
    applications.push(newApplication)
    localStorage.setItem("darkcity_applications", JSON.stringify(applications))
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-16 px-4 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-4">تم استلام طلبك بنجاح!</h1>
            <p className="text-muted-foreground mb-6">
              سيتم التواصل معك عبر PSN ID الخاص بك: <span className="text-primary font-bold">{formData.psnId}</span>
            </p>
            <Button onClick={() => window.location.href = "/"} variant="outline">
              العودة للرئيسية
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-black mb-4">
              طلب <span className="text-primary">التفعيل</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              أكمل النموذج التالي بعناية. تأكد من قراءة القوانين قبل التقديم.
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-xl p-6 sm:p-8">
            {/* Personal Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-2">المعلومات الشخصية</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="bg-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">العمر</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="13"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="أدخل عمرك"
                    required
                    className="bg-input"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="psnId">PSN ID</Label>
                <Input
                  id="psnId"
                  name="psnId"
                  value={formData.psnId}
                  onChange={handleChange}
                  placeholder="أدخل معرف PlayStation الخاص بك"
                  required
                  className="bg-input"
                />
              </div>
            </div>
            
            {/* Knowledge Test */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-2">اختبار المعرفة</h2>
              
              <div className="space-y-2">
                <Label htmlFor="roleplayDefinition">ما هو تعريف الرول بلاي؟</Label>
                <textarea
                  id="roleplayDefinition"
                  name="roleplayDefinition"
                  value={formData.roleplayDefinition}
                  onChange={handleChange}
                  placeholder="اشرح ما هو الرول بلاي بكلماتك..."
                  required
                  className="w-full min-h-[80px] px-3 py-2 bg-input border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rdmDefinition">ما هو تعريف RDM؟</Label>
                <textarea
                  id="rdmDefinition"
                  name="rdmDefinition"
                  value={formData.rdmDefinition}
                  onChange={handleChange}
                  placeholder="اشرح ما هو RDM..."
                  required
                  className="w-full min-h-[80px] px-3 py-2 bg-input border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="vdmDefinition">ما هو تعريف VDM؟</Label>
                <textarea
                  id="vdmDefinition"
                  name="vdmDefinition"
                  value={formData.vdmDefinition}
                  onChange={handleChange}
                  placeholder="اشرح ما هو VDM..."
                  required
                  className="w-full min-h-[80px] px-3 py-2 bg-input border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="larDefinition">ما هو تعريف LAR؟</Label>
                <textarea
                  id="larDefinition"
                  name="larDefinition"
                  value={formData.larDefinition}
                  onChange={handleChange}
                  placeholder="اشرح ما هو LAR..."
                  required
                  className="w-full min-h-[80px] px-3 py-2 bg-input border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="goldenRule">ما هو القانون الذهبي؟</Label>
                <textarea
                  id="goldenRule"
                  name="goldenRule"
                  value={formData.goldenRule}
                  onChange={handleChange}
                  placeholder="اشرح القانون الذهبي..."
                  required
                  className="w-full min-h-[80px] px-3 py-2 bg-input border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tiresCount">كم عدد الكفرات اللازمة لإيقاف السيارة؟</Label>
                <Input
                  id="tiresCount"
                  name="tiresCount"
                  type="number"
                  min="1"
                  max="4"
                  value={formData.tiresCount}
                  onChange={handleChange}
                  placeholder="أدخل العدد"
                  required
                  className="bg-input"
                />
              </div>
            </div>
            
            {/* Submit */}
            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-12 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  "إرسال الطلب"
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-4">
                بإرسال هذا الطلب، أنت توافق على الالتزام بجميع قوانين السيرفر
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
