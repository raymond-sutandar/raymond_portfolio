import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-6 text-2xl font-medium tracking-tight">
        About Me
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hello! My name is Raymond Sutandar. I'm a dedicated, innovative software developer
		  with extensive experience in automation.
        </p>
        <p>
          I'm currently studying full-stack development
		  to build beautiful, useable, and practical websites, including this
		  portfolio here.
        </p>
        <p>
          I have a particular focus on organization and communication -
		  I believe that bringing people together and laying out information well
		  is essential to good work.
        </p>
        <p>
          I tend to enjoy empirical work and working with databases. Rapid testing
		  and well-managed info are essential to my projects.
        </p>
		<p>
		  Outside of tech, I enjoy video games, badminton, economics, and
		  matters of religion. A strange mix to be sure, but that's me!
		</p>
        <p>
          This website was originally built using Nextfolio by{" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>
          , but is currently maintained by me, Raymond.
        </p>
      </div>
    </section>
  );
}
