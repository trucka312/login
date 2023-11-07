import PropTypes from 'prop-types';

const PhoneIcon = ({ className, ...rest }) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <g clipPath="url(#clip0_1330_26353)">
        <path
          d="M4.88344 4.13631C4.92344 4.72965 5.02344 5.30965 5.18344 5.86298L4.38344 6.66298C4.1101 5.86298 3.93677 5.01631 3.87677 4.13631H4.88344ZM11.4568 12.1496C12.0234 12.3096 12.6034 12.4096 13.1901 12.4496V13.443C12.3101 13.383 11.4634 13.2096 10.6568 12.943L11.4568 12.1496ZM5.52344 2.80298H3.1901C2.82344 2.80298 2.52344 3.10298 2.52344 3.46965C2.52344 9.72965 7.59677 14.803 13.8568 14.803C14.2234 14.803 14.5234 14.503 14.5234 14.1363V11.8096C14.5234 11.443 14.2234 11.143 13.8568 11.143C13.0301 11.143 12.2234 11.0096 11.4768 10.763C11.4101 10.7363 11.3368 10.7296 11.2701 10.7296C11.0968 10.7296 10.9301 10.7963 10.7968 10.923L9.3301 12.3896C7.44344 11.423 5.89677 9.88298 4.93677 7.99631L6.40344 6.52965C6.5901 6.34298 6.64344 6.08298 6.5701 5.84965C6.32344 5.10298 6.1901 4.30298 6.1901 3.46965C6.1901 3.10298 5.8901 2.80298 5.52344 2.80298Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1330_26353">
          <rect width="16" height="16" fill="white" transform="translate(0.523438 0.802979)" />
        </clipPath>
      </defs>
    </svg>
  );
};

PhoneIcon.propTypes = {
  className: PropTypes.string,
};

export default PhoneIcon;