import PropTypes from "prop-types";

const ViaFast = ({ className, ...rest }) => {
  return (
    <svg
      width="141"
      height="99"
      viewBox="0 0 141 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...rest}
    >
      <rect x="0.0234375" width="140" height="99" rx="4" fill="white" />
      <path
        d="M90.0902 46.0258C90.0902 47.6204 90.0745 49.2307 90.0902 50.8253C90.0902 51.5288 89.7925 51.9822 89.1502 52.248C86.3302 53.4517 83.5259 54.6555 80.706 55.8593C80.2517 56.0469 79.8443 56.0469 79.39 55.8593C76.5857 54.6399 73.7658 53.4517 70.9458 52.248C70.3191 51.9822 70.0215 51.5444 70.0215 50.8566C70.0372 47.6204 70.0372 44.3999 70.0215 41.1638C70.0215 40.4915 70.3035 40.0538 70.9145 39.8036C73.7501 38.5998 76.5857 37.3804 79.4213 36.161C79.8443 35.9734 80.236 35.9734 80.659 36.161C83.4946 37.3804 86.3302 38.5998 89.1658 39.8036C89.7768 40.0694 90.0588 40.5071 90.0588 41.1638C90.0902 42.8053 90.0902 44.4155 90.0902 46.0258ZM81.317 52.8733C81.4893 52.8108 81.6146 52.7639 81.7243 52.717C83.5573 51.9353 85.3902 51.138 87.2232 50.3719C87.4895 50.2625 87.5992 50.1374 87.5835 49.8404C87.5679 47.6673 87.5835 45.4943 87.5679 43.3212C87.5679 43.2118 87.5522 43.1023 87.5522 42.9929C87.5052 42.9772 87.4895 42.9772 87.4895 42.9772C85.4842 43.8215 83.4946 44.6813 81.4893 45.5412C81.3953 45.5724 81.317 45.7288 81.317 45.8226C81.317 48.152 81.317 50.4814 81.317 52.8733ZM76.9774 44.822C76.946 44.9002 76.946 44.9158 76.946 44.9158C76.946 45.6506 76.946 46.401 76.946 47.1358C76.946 47.9644 76.429 48.5272 75.6771 48.5272C74.9407 48.5272 74.4394 47.9487 74.4394 47.1201C74.4394 46.0883 74.4394 45.0565 74.4394 44.0403C74.4394 43.9153 74.4081 43.7277 74.3454 43.6964C73.7814 43.4306 73.1861 43.1961 72.5908 42.9303C72.5751 43.0241 72.5594 43.0554 72.5594 43.1023C72.5594 45.3848 72.5594 47.6517 72.5594 49.9342C72.5594 50.1687 72.6534 50.2469 72.8414 50.325C74.7371 51.1223 76.6327 51.9353 78.5127 52.7482C78.6067 52.7795 78.7007 52.8108 78.826 52.8577C78.826 50.4814 78.826 48.1363 78.826 45.7913C78.826 45.7131 78.7633 45.5881 78.685 45.5568C78.1054 45.291 77.557 45.0565 76.9774 44.822ZM85.6409 41.0231C85.1709 40.8198 84.8262 40.6478 84.4503 40.5228C84.2623 40.4602 84.0116 40.4446 83.8393 40.5228C82.7113 41.0074 81.6146 41.539 80.5023 42.0392C79.9383 42.305 79.39 42.5551 78.7633 42.8522C79.0923 42.9929 79.3587 43.0867 79.6093 43.2274C79.907 43.3994 80.1733 43.3837 80.4866 43.2274C81.2856 42.8522 82.116 42.5239 82.9306 42.1799C83.8236 41.8047 84.6852 41.4452 85.6409 41.0231ZM80.9723 39.0689C80.424 38.6624 79.907 38.6624 79.296 38.9594C77.8704 39.6317 76.3977 40.2101 74.9564 40.8354C74.8311 40.8823 74.7057 40.9605 74.5334 41.0543C74.7684 41.1638 74.9564 41.2263 75.1131 41.3201C75.4891 41.539 75.8181 41.4921 76.2097 41.3201C77.6824 40.6166 79.1863 39.9443 80.6746 39.2565C80.7686 39.1783 80.8626 39.1158 80.9723 39.0689Z"
        fill="#ECAD48"
      />
      <path
        d="M76.8205 27.203C76.5542 27.5 76.3192 27.7658 76.0686 28.0003C75.5046 28.5631 74.7369 28.5787 74.2199 28.0628C73.7186 27.5469 73.7499 26.7965 74.2826 26.2493C74.5333 25.9992 74.7996 25.7647 75.0972 25.4833C72.8726 23.6542 70.3817 22.6224 67.5147 22.3253C67.5147 22.7005 67.5147 23.0601 67.5147 23.404C67.5147 24.2013 66.9977 24.7641 66.2771 24.7641C65.5564 24.7641 65.0237 24.2013 65.0081 23.4197C65.0081 23.0757 65.0081 22.7162 65.0081 22.3253C62.1568 22.6067 59.6658 23.6385 57.4255 25.4677C57.7232 25.7491 57.9895 25.9836 58.2402 26.2493C58.7572 26.7809 58.7728 27.5469 58.2715 28.0316C57.7702 28.5475 57.0025 28.5318 56.4542 28.0003C56.2035 27.7502 55.9686 27.4844 55.7022 27.1874C53.8536 29.423 52.8353 31.9087 52.5376 34.7696C52.9293 34.7696 53.2896 34.7696 53.6499 34.7696C54.4176 34.7696 54.9816 35.3012 54.9816 36.0047C54.9816 36.7238 54.4176 37.2554 53.6343 37.271C53.2896 37.271 52.9293 37.271 52.5376 37.271C52.8196 40.1163 53.8536 42.6021 55.6866 44.8377C55.9686 44.5406 56.2035 44.2748 56.4699 44.0247C57.0025 43.5088 57.7545 43.4932 58.2558 43.9778C58.7728 44.4781 58.7572 45.2441 58.2245 45.7913C57.9739 46.0414 57.7075 46.2759 57.4099 46.5573C59.6345 48.4021 62.1255 49.4183 64.9924 49.7153C64.9924 49.3245 64.9924 48.9649 64.9924 48.6053C64.9924 47.8237 65.5407 47.2609 66.2614 47.2609C66.9664 47.2765 67.4834 47.8237 67.499 48.6053C67.499 49.3558 67.499 50.1218 67.499 50.8722C67.499 51.779 66.982 52.2792 66.0891 52.2636C58.8042 52.2167 52.3653 47.214 50.501 40.1789C48.2137 31.5491 53.3209 22.6849 61.9531 20.3242C62.1098 20.2773 62.2821 20.246 62.4858 20.1835C62.4231 18.8234 62.8461 17.6509 63.9428 16.791C64.6947 16.197 65.5564 15.9468 66.4964 16.0093C68.063 16.0875 70.1153 17.3695 70.0213 20.1679C70.7733 20.418 71.541 20.6369 72.2616 20.9339C77.0712 22.9507 80.2985 26.4213 81.8651 31.3928C82.1001 32.1276 81.7398 32.8311 81.0661 33.0343C80.3768 33.2375 79.7188 32.878 79.4682 32.1432C79.4368 32.0494 79.4055 31.9712 79.3898 31.8774C78.8728 30.2359 78.0582 28.7351 76.9772 27.4062C76.9772 27.3593 76.9302 27.3124 76.8205 27.203ZM67.4677 19.777C67.5617 19.4331 67.3894 19.011 67.0134 18.7452C66.5904 18.4326 66.0264 18.4326 65.5877 18.714C65.1961 18.9797 65.0081 19.4018 65.0864 19.777C65.8854 19.777 66.6687 19.777 67.4677 19.777Z"
        fill="#ECAD48"
      />
      <path
        d="M66.5752 40.4134C64.1626 40.4134 62.502 38.7249 62.502 36.63C62.5176 34.5664 64.2096 32.878 66.2776 32.9093C66.6379 32.9093 66.7946 32.8154 66.9512 32.5028C67.5779 31.2052 68.2359 29.9232 68.8782 28.6257C69.1445 28.0941 69.6615 27.8283 70.1942 27.9065C70.7268 27.9847 71.1811 28.3755 71.2438 28.9227C71.2751 29.2197 71.1968 29.5793 71.0715 29.8451C70.4605 31.1427 69.8025 32.409 69.1602 33.6909C69.0348 33.9411 69.0348 34.0974 69.2228 34.3319C70.1472 35.5513 70.3352 36.8958 69.6615 38.2872C68.9722 39.6786 67.7972 40.3508 66.5752 40.4134ZM67.5309 36.6613C67.5309 35.9891 66.9825 35.4106 66.2932 35.4106C65.6039 35.395 65.0399 35.9422 65.0242 36.63C65.0086 37.3179 65.5882 37.912 66.2776 37.912C66.9512 37.8964 67.5309 37.3336 67.5309 36.6613Z"
        fill="#ECAD48"
      />
      <path
        d="M36.728 67.3637L39.7564 76.5227H39.8757L42.8984 67.3637H45.2166L41.1143 79H38.5121L34.4155 67.3637H36.728ZM48.8572 67.3637V79H46.7493V67.3637H48.8572ZM52.6342 79H50.3842L54.4808 67.3637H57.0831L61.1854 79H58.9354L55.8274 69.75H55.7365L52.6342 79ZM52.7081 74.4375H58.8445V76.1307H52.7081V74.4375ZM66.6868 79V67.3637H74.1413V69.1307H68.7947V72.2898H73.63V74.0568H68.7947V79H66.6868ZM76.103 79H73.853L77.9496 67.3637H80.5518L84.6541 79H82.4041L79.2962 69.75H79.2053L76.103 79ZM76.1768 74.4375H82.3132V76.1307H76.1768V74.4375ZM92.3232 70.5625C92.2701 70.0663 92.0466 69.6799 91.6527 69.4034C91.2625 69.1269 90.755 68.9887 90.13 68.9887C89.6906 68.9887 89.3137 69.0549 88.9993 69.1875C88.6849 69.3201 88.4444 69.5 88.2777 69.7273C88.111 69.9546 88.0258 70.214 88.022 70.5057C88.022 70.7481 88.0769 70.9583 88.1868 71.1364C88.3004 71.3144 88.4538 71.4659 88.647 71.5909C88.8402 71.7121 89.0542 71.8144 89.2891 71.8977C89.5239 71.9811 89.7607 72.0512 89.9993 72.108L91.0902 72.3807C91.5296 72.483 91.9519 72.6212 92.3572 72.7955C92.7663 72.9697 93.1319 73.1894 93.4538 73.4546C93.7796 73.7197 94.0372 74.0398 94.2266 74.4148C94.416 74.7898 94.5107 75.2292 94.5107 75.733C94.5107 76.4148 94.3364 77.0152 93.9879 77.5341C93.6394 78.0493 93.1357 78.4527 92.4766 78.7443C91.8213 79.0322 91.0277 79.1762 90.0959 79.1762C89.1906 79.1762 88.4046 79.036 87.7379 78.7557C87.075 78.4754 86.5561 78.0663 86.1811 77.5284C85.8099 76.9905 85.6091 76.3352 85.5788 75.5625H87.6527C87.683 75.9678 87.808 76.3049 88.0277 76.5739C88.2474 76.8428 88.5334 77.0436 88.8857 77.1762C89.2417 77.3087 89.6394 77.375 90.0788 77.375C90.5372 77.375 90.9387 77.3068 91.2834 77.1705C91.6319 77.0303 91.9046 76.8371 92.1016 76.5909C92.2985 76.3409 92.3989 76.0493 92.4027 75.7159C92.3989 75.4129 92.3099 75.1629 92.1357 74.9659C91.9614 74.7652 91.7171 74.5985 91.4027 74.4659C91.0921 74.3296 90.7285 74.2083 90.3118 74.1023L88.9879 73.7614C88.0296 73.5152 87.272 73.1421 86.7152 72.6421C86.1622 72.1383 85.8857 71.4697 85.8857 70.6364C85.8857 69.9508 86.0713 69.3504 86.4425 68.8352C86.8175 68.3201 87.3269 67.9205 87.9709 67.6364C88.6148 67.3485 89.344 67.2046 90.1584 67.2046C90.9841 67.2046 91.7076 67.3485 92.3288 67.6364C92.9538 67.9205 93.4444 68.3163 93.8004 68.8239C94.1565 69.3277 94.3402 69.9072 94.3516 70.5625H92.3232ZM95.8786 69.1307V67.3637H105.163V69.1307H101.566V79H99.4751V69.1307H95.8786Z"
        fill="#0D0F11"
      />
    </svg>
  );
};

ViaFast.propTypes = {
  className: PropTypes.string,
};


export default ViaFast;