
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mandelbrot from "../assets/mandelbrot.png";
import horror from "../assets/horror.png";
import snake from "../assets/snake.png";
import mnist from "../assets/mnist.png";
import Dijkstra from "../assets/Dijkstra.jpeg";
import Asteroids from "../assets/Asteroids.jpeg";

const projectDetails = {
  "Exploring the Mandelbrot set": {
    title: "Exploring the Mandelbrot set",
    description: "Generating a graphical representation of the Mandelbrot set",
    fullDescription: `In this project I generated the an image based on the Mandelbrot set. The image was generated by scaling the colour of each pixel in the frame based on the depth of search at this particular complex number. The code was written as a part of a course in functional programming that I took in my bachelors degree The code written by me is commented. 
    
    The files can be found here:`,
    
    technologies: ["Elixir"],
    imageUrl: mandelbrot,
    link: "https://github.com/MoritzGruesome/Projects/tree/main/Mandelbrot",
  },
  "Horrorgame in Virtual Reality": {
    title: "Creating a virtual-reality based horrorgame",
    description: "Interactive dashboard for visualizing complex datasets",
    fullDescription: `In this project, I worked in a team of 7 people to create a horrorgame. We worked on it for 4 weeks, through which I was the product owner, responsible for maintining a vision for the game. The concept of the game was to create a cheap entry to Virtual reality based games. The game was made to be played on a phone, where you would look around by moving your phone and press a button to move forward in the direction of view. You play as a ghost hunter inspired by "spökjakten" in sweden, who is trying to build his brand on social media. The game takes place in a haunted asylum in which the player goes live on stream. During the stream the player must both find and avoid monsters of different types. Filming monsters increase the number of viewers on the stream thus increasing likes (which is the points system), The player is directed by the live chat about which monsters they want to see. Filming monsters of interest gains more views and filming no monsters loses views. The link to the github page of the game can be found here:

    `,
    technologies: ["C#", "Unity"],
    imageUrl: horror,
    link: "https://github.com/PontusAhlin/HorrorGame"
  },
  "Snake on the Arduino Chipkit": {
    title: "Snake on the Arduino Chipkit",
    description: "creating a snake-inspired game running on arduino",
    fullDescription: `In this project I built a snake inspired game on the ChipKIT. The game was written in C and invovled a lot of interfacing width the ChipKIT such as controlling the small screen and the buttons. The game itself was remained quite simple in its content. Three game modes were made ranging from easy to difficult. A simple robot snake was implemented aswell and an algorithm for placing down obstacles in the different game difficulties. The entire Git-hub repository including the files can be found at the link below:`,

    technologies: ["C", "Arduino"],
    imageUrl: snake,
    link: "https://github.com/MoritzGruesome/Projects/tree/main/Snake%20Game"
  },
  "Implementing a neural network from scratch": {
    title: "Implementing a neural network from scratch",
    description: "Training a neural network on hand-written digits using MNIST",
    fullDescription: `In this personal project, I implemented an artifical neural network using only the Numpy library in python. I was guided via the work by Michael Nielson and his book on Neural Networks and Deep learning. All of the code seen in the github is my own work, except for the DrawingBoard file which I implemented with the help of chatGPT. This gives the user the ability to try out a trained model using a board which can be drawn on using the curser.

    `,
    technologies: ["Python", "NumPy", "MNIST"],
    imageUrl: mnist,
    link: "https://github.com/MoritzGruesome/Projects/tree/main/neuralNet"
  },
  "Path finding using Dijkstra's algorithm": {
    title: "Path finding using Dijkstra's algorithm",
    description: "Implementation of Dijkstra's algorithm for finding shortest paths in graphs",
    fullDescription: `The code presented was part of an assignment I completed for my Algorithms and Data structures course at KTH. The code was written in Java. This was my implementation of a path solving program, using Dijkstras Algorithm. The code was implemented using a queue, Hash table and of course the algorithm itself. You can try out the code by going to the GitHub link below and entering any two european cities as shown. The result will be the shortest time to get from one city to the next.`,
    technologies: ["Java"],
    imageUrl: Dijkstra,
    link: "https://github.com/MoritzGruesome/Projects/tree/main/Dijkstras%20Algorithm%20final"
  },
  "Teaching Asteroids using reinforcement learning": {
    title: "Teaching Asteroids using reinforcement learning",
    description: "Training an AI agent to play the classic Asteroids game using Deep Q-learning",
    fullDescription: `This project was a part of my Artificial Intelligence and Applied Methods course at KTH. The goal of the project was to develop a software agent which could play the classic Atari game: Asteroids. In order to achieve this, we used a reinforcement learning algorithm called Deep Q-Learning. If you are interested to read more, a copy of the report is also linked below.`,
    technologies: ["Python", "PyTorch", "NumPy"],
    imageUrl: Asteroids,
    link: "https://github.com/MoritzGruesome/Projects/tree/main/RL%20Asteroids%20with%20plotting",
    link2: "https://github.com/MoritzGruesome/Projects/blob/main/RL%20Asteroids%20with%20plotting/Project%20Report.pdf"
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projectDetails[projectId as keyof typeof projectDetails];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-8 text-white hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
        
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="text-white/80 space-y-4 whitespace-pre-line">
          {project.fullDescription}
        </div>
        {project.link && (
          <div className="mt-4">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 underline hover:text-blue-300"
            >
              View Project on GitHub
            </a>
          </div>
        )}
        {project.link2 && (
          <div className="mt-4">
            <a 
              href={project.link2} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 underline hover:text-blue-300"
            >
              View the report here
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
