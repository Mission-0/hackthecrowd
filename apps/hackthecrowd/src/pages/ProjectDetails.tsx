import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

// This is a mock function to simulate fetching project details
// In a real application, you would fetch this data from your API
const getProjectDetails = (id: string,title:string,description:string) => {
  // Mock data
  return {
    id,
    title: title,
    description: description,
    logo: "/placeholder.svg?height=128&width=128",
    targetedRaise: "150,000 USDT",
    tokenPrice: "0.001 USDT",
    type: "OPEN ENTRY",
    registerFrom: "7 NOV 2024, 1PM UTC",
    registerTo: "10 NOV 2024, 1PM UTC",
    status: ["LIVE"],
    isRefundable: false,
    teamMembers: [
      { name: "John Doe", role: "CEO" },
      { name: "Jane Smith", role: "CTO" },
      { name: "Bob Johnson", role: "Lead Developer" },
    ],
    roadmap: [
      { phase: "Q4 2024", description: "Platform Launch" },
      { phase: "Q1 2025", description: "Integration with major AI models" },
      { phase: "Q2 2025", description: "Marketplace for AI agents" },
    ],
    tokenomics: {
      totalSupply: "1,000,000,000",
      initialCirculatingSupply: "100,000,000",
      tokenDistribution: [
        { category: "Public Sale", percentage: "15%" },
        { category: "Team", percentage: "20%" },
        { category: "Advisors", percentage: "5%" },
        { category: "Ecosystem Fund", percentage: "30%" },
        { category: "Reserve", percentage: "30%" },
      ],
    },
  }
}

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>()
  const project = getProjectDetails(id || "" , "tilte goes here", "description goes here")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-[#4ADE80] hover:underline mb-6">
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>
        
        <div className="bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            <img src={project.logo} alt={`${project.title} logo`} className="w-32 h-32 rounded-lg" />
            <div>
              <h1 className="text-4xl font-bold text-[#4ADE80] mb-2">{project.title}</h1>
              <div className="flex gap-2">
                {project.status.map((badge) => (
                  <Badge
                    key={badge}
                    className={`${
                      badge === 'LIVE' 
                        ? 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/20' 
                        : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                    } border px-3 py-0.5 text-sm font-medium`}
                  >
                    {badge}
                  </Badge>
                ))}
                {project.isRefundable && (
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 border px-3 py-0.5 text-sm font-medium">
                    REFUNDABLE
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Token Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-gray-400 text-sm mb-1">TARGETED RAISE</div>
                  <div className="font-medium text-[#4ADE80]">{project.targetedRaise}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">TOKEN PRICE</div>
                  <div className="font-medium text-[#4ADE80]">{project.tokenPrice}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">TYPE</div>
                  <div className="font-medium text-[#4ADE80]">{project.type}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">REGISTER PERIOD</div>
                  <div className="font-medium text-[#4ADE80]">{project.registerFrom}</div>
                  <div className="font-medium text-[#4ADE80]">{project.registerTo}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.teamMembers.map((member, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold text-[#4ADE80]">{member.name}</div>
                  <div className="text-gray-400">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
            <div className="space-y-4">
              {project.roadmap.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#4ADE80] rounded-full w-4 h-4 mt-1 mr-4"></div>
                  <div>
                    <div className="font-semibold text-[#4ADE80]">{item.phase}</div>
                    <div className="text-gray-300">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4">
                  <div className="text-gray-400 text-sm">TOTAL SUPPLY</div>
                  <div className="font-medium text-[#4ADE80]">{project.tokenomics.totalSupply}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">INITIAL CIRCULATING SUPPLY</div>
                  <div className="font-medium text-[#4ADE80]">{project.tokenomics.initialCirculatingSupply}</div>
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-sm mb-2">TOKEN DISTRIBUTION</div>
                {project.tokenomics.tokenDistribution.map((item, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span className="text-gray-300">{item.category}</span>
                    <span className="text-[#4ADE80]">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black font-semibold py-3 px-8 text-lg">
            Connect Your Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}