import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Rocket, Target, Users, LogIn, UserPlus } from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredProjects = [
    { id: "1", title: "EcoTech Innovation", description: "Sustainable technology solutions for urban environments", fundingGoal: 50000, currentFunding: 35000, category: "Technology" },
    { id: "2", title: "ArtSpace VR", description: "Virtual reality platform for artists to showcase their work", fundingGoal: 30000, currentFunding: 22000, category: "Art" },
    { id: "3", title: "HealthTrack AI", description: "AI-powered health monitoring and prediction system", fundingGoal: 75000, currentFunding: 60000, category: "Healthcare" },
  ];

  const categories = ["Technology", "Art", "Healthcare", "Education", "Environment"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="flex justify-between items-center p-4 bg-black bg-opacity-50">
        <div className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-cyan-400" />
          <span className="text-2xl font-bold text-cyan-200">SolanaStarter</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <LogIn className="mr-2 h-4 w-4" /> Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black">
              <UserPlus className="mr-2 h-4 w-4" /> Sign Up
            </Button>
          </Link>
          {mounted && (
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              Connect Wallet
            </button>
          )}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-cyan-200">Fund the Future, Milestone by Milestone</h1>
          <p className="text-xl mb-8 text-cyan-100">Decentralized crowdfunding with accountability and transparency</p>
          <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
            Explore Projects <ArrowRight className="ml-2" />
          </Button>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-200">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/project/${project.id}`}>
                  <Card className="bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-2xl text-cyan-300">{project.title}</CardTitle>
                      <CardDescription className="text-cyan-200">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-2 text-cyan-200">
                        <span>Funding Goal:</span>
                        <span>${project.fundingGoal.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-cyan-800 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full" 
                          style={{ width: `${(project.currentFunding / project.fundingGoal) * 100}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right text-cyan-300">
                        ${project.currentFunding.toLocaleString()} raised
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Badge variant="secondary" className="bg-cyan-700 text-cyan-200">{project.category}</Badge>
                      <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 text-white">View Details</Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-200">Explore Categories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black">
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-cyan-200">Why Choose SolanaStarter?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Target className="h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Milestone-Based Funding</h3>
              <p className="text-cyan-200">Funds are released in stages, ensuring project accountability and reducing risks for backers.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <Users className="h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Community-Driven</h3>
              <p className="text-cyan-200">Backers can vote on milestone completion, adding an extra layer of accountability.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <Rocket className="h-16 w-16 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Powered by Solana</h3>
              <p className="text-cyan-200">Leverage the speed and efficiency of Solana blockchain for secure and transparent transactions.</p>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-8">
        <div className="container mx-auto px-4 text-center text-cyan-200">
          <p>&copy; 2023 SolanaStarter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}