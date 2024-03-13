import AppLayout from "../components/layout"
import AppCard from "../components/card"
function Dashboard() {
    return (
        <div className="dashboardMain">
            <AppLayout title="SMIT">
                <div>
                    <h1>Hello</h1>
                    <AppCard />
                </div>
            </AppLayout>
        </div>
    )
}
export default Dashboard