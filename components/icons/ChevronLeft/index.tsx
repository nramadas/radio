import React from 'react';

export function ChevronLeft(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg {...props} viewBox="0 0 48 48">
      <path d="M32.0607 8.18934C32.6464 8.77513 32.6464 9.72487 32.0607 10.3107L18.6213 23.75L32.0607 37.1893C32.6464 37.7751 32.6464 38.7249 32.0607 39.3107C31.4749 39.8964 30.5251 39.8964 29.9393 39.3107L15.4393 24.8107C14.8536 24.2249 14.8536 23.2751 15.4393 22.6893L29.9393 8.18934C30.5251 7.60355 31.4749 7.60355 32.0607 8.18934Z" />
    </svg>
  );
}