import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" dir="ltr">
            <span className="text-xl font-black text-primary">DARK</span>
            <span className="text-xl font-black text-foreground">CITY</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/jobs" className="hover:text-primary transition-colors">
              الوظائف
            </Link>
            <Link href="/rules" className="hover:text-primary transition-colors">
              القوانين
            </Link>
            <Link href="/register" className="hover:text-primary transition-colors">
              التفعيل
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-xs text-muted-foreground/50 hover:text-primary transition-colors">
              الإدارة
            </Link>
            <p className="text-sm text-muted-foreground">
              جميع الحقوق محفوظة &copy; {new Date().getFullYear()} DARK CITY
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
