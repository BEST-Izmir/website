/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

function navbar() {
  return (
    <nav className="best-izmir-nav">
      <ul className="nav-links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
