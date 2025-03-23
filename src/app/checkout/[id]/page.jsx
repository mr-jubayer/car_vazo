import { CheckoutForm } from "../components/Checkout";

const CheckoutPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`
  );
  const data = await response.json();

  return (
    <div>
      <CheckoutForm data={data} />
    </div>
  );
};

export default CheckoutPage;
