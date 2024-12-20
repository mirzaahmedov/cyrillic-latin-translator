import type { SVGAttributes } from "react";

type LogoProps = SVGAttributes<SVGElement>;
const Logo = (props: LogoProps) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.8106 7.8128L16.8106 8.5808C17.6298 8.6064 18.257 8.7088 18.6922 8.888C19.1018 9.0416 19.3706 9.3488 19.4986 9.8096C19.6266 10.2448 19.6906 10.936 19.6906 11.8832L19.6906 30.9296C19.6906 31.8512 19.6266 32.5424 19.4986 33.0032C19.345 33.464 19.0634 33.7712 18.6538 33.9248C18.2442 34.0784 17.6298 34.1808 16.8106 34.232L16.8106 35C17.5018 34.9488 18.3722 34.9232 19.4218 34.9232C20.4714 34.8976 21.5338 34.8848 22.609 34.8848C23.8378 34.8848 25.0026 34.8976 26.1034 34.9232C27.1786 34.9232 28.0362 34.9488 28.6762 35L28.6762 34.232C27.857 34.1808 27.2426 34.0784 26.833 33.9248C26.4234 33.7712 26.1546 33.464 26.0266 33.0032C25.873 32.5424 25.7962 31.8512 25.7962 30.9296L25.7962 11.8832C25.7962 10.936 25.873 10.2448 26.0266 9.8096C26.1546 9.3488 26.4362 9.0416 26.8714 8.888C27.281 8.7088 27.8826 8.6064 28.6762 8.5808L28.6762 7.8128C28.0362 7.8384 27.1786 7.864 26.1034 7.8896C25.0026 7.9152 23.8378 7.928 22.609 7.928C21.5338 7.928 20.4714 7.9152 19.4218 7.8896C18.3722 7.864 17.5018 7.8384 16.8106 7.8128ZM18.577 20.4848C16.529 20.4848 14.7498 20.6384 13.2394 20.9456C11.7034 21.2272 10.4746 21.752 9.55301 22.52C8.60581 23.2624 7.96581 24.3632 7.63301 25.8224L6.51941 30.968C6.31461 32.0176 6.08421 32.7472 5.82821 33.1568C5.57221 33.5408 5.18821 33.7328 4.67621 33.7328C4.36901 33.7072 4.11301 33.6304 3.90821 33.5024C3.67781 33.3488 3.43461 33.1312 3.17861 32.8496L2.64101 33.3104C3.33221 34.0784 4.07461 34.6416 4.86821 35C5.66181 35.3584 6.62181 35.5376 7.74821 35.5376C9.13061 35.5376 10.2698 35.256 11.1658 34.6928C12.0618 34.104 12.6506 33.0032 12.9322 31.3904L13.969 25.5152C14.1482 24.4912 14.417 23.6592 14.7754 23.0192C15.1082 22.3792 15.6202 21.9056 16.3114 21.5984C17.0026 21.2912 17.9626 21.1376 19.1914 21.1376L20.689 21.1376L20.689 20.4848L18.577 20.4848ZM19.8442 21.1376L19.8442 20.4848C18.7434 20.4592 17.745 20.1648 16.849 19.6016C15.953 19.0128 14.993 18.1168 13.969 16.9136L11.7034 14.1872C10.705 13.0352 10.129 12.0496 9.97541 11.2304C9.82181 10.3856 9.98821 9.7328 10.4746 9.272C10.961 8.8112 11.7162 8.568 12.7402 8.5424L12.7402 7.8128C12.1258 7.8384 11.5242 7.864 10.9354 7.8896C10.3466 7.8896 9.74501 7.9024 9.13061 7.928C8.51621 7.928 7.83781 7.928 7.09541 7.928C6.32741 7.928 5.64901 7.9152 5.06021 7.8896C4.44581 7.864 3.90821 7.8384 3.44741 7.8128L3.44741 8.5424C4.29221 8.7216 5.17541 9.08 6.09701 9.6176C7.01861 10.1552 8.00421 11.0256 9.05381 12.2288L16.657 21.1376L19.8442 21.1376Z"
        fill="#007AFF"
      />
      <path
        d="M29.0571 7.90167L29.0571 8.66967C28.1867 8.69527 27.5211 8.79767 27.0603 8.97687C26.6251 9.13047 26.3307 9.43767 26.1771 9.89847C26.0235 10.3337 25.9467 11.0249 25.9467 11.9721L25.9467 31.4793C25.9467 32.2729 25.9979 32.8617 26.1003 33.2457C26.2283 33.6297 26.4587 33.8857 26.7915 34.0137C27.1499 34.1417 27.6747 34.2057 28.3659 34.2057L30.2475 34.2057C31.1179 34.2057 31.9371 34.0009 32.7051 33.5913C33.4731 33.1817 34.1643 32.6057 34.7787 31.8633C35.3931 31.0953 35.9051 30.1865 36.3147 29.1369C36.7243 28.0873 37.0315 26.9225 37.2363 25.6425L38.1195 25.6425C38.0427 26.5129 38.0043 27.6393 38.0043 29.0217C38.0043 29.6105 38.0171 30.4681 38.0427 31.5945C38.0683 32.7209 38.1451 33.8857 38.2731 35.0889C36.9675 35.0377 35.4955 35.0121 33.8571 35.0121C32.2187 34.9865 30.7595 34.9737 29.4795 34.9737C28.8395 34.9737 28.0203 34.9737 27.0219 34.9737C26.0235 34.9737 24.9483 34.9865 23.7963 35.0121C22.6443 35.0121 21.4795 35.0249 20.3019 35.0505C19.1243 35.0505 18.0107 35.0633 16.9611 35.0889L16.9611 34.3209C17.7803 34.2697 18.3947 34.1673 18.8043 34.0137C19.2139 33.8601 19.4827 33.5529 19.6107 33.0921C19.7643 32.6313 19.8411 31.9401 19.8411 31.0185L19.8411 11.9721C19.8411 11.0249 19.7643 10.3337 19.6107 9.89847C19.4827 9.43767 19.2011 9.13047 18.7659 8.97687C18.3563 8.79767 17.7547 8.69527 16.9611 8.66967L16.9611 7.90167C17.6011 7.92727 18.4587 7.95287 19.5339 7.97847C20.6347 8.00407 21.7995 8.01687 23.0283 8.01687C24.1547 8.01687 25.2555 8.00407 26.3307 7.97847C27.4315 7.95287 28.3403 7.92727 29.0571 7.90167Z"
        fill="#007AFF"
      />
    </svg>
  );
};

export { Logo };