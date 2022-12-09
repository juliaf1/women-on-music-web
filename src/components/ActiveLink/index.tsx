import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
};

export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const isActive = asPath === rest.href || asPath.includes("artistas") && rest.href.includes("artistas")
  const className = isActive ? activeClassName : '';

  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          className,
        })
      }
    </Link>
  );
};