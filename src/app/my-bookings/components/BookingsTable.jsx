import { BookingsHead } from "./BookingsHead";
import { BookingsBody } from "./BookingsBody";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";

const BookingsTable = async () => {
  const session = await getServerSession();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/bookings/${session?.user?.email}`,
    {
      headers: new Headers(await headers()),
    }
  );
  const data = await response.json();

  return (
    <div className="my-8">
      <h1 className="text-center font-bold text-3xl my-4">My All Bookings</h1>
      <div className="w-11/12 mx-auto overflow-x-auto">
        <table className="w-full table table-zebra">
          <BookingsHead />
          <BookingsBody data={data} />
        </table>
      </div>
    </div>
  );
};

export { BookingsTable };
