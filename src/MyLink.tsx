import { Link } from "@material-ui/core";

type MyLinkProps = {
  href: string;
  isInherit?: boolean;
};

const MyLink: React.FC<MyLinkProps> = (props) => {
  return (
    <Link
      target="_blank"
      rel="noreferrer"
      color={props.isInherit ? "inherit" : "primary"}
      href={props.href}
    >
      {props.children}
    </Link>
  );
};

export default MyLink;
