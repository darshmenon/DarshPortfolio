export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        id: "robocloud-hub",
        title: "RoboCloud Hub",
        description: "A unified platform for the robotics ecosystem. Features comprehensive learning paths, community chat channels, job board, and a marketplace for parts. Built with React, Node.js, and Prisma.",
        tags: ["React", "Node.js", "Prisma", "PostgreSQL", "WebSockets"],
        link: "https://robocloud-dashboard.vercel.app/",
        github: "https://github.com/darshmenon/robocloud-hub"
    },
    {
        id: "rl-bipedal-walking",
        title: "RL Bipedal Walking Robot",
        description: "Complete reinforcement learning framework for training a bipedal robot to walk using ROS 2, Gazebo, and PyTorch PPO. Features custom 6-DOF robot simulation and advanced reward engineering.",
        tags: ["ROS 2", "Reinforcement Learning", "PyTorch", "Gazebo", "Python"],
        link: "https://github.com/darshmenon/rl-bipedal-walking",
        github: "https://github.com/darshmenon/rl-bipedal-walking"
    },
    {
        id: "rl-mobile-pick-place",
        title: "RL Mobile Pick-and-Place",
        description: "Autonomous mobile manipulator combining differential drive base with robotic arm, trained using RL for pick-and-place operations. Integrates RGB-D perception and continuous action space control.",
        tags: ["ROS 2", "Computer Vision", "Reinforcement Learning", "Robotics"],
        link: "https://github.com/darshmenon/pickplace-rl-mobile",
        github: "https://github.com/darshmenon/pickplace-rl-mobile"
    },
    {
        id: "autonomous-pick-place",
        title: "Autonomous Pick-and-Place",
        description: "Advanced robotic manipulation system using UR5 robotic arm with Robotiq gripper. Features computer vision-based object detection, inverse kinematics, and collision-aware motion planning.",
        tags: ["ROS 2", "MoveIt 2", "Computer Vision", "Industrial Automation"],
        link: "https://github.com/darshmenon/UR3_ROS2_PICK_AND_PLACE",
        github: "https://github.com/darshmenon/UR3_ROS2_PICK_AND_PLACE"
    },
    {
        id: "slam-navigation-system",
        title: "SLAM Navigation System",
        description: "Real-time Simultaneous Localization and Mapping (SLAM) implementation for autonomous mobile robots. Utilizes RGB-D cameras and LiDAR data for accurate map generation and localization in dynamic environments.",
        tags: ["ROS 2", "SLAM", "Navigation2", "Python", "LiDAR"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    },
    {
        id: "3d-object-detection",
        title: "3D Object Detection Pipeline",
        description: "Deep learning-based 3D object detection system for robotic perception. Processes point cloud data to identify and track objects in real-time, enabling safer interaction for autonomous systems.",
        tags: ["PyTorch", "OpenCV", "Point Cloud", "Computer Vision", "Python"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    },
    {
        id: "path-planning-suite",
        title: "Path Planning Algorithm Suite",
        description: "Comprehensive implementation of advanced path planning algorithms including RRT*, A*, and D*. visualizes algorithm performance and efficiency in complex obstacle environments for mobile robots.",
        tags: ["C++", "Python", "Algorithms", "ROS 2", "Visualization"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    },
    {
        id: "trajectory-planner",
        title: "Robot Arm Trajectory Planner",
        description: "Custom trajectory planning module for 6-DOF robotic arms. Implements smooth motion constraints and dynamic obstacle avoidance to ensure safe and efficient manipulation tasks.",
        tags: ["MoveIt 2", "ROS 2", "C++", "Industrial Robotics", "Control Theory"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    },
    {
        id: "multi-robot-coordination",
        title: "Multi-Robot Coordination System",
        description: "Scalable framework for coordinating multiple autonomous robots. Features centralized task allocation, conflict resolution, and peer-to-peer communication for collaborative missions.",
        tags: ["ROS 2", "Distributed Systems", "Python", "WebSockets", "Swarm Robotics"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    },
    {
        id: "sensor-fusion-framework",
        title: "Sensor Fusion Framework",
        description: "Robust sensor fusion architecture combining IMU, Odometry, and Vision data using Extended Kalman Filters (EKF). enhancing state estimation accuracy for autonomous reliable navigation.",
        tags: ["Sensor Fusion", "Kalman Filter", "C++", "ROS 2", "State Estimation"],
        link: "https://github.com/darshmenon",
        github: "https://github.com/darshmenon"
    }
];
