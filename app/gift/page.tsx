import { Button } from "@/components/ui/Button";
import { Gift, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export default function GiftPage() {
    return (
        <div className="container mx-auto px-4 py-24 min-h-[60vh]">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-rose-500 mb-4">
                    <Gift className="w-8 h-8" />
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                    Give the Gift of Forever
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                    A ForeverUs website is the most thoughtful digital gift for anniversaries,
                    weddings, or just because. Wrap your memories in a beautiful design.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                    <Card className="p-8 bg-white/40 backdrop-blur-md">
                        <h3 className="text-2xl font-bold font-display mb-4">How it works</h3>
                        <ol className="space-y-4 list-decimal list-inside text-gray-700">
                            <li>Purchase a "Forever Gift" plan.</li>
                            <li>Receive a special access code.</li>
                            <li>Your partner unlocks the site and starts designing.</li>
                            <li>Includes a beautiful "virtual unwrapping" animation.</li>
                        </ol>
                    </Card>

                    <div className="flex flex-col justify-center items-center gap-6">
                        <Button size="lg" className="w-full">
                            Buy Gift Code - ₹2,999
                        </Button>
                        <Link href="/" className="text-sm text-gray-500 hover:text-rose-500 underline">
                            View Pricing Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
