import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { useState, useEffect } from 'react';

export default function BioWorksBg() {
  const [isComplete, setIsComplete] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [deviceHeight, setDeviceHeight] = useState(0);
  const handleWindowResize = () => {
    setDeviceWidth(window.innerWidth);
    setDeviceHeight(window.innerHeight);
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const targetWidth = Math.min(736, deviceWidth - 25);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.16, 1], [0, 0, 1]); // don't want to see first half of the page
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 0.99)), [yRange]);
  return (
    <motion.svg
      id="Artboard"
      xmlns="http://www.w3.org/2000/svg"
      width={targetWidth}
      // height="593.33"
      viewBox={`0 0 736 80`}
      onClick={() => console.log(scrollYProgress, yRange)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <defs>
        <style>
          {
            '.cls-13,.cls-6{fill:none}.cls-11,.cls-6{stroke-miterlimit:10}.cls-2{fill:#d9666d}.cls-5{fill:#58720a}.cls-6{stroke:#080017;stroke-width:.6369px}.cls-13{stroke-linecap:round;stroke-linejoin:round}.cls-11,.cls-13{stroke:#000}.cls-11{fill:#9b9ba9;stroke-width:.1592px}.cls-13{stroke-width:.3185px}.cls-14{opacity:.51}'
          }
        </style>
      </defs>
      <g id="Frog">
        <g id="tongue">
          <motion.path
            id="tongueLine"
            style={{
              strokeMiterlimit: 10,
              stroke: '#d9666d',
              strokeWidth: 2,
              fill: 'none',
              pathLength: yRange,
            }}
            d="m88.027 29.899 600.457-9.889"
          />
          <motion.ellipse
            id="tongueEnd"
            className="cls-2"
            cx={694.247}
            cy={18.325}
            rx={6.523}
            ry={3.639}
            transform="rotate(-12.268 694.245 18.326)"
            animate={{ opacity: isComplete ? 1 : 0 }}
          />
          <path
            id="tongueStart"
            className="cls-2"
            d="M90.812 29.335s-4.343-1.317-6.125-.459-5.533 2.486-9.201.847 7.75 8.921 12.831 6.413a3.738 3.738 0 0 1 2.495-5.28c4.256-1.36 0-1.521 0-1.521Z"
          />
        </g>
        <path
          d="M96.702 38.789a1.032 1.032 0 0 0-.488-.894 1.009 1.009 0 0 0-.56-.139 1.696 1.696 0 0 0-.992-.38c-.024-.001-.047-.004-.07-.006a4.685 4.685 0 0 0-.777-.068 29.675 29.675 0 0 1-6.724-1.502 1.562 1.562 0 0 0-.705-.077 34.092 34.092 0 0 1-10.9-6c-1.482-1.22-3.581.706-2.483 2.022-.009.026-.014.055-.021.082a1.513 1.513 0 0 0-1.015 1.43 9.142 9.142 0 0 0 .488 3.034 1.66 1.66 0 0 0 .25.464l.01.046a1.353 1.353 0 0 0 .304.606c.116.5.226 1.002.332 1.504a1.402 1.402 0 0 0 .002.34c.018.142.04.282.058.423l.005.033a74.215 74.215 0 0 0 1.022 5.931 1.434 1.434 0 0 0 .106.313l.031.172a16.533 16.533 0 0 0-1.257 3.204 25.581 25.581 0 0 0-1.44 3.81q-3.589 2.6-6.986 5.455a1.725 1.725 0 0 0-2.855-.042 1.57 1.57 0 0 0-1.068.413 1.606 1.606 0 0 0-2.613.009 1.268 1.268 0 0 0-.158.063 1.737 1.737 0 0 0-1.262.068 1.575 1.575 0 0 0-1.703.953 1.579 1.579 0 0 0-.737.652l-.041.07-.104.007a1.53 1.53 0 0 0-2.723-.091 10.651 10.651 0 0 0-1.178 3.852 10.079 10.079 0 0 1-.916 1.311 1.623 1.623 0 0 0 .322 2.502 7.387 7.387 0 0 0 3.977 1.05c.695.02 1.4-.018 2.092.054a8.39 8.39 0 0 1 2.15.736c1.488.548 2.861-.387 4.167-1.019 1.265-.611 2.83-1.088 3.739-2.2a5.876 5.876 0 0 0 .56-.319 1.659 1.659 0 0 0 .702-1.917c1.085-.738 2.271-1.321 3.406-1.988a16.3 16.3 0 0 0 4.03-3.307 95.027 95.027 0 0 0 7.089-9.408 1.402 1.402 0 0 0 .157-.31 16.683 16.683 0 0 0 6.735-3.318 1.277 1.277 0 0 0 .51-.963c.3-.205.636-.402.786-.523.432-.345.855-.7 1.267-1.069a31.599 31.599 0 0 0 2.705-2.761 1.78 1.78 0 0 0 .302-.499l.432-.036a1.612 1.612 0 0 0 1.399-.972.863.863 0 0 0 .641-.801Z"
          style={{
            fill: '#ffffb6',
          }}
        />
        <path
          d="M90.73 67.815a9.475 9.475 0 0 0 1.827-.235 12.437 12.437 0 0 1 3.857-.16.706.706 0 0 0 .496-.106.524.524 0 0 0 .544.293l.67-.05a.64.64 0 0 0 .17-1.251 13.581 13.581 0 0 0-5.131-.661c-.874-.016-1.75.014-2.622-.015-.87-.03-1.696-.355-2.571-.355a.648.648 0 0 0-.247.048 2.044 2.044 0 0 0-.513-.173c-3.075-2.412-7.633-2.944-11.409-3.204a6.497 6.497 0 0 0-1.809.103 2.407 2.407 0 0 0-2.028-.319 1.297 1.297 0 0 0 .585-1.176 18.27 18.27 0 0 0-.913-5.845 25.772 25.772 0 0 0-.333-.929 1.238 1.238 0 0 0 .786-.66l.705-1.374a1.606 1.606 0 0 0 .113-.128 7.976 7.976 0 0 0 1.305-2.698 1.314 1.314 0 0 0-.004-.742 1.723 1.723 0 0 0 .079-.578 14.474 14.474 0 0 0 .116-7.294 2.017 2.017 0 0 0 .155-1.11 44.709 44.709 0 0 0-1.075-4.778 7.096 7.096 0 0 0-.367-1.165 9.243 9.243 0 0 0 .361-1.041l.89-2.938c.232-.147.493-.335.742-.52a16.604 16.604 0 0 0 9.55-2.837 1.48 1.48 0 0 0 .727-.39l.72-.677a1.667 1.667 0 0 0 .23-.268q.161-.138.332-.27a17.188 17.188 0 0 0 4.066-2.583 27.597 27.597 0 0 0 6.963-7.575 3.74 3.74 0 0 0 .264-3.91C97.151 9.01 95.354 8.517 94 8.23c-3.747-.79-7.572-.032-11.25.76a1.192 1.192 0 0 0-.363.15 1.5 1.5 0 0 0-.316-.19 3.151 3.151 0 0 0-1.936-.31c-.578.093-1.364.64-1.953.602a4.43 4.43 0 0 0-.467-.054 1.192 1.192 0 0 0-.692.158 1.196 1.196 0 0 0-.413.049c-.348.113-1.53-.916-1.91-1.105a7.068 7.068 0 0 0-2.337-.748 4.737 4.737 0 0 0-3.436.879 3.248 3.248 0 0 0-.513.428 1.463 1.463 0 0 0-.351.558 5.756 5.756 0 0 0-1.2 1.728 1.742 1.742 0 0 0-.13.928 5.419 5.419 0 0 0-.448 2.63 5.96 5.96 0 0 0-.194.156 3.01 3.01 0 0 0-1.198.372 6.15 6.15 0 0 0-1.674 1.626 1.527 1.527 0 0 0-.338.284l-.543.612a1.521 1.521 0 0 0-.413.94 10.089 10.089 0 0 0-1.37 2.434 1.127 1.127 0 0 0-.176.048q-1.592.587-3.158 1.234a1.698 1.698 0 0 0-.817.701c-2.207.601-4.257 1.623-6.508 2.152-2.825.663-5.75.593-8.462 1.735a1.581 1.581 0 0 0-.344.2.832.832 0 0 0-.814-.018 10.6 10.6 0 0 1-.458.209 10.19 10.19 0 0 1-1.444.47.802.802 0 0 0-.545.525l-.018.006a38.174 38.174 0 0 0-6.24 3.625.9.9 0 0 0-.235.244 21.783 21.783 0 0 0-3.162 2.71 3.65 3.65 0 0 0-.945 1.059.76.76 0 0 0-.07.155 10.762 10.762 0 0 0-4.698 5.582.556.556 0 0 0-.027.11 40.542 40.542 0 0 0-6.067 10.302.622.622 0 0 0 .002.486 3.719 3.719 0 0 0-1.432.661c-2.555 1.23-4.792 3.166-5.327 6.113a9.345 9.345 0 0 0 .599 5.028 17.675 17.675 0 0 0 1.212 2.61c.137.235.284.462.436.686a4.01 4.01 0 0 0 1.883 2.792c1.726 1.068 3.427 2.382 5.48 2.532a2.073 2.073 0 0 0 2.161.824 4.81 4.81 0 0 1 .692-.116c.15.024.348.043.512.055a1.138 1.138 0 0 0 1.143.49q.63-.068 1.252-.09a1.43 1.43 0 0 0 .993.395q1.765.058 3.527.03a1.313 1.313 0 0 0 .649.17h1.988a2.708 2.708 0 0 0 1.173.077 37.469 37.469 0 0 0 6.052-.242c1.352-.143 2.166.482 3.4.818a12.97 12.97 0 0 0 2.112.127 1.65 1.65 0 0 0 .773.306l.888.118a1.119 1.119 0 0 0 .827-.195c.49-.012.98-.017 1.472-.012a1.288 1.288 0 0 0 .43-.068 31.995 31.995 0 0 0 4.948 1.575.482.482 0 0 0 .465-.798 7.867 7.867 0 0 0-3.55-2.479.471.471 0 0 0-.226-.025 2.662 2.662 0 0 0-.826-.4 1.175 1.175 0 0 0-.241-.289 5.597 5.597 0 0 0 1.13-.233 8.981 8.981 0 0 0 3.008.127 7.657 7.657 0 0 1 1.728.095 6.81 6.81 0 0 0 1.818.169.477.477 0 0 0 .248-.098c.287.064.572.143.852.223l.38.11c.122.04.245.08.365.124.605.221 1.165.542 1.779.742a.48.48 0 0 0 .368-.874 9.464 9.464 0 0 0-2.233-.906c-.527-.172-1.069-.309-1.599-.461l-3.596-1.034a.851.851 0 0 0-.556-.14.527.527 0 0 0-.166.047q-.314-.07-.624-.153a.38.38 0 0 0-.333-.353 1.535 1.535 0 0 0-.433-.022c-.017-.027-.035-.053-.054-.079a3.839 3.839 0 0 0 .46-.264c.477.035.957.12 1.43.182a6.864 6.864 0 0 0 1.464.076 1.946 1.946 0 0 0 .896-.227 6.586 6.586 0 0 1 1.034.307c.45.178.8-.49.464-.798a6.582 6.582 0 0 0-3.506-1.236 12.995 12.995 0 0 0-2.115-.3 4.943 4.943 0 0 0-1.38.218 1.022 1.022 0 0 0-.693.14 1.326 1.326 0 0 0-.474-.075 1.972 1.972 0 0 0 .056-.495 1.992 1.992 0 0 0-.039-.351c.134-.081.267-.167.401-.265a9.147 9.147 0 0 0 3.005-4.552 3.23 3.23 0 0 0 .18-1.725 10.489 10.489 0 0 0 3.147-.642c.92-.1 1.833-.292 2.665-.464 1.604-.33 3.659-.6 5.035-1.483.353 1.091.599 2.229.897 3.309a13.638 13.638 0 0 0 2.809 5.674 1.227 1.227 0 0 0 .383.29 1.739 1.739 0 0 0 .592.559 8.525 8.525 0 0 0 2.815 1.058 1.664 1.664 0 0 0 1.157.891c1.98.464 3.957.96 5.947 1.378.853.18 1.723.27 2.573.45.696.148 1.352.445 2.044.595a.561.561 0 0 0 .416.343 12.644 12.644 0 0 1 2.663.954.626.626 0 0 0 .669-.057c.216.103.43.205.64.303q1.91.88 3.754 1.892a.64.64 0 0 0 .772-1c-1.38-1.511-3.252-2.386-4.84-3.635a5.934 5.934 0 0 0 .698-.004 11.346 11.346 0 0 1 2.556.475c.87.214 1.747.41 2.61.653.87.245 1.683.674 2.564.877a.666.666 0 0 0 .136.011l.052.02a.52.52 0 0 0 .625-.172l.076.039c.313.226.627.45.947.658.545.356 1.183-.339.871-.872a2.722 2.722 0 0 0-1.28-.956 28.683 28.683 0 0 0-2.896-1.951 9.11 9.11 0 0 0-2.16-.88c-.77-.192-1.569-.177-2.332-.402-.205-.06-.418-.138-.634-.208a2.826 2.826 0 0 0 .021-.52 3.227 3.227 0 0 1-.003-.098.507.507 0 0 0 .24-.164c.4-.493.823-.39 1.402-.37Zm-47.452 1.538a3.98 3.98 0 0 0-.533-.018 7.472 7.472 0 0 1 1.402-.416c.383-.057.756-.094 1.121-.125v.001c-.668.174-1.314.403-1.99.558Zm9.449-7.806.045.167q-.25 1.11-.045-.167Zm14.525-1.666q-.051-.197-.104-.393a23.683 23.683 0 0 0-.789-2.453q.185-.154.352-.324a4.982 4.982 0 0 1 .541 3.17Zm3.085-46.308a1.478 1.478 0 0 0-.536-1.063 1.167 1.167 0 0 0 .162-.91 3.553 3.553 0 0 1 1.25-.875 1.284 1.284 0 0 0 .529-.412 7.21 7.21 0 0 1 3.02 1.28 1.63 1.63 0 0 0 .327.494 1.81 1.81 0 0 0 .373.303l.46.375a28.555 28.555 0 0 0-2.414 1.824 4.57 4.57 0 0 0-3.092.05Z"
          style={{
            fill: '#9bce06',
          }}
        />
        <path
          className="cls-5"
          d="M78.047 66.025a3.451 3.451 0 0 0-1.09-.877c-.653-.311-1.227.07-1.8.37a12.485 12.485 0 0 0-1.478.812 9.74 9.74 0 0 0-1.217 1.12l-1.25 1.258a.808.808 0 0 0 .744 1.34.713.713 0 0 0 .275.287 6.7 6.7 0 0 0 2.298.622 5.882 5.882 0 0 1 1.103.258 8.337 8.337 0 0 0 1.196.416.81.81 0 0 0 .98-.556c.243-1.095.557-2.2.72-3.31a2.102 2.102 0 0 0-.481-1.74ZM69.835 56.723c-.488-.783-1.625-.598-2.408-.532a14.884 14.884 0 0 0-2.763.495.813.813 0 0 0-.556.98 10.52 10.52 0 0 1 .28 2.595.771.771 0 0 0 .22.54c-.005.032-.012.064-.015.097l-.058.634a.798.798 0 0 0 .585.768.84.84 0 0 0 .9-.366q.086-.119.174-.237l.073-.095.008-.01q.194-.249.397-.49.365-.435.757-.846a8.513 8.513 0 0 1 .778-.734l.016-.012.07-.053.195-.145c.165-.123.33-.248.49-.378.592-.486 1.352-1.416.857-2.21ZM47.945 66.077l-.123-1.986a8.27 8.27 0 0 0-.249-1.807 14.856 14.856 0 0 0-.663-1.797 3.725 3.725 0 0 0-2.336-2.305c-.794-.156-1.277.57-1.558 1.204a3.858 3.858 0 0 0-.319 2.065l.003.016c-.554 2.368-.187 4.843-.476 7.25a.8.8 0 0 0 .796.796.73.73 0 0 0 .66-.385.785.785 0 0 0 .624.104l1.966-.496c.557-.14 1.27-.213 1.594-.755a3.514 3.514 0 0 0 .08-1.904ZM34.656 69.295a11.96 11.96 0 0 1-.306-3.183 19.026 19.026 0 0 0-.063-1.603 8.82 8.82 0 0 1-.084-1.626 10.717 10.717 0 0 0-.252-3.173 29.12 29.12 0 0 0-.369-1.542 16.629 16.629 0 0 0-.468-1.674c-.438-1.145-1.485.29-1.724.805a26.11 26.11 0 0 0-1.001 2.9c-.34 1.036-.689 2.067-.928 3.132-.24 1.073-.443 2.155-.661 3.232a4.402 4.402 0 0 0-.225 1.618c.11.54.534.67 1.015.775l3.857.832a.5.5 0 0 0 .373-.07.482.482 0 0 0 .836-.423Z"
        />
        <path
          className="cls-6"
          d="M64.17 58.557a44.73 44.73 0 0 1-11.022 2.681M77.581 26.353a12.12 12.12 0 0 0-2.522 2.302.218.218 0 0 0-.035.042 7.748 7.748 0 0 0-1.92 4.85c0 3.003 5 13.213-1.975 20.529M16.09 52.571s10.315-26.352 32.58-27.03c0 0 9.277-3.054 12.025-4.828"
        />
        <path
          className="cls-6"
          d="M59.664 24.861a14.234 14.234 0 0 1 6.38-10.588M16.09 64.09s16.425 8.416 26.063 5.43c0 0 13.574-3.257 16.153 1.222 0 0-7.873-.136-9.637 0"
        />
        <path
          className="cls-6"
          d="M49.264 68.451S65.106 55.48 32.018 50.4c0 0-34.78-1.576-18.342 20.341 0 0 5.432 5.55 27.584 4.069a13.57 13.57 0 0 0 7.831 1.058s3.95 1.482 5.856 1.482c0 0 .357-2.672-8.184-4.938"
        />
        <path
          className="cls-6"
          d="M49.158 73.132s9.027-.086 12.135 1.678c0 0 4.095-1.202-9.592-4.128"
        />
        <path
          d="M86.058 38.83s5.362 2.751 8.255 2.116c0 0 6.772-3.315-1.694-4.02 0 0-14.036-1.977-17.583-8.246l3.79-.468a13.29 13.29 0 0 0 5.839-2.15c25.144-16.834 8.387-19.087 4.319-18.169-4.208.95-12.488 1.222-12.488 1.222-10.86-6.108-10.452 6.787-10.452 6.787"
          style={{
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '.6369px',
            stroke: '#080017',
            fill: 'none',
          }}
        />
        <path
          className="cls-6"
          d="M94.313 40.947s-5.758 5.345-7.032 6.513-6.478 3.61-8.177 2.018"
        />
        <path
          className="cls-6"
          d="M82.133 49.84s-8.976 12.593-9.825 11.956M58.306 70.742s8.1-3.307 8.386-4.167M69.456 46.252s3.783 4.243 1.375 7.163M64.012 56.109c-3.61-1.548-2.145-6.648-2.145-6.648"
        />
        <path
          className="cls-6"
          d="M64.012 52.04s-1.089 14.154 5.444 16.847c0 0 2.922 2.388 12.95 3.859 0 0 9.226 2.96 9.34 4.05 0 0 1.949-1.319-4.24-5.216 0 0 9.652 2.006 10.7 2.98 0 0 1.964-2.328-9.21-5.977 0 0-2.005-.861 9.685-1.167 0 0 2.406-2.368-11.003-2.024 0 0-5.444-4.509-17.134-3.572"
        />
        <path
          className="cls-6"
          d="M72.308 61.796c.445-9.154-4.743-12.621-4.743-12.621"
        />
        <path
          d="M95.1 10.816s-.644 1.414 1.134 1.917c0 0 1.612-1.569-1.133-1.918Z"
          style={{
            fill: '#485908',
          }}
        />
        <ellipse
          className="cls-5"
          cx={42.777}
          cy={42.382}
          rx={5.233}
          ry={2.414}
          transform="rotate(-31.042 42.777 42.382)"
        />
        <ellipse
          className="cls-5"
          cx={53.628}
          cy={33.367}
          rx={3.668}
          ry={1.692}
          transform="rotate(-31.042 53.628 33.366)"
        />
        <ellipse
          className="cls-5"
          cx={28.841}
          cy={44.194}
          rx={3.672}
          ry={1.694}
          transform="rotate(-31.042 28.84 44.194)"
        />
        <ellipse
          className="cls-5"
          cx={36.212}
          cy={37.88}
          rx={3.254}
          ry={1.501}
          transform="rotate(-31.042 36.212 37.88)"
        />
        <ellipse
          className="cls-5"
          cx={43.711}
          cy={33.367}
          rx={2.422}
          ry={1.118}
          transform="rotate(-31.042 43.71 33.366)"
        />
        <path
          className="cls-6"
          d="M28.434 68.797s4.885-29.603 6.31 1.218M42.153 69.52s-.54-11.289 2.14-11.571 4.504 6.804 3.487 10.633M70.544 69.54s4.464-5.079 6.184-4.526 2.322 1.787.854 6.85M64.978 62.782s5.487-4.572 4.972-5.875-4.68-.86-5.922 0"
        />
        <path
          d="M74.478 22.92s6.034-1.831 3.104-7-4.361-7.214-7.038-6.352.658 15.656 3.934 13.351Z"
          style={{
            stroke: '#000',
            fill: '#fff',
            strokeWidth: '.6369px',
            strokeMiterlimit: 10,
          }}
        />
        <ellipse
          cx={75.144}
          cy={16.977}
          rx={1.535}
          ry={2.385}
          transform="rotate(-17.591 75.149 16.977)"
          style={{
            fill: '#080017',
          }}
        />
      </g>
      <g id="fly">
        <path d="M695.504 19.778a8.356 8.356 0 0 0 4.478 2.769 11.272 11.272 0 0 1 4.654 2.12s3.3 2.004 4.36-.53-.884-4.948-.884-4.948-5.832-4.831-10.428-3.948c0 0 .354-2.18-1.001-1.944 0 0-.166-3.755-3.972-1.16a2.176 2.176 0 0 0-.634.667c-.656 1.08-2.336 4.132-1.473 5.762 0 0 .128.505 1.248.564 0 0 .176 3.711 3.652.648Z" />
        <path
          className="cls-11"
          d="M698.384 15.153S705.991 3.87 718.01 8.23a7.212 7.212 0 0 1-.766 6.422c-2.12 3.3-18.86.501-18.86.501Z"
        />
        <path
          className="cls-11"
          d="M698.096 16.243s11.1-10.193 20.916-3.535c0 0 1.414 2.533-3.064 6.186a41.906 41.906 0 0 1-13.61 0s-3.888-1.709-4.241-2.651Z"
        />
        <ellipse
          cx={694.555}
          cy={16.765}
          rx={3.473}
          ry={1.709}
          transform="rotate(-67.786 694.555 16.765)"
          style={{
            fill: '#3a3b3a',
          }}
        />
        <path d="m690.649 18.4-1.652 1.013-.376-1.27 1.938-.049.09.306z" />
        <path
          className="cls-13"
          d="M696.103 20.416a3.229 3.229 0 0 0-.47 2.72"
        />
        <path
          className="cls-13"
          d="M696.965 21.151s-2.526.439-3.229 1.633M704.636 24.668s.621 1.629-.362 2.402M707.156 25.418s.986 2.073 0 2.565M708.996 24.137s1.249 2.124.687 2.563"
        />
      </g>
      <g id="Text">
        <g className="cls-14">
          <path d="M16.984 14.805c-.263-1.544-.264-2.402.414-2.617a6.28 6.28 0 0 1 .703-.065 2.965 2.965 0 0 0 1.044-.128 14.86 14.86 0 0 1 1.504-.386c1.915-.449 2.536-.42 3.624.094a3.308 3.308 0 0 1 1.599 1.618 12.632 12.632 0 0 1-.156 3.643c-.754 2.612-.955 2.835-2.613 5.732a13.524 13.524 0 0 1-.768 1.285l-1.018 1.068a5.55 5.55 0 0 1-1.07.973 1.388 1.388 0 0 1-.374-.04 1.158 1.158 0 0 0-.306-.04c-1.074.25-1.518.346-1.648-.064a2.928 2.928 0 0 1-.073-.587l-.05-.73c-.005-.157-.047-.573-.104-2.25l-.04-1.411-.392-3.945Zm2.117-.738.567 2.712.3 2.302.268 3.554c1.994-3.05 3.744-6.657 3.136-9.427a8.282 8.282 0 0 0-2.607.33ZM31.084 13.363c.986-.312 1.647.134 2.018 1.304a2.622 2.622 0 0 1-.528 2.97 4.378 4.378 0 0 1-1.194 1.08c-.784.452-.793.637-.585 1.294.195.615.38.625.708.521a2.493 2.493 0 0 0 .825-.534l.995-.926c.295-.138.456.512.54.846a3.129 3.129 0 0 1-2.217 2.918c-1.191.378-2.018-.377-2.558-2.082-.45-1.417-.777-6.512 1.996-7.39Zm-.709 4.18.093.153c.447-.233 1.447-1.5 1.258-2.095-.065-.204-.373-.606-.681-.508-.616.195-.715 2.24-.67 2.45ZM39.788 4.886a2.647 2.647 0 0 1 2.062.16.74.74 0 0 1-.056.537l-.029.123c.005.156-.017.23-.21.405.027.512-.01.681-.77.922l-2.513.842.423 1.765a6.626 6.626 0 0 0 .245 1.414l.698-.22 3.113-1.306c.22-.091.382-.007.473.28a2.13 2.13 0 0 1 .085.696 2.196 2.196 0 0 0 .092.717l-.061.45c-.091.141-.473.646-2.028 1.162-1.964.645-1.98.808-2.009.863l.035.893a10.123 10.123 0 0 0 .11 1.773 10.385 10.385 0 0 1 .094 2.863l-.035.034a1.521 1.521 0 0 0-.405 1.145c-.025.348-.064.653-.372.751a2.114 2.114 0 0 1-1.142-.18l-.313-.06c-.163-.014-.368-.018-.582-.695a5.777 5.777 0 0 1-.008-1.309 34.786 34.786 0 0 0-.539-6.475l-.135-.996-.31-3.473c-.126-.253-.428-.566-.473-.71-.085-.266.485-1.035.958-1.184a1.474 1.474 0 0 1 .538-.013ZM45.466 9.82c-.03-.307 1.45-1.702 2.106-1.91a.651.651 0 0 1 .699.207c.333.121.366.156.398.259l.214.316a7.223 7.223 0 0 1 .034 1.39l-.125 2.888.06 1.473.08.11c.26-.106.288-.16.69-.603l.125-.176c.431-.566.446-.592.671-.664a.979.979 0 0 1 .32.44l.04 1.05a4.734 4.734 0 0 1-2.194 2.707c-.492.157-.94.028-1.208-.815a12.62 12.62 0 0 1-.274-2.58l-.036-2.677-.11-.916-.893.464a.445.445 0 0 1-.608-.35Zm1.283-6.644a1.28 1.28 0 0 1 1.687.685l.358.633c.072.226-.583.728-.767.786a.872.872 0 0 1-.831-.053l-.635-.364-.057-.32a2.229 2.229 0 0 1-.095-.942l.014-.028a1.052 1.052 0 0 0 .326-.397Z" />
        </g>
        <g className="cls-14">
          <path d="M685.762 53.204c.97-1.638 4.74-4.287 6.033-4.287.237 0 .495.129.948.538l.388.323c.474.367.517.474.517.711 0 .496-.065 1.358-.474 1.358l-.345-.15-.323.086a1.252 1.252 0 0 0-.518-.238c-1.163-.086-2.068.754-3.382 2.392a14.643 14.643 0 0 0-2.779 5.731c0 .754.517 1.164 1.443 1.164a6.948 6.948 0 0 0 3.253-1.508 6.571 6.571 0 0 1 1.488-.863.637.637 0 0 1 .323.109c-.022.236.064.84-.13 1.141-.818 1.53-2.672 3.77-4.05 3.792-1.27.022-5.193-.689-5.193-3.296a10.333 10.333 0 0 1 1.228-4.352ZM698.498 54.411c1.034 0 1.53.624 1.53 1.853a2.62 2.62 0 0 1-1.4 2.672 4.393 4.393 0 0 1-1.466.668c-.882.193-.948.366-.948 1.055 0 .647.173.711.518.711a2.5 2.5 0 0 0 .948-.259l1.228-.582c.323-.043.28.625.258.97a3.13 3.13 0 0 1-2.995 2.112c-1.249 0-1.81-.97-1.81-2.758 0-1.487 1.229-6.442 4.137-6.442Zm-1.94 3.77.044.173c.496-.086 1.832-.991 1.832-1.616 0-.215-.173-.69-.496-.69-.647 0-1.358 1.918-1.38 2.133ZM709.358 48.96a2.649 2.649 0 0 1 1.917.775c0 .172-.043.26-.214.495l-.065.109c-.044.15-.087.215-.323.323-.13.495-.216.646-1.013.646l-2.65.044-.129 1.81a6.625 6.625 0 0 0-.194 1.422h.732l3.362-.302c.237-.022.366.107.366.409a2.144 2.144 0 0 1-.129.69 2.19 2.19 0 0 0-.13.71l-.193.41a3.646 3.646 0 0 1-2.285.496c-2.068.021-2.132.173-2.175.216l-.238.861a10.177 10.177 0 0 0-.43 1.724 10.403 10.403 0 0 1-.776 2.758l-.044.021c-.323.194-.473.323-.732.97-.129.323-.258.604-.581.604a2.12 2.12 0 0 1-1.034-.518l-.28-.15c-.152-.064-.345-.13-.345-.84a5.758 5.758 0 0 1 .388-1.25 34.773 34.773 0 0 0 1.443-6.335l.173-.991.754-3.403c-.043-.28-.237-.668-.237-.82 0-.28.775-.84 1.271-.84a1.467 1.467 0 0 1 .517.15ZM713.281 55.38a5.078 5.078 0 0 1 2.586-1.185c.237 0 .41.086.604.41.279.215.3.258.3.366l.109.366a7.196 7.196 0 0 1-.388 1.336l-.991 2.715-.388 1.422.043.129c.28-.022.324-.065.84-.367l.173-.129c.581-.409.603-.43.84-.43a.979.979 0 0 1 .173.516l-.28 1.013a4.736 4.736 0 0 1-2.91 1.918c-.516 0-.904-.259-.904-1.143a12.685 12.685 0 0 1 .517-2.542l.776-2.563.172-.905-.991.173c-.302 0-.474-.173-.474-.518Zm3.233-5.946a1.282 1.282 0 0 1 1.4 1.163l.15.71c0 .238-.776.518-.97.518a.87.87 0 0 1-.776-.301l-.495-.538.043-.324a2.238 2.238 0 0 1 .193-.926l.022-.022a1.058 1.058 0 0 0 .433-.28Z" />
        </g>
        <motion.g id="endingText" animate={{ opacity: isComplete ? 1 : 0 }}>
          <path d="M724.298 23.75h.84c1.093 1.09 1.513 1.51 1.513 2.015s-.785.924-1.905.98c-1.54-.056-1.847-.84-1.847-1.4 0-.336.084-.393.53-.98.169-.476.365-.504.674-.504Zm4.452-15.934a1.347 1.347 0 0 1 1.288 1.176l-.168.813v.952l-.252 1.092-1.092 3.723-.42.729-.28 1.176a10.454 10.454 0 0 1-1.708 3.248l-.364-.168-.307.391-.42-.111a1.72 1.72 0 0 1-.252-.84 11.977 11.977 0 0 1 .195-1.429l.112-.784a16.514 16.514 0 0 1 .924-4.172l.364-1.204a16.454 16.454 0 0 0 .672-2.435c.196-1.12 1.008-2.157 1.708-2.157ZM454.188 46.278c.477-.912.925-1 1.325-1.01a.717.717 0 0 1 .71.432l.257.268a1.215 1.215 0 0 1 .29.619 7.924 7.924 0 0 1-.608 1.59l-2.545 6.066-.643 1.242a6.097 6.097 0 0 1-.545 1.162 59.491 59.491 0 0 0-2.61 5.518c-.137.43-.257.682-.356.709-.177-.096-.258-.318-.436-.414l-.907-.3a1.072 1.072 0 0 0-.92-.776l-.01-.4.095-1.153a23.845 23.845 0 0 0-.316-2.591l-.121-.8-.21-4.243-3.261 6.359a33.592 33.592 0 0 1-1.815 3.346l-.32.134c-.27.23-.295.256-.52.262l-.866-.627-.05-.023c-.453-.088-.855-.203-.85-.979l.162-7.33a32.335 32.335 0 0 1 .428-4.736l.131-.729c.262-1.505.551-1.939 1.226-1.957a1.397 1.397 0 0 1 1.538 1.487l-.104 2.803a44.717 44.717 0 0 1-.506 5.59l.101.072c.241-.358 1.07-2.154 1.426-2.938l1.213-2.406.48-.762 1.187-2.482c.521-1.086.665-1.365 1.215-1.381.699-.017.97.775 1.056 1.248l.219.695a10.174 10.174 0 0 1 .407 2.239l.256 2.195.066 1.598a2.551 2.551 0 0 0 .207 1.27l.144-.254a8.589 8.589 0 0 0 .403-.86l1.615-3.316ZM460.638 45.087l.202.07c.679.158 1.113.522 1.13 1.172l-.174 2.004-.472 3.062-.4 1.936.112.422 1.497-1.113a8.003 8.003 0 0 1 1.994-1.176c.775-.02.937.474.96 1.35l-.166 1.33a6.046 6.046 0 0 1-.277 1.906 4.306 4.306 0 0 0-.337 1.436l-.334 1.607.055.197a6.16 6.16 0 0 0 1.546-1.088c.686-.593.71-.619.885-.623a.747.747 0 0 1 .188.522c.047 1.847-2.17 4.103-3.494 4.138-.275.006-1.346-.84-1.354-1.14l.603-5.715-.114-.549a5.27 5.27 0 0 0-1.626.941l-.123.079c-.54.365-.586.54-.615 1.341a3.141 3.141 0 0 1-.086.578l-.707 2.618c-.205.781-.273 1.082-1.022 1.101-.5.014-.905-.178-.918-.652a26.612 26.612 0 0 1 .43-3.734l.633-3.592.243-2.233.791-5.246a.903.903 0 0 1 .482-.713c.15-.004.274-.006.322-.107a.256.256 0 0 1 .146-.129ZM471.947 51.173a2.472 2.472 0 0 1 2.403 1.064 3.96 3.96 0 0 1 .807 2.229c.07 2.748-2.31 7.433-5.033 7.504-1.075.027-1.661-2.383-1.696-3.73-.054-2.126 1.722-6.971 3.52-7.067Zm-.35 1.934a11.057 11.057 0 0 0-.955 4.675 4.63 4.63 0 0 0 .294 1.743c1.42-1.186 2.264-4.358 2.25-4.883a1.633 1.633 0 0 0-1.59-1.535ZM485.041 44.937a1.709 1.709 0 0 1 1.162-.504c.526-.014.781.205.797.83l-.872 4.996a56.282 56.282 0 0 0-1.192 6.156l-.195 1.18-.135.604a.218.218 0 0 0 .256.218 6.598 6.598 0 0 0 1.027-.9 3.158 3.158 0 0 1 1.082-.703 1.052 1.052 0 0 1 .11.373 1.244 1.244 0 0 1-.065.375c.008.35-.014.475-.497 1.139l-1.11 1.527a2.7 2.7 0 0 1-1.868 1.274c-.925.025-1.37-.764-1.405-2.139a8.746 8.746 0 0 1 .27-2.133l1.833-9.447a10.805 10.805 0 0 1 .802-2.846ZM493.241 50.653c1.2-.03 1.792.678 1.828 2.102a3.04 3.04 0 0 1-1.545 3.14 5.111 5.111 0 0 1-1.677.819c-1.02.25-1.09.453-1.069 1.252.019.75.22.82.62.808a2.88 2.88 0 0 0 1.092-.328l1.407-.71c.373-.06.343.716.329 1.117-.378 1.81-2.385 2.511-3.41 2.537-1.45.037-2.127-1.07-2.18-3.145-.045-1.724 1.231-7.506 4.605-7.592Zm-2.137 4.43.055.198c.572-.116 2.094-1.203 2.075-1.928-.005-.25-.22-.795-.595-.785-.75.019-1.516 2.265-1.536 2.515ZM501.535 46.49q.6-.015.622.81c.006.224-.082.726-.186 1.552-.064.426-.126.905-.146 1.13l1.793-.32c.224-.007.63.208.66.433l-.096.152a.893.893 0 0 0-.092.303c-.11.601-.874.998-2.74 1.344l-.763 4.396-.187 1.479.013.5.25.043c.25-.03.688-.467 1.15-.928.416-.412.806-.797 1.006-.803.2-.004.384.367.393.692a2.301 2.301 0 0 1-.161.552l-.022.102c-.49 1.389-2.52 3.115-3.696 3.144-.925.024-1.443-.712-1.476-2.011a11.78 11.78 0 0 1 .29-2.358l.76-4.52-.825.07c-.25.006-.69-.607-.708-1.306-.013-.551.16-.604 1.903-.873a13.242 13.242 0 0 0 .387-1.485c.333-1.634.582-1.716 1.25-1.933a1.684 1.684 0 0 1 .621-.166ZM514.48 46.157q.601-.014.622.81c.006.226-.082.728-.186 1.554-.064.427-.126.904-.146 1.129l1.792-.32c.225-.006.63.209.66.433l-.095.153a.886.886 0 0 0-.092.302c-.11.604-.875.998-2.74 1.344l-.764 4.396-.186 1.479.012.5.251.043c.25-.03.689-.467 1.152-.928.415-.412.805-.797 1.006-.8.199-.007.382.365.391.689a2.302 2.302 0 0 1-.16.553l-.023.101c-.489 1.389-2.52 3.115-3.695 3.145-.924.023-1.444-.713-1.477-2.012a11.733 11.733 0 0 1 .29-2.358l.76-4.519-.823.07c-.25.008-.692-.606-.71-1.307-.013-.549.16-.603 1.904-.873a13.108 13.108 0 0 0 .387-1.484c.333-1.635.58-1.717 1.25-1.934a1.722 1.722 0 0 1 .62-.166ZM521.666 43.523l.202.07c.679.158 1.113.521 1.13 1.171l-.174 2.004-.471 3.063-.4 1.935.11.422 1.497-1.113a8.013 8.013 0 0 1 1.995-1.175c.775-.02.937.475.96 1.35l-.166 1.33a6.042 6.042 0 0 1-.277 1.906 4.28 4.28 0 0 0-.337 1.436l-.334 1.607.054.2a6.25 6.25 0 0 0 1.548-1.09c.684-.592.709-.62.884-.624a.74.74 0 0 1 .187.522c.048 1.848-2.169 4.105-3.492 4.139-.275.007-1.347-.84-1.355-1.141l.603-5.715-.113-.549a5.274 5.274 0 0 0-1.628.941l-.123.08c-.54.364-.585.54-.614 1.34a3.116 3.116 0 0 1-.085.579l-.71 2.619c-.204.779-.271 1.082-1.021 1.1-.5.013-.904-.176-.916-.65a26.705 26.705 0 0 1 .428-3.737l.634-3.591.243-2.233.79-5.244a.901.901 0 0 1 .483-.713c.15-.004.274-.008.32-.11a.265.265 0 0 1 .148-.13ZM534.151 49.605c1.2-.032 1.793.677 1.83 2.101a3.041 3.041 0 0 1-1.546 3.14 5.065 5.065 0 0 1-1.678.82c-1.02.251-1.089.452-1.068 1.251.018.75.22.82.62.81a2.925 2.925 0 0 0 1.092-.33l1.407-.708c.373-.06.342.714.328 1.115-.378 1.81-2.385 2.512-3.41 2.537-1.449.037-2.127-1.068-2.18-3.145-.045-1.722 1.231-7.505 4.605-7.591Zm-2.137 4.43.055.197c.573-.113 2.094-1.203 2.076-1.928-.006-.25-.221-.795-.596-.785-.749.02-1.516 2.265-1.535 2.515ZM545.742 47.18a5.741 5.741 0 0 1 5.113-4.43 1.551 1.551 0 0 1 1.11.423c.938.525.949.924.955 1.15.01.447-.086.55-.308.707l-.27.182a.437.437 0 0 1-.322.134c-.125.002-.652-.084-1.38-.191-.477-.088-1.281-.217-1.43-.213-.25.006-.933.674-1.398 3.986l2.623-.068a1.191 1.191 0 0 1 .506.213l-.064 1.377a8.976 8.976 0 0 1-2.437.537l-.823.096-.065 1.303c-.017.375-.267 2.306-.309 2.607l-.651 4.867a10.095 10.095 0 0 1-2.272 5.01l-.739.418a3.21 3.21 0 0 1-1.807.72 1.856 1.856 0 0 1-1.695-1.755c-.006-.225.038-.451.312-.533.124-.027.124-.053.122-.104-.003-.125.069-.2.444-.21a1.003 1.003 0 0 1 .757.255.6.6 0 0 0 .33.166 4.15 4.15 0 0 0 1.862-2.447 22.273 22.273 0 0 0 .675-4.893l.453-4.738-.012-.5c-1.003-.1-1.832-.252-1.853-1.076-.008-.275.1-.953.573-1.016l1.501-.011ZM554.788 48.849a1.874 1.874 0 0 1 1.133.322c.305.168.344.717.36 1.34l-.125.979.13.148c.196-.08.245-.133.388-.438.686-1.466 1.193-2.203 2.093-2.226.775-.02 1.272.842 1.338 3.465l-.045.127a4.633 4.633 0 0 1-1.513.564c-.274.006-.327-.142-.408-.34-.186-.42-.237-.469-.462-.463a12.156 12.156 0 0 0-1.088 1.451l-.049.053a11.428 11.428 0 0 0-1.86 3.547l-.184.555c-.278.857-.505 1.789-1.329 1.808-.45.012-.686-.406-.7-.98a4.681 4.681 0 0 1 .192-1.281l1.445-5.086.264-1.332-.799-.006c-.074.002-.174.03-.713.443a.516.516 0 0 1-.372.135.444.444 0 0 1-.511-.412c-.016-.625 1.841-2.348 2.815-2.373ZM564.564 48.8a2.471 2.471 0 0 1 2.402 1.065 3.952 3.952 0 0 1 .807 2.228c.072 2.748-2.31 7.434-5.032 7.504-1.075.027-1.662-2.383-1.696-3.73-.055-2.126 1.722-6.971 3.52-7.067Zm-.351 1.934a11.053 11.053 0 0 0-.954 4.675 4.651 4.651 0 0 0 .294 1.743c1.42-1.186 2.264-4.358 2.25-4.883a1.632 1.632 0 0 0-1.59-1.535ZM576.336 46.648c.325-.008.694.732.701 1.007.008.274-.121 2.104-.227 2.83l-.334 2.584-.986 5.426c-.241 1.307-1.778 6.746-5.651 6.846a.933.933 0 0 1-.781-.307c-.052-.049-.103-.047-.202-.068-.529-.137-.936-1.377-.94-1.526l.167-.33c.017-.275.637-.517.787-.521l.578.137.87-.149c.724-.117 2.623-2.04 2.846-4.098l-1.095.204-.351-.065-.173.078a.91.91 0 0 1-.347.16 1.967 1.967 0 0 1-1.483-1.287 16.293 16.293 0 0 1-.152-2.023 13.276 13.276 0 0 1 2.599-5.89l.653-.894c.334-.584.505-.761.98-.775l.57-.164a.258.258 0 0 1 .254.094.116.116 0 0 0 .127.07.75.75 0 0 0 .658-.615c.016-.377.632-.717.932-.724Zm-1.702 3.818c.02-.201-.108-.322-.483-.313a8.629 8.629 0 0 0-1.92 6l.251.094a3.599 3.599 0 0 0 .684-.617l.733-.644.041-.352a21.94 21.94 0 0 1 .468-3.213ZM580.777 49.108a9.514 9.514 0 0 1 2.925-1.974 1.02 1.02 0 0 1 .944.775 2.14 2.14 0 0 1-.823 1.047l-.219.23a5.003 5.003 0 0 1-1.289 1.408 4.487 4.487 0 0 0-1.192 1.307l.378.115a4.964 4.964 0 0 1 1.33.116c.378.14.962.523.97.85l-.111.501.24.57a6.104 6.104 0 0 1-.9 1.973 16.912 16.912 0 0 1-2.433 2.613 5.584 5.584 0 0 1-2.461 1.563.441.441 0 0 1-.51-.461l.035-.527-.096-.823c-.062-.447.279-.832 1.573-2.015a22.299 22.299 0 0 0 2.195-2.131.315.315 0 0 0-.329-.166c-1.927-.076-2.133-.297-2.152-1.07-.042-1.625.706-2.668 1.925-3.9ZM593.83 48.05a2.47 2.47 0 0 1 2.4 1.065 3.953 3.953 0 0 1 .808 2.228c.071 2.748-2.31 7.434-5.032 7.504-1.075.027-1.662-2.383-1.696-3.73-.055-2.126 1.721-6.971 3.52-7.067Zm-.353 1.934a11.054 11.054 0 0 0-.954 4.675 4.653 4.653 0 0 0 .294 1.743c1.42-1.186 2.265-4.358 2.251-4.883a1.632 1.632 0 0 0-1.59-1.535ZM602.291 47.483c.55-.015.647.858.655 1.159a14.28 14.28 0 0 1-.644 3.166 24.5 24.5 0 0 0-.991 3.25l.125.023c2.366-2.312 3.316-3.31 3.87-6.05.289-1.432.487-1.464.86-1.548l.83.204.324-.082c.15-.004.357.29.368.69a7.451 7.451 0 0 1-.422 2.085c-.045.202-.206.756-.385 1.586-.336 1.534-.36 1.559-.474 1.961a8.569 8.569 0 0 0-.475 1.963l.275.043a2.98 2.98 0 0 0 .739-.494 3.134 3.134 0 0 1 .835-.57.828.828 0 0 1 .666.633.795.795 0 0 1-.14.402L607.56 57a2.764 2.764 0 0 1-2.337 1.533c-.823.022-1.135-.42-1.157-1.27a10.758 10.758 0 0 1 .426-2.836l-.078-.174a24.489 24.489 0 0 1-2.514 3.342 2.549 2.549 0 0 1-1.874 1.045 1.073 1.073 0 0 1-1.106-1.17 14.725 14.725 0 0 1 .576-3.84l.934-3.625a8.918 8.918 0 0 1-1.219.281.515.515 0 0 1-.589-.56l.332-.658c.405-.785 1.773-1.119 2.345-1.26ZM614.994 43.581q.6-.015.622.81c.006.225-.082.727-.186 1.553-.064.428-.126.904-.146 1.13l1.792-.321c.225-.006.63.209.66.433l-.095.153a.893.893 0 0 0-.092.302c-.11.604-.874.998-2.74 1.344l-.764 4.397-.185 1.478.012.5.25.045c.25-.031.689-.469 1.152-.93.415-.41.805-.797 1.005-.8.2-.007.384.364.393.69a2.298 2.298 0 0 1-.161.554l-.023.1c-.489 1.388-2.52 3.115-3.695 3.144-.925.026-1.444-.71-1.477-2.011a11.74 11.74 0 0 1 .29-2.358l.76-4.52-.824.07c-.25.008-.691-.605-.709-1.306-.013-.55.16-.604 1.904-.873a13.242 13.242 0 0 0 .387-1.485c.333-1.635.58-1.717 1.25-1.933a1.722 1.722 0 0 1 .62-.166ZM618.798 55.31l.75-.02c.999.951 1.384 1.316 1.394 1.766s-.678.841-1.676.918c-1.375-.016-1.668-.707-1.681-1.207-.008-.3.065-.352.452-.887.139-.43.314-.46.589-.465Zm3.608-14.318a1.206 1.206 0 0 1 1.177 1.021l-.132.727.022.85-.2.98-.889 3.347-.357.66-.224 1.055a9.262 9.262 0 0 1-1.451 2.938l-.328-.141-.265.355-.378-.09a1.538 1.538 0 0 1-.244-.744 10.947 10.947 0 0 1 .143-1.277l.08-.703a14.813 14.813 0 0 1 .73-3.745l.298-1.082a14.676 14.676 0 0 0 .544-2.19c.148-1.003.85-1.946 1.474-1.962Z" />
          <path
            d="M639.1 52.833v-.03c0-4.64 28.52-16.06 44.35-22.03-18.14 3.44-51.36 2.19-51.36 2.19-1.67-.82-192.35 3.58-192.35 3.58a12.03 12.03 0 0 0-11.69 12.3l.4 15.79a12.04 12.04 0 0 0 12.31 11.69l186.81-4.79a12.03 12.03 0 0 0 11.69-12.3l-.16-6.4v-.03"
            style={{
              strokeWidth: '.7784px',
              stroke: '#000',
              strokeMiterlimit: 10,
              fill: 'none',
            }}
          />
        </motion.g>
      </g>
    </motion.svg>
  );
}
