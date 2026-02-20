import Container from "../ui/Container";

export default function About() {
    return (
        <Container>
            <section id="about" className="h-auto py-20 flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-semibold mb-6">About Me</h2>

                <p className=" leading-relaxed max-w-3xl">
                    {/* <p className="text-slate-300 leading-relaxed max-w-3xl"> */}
                    I’m a Computer Science student specializing in full-stack
                    development. I build scalable web applications using modern
                    frameworks like React, Spring Boot, and Django, focusing on
                    performance, clean architecture, and intuitive user experiences.
                </p>
            </section>
        </Container>
    );
}
