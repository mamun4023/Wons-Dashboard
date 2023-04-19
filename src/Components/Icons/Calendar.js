export default function CategoryIcon({ height, width, status }) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.4109 2.85297L16.4119 3.60867C19.1665 3.82631 20.9862 5.71859 20.9891 8.62048L21 17.1146C21.0039 20.2784 19.0322 22.2251 15.8718 22.2301L8.15188 22.2402C5.01119 22.2442 3.01482 20.2512 3.01087 17.0783L3.00001 8.68396C2.99606 5.76292 4.75153 3.87569 7.50617 3.62076L7.50518 2.86506C7.5042 2.42172 7.83001 2.0882 8.26444 2.0882C8.69886 2.0872 9.02468 2.4197 9.02567 2.86305L9.02666 3.56837L14.8914 3.56031L14.8904 2.85499C14.8894 2.41164 15.2152 2.07913 15.6497 2.07813C16.0742 2.07712 16.4099 2.40963 16.4109 2.85297ZM4.52149 8.99462L19.4696 8.97447V8.62181C19.4272 6.45547 18.349 5.31889 16.4139 5.14961L16.4148 5.92547C16.4148 6.35874 16.0801 6.70233 15.6556 6.70233C15.2212 6.70334 14.8944 6.36075 14.8944 5.92748L14.8934 5.11133L9.02865 5.11939L9.02963 5.93454C9.02963 6.36881 8.7048 6.7114 8.27038 6.7114C7.83595 6.7124 7.50915 6.37083 7.50915 5.93655L7.50816 5.1607C5.58287 5.35517 4.51755 6.49577 4.52051 8.68125L4.52149 8.99462ZM15.2402 13.5749V13.586C15.2501 14.0495 15.6253 14.4011 16.0804 14.3911C16.5247 14.38 16.8792 13.9961 16.8693 13.5326C16.8486 13.0892 16.4922 12.7275 16.0489 12.7285C15.5947 12.7386 15.2392 13.1114 15.2402 13.5749ZM16.055 18.0987C15.6009 18.0886 15.2346 17.7067 15.2336 17.2432C15.2237 16.7797 15.588 16.3958 16.0422 16.3848H16.0521C16.5161 16.3848 16.8923 16.7666 16.8923 17.2402C16.8933 17.7138 16.5181 18.0977 16.055 18.0987ZM11.1719 13.5902C11.1916 14.0537 11.5678 14.4154 12.022 14.3953C12.4663 14.3741 12.8207 13.9912 12.801 13.5277C12.7901 13.0743 12.4248 12.7216 11.9805 12.7227C11.5263 12.7428 11.1709 13.1267 11.1719 13.5902ZM12.0259 18.0535C11.5717 18.0736 11.1965 17.7119 11.1758 17.2484C11.1758 16.7849 11.5302 16.402 11.9844 16.3809C12.4287 16.3799 12.795 16.7325 12.8049 17.1849C12.8256 17.6494 12.4702 18.0323 12.0259 18.0535ZM7.10434 13.6256C7.12409 14.089 7.50026 14.4518 7.95443 14.4306C8.39873 14.4105 8.75318 14.0266 8.73245 13.5631C8.72257 13.1097 8.35726 12.757 7.91198 12.758C7.45781 12.7782 7.10336 13.1621 7.10434 13.6256ZM7.95848 18.0593C7.50431 18.0805 7.12913 17.7178 7.10839 17.2543C7.10741 16.7908 7.46284 16.4069 7.91702 16.3867C8.36131 16.3857 8.72761 16.7384 8.73748 17.1918C8.75822 17.6553 8.40377 18.0392 7.95848 18.0593Z"
            fill={status ? "#6254FF" : "#39394B"}
          />
        </g>
      </svg>
    </>
  );
}
