import classNames from "classnames";

const Button = ({
  children,
  primaryOutline,
  primaryFilled,
  ghostOutline,
  blackOutline,
  className,
}) => {
  const buttonVariant = classNames(
    `px-4 py-1.5 border-2 rounded cursor-pointer transition-all duration-200 active:mt-1 active:scale-[0.99] ${className}`,

    primaryOutline &&
      "border-primary text-primary  hover:bg-primary hover:text-white ",

    primaryFilled &&
      "bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary",

    ghostOutline && "border-white  hover:bg-white hover:text-white ",

    blackOutline && "border-black  hover:bg-black hover:text-white "
  );

  return <button className={buttonVariant}>{children}</button>;
};

export { Button };
