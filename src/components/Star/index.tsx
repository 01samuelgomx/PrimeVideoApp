import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import "../scss/index.scss";

export interface Props {
  rating: number;
}

export default function Star(props: Props) {
  const numberStar = Math.round(props.rating / 2);

  const fullStar = [];
  const empyStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < numberStar) {
      fullStar.push(i);
    } else {
      empyStar.push(i);
    }
  }

  return (
    <div className="starMovie">

      {fullStar.map(index => (
        <FaStar key={index} />
      ))}

      {empyStar.map(index => (
        <FaRegStar key={index} />
      ))}

    </div>
  );
}
