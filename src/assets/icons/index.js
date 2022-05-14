import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export const MenuIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x={2} y={18} width={10} height={3} rx={1.5} fill="#21205A" />
    <Rect x={2} y={10} width={20} height={3} rx={1.5} fill="#21205A" />
    <Rect x={2} y={3} width={10} height={3} rx={1.5} fill="#21205A" />
  </Svg>
);

export const SearchIcon = props => (
  <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="#7C809E" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4872 3.53846C7.09639 3.53846 3.53846 7.09356 3.53846 11.4771C3.53846 15.8607 7.09639 19.4158 11.4872 19.4158C13.6777 19.4158 15.6599 18.5318 17.0983 17.1C18.5433 15.6617 19.4359 13.6742 19.4359 11.4771C19.4359 7.09356 15.878 3.53846 11.4872 3.53846ZM2 11.4771C2 6.24221 6.24839 2 11.4872 2C16.726 2 20.9744 6.24221 20.9744 11.4771C20.9744 13.8225 20.1207 15.9697 18.7083 17.624L21.7744 20.6865C22.075 20.9868 22.0752 21.4738 21.775 21.7744C21.4748 22.075 20.9877 22.0752 20.6872 21.775L17.6182 18.7096C15.965 20.1093 13.8242 20.9542 11.4872 20.9542C6.24839 20.9542 2 16.712 2 11.4771Z"
      fill="#7C809E"
      {...props}
    />
  </Svg>
);

export const RightIcon = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 5L16 12L9 19"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const GDriveIcon = props => (
  <Svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M17 6H31L45 30H31L17 6Z" fill="#FFC107" />
    <Path d="M9.875 42L16.938 30H45L38 42H9.875Z" fill="#1976D2" />
    <Path d="M3 30.125L9.875 42L24 18L17 6L3 30.125Z" fill="#4CAF50" />
  </Svg>
);

export const FilterRightIcon = props => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 16 16"
    fill="#7C809E"
    className="bi bi-filter-right"
    {...props}>
    <Path
      fill="#7C809E"
      d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
    />
  </Svg>
);

export const FolderIcon = ({ cover, inner, props }) => (
  <Svg
    width={34}
    height={31}
    viewBox="0 0 34 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={5.33334}
      y={0.333344}
      width={25}
      height={20}
      rx={2}
      fill={inner}
      {...props}
    />
    <Path
      d="M0.333344 6.86669C0.333344 5.74658 0.333344 5.18653 0.55133 4.75871C0.743077 4.38238 1.04904 4.07642 1.42536 3.88467C1.85319 3.66669 2.41324 3.66669 3.53334 3.66669H11.9541C12.5802 3.66669 12.8933 3.66669 13.1775 3.75299C13.4291 3.82939 13.6631 3.95465 13.8662 4.1216C14.0957 4.31017 14.2693 4.57066 14.6167 5.09165L16.05 7.24173C16.3974 7.76271 16.571 8.0232 16.8005 8.21178C17.0036 8.37873 17.2376 8.50398 17.4892 8.58038C17.7734 8.66669 18.0865 8.66669 18.7126 8.66669H30.4667C31.5868 8.66669 32.1468 8.66669 32.5747 8.88467C32.951 9.07642 33.257 9.38238 33.4487 9.75871C33.6667 10.1865 33.6667 10.7466 33.6667 11.8667V27.1334C33.6667 28.2535 33.6667 28.8135 33.4487 29.2413C33.257 29.6177 32.951 29.9236 32.5747 30.1154C32.1468 30.3334 31.5868 30.3334 30.4667 30.3334H3.53334C2.41324 30.3334 1.85319 30.3334 1.42536 30.1154C1.04904 29.9236 0.743077 29.6177 0.55133 29.2413C0.333344 28.8135 0.333344 28.2535 0.333344 27.1334V6.86669Z"
      fill={cover}
      {...props}
    />
  </Svg>
);

export const OptionFolderIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle
      cx={12}
      cy={17}
      r={2.5}
      transform="rotate(-90 12 17)"
      fill="#405DB5"
      {...props}
    />
    <Circle
      cx={12}
      cy={7}
      r={2.5}
      transform="rotate(-90 12 7)"
      fill="#405DB5"
      {...props}
    />
  </Svg>
);

export const AddIcon = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M16 4V16M16 28V16M16 16H28M16 16H4"
      stroke="white"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
