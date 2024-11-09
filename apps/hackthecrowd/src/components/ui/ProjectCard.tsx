import { Card } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  logo: string
  targetedRaise: string
  tokenPrice: string
  type: string
  registerFrom: string
  registerTo: string
  status: ('LIVE' | 'UPCOMING')[]
  isRefundable?: boolean
}

export default function ProjectCard({
  id,
  title,
  description,
  logo,
  targetedRaise,
  tokenPrice,
  type,
  registerFrom,
  registerTo,
  status,
  isRefundable
}: ProjectCardProps) {
  return (
    <Card className="bg-black/40 backdrop-blur-sm text-white overflow-hidden border border-white/5">
      <div className="p-6">
        {/* Status Badges */}
        <div className="flex gap-2 mb-4">
          {status.map((badge) => (
            <Badge
              key={badge}
              className={`${
                badge === 'LIVE' 
                  ? 'bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/20' 
                  : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
              } border px-3 py-0.5 text-xs font-medium`}
            >
              {badge}
            </Badge>
          ))}
          {isRefundable && (
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 border px-3 py-0.5 text-xs font-medium">
              REFUNDABLE
            </Badge>
          )}
        </div>

        {/* Logo and Title */}
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={logo} 
            alt={`${title} logo`} 
            className="w-16 h-16 rounded-lg bg-black/50"
          />
          <h3 className="text-2xl font-bold text-[#4ADE80]">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        {/* Targeted Raise */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-400">Targeted Raise</span>
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 bg-[#4ADE80]/10 rounded-full flex items-center justify-center text-xs text-[#4ADE80]">
              T
            </div>
            <span className="font-bold text-xl text-[#4ADE80]">{targetedRaise}</span>
          </div>
        </div>

        {/* Token Details Grid */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <div className="text-gray-400 text-xs mb-1">TOKEN PRICE</div>
            <div className="font-medium text-[#4ADE80]">{tokenPrice}</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">TYPE</div>
            <div className="font-medium text-[#4ADE80]">{type}</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">REGISTER PERIOD (FROM)</div>
            <div className="font-medium text-[#4ADE80]">{registerFrom}</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">REGISTER PERIOD (TO)</div>
            <div className="font-medium text-[#4ADE80]">{registerTo}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="flex-1 bg-[#4ADE80] hover:bg-[#4ADE80]/90 text-black font-semibold py-3">
            Connect Your Wallet
          </Button>
          <Link to={`/project/${id}`} className="flex-1">
            <Button className="w-full bg-[#4ADE80]/10 hover:bg-[#4ADE80]/20 text-[#4ADE80] font-semibold py-3">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}