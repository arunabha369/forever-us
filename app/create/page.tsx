import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                Start Creating Your <br />
                <span className="text-rose-500">Love Story</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-8">
                We are currently rolling out access to our website builder.
                Please join the waitlist to be one of the first couples to start.
            </p>

            <div className="flex gap-4">
                <Link href="/">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back Home
                    </Button>
                </Link>
                <Button variant="primary">
                    Join Waitlist
                </Button>
            </div>
        </div>
    );
}
