import * as React from 'react';
import { Color } from './types';

type IconColors = [Color, Color, Color];

type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg';
  progress?: number;
  backgroundColors?: IconColors;
  foregroundColors?: IconColors;
  dark?: boolean;
};

const GREENS = ['#D6D331', '#82C652', '#3D8471'];
const GREYS: IconColors = ['#ddd', '#bbb', '#999'];
const DARK_GREYS: IconColors = ['#999', '#666', '#333'];
const SIZES = {
  xs: 0.25,
  sm: 0.5,
  md: 1,
  lg: 1.5,
};
const MAX_HEIGHT = 47;

export default function Cloud({
  progress,
  foregroundColors,
  backgroundColors,
  dark,
  size,
}: Props) {
  const progressPct = progress * 0.01;
  const rightProgress =
    progressPct < 0.66 ? 0 : Math.min(1, (progressPct - 0.66) / 0.33);
  const centerProgress =
    progressPct < 0.33 ? 0 : Math.min(1, (progressPct - 0.33) / 0.33);
  const leftProgress = Math.min(1, progressPct / 0.33);

  if (!backgroundColors) {
    backgroundColors = dark ? DARK_GREYS : GREYS;
  }

  return (
    <svg
      width={87 * SIZES[size]}
      height={47 * SIZES[size]}
      viewBox="0 0 87 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* right */}
      <mask id={'right'}>
        <rect
          x={45}
          y={MAX_HEIGHT - MAX_HEIGHT * rightProgress}
          width={45}
          height={MAX_HEIGHT}
          fill={`white`}
          style={{ transition: 'all 300ms ease-in-out' }}
        />
      </mask>
      <path
        d="M86.9994 28.96C86.9994 38.9379 79.4056 47 70.0072 47H43.5L43.4102 46.9991C55.884 46.9991 66 36.4758 66 23.4996C66 19.5429 65.0524 15.8142 63.3814 12.5424L63.3486 12.478C65.4171 11.529 67.6958 11 70.0824 11C79.4807 11 87.0746 19.0621 86.9994 28.96Z"
        fill={backgroundColors[0]}
      />
      <path
        d="M86.9994 28.96C86.9994 38.9379 79.4056 47 70.0072 47H43.5L43.4102 46.9991C55.884 46.9991 66 36.4758 66 23.4996C66 19.5429 65.0524 15.8142 63.3814 12.5424L63.3486 12.478C65.4171 11.529 67.6958 11 70.0824 11C79.4807 11 87.0746 19.0621 86.9994 28.96Z"
        mask="url(#right)"
        fill={foregroundColors[0]}
      />
      {/* middle */}
      <mask id={'middle'}>
        <rect
          x={6}
          y={MAX_HEIGHT - MAX_HEIGHT * centerProgress}
          width={60}
          height={MAX_HEIGHT}
          fill="white"
          style={{ transition: 'all 300ms ease-in-out' }}
        />
      </mask>
      <path
        d="M43.3342 0C33.5018 0 25.2206 6.50388 22.1165 15.5844C21.5063 17.3692 21.1934 19.1937 20.8965 21.0467C20.8965 21.0467 18.7668 41.888 5 42.6C5 42.6 8.78282 47.087 15.8765 46.9991C25.3117 46.8822 34.507 46.9991 43.4102 46.9991C55.884 46.9991 66 36.4758 66 23.4996C66 19.5429 65.0524 15.8142 63.3814 12.5424C59.5724 5.08423 52.0045 0 43.3342 0Z"
        fill={backgroundColors[1]}
      />
      <path
        d="M43.3342 0C33.5018 0 25.2206 6.50388 22.1165 15.5844C21.5063 17.3692 21.1934 19.1937 20.8965 21.0467C20.8965 21.0467 18.7668 41.888 5 42.6C5 42.6 8.78282 47.087 15.8765 46.9991C25.3117 46.8822 34.507 46.9991 43.4102 46.9991C55.884 46.9991 66 36.4758 66 23.4996C66 19.5429 65.0524 15.8142 63.3814 12.5424C59.5724 5.08423 52.0045 0 43.3342 0Z"
        mask="url(#middle)"
        fill={foregroundColors[1]}
      />

      {/* left */}
      <mask id={'left'}>
        <rect
          x={0}
          y={MAX_HEIGHT - MAX_HEIGHT * leftProgress}
          width={23}
          height={MAX_HEIGHT}
          fill="white"
          style={{ transition: 'all 300ms ease-in-out' }}
        />
      </mask>
      <path
        d="M0 30.5C0 21.3872 6.93958 14 15.4999 14C17.753 14 19.8938 14.5117 21.8254 15.432L22.1342 15.5834C21.6844 16.899 21.3257 18.2695 21.1043 19.6813C21.0283 20.0769 20.9726 20.572 20.8965 21.0467C20.8965 21.0467 18.7668 41.8879 5 42.6L4.65307 42.2866C1.78166 39.2917 0 35.1173 0 30.5Z"
        fill={backgroundColors[2]}
      />
      <path
        d="M0 30.5C0 21.3872 6.93958 14 15.4999 14C17.753 14 19.8938 14.5117 21.8254 15.432L22.1342 15.5834C21.6844 16.899 21.3257 18.2695 21.1043 19.6813C21.0283 20.0769 20.9726 20.572 20.8965 21.0467C20.8965 21.0467 18.7668 41.8879 5 42.6L4.65307 42.2866C1.78166 39.2917 0 35.1173 0 30.5Z"
        mask="url(#left)"
        fill={foregroundColors[2]}
      />
    </svg>
  );
}

Cloud.defaultProps = {
  size: 'md',
  progress: 0,
  foregroundColors: GREENS,
  flipped: false,
  dark: false,
};
