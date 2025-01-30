"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Sarah Chen",
        title: "E-commerce Manager",
        description: "Saved hours on product photo editing. The background removal is perfect every time!",
    },
    {
        name: "Mike Rodriguez",
        title: "Social Media Creator",
        description: "Game-changer for content creation. I can now resize my images for every platform instantly.",
    },
    {
        name: "Emma Thompson",
        title: "Interior Designer",
        description: "The object recoloring tool is incredible. I can show clients different color options in seconds.",
    },
    {
        name: "David Kim",
        title: "Real Estate Agent",
        description: "Perfect for cleaning up property photos. Removes unwanted objects seamlessly.",
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        y: -5,
        transition: {
            duration: 0.2
        }
    }
};

export const Testimonials = () => {
    return (
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        >
            <motion.h2 
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                }}
                className="text-center text-4xl lg:text-5xl font-extrabold mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
                What Our Users Say
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.description}
                        variants={cardVariants}
                        whileHover="hover"
                        custom={index}
                        className="h-full"
                    >
                        <Card className="bg-gradient-to-b from-[#0f1729]/80 to-[#0a0f1d]/80 backdrop-blur-sm border border-white/5 text-white shadow-xl hover:shadow-purple-500/20 transition-all duration-300 h-full flex flex-col">
                            <CardHeader className="flex-1">
                                <CardTitle className="flex items-center gap-x-2 mb-4">
                                    <div>
                                        <motion.p 
                                            className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                                        >
                                            {item.name}
                                        </motion.p>
                                        <p className="text-zinc-400 text-sm font-medium mt-1">
                                            {item.title}
                                        </p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-0 px-0">
                                    <motion.p 
                                        className="text-zinc-300 leading-relaxed text-sm"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {item.description}
                                    </motion.p>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;