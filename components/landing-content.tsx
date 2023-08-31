"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Sarah Thompson",
        avatar: "A",
        title: "Marketing Director, TechPros Inc.",
        description: "Revolutionized our workflow! This AI platform automates tasks we never thought possible, saving us hours daily. Impressed by its accuracy and adaptability."
    },
    {
        name: "Dr. John Anderson",
        avatar: "A",
        title: "Senior Scientist, BioSolutions Labs.",
        description: "Game-changer for data analysis. As a researcher, I rely on insights, and this AI delivers. Complex patterns spotted in seconds. Unmatched efficiency."
    },
    {
        name: "Emily Ramirez",
        avatar: "A",
        title: "CEO, RetailRevive",
        description: "Unparalleled support. Integration was a breeze, and the results speak for themselves. Our customer engagement has soared, thanks to personalized recommendations."
    },
    {
        name: "Jessica Miller",
        avatar: "A",
        title: "HR Manager, TalentForge Co.",
        description: "Time and money saved! Our HR processes streamlined, from candidate screening to onboarding. The AI's natural language understanding is eerily accurate."
    }
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {testimonials.map((item) => (
                <Card key={item.description} className="bg-[#192339] border-none text-white">
                   <CardHeader>
                      <CardTitle className="flex items-center gap-x-2">
                         <div>
                            <p className="text-lg">{item.name}</p>
                            <p className="text-zinc-400 text-sm">{item.title}</p>
                         </div>
                      </CardTitle>
                      <CardContent className="pt-4 px-0">
                        {item.description}
                      </CardContent>
                   </CardHeader>
                </Card>
               ))}
            </div>
        </div>
    )
}