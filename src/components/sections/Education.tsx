import Container from "../ui/Container";

export default function Education() {
    return (
        <Container>
            <section id="education" className="h-auto py-20 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-semibold mb-6">Education</h2>

                <div className="bg-slate-900 p-6 rounded-2xl shadow">
                    <h3 className="text-xl font-semibold">
                        BSc Computer Science
                    </h3>

                    <p className="text-slate-400">
                        Faculty of Computers & Artificial Intelligence
                    </p>

                    <p className="mt-2 text-slate-300">
                        GPA: 3.38 — Very Good
                    </p>

                    <p className="text-slate-500 text-sm mt-2">
                        Expected Graduation: 2026
                    </p>
                </div>
            </section>
        </Container>
    );
}
