import { Button } from "@/components/ui/Button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function ExamplesPage() {
    const examples = [
        { title: "Sarah & Tom", type: "Wedding", date: "Est. 2023" },
        { title: "A Decade of Us", type: "Anniversary", date: "10 Years" },
        { title: "Project Proposal", type: "Proposal", date: "She said yes!" },
        { title: "Our Little One", type: "Baby Journal", date: "The beginning" },
    ];

    return (
        <div className="container mx-auto px-4 py-24 min-h-[60vh]">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                    Real Love Stories
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    See what other couples have built with ForeverUs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {examples.map((ex, i) => (
                    <Card key={i} className="group p-0 overflow-hidden bg-white/40 backdrop-blur-md h-64 flex flex-col justify-end relative">
                        {/* Placeholder for iframe or image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10" />

                        <div className="relative z-20 p-6 text-white">
                            <h3 className="text-2xl font-display font-bold">{ex.title}</h3>
                            <div className="flex justify-between items-center mt-2">
                                <span className="opacity-90">{ex.type} • {ex.date}</span>
                                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/40 border-none text-white">
                                    Visit <ExternalLink className="w-3 h-3 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
