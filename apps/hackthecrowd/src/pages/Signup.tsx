import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';
import { Label } from '../components/ui/Label';
import { ArrowLeft, UserPlus } from 'lucide-react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt with:', { name, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gradient-to-br from-cyan-900 to-blue-900 border-2 border-cyan-500">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-300">Sign Up for SolanaStarter</CardTitle>
            <CardDescription className="text-cyan-200">Create your account to start funding projects</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-cyan-300">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-cyan-800 border-cyan-600 text-cyan-100 placeholder-cyan-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-cyan-300">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-cyan-800 border-cyan-600 text-cyan-100 placeholder-cyan-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-cyan-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-cyan-800 border-cyan-600 text-cyan-100"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-cyan-300">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-cyan-800 border-cyan-600 text-cyan-100"
                />
              </div>
              <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                <UserPlus className="mr-2 h-4 w-4" /> Sign Up
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to="/">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="link" className="text-cyan-400 hover:text-cyan-300">
                Already have an account? Log In
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}