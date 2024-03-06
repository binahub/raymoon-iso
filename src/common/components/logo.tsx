import { useTheme } from 'next-themes';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconOnly?: boolean;
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  const { theme } = useTheme();

  return (
    <svg width='92' height='69' viewBox='0 0 92 69' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_1331_3218)'>
        <path
          d='M15.9483 37.7232C15.5912 36.6488 14.8771 35.455 14.044 34.1419L10.4735 28.6505L6.90298 32.2318L9.52135 36.2907C10.5925 37.8426 11.3066 39.0363 11.6636 39.6332C12.0207 40.3495 12.2587 40.827 12.2587 41.3045C12.2587 41.782 12.0207 42.2595 11.6636 42.4983C11.1876 42.737 10.5925 42.8564 9.64036 42.8564H0V48.3477H8.68823C11.1876 48.3477 13.0918 47.6315 14.5201 46.3183C15.9483 45.0052 16.6624 43.0951 16.6624 40.827C16.5433 39.7526 16.3053 38.7976 15.9483 37.7232Z'
          fill={theme === 'dark' ? '#ffffff' : '#102851'}
        />
        <path
          d='M19.7578 23.0398V48.3478H24.7565V22.3235L19.7578 23.0398Z'
          fill={theme === 'dark' ? '#ffffff' : '#102851'}
        />
        <path
          d='M49.8663 42.8564C48.6761 42.8564 47.6049 42.4983 46.8908 41.782C46.0577 41.0657 38.0836 28.5311 38.0836 28.5311L34.5131 32.1125L39.6308 39.6332C40.1069 40.3495 40.1069 41.1851 39.6308 41.782C39.5118 42.0208 39.2738 42.1401 39.0357 42.2595C38.3216 42.4983 37.2505 42.737 35.8223 42.737H28.3242V48.2284H35.4652C37.3695 48.2284 38.7977 47.9896 39.7498 47.3927C40.702 46.7959 41.4161 45.9602 41.6541 44.8858C41.7731 44.4083 41.8921 43.8114 42.0112 43.2145C44.3915 46.6765 45.8197 48.3478 50.6994 48.3478H92.1172V42.8564H49.8663Z'
          fill={theme === 'dark' ? '#ffffff' : '#102851'}
        />
        <path
          d='M75.5753 12.5346C76.5275 12.0571 77.4796 11.5796 78.4317 11.2215C84.8586 7.75951 88.4291 3.58131 88.5481 3.46194L84.6206 0C84.5016 0.119377 72.1238 14.2059 51.2959 10.1471L50.3438 15.2803C53.3192 15.8772 56.1756 16.1159 58.7939 16.1159C61.2933 16.1159 63.6736 15.8772 65.935 15.519C64.8638 15.9965 64.0307 16.474 63.0786 16.9516C56.6516 20.4135 53.0811 24.5917 52.9621 24.7111L56.8897 28.0536C56.8897 28.0536 60.1031 24.3529 65.8159 21.3685C73.314 17.3097 81.5262 16.2353 90.2144 17.9066L91.1665 12.7734C85.3347 11.5796 80.098 11.699 75.5753 12.5346Z'
          fill='#FBBA00'
        />
        <g opacity='0.7'>
          <path
            d='M2.1428 65.0606C1.66673 64.9412 1.30968 64.7024 0.95263 64.4637C0.714596 64.2249 0.476562 63.7474 0.476562 63.2699C0.476562 63.1505 0.476562 62.9118 0.595579 62.5536C0.595579 62.1955 0.714596 61.718 0.833613 61.1211L1.66673 61.2405C1.54771 62.1955 1.4287 62.7924 1.4287 63.0311C1.4287 63.2699 1.54771 63.5087 1.66673 63.628C1.78575 63.7474 2.02378 63.8668 2.49985 63.8668C2.8569 63.8668 3.33297 63.9862 4.04707 63.9862C5.35625 63.9862 6.4274 63.8668 7.1415 63.628L7.02249 61.8374L7.97462 61.718L8.09364 63.628C8.21266 63.7474 8.33167 63.7474 8.56971 63.8668C8.80774 63.8668 9.04577 63.8668 9.40282 63.8668C9.40282 63.8668 9.40282 63.8668 9.40282 63.9862C9.40282 64.1055 9.40282 64.1055 9.40282 64.2249V64.8218C9.40282 64.9412 9.40282 64.9412 9.40282 65.0606C9.40282 65.1799 9.40282 65.1799 9.40282 65.1799C8.80774 65.1799 8.45069 65.0606 8.09364 64.9412C7.73659 64.8218 7.61757 64.7024 7.49855 64.4637C7.37954 64.7024 7.1415 64.8218 6.78445 64.9412C6.4274 65.0606 6.07035 65.0606 5.59429 65.1799C5.11822 65.1799 4.64215 65.2993 4.2851 65.2993C3.33297 65.2993 2.61887 65.1799 2.1428 65.0606ZM2.8569 60.5242L3.45198 59.6886L4.2851 60.4048L3.571 61.2405L2.8569 60.5242ZM4.9992 59.6886L5.83232 60.4048L5.23724 61.2405L4.40412 60.5242L4.9992 59.6886Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M9.16406 65.1799C9.16406 65.0606 9.16406 65.0606 9.16406 64.9412V64.3443C9.16406 64.2249 9.16406 64.2249 9.16406 64.1055C9.16406 63.9862 9.16406 63.9862 9.16406 63.9862H9.52111C9.99718 63.9862 10.3542 63.9862 10.8303 63.8668C11.3064 63.7474 11.7824 63.628 12.2585 63.3893C12.3775 63.3893 12.4965 63.2699 12.8536 63.1505C13.2106 62.9118 13.5677 62.9118 13.6867 62.7924C13.3297 62.673 12.9726 62.5536 12.3775 62.3149C12.1395 62.1955 11.9014 62.0761 11.6634 62.0761C11.4254 61.9567 11.3064 61.9568 11.1873 61.9568C10.9493 61.9568 10.8303 61.9567 10.8303 62.0761C10.8303 62.1955 10.7113 62.3149 10.7113 62.5536L9.99718 62.4343C10.1162 61.9567 10.2352 61.4792 10.4732 61.2405C10.7113 61.0017 10.9493 60.763 11.3064 60.763C11.5444 60.763 11.6634 60.763 11.9014 60.8824C12.1395 61.0017 12.4965 61.1211 12.8536 61.2405C13.4487 61.4792 13.9247 61.718 14.4008 61.8374C14.8769 61.9567 15.3529 62.0761 15.71 62.0761L15.472 63.2699C15.1149 63.2699 14.6388 63.3893 14.4008 63.5087C14.1628 63.628 13.6867 63.8668 13.2106 64.1055L12.8536 64.3443C12.3775 64.583 11.7824 64.8218 11.3064 65.0606C10.7113 65.1799 10.1162 65.1799 9.52111 65.1799H9.16406ZM11.3064 59.3305L12.0205 58.4948L12.9726 59.2111L12.2585 60.0467L11.3064 59.3305Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M18.0907 57.8979V65.2993L17.2576 65.4187L17.0195 58.1367L18.0907 57.8979Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M20.1125 63.3893C20.1125 63.628 20.1125 63.7474 20.2316 63.7474C20.2316 63.8668 20.3506 63.8668 20.4696 63.8668C20.5886 63.8668 20.8266 63.8668 21.1837 63.8668C21.5407 63.8668 21.7788 63.8668 22.1358 63.7474C22.4929 63.7474 22.7309 63.628 22.9689 63.5086C22.8499 62.5536 22.2548 61.5986 21.1837 60.6436L21.7788 59.808C22.4929 60.5242 22.9689 61.1211 23.326 61.8374C23.683 62.5536 23.8021 63.2699 23.8021 63.8668C23.8021 64.3443 23.564 64.7024 23.088 64.9412C22.6119 65.1799 22.0168 65.2993 21.1837 65.2993C20.7076 65.2993 20.3506 65.2993 20.1125 65.1799C19.8745 65.0605 19.6365 64.9412 19.5175 64.7024C19.3984 64.4637 19.3984 64.2249 19.3984 63.7474C19.3984 63.5086 19.3984 63.3893 19.3984 63.1505H20.1125V63.3893Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M27.3729 65.0606C27.1348 64.9412 27.0158 64.8218 26.8968 64.7024C26.8968 65.2993 26.6588 65.8962 26.1827 66.4931C25.7066 67.09 24.9925 67.5675 24.0404 68.045L23.4453 67.09C24.8735 66.3737 25.7066 65.7768 26.0637 64.9412L25.7066 62.0761L26.6588 61.8374L26.7778 62.673L26.8968 63.2699C26.8968 63.5087 27.0158 63.7474 27.2538 63.8668C27.4919 63.9862 27.7299 63.9862 28.087 63.9862H28.444C28.444 63.9862 28.444 63.9862 28.444 64.1055C28.444 64.2249 28.444 64.2249 28.444 64.3443V64.9412C28.444 65.0606 28.444 65.0606 28.444 65.1799C28.444 65.2993 28.444 65.2993 28.444 65.2993H28.087C27.7299 65.1799 27.4919 65.1799 27.3729 65.0606Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M27.9688 67.09L28.5638 66.3737L29.397 66.9706L28.8019 67.6868L27.9688 67.09ZM28.3258 65.1799C28.3258 65.0605 28.3258 65.0606 28.3258 64.9412V64.3443C28.3258 64.2249 28.3258 64.2249 28.3258 64.1055C28.3258 63.9862 28.3258 63.9862 28.3258 63.9862C29.1589 63.9862 29.873 63.8668 30.2301 63.628L29.992 61.3599L30.9442 61.2405C31.0632 62.4343 31.0632 63.2699 31.0632 63.7474C31.0632 63.9862 31.0632 64.1055 30.9442 64.3443C30.8252 64.583 30.7061 64.7024 30.4681 64.8218C29.992 65.0605 29.2779 65.1799 28.3258 65.1799ZM29.397 67.5675L30.2301 68.1644L29.635 68.8806L28.8019 68.2837L29.397 67.5675ZM29.992 66.2543L30.8252 66.8512L30.2301 67.5675L29.397 66.9706L29.992 66.2543Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M35.7045 67.09C35.3474 66.7318 35.1094 66.2543 35.1094 65.5381C35.1094 65.4187 35.1094 65.1799 35.2284 64.8218C35.2284 64.4637 35.3474 64.1055 35.3474 63.628L35.5854 62.3149L36.4186 62.4343C36.1805 63.9862 36.0615 64.9412 36.0615 65.2993C36.0615 65.6574 36.1805 65.8962 36.5376 66.0156C36.8946 66.135 37.2517 66.2543 37.7277 66.2543C38.3228 66.2543 38.9179 66.2543 39.275 66.135C39.632 66.0156 40.1081 65.8962 40.3461 65.6574C40.3461 65.5381 40.4651 65.4187 40.4651 65.2993C40.4651 64.9412 40.3461 64.8218 39.9891 64.8218H39.751C39.275 64.8218 39.0369 64.7024 38.7989 64.7024C38.5609 64.7024 38.4418 64.583 38.3228 64.4637C38.2038 64.3443 38.0848 64.1055 38.0848 63.8668C38.0848 63.2699 38.2038 62.7924 38.4418 62.1955C38.6799 61.5986 38.9179 61.2405 39.275 60.8824C39.632 60.5242 39.9891 60.4048 40.3461 60.4048C40.8222 60.4048 41.2982 60.763 41.7743 61.4792L41.1792 62.0761C40.8222 61.718 40.5842 61.5986 40.3461 61.5986C39.9891 61.5986 39.751 61.8374 39.513 62.1955C39.275 62.5536 39.1559 63.0311 39.0369 63.5087C39.632 63.5087 39.9891 63.628 40.3461 63.7474C40.5842 63.8668 40.8222 63.9862 41.0602 64.2249C41.1792 64.4637 41.2983 64.8218 41.2983 65.2993C41.2983 66.135 40.9412 66.7318 40.3461 67.09C39.632 67.4481 38.7989 67.6869 37.8468 67.6869C36.7756 67.5675 36.0615 67.4481 35.7045 67.09Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M43.6805 65.0605C43.4425 64.9412 43.2045 64.7024 42.9664 64.3443C42.8474 63.9862 42.7284 63.628 42.7284 63.0311L42.6094 58.0173L43.5615 57.8979V63.0311C43.5615 63.3893 43.6805 63.628 43.7995 63.7474C44.0376 63.8668 44.2756 63.9862 44.6327 63.9862H44.9897C44.9897 63.9862 44.9897 63.9862 44.9897 64.1055C44.9897 64.2249 44.9897 64.2249 44.9897 64.3443V64.9412C44.9897 65.0606 44.9897 65.0605 44.9897 65.1799C44.9897 65.2993 44.9897 65.2993 44.9897 65.2993H44.7517C44.3946 65.1799 44.0376 65.1799 43.6805 65.0605Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M47.1327 65.0605C46.6566 65.1799 45.9425 65.1799 45.1094 65.1799C45.1094 65.1799 45.1094 65.1799 45.1094 65.0605C45.1094 64.9412 45.1094 64.9412 45.1094 64.8218V64.2249C45.1094 64.1055 45.1094 64.1055 45.1094 63.9862C45.1094 63.8668 45.1094 63.8668 45.1094 63.8668H46.0615C46.1805 63.8668 46.2995 63.8668 46.4186 63.8668C46.2995 63.7474 46.1805 63.628 46.0615 63.5086C45.9425 63.3893 45.9425 63.1505 45.9425 63.0311C45.9425 62.7924 46.0615 62.5536 46.1805 62.1955C46.2995 61.8374 46.5376 61.5986 46.7756 61.2405L46.2995 61.0017L46.7756 60.0467L49.632 61.3599C50.5841 61.8374 51.0602 62.4343 51.0602 63.2699C51.0602 63.628 50.9412 64.1055 50.7032 64.4637C50.5841 64.7024 50.4651 64.8218 50.3461 64.9412C50.2271 65.0606 49.9891 65.0605 49.87 65.0605H49.751L48.2038 64.4637C47.9658 64.9412 47.6087 65.0605 47.1327 65.0605ZM47.1327 63.2699C47.2517 63.3893 47.4897 63.5086 47.8468 63.5086L48.4418 62.1955L47.4897 61.8374C47.1327 62.3149 46.8946 62.673 46.8946 62.9118C46.8946 63.0311 46.8946 63.1505 47.1327 63.2699ZM49.751 64.2249C49.87 63.9862 49.9891 63.7474 49.9891 63.5086C49.9891 63.2699 49.87 63.1505 49.751 62.9118C49.632 62.7924 49.394 62.5536 49.0369 62.4343L48.4418 63.7474L49.751 64.2249Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M53.2022 64.9412L52.8452 62.0761L53.7973 61.8374C53.9163 62.673 53.9163 63.2699 53.9163 63.7474C53.9163 64.2249 53.9163 64.583 53.9163 64.8218C53.9163 65.4187 53.6783 66.1349 53.2022 66.6125C52.7262 67.2093 52.0121 67.6869 51.0599 68.1644L50.4648 67.2093C52.1311 66.4931 52.9642 65.7768 53.2022 64.9412Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M56.5321 65.0605C56.2941 64.9412 56.056 64.7024 55.818 64.3443C55.699 63.9862 55.58 63.628 55.58 63.0311L55.4609 58.0173L56.4131 57.8979V63.0311C56.4131 63.3893 56.5321 63.628 56.6511 63.7474C56.8891 63.8668 57.1272 63.9862 57.4842 63.9862H57.8413C57.8413 63.9862 57.8413 63.9862 57.8413 64.1055C57.8413 64.2249 57.8413 64.2249 57.8413 64.3443V64.9412C57.8413 65.0606 57.8413 65.0605 57.8413 65.1799C57.8413 65.2993 57.8413 65.2993 57.8413 65.2993H57.6032C57.2462 65.1799 56.8891 65.1799 56.5321 65.0605Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M57.8438 65.1799C57.8438 65.0605 57.8438 65.0606 57.8438 64.9412V64.3443C57.8438 64.2249 57.8438 64.2249 57.8438 64.1055C57.8438 63.9862 57.8438 63.9862 57.8438 63.9862C58.4388 63.9862 58.9149 63.9862 59.272 63.8668C59.629 63.7474 59.9861 63.7474 60.2241 63.628C60.1051 62.7924 59.867 62.1955 59.629 61.5986C59.272 61.0017 58.6769 60.5242 57.9628 60.0467L58.0818 59.0917C59.1529 58.4948 60.4621 58.1367 61.6523 57.6592L61.7713 58.7336C60.9382 58.9723 60.1051 59.2111 59.272 59.6886C59.9861 60.2855 60.4621 61.0017 60.8192 61.5986C61.0572 62.3149 61.2952 63.0311 61.2952 63.7474C61.2952 64.2249 61.0572 64.583 60.4621 64.8218C59.867 65.1799 59.0339 65.1799 57.8438 65.1799C57.9628 65.1799 57.9628 65.1799 57.8438 65.1799Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M63.5542 64.9412C63.1971 64.7024 63.0781 64.3443 63.0781 63.8668C63.0781 63.5087 63.1971 63.1505 63.3162 62.7924C63.5542 62.4343 63.7922 62.0761 64.1493 61.5986L63.6732 61.2405L64.2683 60.4048C64.9824 60.8824 65.5775 61.3599 66.0535 61.9568C66.4106 62.5536 66.6486 63.1505 66.6486 63.8668C66.6486 64.1055 66.5296 64.3443 66.4106 64.583C66.2916 64.7024 66.2916 64.8218 66.1726 64.8218L66.0535 64.9412C65.9345 65.0606 65.6965 65.0606 65.4585 65.0606C65.2204 65.0606 64.9824 65.0606 64.6253 65.0606C64.2683 65.2993 63.7922 65.1799 63.5542 64.9412ZM64.1493 63.8668C64.2683 63.9862 64.5063 63.9862 64.7444 63.9862C65.2204 63.9862 65.5775 63.9862 65.8155 63.8668C65.8155 63.5087 65.6965 63.2699 65.5775 62.9118C65.4585 62.5536 65.2204 62.3149 64.7444 62.0761C64.5063 62.3149 64.2683 62.5536 64.1493 62.7924C64.0303 63.0311 63.9112 63.2699 63.9112 63.5087C63.9112 63.7474 64.0303 63.8668 64.1493 63.8668Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M68.792 57.8979V65.2993L67.9589 65.4187L67.8398 58.0173L68.792 57.8979Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M71.171 64.9412L70.8139 62.0761L71.7661 61.8374C71.8851 62.673 71.8851 63.2699 71.8851 63.7474C71.8851 64.2249 71.8851 64.583 71.8851 64.8218C71.8851 65.4187 71.647 66.1349 71.171 66.6125C70.6949 67.2093 69.9808 67.6869 69.0287 68.1644L68.4336 67.2093C70.0998 66.4931 70.9329 65.7768 71.171 64.9412Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M79.2642 65.0605C79.0262 64.9412 78.9072 64.7024 78.7882 64.4637H78.6691C78.5501 64.583 78.4311 64.7024 78.1931 64.8218C77.955 64.9412 77.717 64.9412 77.36 64.9412C77.0029 64.9412 76.6459 64.8218 76.4078 64.7024C76.1698 64.4637 76.0508 64.2249 76.0508 63.8668C76.0508 63.1505 76.1698 62.673 76.5269 62.1955C76.8839 61.718 77.479 61.4792 78.1931 61.2405L78.0741 60.5242L79.0262 60.2855L79.2642 62.9118C79.2642 63.1505 79.3832 63.3893 79.3832 63.5086C79.3832 63.628 79.5023 63.7474 79.6213 63.8668C79.7403 63.9862 79.9783 63.9862 80.2164 63.9862H80.5734C80.5734 63.9862 80.5734 63.9862 80.5734 64.1055C80.5734 64.2249 80.5734 64.2249 80.5734 64.3443V64.9412C80.5734 65.0605 80.5734 65.0605 80.5734 65.1799C80.5734 65.2993 80.5734 65.2993 80.5734 65.2993H80.2164C79.8593 65.1799 79.5023 65.1799 79.2642 65.0605ZM77.479 63.7474C77.836 63.7474 78.1931 63.628 78.5501 63.5086L78.3121 62.0761C77.836 62.1955 77.36 62.4343 77.1219 62.673C76.8839 62.9118 76.7649 63.2699 76.7649 63.5086C77.0029 63.7474 77.2409 63.7474 77.479 63.7474Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M80.457 65.1799C80.457 65.0605 80.457 65.0606 80.457 64.9412V64.3443C80.457 64.2249 80.457 64.2249 80.457 64.1055C80.457 63.9862 80.457 63.9862 80.457 63.9862C81.2901 63.9862 82.0042 63.8668 82.3613 63.628L82.1233 61.3599L83.0754 61.2405C83.1944 62.4343 83.1944 63.2699 83.1944 63.7474C83.1944 63.9862 83.1944 64.1055 83.0754 64.3443C82.9564 64.583 82.8374 64.7024 82.5993 64.8218C82.2423 65.0605 81.5282 65.1799 80.457 65.1799ZM81.2902 59.6886L82.1233 59.4498C82.0043 59.0917 81.8852 58.8529 81.8852 58.6142C81.8852 58.3754 82.0043 58.2561 82.1233 58.1367C82.2423 58.0173 82.4803 57.8979 82.8374 57.8979C83.0754 57.8979 83.1944 57.8979 83.3134 58.0173V58.4948C83.0754 58.4948 82.8374 58.3754 82.7184 58.3754C82.5993 58.3754 82.3613 58.3754 82.3613 58.4948C82.3613 58.6142 82.3613 58.7336 82.4803 58.8529C82.5993 58.9723 82.5993 59.0917 82.7184 59.2111L83.9085 58.8529V59.4498L81.4092 60.1661V59.6886H81.2902Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M85.6922 57.8979V65.2993L84.8591 65.4187L84.6211 58.1367L85.6922 57.8979Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M88.0733 64.9412L87.7163 62.0761L88.6684 61.8374C88.7874 62.673 88.7874 63.2699 88.7874 63.7474C88.7874 64.2249 88.7874 64.583 88.7874 64.8218C88.7874 65.4187 88.5494 66.1349 88.0733 66.6125C87.5973 67.2093 86.8832 67.6869 85.931 68.1644L85.3359 67.2093C86.8832 66.4931 87.7163 65.7768 88.0733 64.9412Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
          <path
            d='M91.286 57.8979V65.2993H90.4529L90.2148 58.0173L91.286 57.8979Z'
            fill={theme === 'dark' ? '#ffffff' : '#102851'}
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_1331_3218'>
          <rect width='92' height='69' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
}