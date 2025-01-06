import Link from "next/link";

import { basePath } from "@/constants/env";

import "../../styles/project.scss";

export default function ProjectsPage() {
  return (
    <div className='p-lr-24'>
      <h2 className="lh-2">Projects/Effects</h2>

      <div className="gap-16 grid grid-cols-4">
        <section className="project-card shadow-sm rounded-lg">
          <Link className="mt-4 block" href="/projects/typing-effect-with-html-tag">
            <h2 className="title text-foreground">标签打字机</h2>
            <img className="project-image" src={`${basePath}/assets/typewriter-7686636_1280.jpg`} alt="标签打字机"/>
            <p className="description text-foreground">一个可以打印HTML标签的打字效果</p>
          </Link>
        </section>

        <section className="project-card shadow-sm rounded-lg">
          <Link className="mt-4 block" href="/projects/webgl-circle-animation">
            <h2 className="title text-foreground">Shader Noise Animation</h2>
            <img className="project-image" src={`${basePath}/assets/shader-noise.png`} alt="noise animation"/>
            <p className="description text-foreground">一个噪点shader 2D 动画</p>
          </Link>
        </section>

        <section className="project-card shadow-sm rounded-lg">
          <Link className="mt-4 block" href="/projects/three-attributes">
            <h2 className="title text-foreground">ThreeJS Attributes</h2>
            <img className="project-image" src={`${basePath}/assets/three-attributes.png`} alt="three-attributes"/>
            <p className="description text-foreground">ThreeJS Attributes</p>
          </Link>
        </section>
      </div>
    </div>
  );
}
