export default function CardComponent({ Icon, Nome, Role, Github, Linkedin }) {  
  return (
    <div className="flex gap-4">
     
      <div className="flex flex-col">
        <p className="text-gray-700 font-semibold sm:text-lg dark:text-white">{Nome}</p>

      </div>
    </div>
  );
}
