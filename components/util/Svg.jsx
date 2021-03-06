import React from 'react'

const svgs = {
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 474.29 474.29"><circle cx="237.11" cy="236.97" r="236.97" fill="#3a5a98"/><path fill="#345387" d="M404.74 69.75c92.54 92.55 92.55 242.59 0 335.14-92.55 92.54-242.6 92.54-335.14 0L404.74 69.75z"/><path fill="#2e4d72" d="M472.54 263.66 301.13 92.24l-89 89 5.3 5.3-50.67 50.66 41.48 41.48-5.46 5.45 44.9 44.9-51.76 51.77 88.43 88.42c99.71-20.18 176.69-102.97 188.2-205.56z"/><path fill="#fff" d="M195.68 148.94v39.74h-29.11v48.6h29.11v144.4h59.81v-144.4h40.13s3.76-23.31 5.58-48.78h-45.48v-33.24c0-4.96 6.52-11.64 12.96-11.64h32.59V93.03h-44.3c-62.77 0-61.29 48.64-61.29 55.9z"/><svg>'
}

function Svg (props) {
    switch(props.name) {
        case "calendar":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mx-1 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        case "facebook":
            return (
                <div className={`transition duration-300 hover:opacity-75 ${props?.classes ? props.classes : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={props.width} height={props.height}>
                        <path fill="#1877f2" d="M50 2.5c-58.9 1.73-64.9 84.36-7.46 95h14.92c57.45-10.65 51.42-93.28-7.46-95z"></path>
                        <path fill="#f1f1f1" d="M57.46 64.1h11.13l2.11-13.8H57.46v-8.96c0-3.78 1.85-7.47 7.78-7.47h6.02V22.1c-12.9-2.32-28.38-1.61-28.72 17.66V50.3H30.42v13.8h12.12v33.4h14.92V64.1z"></path>
                    </svg>
                </div>
            )
        case "instagram":
            return (
                <div className={`transition duration-300 hover:opacity-75 ${props?.classes ? props.classes : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 3364.7 3364.7" > <defs> <radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"> <stop offset="0.09" stopColor="#fa8f21"></stop> <stop offset="0.78" stopColor="#d82d7e"></stop> </radialGradient> <radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse" > <stop offset="0.64" stopColor="#8c3aaa" stopOpacity="0"></stop> <stop offset="1" stopColor="#8c3aaa"></stop> </radialGradient> </defs> <path fill="url(#0)" d="M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1 119.8 376.3 164.3 308 236 236c71.8-71.8 140.1-116.4 236-153.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9" ></path> <path fill="url(#1)" d="M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1 119.8 376.3 164.3 308 236 236c71.8-71.8 140.1-116.4 236-153.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9" ></path> <path fill="#fff" d="M1269.25 1689.52c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86-287.36-641.86-641.86-641.86S1044 1335 1044 1689.52m1159.13-667.31a150 150 0 10150.06-149.94h-.06a150.07 150.07 0 00-150 149.94M1180.85 2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27S2059.13 666 2191 672c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M1170.5 447.09c-133.07 6.06-224 27.16-303.41 58.06-82.19 31.91-151.86 74.72-221.43 144.18S533.39 788.47 501.48 870.76c-30.9 79.46-52 170.34-58.06 303.41-6.16 133.28-7.57 175.89-7.57 515.35s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43s139.14 112.18 221.43 144.18c79.56 30.9 170.34 52 303.41 58.06 133.35 6.06 175.89 7.57 515.35 7.57s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43s-139.24-112.27-221.33-144.18c-79.56-30.9-170.44-52.1-303.41-58.06-133.3-6.09-175.89-7.57-515.3-7.57s-382.1 1.41-515.45 7.57" ></path> </svg>
                </div>
            )

        case "telegram":
            return (
                <div className={`transition duration-300 hover:opacity-75 ${props?.classes ? props.classes : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width={props.width} height={props.height}>
                        <linearGradient id="a" x1="-683.3" x2="-693.3" y1="534.85" y2="511.51" gradientTransform="matrix(6 0 0 -6 4255 3247)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#37aee2"></stop><stop offset="1" stopColor="#1e96c8"></stop></linearGradient>
                        <path fill="url(#a)" d="M240 120c0 66.3-53.7 120-120 120S0 186.3 0 120 53.7 0 120 0s120 53.7 120 120z"></path>
                        <path fill="#c8daea" d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 132.2 152.8 88l8.3 2.2-6.9 18.8L98 175z"></path>
                        <path fill="#a9c9dd" d="M98 175c3 0 4.3-1.4 6-3 2.6-2.5 36-35 36-35l-20.5-5-19 12-2.5 30v1z"></path>
                        <linearGradient id="b" x1="128.99" x2="153.99" y1="118.25" y2="78.25" gradientTransform="matrix(1 0 0 -1 0 242)" gradientUnits="userSpaceOnUse"> <stop offset="0" stopColor="#eff7fc"></stop> <stop offset="1" stopColor="#fff"></stop></linearGradient>
                        <path fill="url(#b)" d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1L179 82.2c2-8.1-3.1-11.7-8.4-9.3L55 117.5c-7.9 3.2-7.8 7.6-1.4 9.5l29.7 9.3L152 93c3.2-2 6.2-.9 3.8 1.3L100 144.4z"></path>
                    </svg>
                </div>
            )
        case "twitter":
            return (
                <div className={`transition duration-300 hover:opacity-75 ${props?.classes ? props.classes : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.2 112.2" width={props.width} height={props.height}>
                        <circle cx="56.1" cy="56.1" r="56.1" fill="#55acee"></circle>
                        <path fill="#f1f2f2" d="M90.46 40.32a26.75 26.75 0 01-7.7 2.1 13.45 13.45 0 005.9-7.41 26.84 26.84 0 01-8.52 3.25A13.41 13.41 0 0057.3 50.5a38.06 38.06 0 01-27.64-14 13.4 13.4 0 004.15 17.9c-2.2-.08-4.26-.68-6.07-1.69v.17c0 6.5 4.62 11.92 10.75 13.15a13.36 13.36 0 01-6.05.23c1.7 5.33 6.66 9.2 12.52 9.32a26.9 26.9 0 01-19.85 5.55 37.93 37.93 0 0020.56 6.02C70.32 87.14 83.8 66.71 83.8 49c0-.58-.02-1.16-.04-1.73a27.2 27.2 0 006.7-6.94z"></path>
                    </svg>
                </div>
            )

        case "shareURL":
            return (
                <div className={`transition duration-300 hover:opacity-75 ${props?.classes ? props.classes : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.16 496.16" width={props.width} height={props.height}>
                        <path fill="#25b7d3" d="M0 248.09C0 111.06 111.07 0 248.08 0c137 0 248.08 111.06 248.08 248.08 0 137-111.07 248.07-248.08 248.07C111.07 496.15 0 385.1 0 248.1z"></path><g fill="#fff"><circle cx="146.49" cy="248.97" r="53.81"></circle><circle cx="310.75" cy="153.32" r="53.81"></circle><circle cx="310.75" cy="342.84" r="53.81"></circle><path d="M153.79 259.64l-14.56-25 164.26-95.65 14.55 25z"></path><path d="M303.47 355.3l-164.26-95.64 14.56-25 164.26 95.65z"></path></g>
                    </svg>
                </div>
            )

        default: return <svg />
    }
}

export default Svg