import asyncHandler from "../utils/asyncHandler.js";
import { agenda, scheduleEmails } from "../utils/emailScheduler.js";
import Sequence from "../models/sequence.model.js";

const startProcess = asyncHandler(async (req, res) => {
  try {
    const { nodes, edges } = req.body;
    
    if (!nodes || !edges) {
      return res.status(400).json({
        success: false,
        message: "Nodes and edges are required"
      });
    }

    const newSequence = new Sequence({ nodes, edges });
    await newSequence.save();

    // Call scheduleEmails directly since it's imported
    await scheduleEmails();

    res.status(200).json({
      success: true,
      message: "Process started successfully"
    });
  } catch (error) {
    console.error("Error in startProcess:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
});

export { startProcess };
