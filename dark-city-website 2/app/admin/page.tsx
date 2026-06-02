"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Lock, 
  LogOut, 
  Check, 
  X, 
  Trash2, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle,
  Eye,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

interface Application {
  id: string
  name: string
  age: string
  psnId: string
  roleplayDefinition: string
  rdmDefinition: string
  vdmDefinition: string
  larDefinition: string
  goldenRule: string
  tiresCount: string
  status: "pending" | "accepted" | "rejected"
  submittedAt: string
}

const ADMIN_PASSWORD = "darkcity2024"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [applications, setApplications] = useState<Application[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<"all" | "pending" | "accepted" | "rejected">("all")

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem("darkcity_admin_auth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
    
    // Load applications
    loadApplications()
  }, [])

  const loadApplications = () => {
    const stored = localStorage.getItem("darkcity_applications")
    if (stored) {
      setApplications(JSON.parse(stored))
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem("darkcity_admin_auth", "true")
      setError("")
    } else {
      setError("كلمة المرور غير صحيحة")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem("darkcity_admin_auth")
  }

  const updateApplicationStatus = (id: string, status: "accepted" | "rejected") => {
    const updated = applications.map(app => 
      app.id === id ? { ...app, status } : app
    )
    setApplications(updated)
    localStorage.setItem("darkcity_applications", JSON.stringify(updated))
  }

  const deleteApplication = (id: string) => {
    const updated = applications.filter(app => app.id !== id)
    setApplications(updated)
    localStorage.setItem("darkcity_applications", JSON.stringify(updated))
  }

  const filteredApplications = applications.filter(app => {
    if (filter === "all") return true
    return app.status === filter
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    accepted: applications.filter(a => a.status === "accepted").length,
    rejected: applications.filter(a => a.status === "rejected").length
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">لوحة الإدارة</h1>
            <p className="text-muted-foreground text-sm">أدخل كلمة المرور للوصول</p>
          </div>
          
          <form onSubmit={handleLogin} className="bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="أدخل كلمة المرور"
                className="bg-input"
              />
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
            </div>
            
            <Button type="submit" className="w-full">
              دخول
            </Button>
          </form>
          
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mt-6"
          >
            <ArrowRight className="h-4 w-4" />
            العودة للصفحة الرئيسية
          </Link>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            DARK CITY Admin Panel
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-primary">DARK</span>
            <span className="text-xl font-black text-foreground">CITY</span>
            <span className="text-sm text-muted-foreground">| لوحة الإدارة</span>
          </div>
          
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 ml-2" />
            خروج
          </Button>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="h-5 w-5" />}
            label="إجمالي الطلبات"
            value={stats.total}
            color="text-foreground"
          />
          <StatCard
            icon={<Clock className="h-5 w-5" />}
            label="قيد الانتظار"
            value={stats.pending}
            color="text-yellow-500"
          />
          <StatCard
            icon={<CheckCircle className="h-5 w-5" />}
            label="مقبول"
            value={stats.accepted}
            color="text-green-500"
          />
          <StatCard
            icon={<XCircle className="h-5 w-5" />}
            label="مرفوض"
            value={stats.rejected}
            color="text-red-500"
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {(["all", "pending", "accepted", "rejected"] as const).map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f === "all" && "الكل"}
              {f === "pending" && "قيد الانتظار"}
              {f === "accepted" && "مقبول"}
              {f === "rejected" && "مرفوض"}
            </Button>
          ))}
        </div>
        
        {/* Applications List */}
        <div className="space-y-4">
          {filteredApplications.length === 0 ? (
            <div className="text-center py-12 bg-card border border-border rounded-xl">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">لا توجد طلبات</p>
            </div>
          ) : (
            filteredApplications.map((app) => (
              <ApplicationCard
                key={app.id}
                application={app}
                isExpanded={expandedId === app.id}
                onToggle={() => setExpandedId(expandedId === app.id ? null : app.id)}
                onAccept={() => updateApplicationStatus(app.id, "accepted")}
                onReject={() => updateApplicationStatus(app.id, "rejected")}
                onDelete={() => deleteApplication(app.id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  )
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className={`${color} mb-2`}>{icon}</div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

function ApplicationCard({ 
  application, 
  isExpanded, 
  onToggle, 
  onAccept, 
  onReject, 
  onDelete 
}: { 
  application: Application
  isExpanded: boolean
  onToggle: () => void
  onAccept: () => void
  onReject: () => void
  onDelete: () => void
}) {
  const statusColors = {
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    accepted: "bg-green-500/10 text-green-500 border-green-500/30",
    rejected: "bg-red-500/10 text-red-500 border-red-500/30"
  }
  
  const statusLabels = {
    pending: "قيد الانتظار",
    accepted: "مقبول",
    rejected: "مرفوض"
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div 
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div>
            <h3 className="font-bold">{application.name}</h3>
            <p className="text-sm text-muted-foreground">{application.psnId}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs border ${statusColors[application.status]}`}>
            {statusLabels[application.status]}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden sm:block">
            {new Date(application.submittedAt).toLocaleDateString("ar-SA")}
          </span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </div>
      
      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border p-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InfoItem label="الاسم" value={application.name} />
            <InfoItem label="العمر" value={application.age} />
            <InfoItem label="PSN ID" value={application.psnId} />
          </div>
          
          <div className="space-y-3">
            <AnswerItem label="تعريف الرول بلاي" value={application.roleplayDefinition} />
            <AnswerItem label="تعريف RDM" value={application.rdmDefinition} />
            <AnswerItem label="تعريف VDM" value={application.vdmDefinition} />
            <AnswerItem label="تعريف LAR" value={application.larDefinition} />
            <AnswerItem label="القانون الذهبي" value={application.goldenRule} />
            <InfoItem label="عدد الكفرات" value={application.tiresCount} />
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {application.status === "pending" && (
              <>
                <Button size="sm" onClick={onAccept} className="bg-green-600 hover:bg-green-700">
                  <Check className="h-4 w-4 ml-2" />
                  قبول
                </Button>
                <Button size="sm" variant="destructive" onClick={onReject}>
                  <X className="h-4 w-4 ml-2" />
                  رفض
                </Button>
              </>
            )}
            <Button size="sm" variant="outline" onClick={onDelete} className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4 ml-2" />
              حذف
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  )
}

function AnswerItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-muted/50 p-3 rounded-lg">
      <p className="text-xs text-primary mb-1">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  )
}
