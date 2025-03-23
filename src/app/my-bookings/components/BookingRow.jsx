import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import DeleteBookingButton from "./DeleteBookingButton";

const BookingRow = ({ item }) => {
  return (
    <tr key={item._id} className="border">
      <td>
        <img
          src={item.serviceImage}
          alt={item.serviceName}
          width={100}
          height={100}
        />
      </td>
      <td>{item.serviceName}</td>
      <td>{item.date}</td>
      <td>{item.service_price}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td>
        <Link href={`/my-bookings/${item._id}`}>
          <FaRegEdit size={20} />
        </Link>
      </td>

      <td>
        <DeleteBookingButton id={item._id} />
      </td>
    </tr>
  );
};

export { BookingRow };
