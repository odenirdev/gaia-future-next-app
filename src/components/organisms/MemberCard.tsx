import { Typography } from "../Typography";

interface MemberCardProps {
  avatar: string;
  name: string;
  role: string;
  about: string[];
}

export const MemberCard = (props: MemberCardProps) => {
  const { name, role, about } = props;

  return (
    <div className="md:max-w-[32rem] bg-zinc-900 p-6 rounded-3xl space-y-2">
      <div className="w-fit max-w-[10rem]">
        {/* <figure className="overflow-hidden rounded-3xl">
          <img src={avatar} width={160} height={160} alt="" />
        </figure> */}

        <div className="space-y-1">
          <Typography as="h4" className="leading-4 md:leading-5">
            {name}
          </Typography>
          <Typography
            as="p"
            className="text-xs leading-3 md:text-xs md:leading-3 "
          >
            {role}
          </Typography>
        </div>
      </div>

      <div className="space-y-2">
        {about.map((paragraph, index) => (
          <Typography as="p" key={index} className="text-sm md:text-md">
            {paragraph}
          </Typography>
        ))}
      </div>
    </div>
  );
};
