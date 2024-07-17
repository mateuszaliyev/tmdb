import { IconProps } from "@/types";

export type LogoProps = Omit<IconProps, "fill" | "stroke">;

export const Logo = ({
  "aria-hidden": ariaHidden = true,
  ...props
}: LogoProps) => (
  <svg
    aria-hidden={ariaHidden}
    viewBox="0 0 320 160"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect fill="#a78bfa" height={160} ry={20} width={320} />
    <g fill="#2e1065">
      <path d="M52.4 48.801v15.6h-7.8v13.1h7.8v21.701c0 2.14.238 4.077.717 5.814a13.765 13.765 0 0 0 3.633 6.334 12.89 12.89 0 0 0 3.685 2.495c1.379.63 2.94 1.09 4.682 1.38a29.685 29.685 0 0 0 4.882.376 15.326 15.326 0 0 0 2.973-.3 19.327 19.327 0 0 0 3.477-1.05 24.822 24.822 0 0 0 2.285-1.053 19.78 19.78 0 0 0 3.465-2.297l-5.4-11.4a9.84 9.84 0 0 1-2.2 1.15 9.261 9.261 0 0 1-.52.178 6.74 6.74 0 0 1-.798.2 4.444 4.444 0 0 1-.781.072 7.283 7.283 0 0 1-.215-.002 5.507 5.507 0 0 1-1.313-.186 3.489 3.489 0 0 1-1.873-1.21c-.527-.671-.865-1.618-1.013-2.84a13.004 13.004 0 0 1-.086-1.56V77.5h11.4v-13.1H68v-15.6z" />
      <path d="M100.5 114.4H84.9v-50h14.7l.6 6.3a17.21 17.21 0 0 1 3.255-3.759 15.156 15.156 0 0 1 2.695-1.841q3.55-1.9 7.85-1.9a24.918 24.918 0 0 1 4.348.359q2.528.448 4.584 1.456a14.253 14.253 0 0 1 1.318.735 13.867 13.867 0 0 1 4.789 5.174A18.57 18.57 0 0 1 130.2 73.5a20.228 20.228 0 0 1 2.627-4.292 16.257 16.257 0 0 1 3.673-3.358q4-2.65 9-2.65a23.37 23.37 0 0 1 5.368.578q3.87.913 6.573 3.269a14.159 14.159 0 0 1 1.609 1.653 16.599 16.599 0 0 1 2.799 5.096q1.713 4.838 1.651 12.004v28.6h-15.6V88.8a30.861 30.861 0 0 0-.083-2.339q-.183-2.395-.767-4.011a9.037 9.037 0 0 0-.743-1.587Q145.6 79.687 144.6 79q-1.6-1.1-3.8-1.2a13.833 13.833 0 0 0-.322-.004q-4.063 0-6.228 2.454a7.908 7.908 0 0 0-1.498 2.623q-.422 1.191-.607 2.661A19.772 19.772 0 0 0 132 88v26.4h-15.6V88.8a30.861 30.861 0 0 0-.083-2.339q-.183-2.395-.767-4.011a9.037 9.037 0 0 0-.743-1.587Q114.1 79.687 113.1 79q-1.6-1.1-3.8-1.2a13.833 13.833 0 0 0-.322-.004q-4.063 0-6.228 2.454a7.908 7.908 0 0 0-1.498 2.623q-.422 1.191-.607 2.661A19.772 19.772 0 0 0 100.5 88z" />
      <path d="M202.2 44.4v25.867a17.245 17.245 0 0 0-3.75-3.918c-2.833-2.1-6.316-3.148-10.449-3.148a27.155 27.155 0 0 0-4.582.37 20.48 20.48 0 0 0-7.469 2.778 19.635 19.635 0 0 0-3.851 3.139 22.006 22.006 0 0 0-3.948 5.861 24.384 24.384 0 0 0-.406.912c-.849 2.016-1.467 4.228-1.855 6.637a40.934 40.934 0 0 0-.489 6.502 47.15 47.15 0 0 0 .002.472c.024 2.354.225 4.567.602 6.637a28.225 28.225 0 0 0 2.146 6.89 24.893 24.893 0 0 0 .819 1.606 20.14 20.14 0 0 0 6.98 7.446 20.06 20.06 0 0 0 6.108 2.502 26.107 26.107 0 0 0 5.943.646 21.371 21.371 0 0 0 3.508-.277 15.827 15.827 0 0 0 6.941-2.871 16.775 16.775 0 0 0 3.985-4.252l.466 6.2H217.8v-70zm-10.199 33.199a11.444 11.444 0 0 1 .83.031A9.271 9.271 0 0 1 197.3 79.1c1.533 1 2.735 2.384 3.601 4.15a12.278 12.278 0 0 1 1.014 3.057 16.037 16.037 0 0 1 .285 2.818 16.037 16.037 0 0 1 0 .276 16.535 16.535 0 0 1 0 .215 16.535 16.535 0 0 1-.181 2.29 12.533 12.533 0 0 1-1.118 3.645 12.072 12.072 0 0 1-.253.487A10.056 10.056 0 0 1 197.3 99.7a9.147 9.147 0 0 1-1.496.79 9.576 9.576 0 0 1-3.703.71 11.649 11.649 0 0 1-.557-.014 9.599 9.599 0 0 1-4.793-1.486 10.055 10.055 0 0 1-1.387-1.065 10.763 10.763 0 0 1-2.314-3.086 12.71 12.71 0 0 1-1.043-2.886 16.361 16.361 0 0 1-.406-3.264 16.986 16.986 0 0 1 .252-2.506 13.033 13.033 0 0 1 1.197-3.645 12.467 12.467 0 0 1 .353-.644 10.361 10.361 0 0 1 3.297-3.506 8.97 8.97 0 0 1 2.147-1.023 10.181 10.181 0 0 1 3.154-.477z" />
      <path d="M223 44.4v70h14.799l.55-6.408a17.131 17.131 0 0 0 4.052 4.459 15.2 15.2 0 0 0 5.523 2.588 20.206 20.206 0 0 0 4.875.56 27.53 27.53 0 0 0 4.24-.314 20.91 20.91 0 0 0 7.861-2.834c3.4-2.1 6-5.118 7.8-9.051 1.012-2.213 1.74-4.657 2.183-7.334a40.843 40.843 0 0 0 .517-6.666 48.53 48.53 0 0 0-.011-.984c-.046-2.277-.252-4.413-.621-6.409a27.99 27.99 0 0 0-2.069-6.658 24.412 24.412 0 0 0-.459-.941 20 20 0 0 0-7.34-8.059 20.344 20.344 0 0 0-5.955-2.457 26.104 26.104 0 0 0-6.146-.691 21.148 21.148 0 0 0-3.68.306 15.515 15.515 0 0 0-6.719 2.842 16.909 16.909 0 0 0-3.8 4.037V44.4zm25.9 33.199a11.649 11.649 0 0 1 .557.014 9.599 9.599 0 0 1 4.793 1.486 9.831 9.831 0 0 1 1.254.95 10.318 10.318 0 0 1 2.396 3.2 12.278 12.278 0 0 1 1.014 3.057 16.037 16.037 0 0 1 .285 3.094 15.534 15.534 0 0 1-.164 2.306 11.963 11.963 0 0 1-1.236 3.844 12.886 12.886 0 0 1-.46.799 10.674 10.674 0 0 1-3.24 3.352 8.97 8.97 0 0 1-2.146 1.023 10.181 10.181 0 0 1-3.154.477 11.444 11.444 0 0 1-.83-.032 9.271 9.271 0 0 1-4.47-1.468c-1.533-1-2.732-2.384-3.599-4.15a12.278 12.278 0 0 1-1.016-3.057 16.037 16.037 0 0 1-.285-3.094 16.369 16.369 0 0 1 .104-1.858A13.14 13.14 0 0 1 239.9 83.3a11.901 11.901 0 0 1 .252-.496 9.864 9.864 0 0 1 3.397-3.705 9.329 9.329 0 0 1 1.935-.941 10.239 10.239 0 0 1 3.416-.559z" />
    </g>
  </svg>
);
