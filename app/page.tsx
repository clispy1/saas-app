import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
    getAllCompanions,
    getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
    const companions = await getAllCompanions({ limit: 3 });
    const recentSessionsCompanions = await getRecentSessions(10);

    return (
        <main>
            <h1 className="text-2xl underline">Popular Companions</h1>

            <section className="home-section">
                {companions.map((companion) => {
                    const { id, name, topic, subject, duration, color } =
                        companion;
                    return (
                        <CompanionCard
                            key={id}
                            id={id}
                            name={name}
                            topic={name}
                            subject={subject}
                            duration={duration}
                            color={getSubjectColor(subject)}
                        />
                    );
                })}
            </section>

            <section className="home-section">
                <CompanionsList
                    title="Recently Completed Sessions"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />

                <CTA />
            </section>
        </main>
    );
};

export default Page;
