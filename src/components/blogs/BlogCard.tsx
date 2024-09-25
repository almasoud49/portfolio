import Image from "next/image";
export interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  
}

export default function BlogCard({ title, description, image }: BlogCardProps) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={24}
        className="object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
}
