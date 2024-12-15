import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Intro from "@/components/ui/Intro";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 gap-y-8">
            {/* Intro */}
            <Intro />

            {/* About */}
            <About />

            {/* Contact */}
            <Contact />
        </main>
    );
};
