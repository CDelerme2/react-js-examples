// https://www.youtube.com/watch?v=MS2kbyWOXI8
import { format } from "date-fns";

const DayHeader = () => {
  return (
    <>
      <h4>{format(new Date(), "'Today is a' eeee")}</h4>
    </>
  );
};

export default DayHeader;
