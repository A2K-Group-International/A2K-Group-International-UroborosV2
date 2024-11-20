import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const EventIcon = ({ className = "text-black" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 1.25C11.5815 1.25 11.8995 1.3817 12.1339 1.61612C12.3683 1.85054 12.5 2.16848 12.5 2.5V8.00188C11.7276 7.55568 10.8214 7.39942 9.94422 7.56117C9.06699 7.72291 8.27615 8.19206 7.71368 8.88439C7.15121 9.57672 6.85395 10.4469 6.87527 11.3386C6.89659 12.2304 7.23509 13.0853 7.83 13.75H3.75C3.41848 13.75 3.10054 13.6183 2.86612 13.3839C2.6317 13.1495 2.5 12.8315 2.5 12.5V2.5C2.5 2.16848 2.6317 1.85054 2.86612 1.61612C3.10054 1.3817 3.41848 1.25 3.75 1.25H11.25ZM10.625 8.75C11.288 8.75 11.9239 9.01339 12.3928 9.48223C12.8616 9.95107 13.125 10.587 13.125 11.25C13.125 11.913 12.8616 12.5489 12.3928 13.0178C11.9239 13.4866 11.288 13.75 10.625 13.75C9.96196 13.75 9.32607 13.4866 8.85723 13.0178C8.38839 12.5489 8.125 11.913 8.125 11.25C8.125 10.587 8.38839 9.95107 8.85723 9.48223C9.32607 9.01339 9.96196 8.75 10.625 8.75ZM10.625 9.6875C10.4719 9.68752 10.3242 9.74372 10.2098 9.84545C10.0954 9.94717 10.0223 10.0873 10.0044 10.2394L10 10.3125V11.25C10 11.4031 10.0562 11.5508 10.1579 11.6652C10.2597 11.7796 10.3998 11.8527 10.5519 11.8706L10.625 11.875H11.25C11.4093 11.8748 11.5625 11.8138 11.6784 11.7045C11.7942 11.5951 11.8639 11.4457 11.8732 11.2866C11.8826 11.1276 11.8308 10.971 11.7286 10.8489C11.6263 10.7267 11.4813 10.6482 11.3231 10.6294L11.25 10.625V10.3125C11.25 10.1467 11.1842 9.98777 11.0669 9.87056C10.9497 9.75335 10.7908 9.6875 10.625 9.6875ZM5.625 6.875H5C4.83424 6.875 4.67527 6.94085 4.55806 7.05806C4.44085 7.17527 4.375 7.33424 4.375 7.5C4.375 7.66576 4.44085 7.82473 4.55806 7.94194C4.67527 8.05915 4.83424 8.125 5 8.125H5.625C5.79076 8.125 5.94973 8.05915 6.06694 7.94194C6.18415 7.82473 6.25 7.66576 6.25 7.5C6.25 7.33424 6.18415 7.17527 6.06694 7.05806C5.94973 6.94085 5.79076 6.875 5.625 6.875ZM8.75 4.375H5C4.8407 4.37518 4.68748 4.43617 4.57164 4.54553C4.45581 4.65489 4.3861 4.80435 4.37677 4.96337C4.36743 5.1224 4.41917 5.27899 4.52142 5.40114C4.62366 5.5233 4.76869 5.60181 4.92687 5.62063L5 5.625H8.75C8.9093 5.62482 9.06252 5.56383 9.17836 5.45447C9.29419 5.34511 9.3639 5.19565 9.37323 5.03663C9.38257 4.8776 9.33083 4.72101 9.22858 4.59885C9.12634 4.4767 8.98131 4.39819 8.82312 4.37937L8.75 4.375Z"
      />
    </svg>
  );
};

EventIcon.propTypes = {
  className: PropTypes.string,
};

const Users = ({ className = "text-black" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill="currentColor"
        d="M5.9375 7.5C6.68342 7.5 7.39879 7.20368 7.92624 6.67624C8.45368 6.14879 8.75 5.43342 8.75 4.6875C8.75 3.94158 8.45368 3.22621 7.92624 2.69876C7.39879 2.17132 6.68342 1.875 5.9375 1.875C5.19158 1.875 4.47621 2.17132 3.94876 2.69876C3.42132 3.22621 3.125 3.94158 3.125 4.6875C3.125 5.43342 3.42132 6.14879 3.94876 6.67624C4.47621 7.20368 5.19158 7.5 5.9375 7.5ZM13.125 5.625C13.125 6.12228 12.9275 6.59919 12.5758 6.95083C12.2242 7.30246 11.7473 7.5 11.25 7.5C10.7527 7.5 10.2758 7.30246 9.92417 6.95083C9.57254 6.59919 9.375 6.12228 9.375 5.625C9.375 5.12772 9.57254 4.65081 9.92417 4.29917C10.2758 3.94754 10.7527 3.75 11.25 3.75C11.7473 3.75 12.2242 3.94754 12.5758 4.29917C12.9275 4.65081 13.125 5.12772 13.125 5.625ZM5.9375 8.125C7.18313 8.125 8.31563 8.505 9.14813 9.04125C9.565 9.31 9.92188 9.62688 10.1813 9.9725C10.4356 10.3131 10.625 10.7225 10.625 11.1606C10.625 11.6325 10.4062 12.0106 10.085 12.2837C9.78187 12.54 9.38688 12.7063 8.97875 12.8206C8.15812 13.05 7.0725 13.125 5.9375 13.125C4.8025 13.125 3.71688 13.05 2.89688 12.8206C2.48813 12.7063 2.09312 12.54 1.79062 12.2837C1.46813 12.0112 1.25 11.6325 1.25 11.1606C1.25 10.7219 1.43938 10.3131 1.69375 9.97312C1.95312 9.62687 2.31 9.30937 2.72687 9.04187C3.55938 8.50437 4.69187 8.125 5.9375 8.125ZM11.25 8.125C12.075 8.125 12.8237 8.3975 13.375 8.78187C13.8888 9.14 14.375 9.705 14.375 10.3569C14.375 10.7237 14.2169 11.0275 13.9762 11.2481C13.7531 11.4531 13.4706 11.5781 13.1987 11.6606C12.655 11.825 11.955 11.875 11.25 11.875H11.1231C11.2044 11.6575 11.25 11.4187 11.25 11.1606C11.25 10.5419 10.9856 10.0044 10.6812 9.59813C10.3775 9.1925 9.975 8.83563 9.52563 8.54125C10.0594 8.26795 10.6504 8.12529 11.25 8.125Z"
      />
    </svg>
  );
};

Users.propTypes = {
  className: PropTypes.string,
};

const Settings = ({ className = "text-black" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.87063 14.536L7.86375 14.5373L7.81938 14.5592L7.80688 14.5617L7.79813 14.5592L7.75375 14.5373C7.74708 14.5352 7.74208 14.5362 7.73875 14.5404L7.73625 14.5467L7.72563 14.8142L7.72875 14.8267L7.735 14.8348L7.8 14.881L7.80938 14.8835L7.81688 14.881L7.88188 14.8348L7.88938 14.8248L7.89188 14.8142L7.88125 14.5473C7.87958 14.5406 7.87604 14.5369 7.87063 14.536ZM8.03625 14.4654L8.02813 14.4667L7.9125 14.5248L7.90625 14.531L7.90438 14.5379L7.91563 14.8067L7.91875 14.8142L7.92375 14.8185L8.04938 14.8767C8.05729 14.8787 8.06333 14.8771 8.0675 14.8717L8.07 14.8629L8.04875 14.4792C8.04667 14.4717 8.0425 14.4671 8.03625 14.4654ZM7.58938 14.4667C7.58662 14.465 7.58333 14.4644 7.58019 14.4651C7.57704 14.4658 7.57429 14.4677 7.5725 14.4704L7.56875 14.4792L7.5475 14.8629C7.54792 14.8704 7.55146 14.8754 7.55813 14.8779L7.5675 14.8767L7.69313 14.8185L7.69938 14.8135L7.70188 14.8067L7.7125 14.5379L7.71063 14.5304L7.70438 14.5242L7.58938 14.4667Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3125 7.5C11.0469 7.50001 11.7522 7.78731 12.2776 8.30049C12.803 8.81366 13.1069 9.512 13.1242 10.2462C13.1415 10.9805 12.8709 11.6923 12.3702 12.2297C11.8696 12.7671 11.1786 13.0873 10.445 13.1219L10.3125 13.125H4.6875C3.95306 13.125 3.24777 12.8377 2.72236 12.3245C2.19696 11.8113 1.89313 11.113 1.87583 10.3788C1.85852 9.64454 2.12911 8.93266 2.62976 8.3953C3.1304 7.85794 3.82138 7.53774 4.555 7.50313L4.6875 7.5H10.3125ZM4.375 9.0625C4.04348 9.0625 3.72554 9.1942 3.49112 9.42862C3.2567 9.66304 3.125 9.98098 3.125 10.3125C3.125 10.644 3.2567 10.962 3.49112 11.1964C3.72554 11.4308 4.04348 11.5625 4.375 11.5625C4.70652 11.5625 5.02446 11.4308 5.25888 11.1964C5.4933 10.962 5.625 10.644 5.625 10.3125C5.625 9.98098 5.4933 9.66304 5.25888 9.42862C5.02446 9.1942 4.70652 9.0625 4.375 9.0625ZM10.3125 1.25C11.0469 1.25001 11.7522 1.53731 12.2776 2.05049C12.803 2.56366 13.1069 3.262 13.1242 3.99623C13.1415 4.73046 12.8709 5.44234 12.3702 5.9797C11.8696 6.51706 11.1786 6.83726 10.445 6.87187L10.3125 6.875H4.6875C3.95306 6.87499 3.24777 6.58769 2.72236 6.07451C2.19696 5.56134 1.89313 4.863 1.87583 4.12877C1.85852 3.39454 2.12911 2.68266 2.62976 2.1453C3.1304 1.60794 3.82138 1.28774 4.555 1.25313L4.6875 1.25H10.3125ZM10.625 2.8125C10.2935 2.8125 9.97554 2.9442 9.74112 3.17862C9.5067 3.41304 9.375 3.73098 9.375 4.0625C9.375 4.39402 9.5067 4.71196 9.74112 4.94638C9.97554 5.1808 10.2935 5.3125 10.625 5.3125C10.9565 5.3125 11.2745 5.1808 11.5089 4.94638C11.7433 4.71196 11.875 4.39402 11.875 4.0625C11.875 3.73098 11.7433 3.41304 11.5089 3.17862C11.2745 2.9442 10.9565 2.8125 10.625 2.8125Z"
      />
    </svg>
  );
};

Settings.propTypes = {
  className: PropTypes.string,
};

const Search = ({ className = "text-black" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        fill="currentColor"
        fillOpacity="0.65"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.74999 7.5C3.74999 6.50544 4.14508 5.55161 4.84834 4.84835C5.5516 4.14509 6.50543 3.75 7.49999 3.75C8.49455 3.75 9.44838 4.14509 10.1516 4.84835C10.8549 5.55161 11.25 6.50544 11.25 7.5C11.25 8.49456 10.8549 9.44839 10.1516 10.1517C9.44838 10.8549 8.49455 11.25 7.49999 11.25C6.50543 11.25 5.5516 10.8549 4.84834 10.1517C4.14508 9.44839 3.74999 8.49456 3.74999 7.5ZM7.49999 2.25C6.66844 2.25 5.84878 2.44753 5.10851 2.82632C4.36824 3.20512 3.72853 3.75434 3.24207 4.42875C2.75561 5.10317 2.43632 5.8835 2.31047 6.70548C2.18462 7.52745 2.25583 8.36757 2.51823 9.15664C2.78063 9.94571 3.22671 10.6612 3.81974 11.2441C4.41277 11.827 5.13579 12.2607 5.92925 12.5095C6.72271 12.7583 7.56393 12.8151 8.38362 12.6751C9.20331 12.5351 9.97803 12.2025 10.644 11.7045L14.469 15.5303C14.6096 15.671 14.8004 15.7501 14.9994 15.7502C15.1983 15.7502 15.3891 15.6713 15.5299 15.5306C15.6706 15.39 15.7497 15.1992 15.7498 15.0003C15.7498 14.8013 15.6709 14.6105 15.5302 14.4697L11.7052 10.6447C12.289 9.86439 12.644 8.93694 12.7306 7.96625C12.8171 6.99556 12.6318 6.01994 12.1953 5.14861C11.7588 4.27728 11.0884 3.54463 10.2592 3.0327C9.42991 2.52077 8.47453 2.24976 7.49999 2.25Z"
      />
    </svg>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

const ChevronUp = ({ className = "text-black" }) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_218_1192)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.41083 6.91098C9.5671 6.75476 9.77903 6.66699 10 6.66699C10.221 6.66699 10.4329 6.75476 10.5892 6.91098L15.3033 11.6251C15.4551 11.7823 15.5391 11.9928 15.5372 12.2113C15.5353 12.4298 15.4477 12.6388 15.2932 12.7933C15.1387 12.9478 14.9297 13.0355 14.7112 13.0374C14.4927 13.0393 14.2822 12.9553 14.125 12.8035L10 8.67848L5.875 12.8035C5.71783 12.9553 5.50733 13.0393 5.28883 13.0374C5.07033 13.0355 4.86132 12.9478 4.70682 12.7933C4.55231 12.6388 4.46467 12.4298 4.46277 12.2113C4.46087 11.9928 4.54487 11.7823 4.69666 11.6251L9.41083 6.91098Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_218_1192">
          <rect width="1em" height="1em" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

ChevronUp.propTypes = {
  className: PropTypes.string,
};

export { EventIcon, Users, Settings, Search, ChevronUp };