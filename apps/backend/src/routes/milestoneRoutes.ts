import { Request, Response } from 'express';
import { createMilestone, updateMilestone, getMilestonesByProject } from '../services/milestoneService';

export const create = async (req: Request, res: Response) => {
  try {
    const milestone = await createMilestone(req.body);
    res.status(201).json(milestone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const milestone = await updateMilestone(Number(id), req.body);
    res.json(milestone);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getByProject = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const milestones = await getMilestonesByProject(Number(projectId));
    res.json(milestones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};