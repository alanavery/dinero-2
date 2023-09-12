import Link from 'next/link';

const Button = ({ children, href }) => {
  if (href) {
    return (
      <Link className="button" href={href}>
        {children}
      </Link>
    );
  } else {
    return <button className="button">{children}</button>;
  }
};

export default Button;
