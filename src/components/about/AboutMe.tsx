
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <Image
          src=""
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
          As a passionate and motivated full-stack web developer, I have
          recently embarked on my professional journey, equipped with a strong
          foundation in both front-end and back-end technologies. I specialize
          in building responsive, user-friendly interfaces using HTML, CSS, and
          JavaScript, along with advanced frameworks like React and Next.js. On
          the back-end, I create efficient, scalable systems using Node.js,
          Express, and MongoDB. My experience extends to state management with
          Redux, ensuring seamless data flow in complex applications. I have
          worked on diverse projects, from designing web applications to
          integrating APIs and databases, allowing me to manage both client-side
          and server-side tasks effectively. 
          <br/>
          <br/>
          
          Though I am a fresher in the  industry, I am driven by a strong desire to continuously learn and grow. I have developed a keen understanding of modern development practices, including version control with Git, testing, deployment,
          and server-side rendering with Next.js. My focus is on delivering
          high-quality, maintainable code and collaborating effectively with
          teams to solve complex problems. With my expertise in Redux for state
          management and Next.js for building fast, scalable applications, I am
          eager to contribute to innovative projects and further evolve as a
          developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
