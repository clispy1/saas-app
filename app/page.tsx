import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>

            <section className="home-section">
                <CompanionCard
                    id="123"
                    name="English"
                    topic="English Language"
                    subject="Learning English Language"
                    duration={45}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="456"
                    name="English"
                    topic="English Language"
                    subject="Learning English Language"
                    duration={45}
                    color="#ffda6e"
                />
                <CompanionCard
                    id="789"
                    name="English"
                    topic="English Language"
                    subject="Learning English Language"
                    duration={45}
                    color="#ffda6e"
                />
            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently Completed Sessions"
                    companions={recentSessions}
                    classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    );
};

export default Page;
