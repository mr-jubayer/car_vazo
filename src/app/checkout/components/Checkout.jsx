"use client";

import { Button } from "@/components/ui/Button";
import { useSession } from "next-auth/react";
import React from "react";

const CheckoutForm = ({ data }) => {
  const { data: session } = useSession();

  //   console.log(session);

  const handleBookService = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const amount = parseFloat(form.amount.value);
    const serviceImage = data.img;
    const serviceName = data.title;

    const bookingPayload = {
      name,
      email,
      date,
      phone,
      address,
      amount,
      serviceImage,
      serviceName,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/bookings`,
      {
        method: "POST",
        body: JSON.stringify(bookingPayload),
      }
    );
    await res.json();
  };

  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-3xl mb-4">
          Book Service : {data?.title}
        </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={session?.user?.name}
                readOnly
                type="text"
                name="name"
                className="input input-bordered border block w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={session?.user?.email}
                readOnly
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered border block w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                defaultValue={data?.price}
                readOnly
                name="amount"
                className="input input-bordered border block w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered border block w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered border block w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered border block w-full"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <Button type="submit" primaryFilled className="w-full">
              Order Confirm
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { CheckoutForm };
