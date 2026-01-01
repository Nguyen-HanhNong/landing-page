import React, { forwardRef, type CSSProperties, type ReactNode } from "react";
import Nav from "react-bootstrap/Nav";

type JumbotronProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

type NavLinkProps = {
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: ReactNode;
};

export const Jumbotron = forwardRef<HTMLDivElement, JumbotronProps>(
  ({ id, className, style, children }, ref) => {
    const bgStyle = style ?? { backgroundColor: "#e9ecef" };
    return (
      <div ref={ref} id={id} className={`py-3 ${className ?? ""}`} style={bgStyle}>
        <div className="container py-5">
          {children}
        </div>
      </div>
    );
  }
);

Jumbotron.displayName = "Jumbotron";

export const NavLink = ({ href, target, rel, className, children }: NavLinkProps) => {
  return (
    <Nav.Link
      href={href}
      target={target}
      rel={rel}
    >
      <span className={`nav-item lead ${className ?? ""}`}>
        {children}
      </span>
    </Nav.Link>
  );
};
