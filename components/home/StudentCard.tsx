type StudentCardProps = {
  image: string;
  name: string;
  role: string;
};

export default function StudentCard({ image, name, role }: StudentCardProps) {
  return (
    <div className="overflow-hidden rounded-[5px] border border-dark-06 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-[300px] w-full object-cover"
      />
      <div className="px-[21px] pt-[21px] pb-[20px]">
        <h3 className="font-sans text-[20px] font-semibold leading-[30px] text-dark-02">
          {name}
        </h3>
        <p className="font-sans text-[16px] font-normal leading-[24px] text-dark-03">
          {role}
        </p>
      </div>
    </div>
  );
}
