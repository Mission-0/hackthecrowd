import { Request, Response } from 'express';
import { createVote, getVotesByMilestone } from '../services/voteService';

export const create = async (req: Request, res: Response) => {
  try {
    const { userId, milestoneId } = req.body;
    const vote = await createVote(userId, milestoneId);
    res.status(201).json(vote);
  } catch (error : any) {
    res.status(400).json({ error: error.message });
  }
};

export const getByMilestone = async (req: Request, res: Response) => {
  try {
    const { milestoneId } = req.params;
    const votes = await getVotesByMilestone(Number(milestoneId));
    res.json(votes);
  } catch (error :  any) {
    res.status(400).json({ error: error.message });
  }
};