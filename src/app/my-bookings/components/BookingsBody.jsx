import { BookingRow } from "./BookingRow";

const BookingsBody = ({ data }) => {
  return (
    <tbody>
      {data?.map((item) => {
        return <BookingRow key={item._id} item={item} />;
      })}
    </tbody>
  );
};

export { BookingsBody };
