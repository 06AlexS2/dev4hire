import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <DashboardSidebar />
        {children}
      </section>
    )
  }